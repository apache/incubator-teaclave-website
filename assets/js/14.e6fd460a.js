(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{325:function(e,t,a){e.exports=a.p+"assets/img/teaclave-trustzone-sdk-macros.54db69cf.png"},326:function(e,t,a){e.exports=a.p+"assets/img/teaclave-trustzone-sdk-apis.c71c04ed.png"},412:function(e,t,a){e.exports=a.p+"assets/img/teaclave-trustzone-sdk-examples.3d6062c0.png"},461:function(e,t,a){"use strict";a.r(t);var n=a(27),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("On behalf of the Teaclave community, I am happy to announce the release of\nTeaclave TrustZone SDK 0.1.0. This is the first Apache Incubator release since\nthe recent donation to the Teaclave community.")]),e._v(" "),n("p",[e._v("Teaclave TrustZone SDK provides abilities to build safe TrustZone applications\nin Rust. The SDK is based on the OP-TEE project which follows GlobalPlatform TEE\nspecifications and provides ergonomic APIs. In addition, it enables capability\nto write TrustZone applications with Rust's standard library and many\nthird-party libraries (i.e., crates). Teaclave TrustZone SDK is a sub-project of\nApache Teaclave (incubating). To learn more about the design and history of\nTrustZone SDK,\nplease read the blog "),n("a",{attrs:{href:"https://teaclave.apache.org/blog/2021-03-14-welcome-rust-optee-trustzone-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Welcome Rust OP-TEE TrustZone SDK To Teaclave")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"highlights"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#highlights"}},[e._v("#")]),e._v(" Highlights")]),e._v(" "),n("p",[e._v("This version implements the following Rust APIs in GlobalPlatform TEE\nspecifications:")]),e._v(" "),n("p",[n("strong",[e._v("TEE Client API")]),e._v(" ("),n("code",[e._v("optee-teec")]),e._v(")")]),e._v(" "),n("ul",[n("li",[e._v("Context")]),e._v(" "),n("li",[e._v("Error")]),e._v(" "),n("li",[e._v("Operation")]),e._v(" "),n("li",[e._v("Parameter")]),e._v(" "),n("li",[e._v("Session")]),e._v(" "),n("li",[e._v("UUID")])]),e._v(" "),n("p",[n("strong",[e._v("TEE Internal Core API")]),e._v(" ("),n("code",[e._v("optee-utee")]),e._v(")")]),e._v(" "),n("ul",[n("li",[e._v("Arithmetical")]),e._v(" "),n("li",[e._v("Crypto Operation")]),e._v(" "),n("li",[e._v("Error")]),e._v(" "),n("li",[e._v("Object")]),e._v(" "),n("li",[e._v("Parameter")]),e._v(" "),n("li",[e._v("Time")]),e._v(" "),n("li",[e._v("Trace")])]),e._v(" "),n("p",[e._v("Here is a demonstration of using these Rust APIs to open a session and invoke a\nfunction to TA.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(326),alt:"Teaclave TrustZone SDK APIs"}})]),e._v(" "),n("p",[e._v("We also provides procedure macros to automatically generate bindings interfaces of TA:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("#[ta_create]")]),e._v(", "),n("code",[e._v("#[ta_destroy]")]),e._v(", "),n("code",[e._v("#[ta_open_session]")]),e._v(", "),n("code",[e._v("#[ta_close_session]")]),e._v(", "),n("code",[e._v("#[ta_invoke_command]")])])]),e._v(" "),n("p",[e._v("These annotations will automatically generate helper functions to bridge the normal/secure worlds.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(325),alt:"Teaclave TrustZone SDK Macros"}})]),e._v(" "),n("p",[e._v("This version includes rewrites of all examples (e.g., AES, authentication, big\ninteger, HOTP) from OP-TEE repository. In addition, we include more examples\nusing "),n("code",[e._v("serde")]),e._v(" for serialization and deserialization.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(412),alt:"Examples in Teaclave TrustZone SDK"}})]),e._v(" "),n("p",[e._v("This version is compatible with OP-TEE 3.13.0.")]),e._v(" "),n("h2",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),n("p",[e._v("Here is a simple instruction to download, build and test the TrustZone SDK:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ wget https://dist.apache.org/repos/dist/dev/incubator/teaclave/trustzone-sdk-0.1.0-rc.1/apache-teaclave-trustzone-sdk-0.1.0-rc.1-incubating.tar.gz\n$ tar zxvf apache-teaclave-trustzone-sdk-0.1.0-rc.1-incubating.tar.gz && cd\napache-teaclave-trustzone-sdk-0.1.0-incubating\n\n$ # Instructions to verify the source tar:\nhttps://teaclave.apache.org/download/#verify-the-integrity-of-the-files\n\n$ # Building\n$ docker run --rm -it -v$(pwd):/teaclave-trustzone-sdk -w\n/teaclave-trustzone-sdk teaclave/teaclave-trustzone-sdk-build:0.1.1\nbash -c "source environment && make"\n\n$ # Testing\n$ docker run --rm -it -v$(pwd):/teaclave-trustzone-sdk -w\n/teaclave-trustzone-sdk teaclave/teaclave-trustzone-sdk-build:0.1.1\nbash -c "source environment && cd ci && ./ci.sh"\n')])])]),n("p",[e._v("We also provide a document "),n("a",{attrs:{href:"https://teaclave.apache.org/trustzone-sdk-docs/getting-started-with-optee-for-qemu-armv8/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started with OP-TEE for QEMU\nARMv8")]),e._v("\nto get started step by step.")]),e._v(" "),n("h2",{attrs:{id:"download"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[e._v("#")]),e._v(" Download")]),e._v(" "),n("p",[e._v("You can download the release from the\n"),n("a",{attrs:{href:"https://teaclave.apache.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("download")]),e._v(" page. Also, please checkout\nour "),n("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository")]),e._v("\nhosted on GitHub.")]),e._v(" "),n("h2",{attrs:{id:"contributing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),n("p",[e._v("Teaclave TrustZone SDK is under the Apache License v2 and open source in The\nApache Way. We aim to create a project that is maintained and owned by the\ncommunity. All kinds of contributions are welcome. Thanks to our contributors.")])])}),[],!1,null,null,null);t.default=r.exports}}]);