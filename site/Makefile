all: staging site

staging: build
	ghp-import .vuepress/dist -b asf-staging

site: build
	ghp-import .vuepress/dist -b asf-site

sgx-sdk-api-docs: teaclave-docs
	cd ../sgx-sdk-api-docs && cargo doc
	cp -r ../sgx-sdk-api-docs/target/doc .vuepress/dist/api-docs/sgx-sdk
	@echo "<meta http-equiv=refresh content=0;url=`echo sgx_tstd | cut -d '/' -f 2`/index.html>" > .vuepress/dist/api-docs/sgx-sdk/index.html

client-sdk-python-docs: teaclave-docs
	pdoc teaclave/sdk/python/teaclave.py -o .vuepress/dist/api-docs/client-sdk-python
	@echo "<meta http-equiv=refresh content=0;url=python/teaclave.html>" > .vuepress/dist/api-docs/client-sdk-python/index.html

client-sdk-rust-docs: teaclave-docs
	(cd teaclave && git submodule update --init third_party/rust-sgx-sdk)
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
	git clone https://github.com/apache/incubator-teaclave-trustzone-sdk.git teaclave-trustzone-sdk || cd teaclave-trustzone-sdk && git pull
	vuepress build

dev:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	git clone https://github.com/apache/incubator-teaclave-sgx-sdk.git teaclave-sgx-sdk || cd teaclave-sgx-sdk && git pull
	git clone https://github.com/apache/incubator-teaclave-trustzone-sdk.git teaclave-trustzone-sdk || cd teaclave-trustzone-sdk && git pull
	vuepress dev

preview:
	cd .vuepress/dist && python3 -m http.server

build: teaclave-docs sgx-sdk-api-docs client-sdk-python-docs client-sdk-rust-docs crate-docs
	cp ../.asf.yaml .vuepress/dist

clean:
	rm -rf .vuepress/dist teaclave teaclave-sgx-sdk
