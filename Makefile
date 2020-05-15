all: staging site

staging: build
	ghp-import dist -b asf-staging

site: build
	ghp-import dist -b asf-site

build:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	vuepress build -d dist
	cp .asf.yaml dist
