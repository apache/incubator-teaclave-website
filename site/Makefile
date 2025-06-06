all: staging site

staging: build
	ghp-import --no-history --force .vuepress/dist -b asf-staging

site: build
	ghp-import --no-history --force .vuepress/dist -b asf-site

init-repo:
	git clone https://github.com/apache/incubator-teaclave.git teaclave
	# v2.0.0-preview branch does not have documents folder, we use master branch instead
	git clone -b master https://github.com/apache/incubator-teaclave-sgx-sdk.git teaclave-sgx-sdk
	git clone https://github.com/apache/incubator-teaclave-trustzone-sdk.git teaclave-trustzone-sdk

check-repo:
	@if [ ! -d "teaclave" ] || [ ! -d "teaclave-sgx-sdk" ] || [ ! -d "teaclave-trustzone-sdk" ]; then \
		echo "Repositories not found. Running init-repo..."; \
		$(MAKE) init-repo; \
	fi

update-repo: check-repo
	cd teaclave && git pull
	cd teaclave-sgx-sdk && git pull
	cd teaclave-trustzone-sdk && git pull

sgx-sdk-api-docs: site-build
	mkdir -p .vuepress/dist/api-docs/sgx-sdk-docs
	cp -r /prebuilt_docs/sgx-sdk-docs/* .vuepress/dist/api-docs/sgx-sdk-docs/
	@echo "<meta http-equiv=refresh content=0;url=`echo sgx_tstd | cut -d '/' -f 2`/index.html>" > .vuepress/dist/api-docs/sgx-sdk-docs/index.html

trustzone-sdk-api-docs: site-build
	@echo "Trustzone SDK API docs not supported yet"

client-sdk-python-docs: site-build
	cp -r /prebuilt_docs/teaclave-docs/client-sdk-python .vuepress/dist/api-docs/client-sdk-python
	@echo "<meta http-equiv=refresh content=0;url=python/teaclave.html>" > .vuepress/dist/api-docs/client-sdk-python/index.html

client-sdk-rust-docs: site-build
	cp -r /prebuilt_docs/teaclave-docs/client-sdk-rust .vuepress/dist/api-docs/client-sdk-rust
	@echo "<meta http-equiv=refresh content=0;url=`echo teaclave_client_sdk | cut -d '/' -f 2`/index.html>" > .vuepress/dist/api-docs/client-sdk-rust/index.html

teaclave-crates-docs: site-build
	cp -r /prebuilt_docs/teaclave-docs/enclave .vuepress/dist/api-docs/crates-enclave 
	cp -r /prebuilt_docs/teaclave-docs/app .vuepress/dist/api-docs/crates-app

teaclave-docs: teaclave-crates-docs client-sdk-python-docs client-sdk-rust-docs

site-build: update-repo
	vuepress build

dev:
	vuepress dev

preview:
	cd .vuepress/dist && python3 -m http.server

build: teaclave-docs sgx-sdk-api-docs trustzone-sdk-api-docs 
	cp ../.asf.yaml .vuepress/dist

clean-repo:
	rm -rf teaclave
	rm -rf teaclave-sgx-sdk
	rm -rf teaclave-trustzone-sdk

clean: clean-repo
	rm -rf .vuepress/dist 
