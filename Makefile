all: staging site

staging: build
	ghp-import dist -b asf-staging

site: build
	ghp-import dist -b asf-site

dev:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	vuepress dev

build:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	vuepress build -d dist
	cp .asf.yaml dist
