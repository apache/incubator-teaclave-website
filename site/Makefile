all: staging site

staging: build
	ghp-import .vuepress/dist -b asf-staging

site: build
	ghp-import .vuepress/dist -b asf-site

sgx-sdk-docs: teaclave-docs
	cd ../sgx-sdk-docs && cargo doc
	cp -r ../sgx-sdk-docs/target/doc .vuepress/dist/docs/sgx-sdk
	@echo "<meta http-equiv=refresh content=0;url=`echo sgx_tstd | cut -d '/' -f 2`/index.html>" > .vuepress/dist/docs/sgx-sdk/index.html

client-sdk-python-docs: teaclave-docs
	pdoc teaclave/sdk/python/teaclave.py -o .vuepress/dist/docs/client-sdk-python --html
	@echo "<meta http-equiv=refresh content=0;url=teaclave.html>" > .vuepress/dist/docs/client-sdk-python/index.html

teaclave-docs:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	vuepress build

dev:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	vuepress dev

preview:
	cd .vuepress/dist && python3 -m http.server

build: teaclave-docs sgx-sdk-docs client-sdk-python-docs
	cp ../.asf.yaml .vuepress/dist

clean:
	rm -rf .vuepress/dist teaclave
