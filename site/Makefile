all: staging site

staging: build
	ghp-import --no-history --force .vuepress/dist -b asf-staging

site: build
	ghp-import --no-history --force .vuepress/dist -b asf-site

sgx-sdk-api-docs: teaclave-docs
	cd ../sgx-sdk-api-docs && cargo doc
	cp -r ../sgx-sdk-api-docs/target/doc .vuepress/dist/api-docs/sgx-sdk
	@echo "<meta http-equiv=refresh content=0;url=`echo sgx_tstd | cut -d '/' -f 2`/index.html>" > .vuepress/dist/api-docs/sgx-sdk/index.html

trustzone-sdk-api-docs: teaclave-docs
	cd teaclave-trustzone-sdk && ./setup.sh
	bash -c "cd teaclave-trustzone-sdk && source environment && cd optee-utee && xargo doc --target aarch64-unknown-optee-trustzone --no-deps"
	bash -c "cd teaclave-trustzone-sdk && source environment && cd optee-teec && cargo doc --target aarch64-unknown-linux-gnu --no-deps"
	mkdir -p .vuepress/dist/api-docs/trustzone-sdk
	cp -r teaclave-trustzone-sdk/optee-utee/target/aarch64-unknown-optee-trustzone/doc .vuepress/dist/api-docs/trustzone-sdk/optee-utee
	cp -r teaclave-trustzone-sdk/optee-teec/target/aarch64-unknown-linux-gnu/doc .vuepress/dist/api-docs/trustzone-sdk/optee-teec
	@echo "<meta http-equiv=refresh content=0;url=`echo optee_utee | cut -d '/' -f 2`/index.html>" > .vuepress/dist/api-docs/trustzone-sdk/optee-utee/index.html
	@echo "<meta http-equiv=refresh content=0;url=`echo optee_teec | cut -d '/' -f 2`/index.html>" > .vuepress/dist/api-docs/trustzone-sdk/optee-teec/index.html

client-sdk-python-docs: teaclave-docs
	pdoc teaclave/sdk/python/teaclave.py -o .vuepress/dist/api-docs/client-sdk-python
	@echo "<meta http-equiv=refresh content=0;url=python/teaclave.html>" > .vuepress/dist/api-docs/client-sdk-python/index.html

client-sdk-rust-docs: teaclave-docs
	(cd teaclave && git submodule update --init third_party/rust-sgx-sdk)
	rustup default nightly-2020-10-25
	cargo doc --no-deps --manifest-path teaclave/sdk/rust/Cargo.toml
	cp -r teaclave/sdk/rust/target/doc .vuepress/dist/api-docs/client-sdk-rust
	@rm -rf teaclave/third_party/rust-sgx-sdk
	@echo "<meta http-equiv=refresh content=0;url=`echo teaclave_client_sdk | cut -d '/' -f 2`/index.html>" > .vuepress/dist/api-docs/client-sdk-rust/index.html

crate-docs:
	cp ${TEACLAVE_TARGET_DIR}/trusted/doc .vuepress/dist/api-docs/crates-enclave -r
	cp ${TEACLAVE_TARGET_DIR}/untrusted/doc .vuepress/dist/api-docs/crates-app -r

teaclave-docs:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	git clone https://github.com/apache/incubator-teaclave-sgx-sdk.git teaclave-sgx-sdk || cd teaclave-sgx-sdk && git pull
	git clone https://github.com/apache/incubator-teaclave-trustzone-sdk.git teaclave-trustzone-sdk
	cd teaclave-trustzone-sdk && git checkout 38452505f36e2a49279fbfcb7199147cf1190a95
	vuepress build

dev:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	git clone https://github.com/apache/incubator-teaclave-sgx-sdk.git teaclave-sgx-sdk || cd teaclave-sgx-sdk && git pull
	git clone https://github.com/apache/incubator-teaclave-trustzone-sdk.git teaclave-trustzone-sdk
	cd teaclave-trustzone-sdk && git checkout 38452505f36e2a49279fbfcb7199147cf1190a95
	vuepress dev

preview:
	cd .vuepress/dist && python3 -m http.server

build: teaclave-docs sgx-sdk-api-docs trustzone-sdk-api-docs client-sdk-python-docs client-sdk-rust-docs crate-docs
	cp ../.asf.yaml .vuepress/dist

clean:
	rm -rf .vuepress/dist teaclave teaclave-sgx-sdk teaclave-trustzone-sdk
