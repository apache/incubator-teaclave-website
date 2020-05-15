all:
	git clone https://github.com/apache/incubator-teaclave.git teaclave || cd teaclave && git pull
	vuepress build -d dist
