(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{479:function(e,t,a){"use strict";a.r(t);var r=a(27),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("On behalf of the Teaclave community, I am happy to announce the release of\nTeaclave TrustZone SDK 0.2.0.")]),e._v(" "),a("p",[e._v("Teaclave TrustZone SDK provides abilities to build safe TrustZone applications\nin Rust. The SDK is based on the OP-TEE project which follows GlobalPlatform TEE\nspecifications and provides ergonomic APIs. In addition, it enables capability\nto write TrustZone applications with Rust's standard library and many\nthird-party libraries (i.e., crates). Teaclave TrustZone SDK is a sub-project of\nApache Teaclave (incubating). To learn more about the design and history of\nTrustZone SDK,\nplease read the blog "),a("a",{attrs:{href:"https://teaclave.apache.org/blog/2021-03-14-welcome-rust-optee-trustzone-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Welcome Rust OP-TEE TrustZone SDK To Teaclave")]),e._v(".")]),e._v(" "),a("p",[e._v("This is the second Apache Incubator release of Teaclave TrustZone SDK. Teaclave\nTrustZone SDK provides abilities to build safe TrustZone applications in Rust.\nThe SDK is based on the OP-TEE project which follows GlobalPlatform TEE\nspecifications and provides ergonomic APIs. In addition, it enables the\ncapability to write TrustZone applications with Rust's standard library and many\nthird-party libraries (i.e., crates). Teaclave TrustZone SDK is a sub-project of\nApache Teaclave (incubating).")]),e._v(" "),a("p",[e._v("During this period, we are working closely with the OP-TEE community to\nintegrate TA examples written in Rust into the upstream repository. You can try\nand play with the examples written in Rust with Teaclave TrustZone SDK since the\nOP-TEE 3.15.0 release.")]),e._v(" "),a("p",[e._v("More specifically, in this release we have the following updates:")]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("Add support for tee-supplicant loadable plugins and examples")]),e._v(" "),a("li",[e._v("Add TEE Socket APIs and examples")])]),e._v(" "),a("h2",{attrs:{id:"enhancements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhancements"}},[e._v("#")]),e._v(" Enhancements")]),e._v(" "),a("h4",{attrs:{id:"integration-into-op-tee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration-into-op-tee"}},[e._v("#")]),e._v(" Integration into OP-TEE")]),e._v(" "),a("ul",[a("li",[e._v("Add the "),a("code",[e._v("-rs")]),e._v(" suffix to examples and update test scripts ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/34",target:"_blank",rel:"noopener noreferrer"}},[e._v("#34")]),e._v(")")]),e._v(" "),a("li",[e._v("Update to OP-TEE 3.14.0 ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/35",target:"_blank",rel:"noopener noreferrer"}},[e._v("#35")]),e._v(")")]),e._v(" "),a("li",[e._v("Update to OP-TEE 3.16.0 ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/59",target:"_blank",rel:"noopener noreferrer"}},[e._v("#59")]),e._v(")")])]),e._v(" "),a("h4",{attrs:{id:"building"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[e._v("#")]),e._v(" Building")]),e._v(" "),a("ul",[a("li",[e._v("Upgrade building docker to Ubuntu 20.04 ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/33",target:"_blank",rel:"noopener noreferrer"}},[e._v("#33")]),e._v(")")]),e._v(" "),a("li",[e._v("Update Rust toolchain to nightly-2021-09-20 and std to 1.56.1 ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/53",target:"_blank",rel:"noopener noreferrer"}},[e._v("#53")]),e._v(")")]),e._v(" "),a("li",[e._v("Add setup.sh to setup rust environment and initialize submodules ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/40",target:"_blank",rel:"noopener noreferrer"}},[e._v("#40")]),e._v(", "),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/63",target:"_blank",rel:"noopener noreferrer"}},[e._v("#63")]),e._v(")")])]),e._v(" "),a("h4",{attrs:{id:"ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci"}},[e._v("#")]),e._v(" CI")]),e._v(" "),a("ul",[a("li",[e._v("Switch to GitHub Actions ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/33",target:"_blank",rel:"noopener noreferrer"}},[e._v("#33")]),e._v(")")]),e._v(" "),a("li",[e._v("Add expect script for OP-TEE CI and fix CI errors ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/45",target:"_blank",rel:"noopener noreferrer"}},[e._v("#45")]),e._v(", "),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/50",target:"_blank",rel:"noopener noreferrer"}},[e._v("#50")]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"bug-fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),a("ul",[a("li",[e._v("Fix ldelf error of arm32 ta ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/38",target:"_blank",rel:"noopener noreferrer"}},[e._v("#38")]),e._v(")")]),e._v(" "),a("li",[e._v("fix error when making the plugin example second time ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/42",target:"_blank",rel:"noopener noreferrer"}},[e._v("#42")]),e._v(")")]),e._v(" "),a("li",[e._v("Correct toolchain PATH env ("),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/44",target:"_blank",rel:"noopener noreferrer"}},[e._v("#44")]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[e._v("#")]),e._v(" Docs")]),e._v(" "),a("ul",[a("li",[e._v("Add debugging OP-TEE TA doc: Debugging OP-TEE TA")]),e._v(" "),a("li",[e._v("Add documentation of Rust examples: Overview of OP-TEE Rust Examples")]),e._v(" "),a("li",[e._v("Polish the getting started documentation")])]),e._v(" "),a("h2",{attrs:{id:"download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[e._v("#")]),e._v(" Download")]),e._v(" "),a("p",[e._v("You can download the release from the\n"),a("a",{attrs:{href:"https://teaclave.apache.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("download")]),e._v(" page. Also, please checkout\nour "),a("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-trustzone-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository")]),e._v("\nhosted on GitHub.")]),e._v(" "),a("h2",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),a("p",[e._v("Teaclave TrustZone SDK is under the Apache License v2 and open source in The\nApache Way. We aim to create a project that is maintained and owned by the\ncommunity. All kinds of contributions are welcome. Thanks to our contributors.")])])}),[],!1,null,null,null);t.default=n.exports}}]);