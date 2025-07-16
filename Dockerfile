# SGX Docs stage
FROM teaclave/teaclave-build-ubuntu-1804-sgx-2.14:latest AS sgx-docs
WORKDIR /app
COPY sgx-sdk-api-docs /app/sgx-sdk-api-docs
RUN . "$HOME/.cargo/env" && cd sgx-sdk-api-docs && cargo doc
RUN mkdir -p /prebuilt_docs && \
    cp -r sgx-sdk-api-docs/target/doc /prebuilt_docs/sgx-sdk-docs

# TODO: Add Trustzone Docs stage

# Teaclave Docs stage
FROM teaclave/teaclave-build-ubuntu-2004-sgx-2.17.1:0.2.0 AS teaclave-docs
WORKDIR /app

# Prepare Teaclave Repo
RUN git clone https://github.com/apache/incubator-teaclave.git teaclave --depth 1 
RUN cd teaclave && git submodule update --init --depth 1 

# Build Python SDK docs
RUN pip3 install grpcio-tools grpclib pdoc
RUN python3 -m grpc_tools.protoc \
    --proto_path=teaclave/services/proto/src/proto \
    --python_out=teaclave/sdk/python \
    --grpclib_python_out=teaclave/sdk/python \
    teaclave/services/proto/src/proto/*.proto
RUN PYTHONPATH=teaclave/sdk/python pdoc teaclave/sdk/python/teaclave.py -o /tmp/client-sdk-python-docs

# Build Teaclave docs
RUN . /opt/sgxsdk/environment && \
    . /root/.cargo/env && \
    cd teaclave && \
    mkdir build && \
    cd build && \
    cmake .. && \
    make doc -j$(nproc)

# Copy all docs to prebuilt directory
RUN mkdir -p /prebuilt_docs/teaclave-docs && \
    cp -r /tmp/client-sdk-python-docs /prebuilt_docs/teaclave-docs/client-sdk-python && \
    cd teaclave/release/ && \
    cp -r ./docs/enclave /prebuilt_docs/teaclave-docs/enclave && \
    cp -r ./docs/app /prebuilt_docs/teaclave-docs/app && \
    cp -r ./docs/unix /prebuilt_docs/teaclave-docs/client-sdk-rust 

# clean up
RUN rm -rf teaclave/build

# Dependencies stage
FROM node:22-slim AS deps
WORKDIR /app
COPY site/package*.json ./
RUN npm install

# Final stage
FROM node:22-slim as teaclave-docs-site

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=sgx-docs /prebuilt_docs/sgx-sdk-docs /prebuilt_docs/sgx-sdk-docs
COPY --from=teaclave-docs /prebuilt_docs/teaclave-docs /prebuilt_docs/teaclave-docs

ENV PATH="/root/.cargo/bin:${PATH}"
ENV PYTHONPATH="/usr/local/lib/python3.9/dist-packages:${PYTHONPATH}"
ENV NPM_CONFIG_PREFIX="/app/node_modules"

WORKDIR /app

RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    git \
    curl
RUN pip3 install --break-system-packages ghp-import