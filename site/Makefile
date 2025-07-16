all: staging site

staging: build
	ghp-import --no-history --force build -b asf-staging

site: build
	ghp-import --no-history --force build -b asf-site

init-repo:
	git clone https://github.com/apache/incubator-teaclave.git docs/teaclave --depth 1
	# v2.0.0-preview branch does not have documents folder, we use master branch instead
	git clone -b master https://github.com/apache/incubator-teaclave-sgx-sdk.git docs/teaclave-sgx-sdk --depth 1
	git clone https://github.com/apache/incubator-teaclave-trustzone-sdk.git docs/teaclave-trustzone-sdk --depth 1

check-repo:
	@if [ ! -d "docs/teaclave" ] || [ ! -d "docs/teaclave-sgx-sdk" ] || [ ! -d "docs/teaclave-trustzone-sdk" ]; then \
		echo "Repositories not found. Running init-repo..."; \
		$(MAKE) init-repo; \
	fi

update-repo: check-repo
	cd docs/teaclave && git pull --depth 1
	cd docs/teaclave-sgx-sdk && git pull --depth 1
	cd docs/teaclave-trustzone-sdk && git pull --depth 1

sgx-sdk-api-docs: site-build
	mkdir -p build/api-docs/sgx-sdk-docs
	cp -r /prebuilt_docs/sgx-sdk-docs/* build/api-docs/sgx-sdk-docs/
	@echo "<meta http-equiv=refresh content=0;url=`echo sgx_tstd | cut -d '/' -f 2`/index.html>" > build/api-docs/sgx-sdk-docs/index.html

trustzone-sdk-api-docs: site-build
	@echo "Trustzone SDK API docs not supported yet"

client-sdk-python-docs: site-build
	cp -r /prebuilt_docs/teaclave-docs/client-sdk-python build/api-docs/client-sdk-python
	@echo "<meta http-equiv=refresh content=0;url=python/teaclave.html>" > build/api-docs/client-sdk-python/index.html

client-sdk-rust-docs: site-build
	cp -r /prebuilt_docs/teaclave-docs/client-sdk-rust build/api-docs/client-sdk-rust
	@echo "<meta http-equiv=refresh content=0;url=`echo teaclave_client_sdk | cut -d '/' -f 2`/index.html>" > build/api-docs/client-sdk-rust/index.html

teaclave-crates-docs: site-build
	cp -r /prebuilt_docs/teaclave-docs/enclave build/api-docs/crates-enclave 
	cp -r /prebuilt_docs/teaclave-docs/app build/api-docs/crates-app

teaclave-docs: teaclave-crates-docs client-sdk-python-docs client-sdk-rust-docs

site-build: update-repo
	npm run build
	mkdir -p build/api-docs

dev:
	npm run start

preview:
	cd build && python3 -m http.server

build: teaclave-docs sgx-sdk-api-docs trustzone-sdk-api-docs 
	cp ../.asf.yaml build

clean-repo:
	rm -rf docs/teaclave
	rm -rf docs/teaclave-sgx-sdk
	rm -rf docs/teaclave-trustzone-sdk

clean: clean-repo
	rm -rf build
