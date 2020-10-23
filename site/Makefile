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
	pdoc teaclave/sdk/python/teaclave.py -o .vuepress/dist/api-docs/client-sdk-python --html
	@echo "<meta http-equiv=refresh content=0;url=teaclave.html>" > .vuepress/dist/api-docs/client-sdk-python/index.html

crate-docs:
	cp ${TEACLAVE_TARGET_DIR}/trusted/doc .vuepress/dist/api-docs/crates-enclave -r
	cp ${TEACLAVE_TARGET_DIR}/untrusted/doc .vuepress/dist/api-docs/crates-app -r

teaclave-docs:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	git clone https://github.com/apache/incubator-teaclave-sgx-sdk.git teaclave-sgx-sdk || cd teaclave-sgx-sdk && git pull
	vuepress build

dev:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	git clone https://github.com/apache/incubator-teaclave-sgx-sdk.git teaclave-sgx-sdk || cd teaclave-sgx-sdk && git pull
	vuepress dev

preview:
	cd .vuepress/dist && python3 -m http.server

build: teaclave-docs sgx-sdk-api-docs client-sdk-python-docs crate-docs
	cp ../.asf.yaml .vuepress/dist

clean:
	rm -rf .vuepress/dist teaclave teaclave-sgx-sdk
