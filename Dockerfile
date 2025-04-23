# Stage 1: Install dependencies
FROM node:16.20.2-bullseye AS deps

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    python3 \
    python3-pip \
    curl \
    build-essential \
    openssh-client \
    && rm -rf /var/lib/apt/lists/*

# Install Rust toolchain and xargo
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && \
    . "$HOME/.cargo/env" && \
    rustup install nightly-2022-10-22 && \
    rustup default nightly-2022-10-22 && \
    cargo install xargo

ENV PATH="/root/.cargo/bin:${PATH}"

# Install Python dependencies including ghp-import
RUN pip3 install grpcio-tools grpclib pdoc ghp-import

# Set working directory
WORKDIR /app

# Copy package files
COPY site/package*.json site/

# Install npm dependencies
RUN cd site && npm install

# Stage 2: Development environment
FROM node:16.20.2-bullseye

# Copy installed dependencies from deps stage
COPY --from=deps /root/.cargo /root/.cargo
COPY --from=deps /usr/local/lib/python3.9/dist-packages /usr/local/lib/python3.9/dist-packages
COPY --from=deps /app/site/node_modules /app/site/node_modules

# Set up environment
ENV PATH="/root/.cargo/bin:${PATH}"
ENV PYTHONPATH="/usr/local/lib/python3.9/dist-packages:${PYTHONPATH}"

# Set working directory
WORKDIR /app

# Install VuePress globally
RUN npm install -g vuepress@1.7.1

# Create a volume for the build output
VOLUME ["/app/site/.vuepress/dist"] 
