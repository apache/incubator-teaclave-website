(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{522:function(e,t,a){"use strict";a.r(t);var n=a(27),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deploying-teaclave-on-azure-confidential-computing-virtual-machines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-teaclave-on-azure-confidential-computing-virtual-machines"}},[e._v("#")]),e._v(" Deploying Teaclave on Azure Confidential Computing Virtual Machines")]),e._v(" "),a("p",[e._v("If you want to try Teaclave on an Intel-SGX enabled machine instead of in simulation mode,\nAzure, as a cloud service provider, has provided "),a("a",{attrs:{href:"https://azure.microsoft.com/en-us/blog/dcsv2series-vm-now-generally-available-from-azure-confidential-computing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel-SGX enabled virtual machines")]),e._v(".\nThis tutorial will guide you to deploy Teaclave on Azure confidential computing VMs.")]),e._v(" "),a("p",[e._v("To get started, you need to create an Azure confidential computing VM. Please\nrefer to this documents: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/confidential-computing/quick-create-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quickstart: Deploy an Azure confidential computing VM in the Azure portal")]),e._v(".")]),e._v(" "),a("p",[e._v("Normally, the SGX driver will be pre-installed after successfully creating an\nAzure confidential computing VM. Please use this command to check whether the\nSGX driver (the "),a("code",[e._v("intel_sgx")]),e._v(" kernel module) is properly installed.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ls /dev/sgx\nenclave  provision\n")])])]),a("p",[e._v("Then, install SGX architectural enclaves and quoting libraries for attestation.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get install libssl-dev libcurl4-openssl-dev libprotobuf-dev\n$ echo 'deb [arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu bionic main' | sudo tee /etc/apt/sources.list.d/intel-sgx.list\n$ wget -qO - https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | sudo apt-key add -\n$ sudo apt-get update && \\\n   sudo apt-get install libsgx-launch libsgx-urts libsgx-epid libsgx-urts libsgx-quote-ex  libsgx-aesm-quote-ex-plugin libsgx-aesm-epid-plugin\n$ sudo sed -i '/^#default quoting type = epid_linkable/s/^#//' /etc/aesmd.conf\n$ sudo service aesmd restart\n")])])]),a("p",[e._v("Install Docker and Docker Compose.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n$ sudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n$ sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io\n$ sudo usermod -aG docker your-user-name\n$ sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n$ sudo chmod +x /usr/local/bin/docker-compose\n')])])]),a("p",[e._v("Build Teaclave.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git clone https://github.com/apache/incubator-teaclave.git\n$ cd incubator-teaclave\n$ docker run --rm -v $(pwd):/teaclave -w /teaclave \\\n  -it teaclave/teaclave-build-ubuntu-1804-sgx-2.17.1:0.1.0 \\\n   bash -c ". /root/.cargo/env && \\\n     . /opt/sgxsdk/environment && \\\n     mkdir -p build && cd build && \\\n     git config --global --add safe.directory /teaclave && \\\n     cmake -DTEST_MODE=ON .. && \\\n     make"\n\n')])])]),a("p",[e._v("Setup environments for remote attestation. We are using Intel's Attestation\nService and linkable quote, and you can request access from the\n"),a("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/EPID-attestation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Development (DEV) attestation service portal")]),e._v("\nfor testing.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export AS_ALGO=sgx_epid\nexport AS_KEY=XXX\nexport AS_SPID=XXX\nexport AS_URL=https://api.trustedservices.intel.com:443\n")])])]),a("p",[e._v("Start Teaclave services.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(cd docker && ./run-teaclave-services.sh -d)\n")])])]),a("p",[e._v("At last, try the hello world example.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt install python3-pip\n$ pip3 install pyopenssl toml cryptography\n$ cd examples/python\n$ PYTHONPATH=../../sdk/python python3 builtin_echo.py 'Hello, Teaclave!'\n[+] registering user\n[+] login\n[+] registering function\n[+] creating task\n[+] invoking task\n[+] getting result\n[+] done\n[+] function return:  b'Hello, Teaclave!'\n")])])]),a("p",[e._v("You can also open the port numbers of Teaclave's frontend/authentication\nservices in the Azure portal and run examples in another client machine with the\naddress this VM. Note that the client SDK needs enclave info (i.e., the\n"),a("code",[e._v("enclave_info.toml")]),e._v(" file) and attestation service's cert (i.e., the\n"),a("code",[e._v("ias_root_ca_cert.pem")]),e._v(" file) for attesting remote SGX services. The paths of\nthese files can be set in "),a("code",[e._v("examples/python/utils.py")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);