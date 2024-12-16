(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{508:function(e,t,d){"use strict";d.r(t);var a=d(27),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"overview-of-op-tee-rust-examples"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-op-tee-rust-examples"}},[e._v("#")]),e._v(" Overview of OP-TEE Rust Examples")]),e._v(" "),d("p",[e._v("All OP-TEE Rust examples are suffixed with "),d("code",[e._v("-rs")]),e._v(", which work as standalone host\napplication and corresponding TA (Trusted Application) and can be found in\nseparate directories.")]),e._v(" "),d("p",[e._v("To install all examples in "),d("code",[e._v("SDK_ROOT_DIR/out/")]),e._v(", run "),d("code",[e._v("make examples-install")]),e._v("\nafter "),d("code",[e._v("make examples")]),e._v(".")]),e._v(" "),d("p",[e._v("To compile one of the examples, run "),d("code",[e._v("make -C examples/EXAMPLE_DIR")]),e._v(".")]),e._v(" "),d("table",[d("thead",[d("tr",[d("th",[e._v("Host application name")]),e._v(" "),d("th",[e._v("TA UUID")]),e._v(" "),d("th",[e._v("Description")])])]),e._v(" "),d("tbody",[d("tr",[d("td",[e._v("acipher-rs")]),e._v(" "),d("td",[d("code",[e._v("057f4b66-bdab-11eb-96cf-33d6e41cc849")])]),e._v(" "),d("td",[e._v("Generate an RSA key pair,  encrypt a supplied string and decrypt it.")])]),e._v(" "),d("tr",[d("td",[e._v("aes-rs")]),e._v(" "),d("td",[d("code",[e._v("0864c8ec-bdab-11eb-8926-c7fa47a8c92d")])]),e._v(" "),d("td",[e._v("Run an AES encryption and decryption.")])]),e._v(" "),d("tr",[d("td",[e._v("authentication-rs")]),e._v(" "),d("td",[d("code",[e._v("0a5a06b2-bdab-11eb-add0-77f29de31296")])]),e._v(" "),d("td",[e._v("Run AES-CCM authenticated encryption / decryption.")])]),e._v(" "),d("tr",[d("td",[e._v("big_int-rs")]),e._v(" "),d("td",[d("code",[e._v("0bef16a2-bdab-11eb-94be-6f9815f37c21")])]),e._v(" "),d("td",[e._v("Do mathematical operations of big integers, such as addition, subtraction, multiplication, division, etc.")])]),e._v(" "),d("tr",[d("td",[e._v("diffie_hellman-rs")]),e._v(" "),d("td",[d("code",[e._v("0e6bf4fe-bdab-11eb-9bc5-3f4ecb50aee7")])]),e._v(" "),d("td",[e._v("Run Diffie-Hellman key exchange to derive shared secrets.")])]),e._v(" "),d("tr",[d("td",[e._v("digest-rs")]),e._v(" "),d("td",[d("code",[e._v("10de87e2-bdab-11eb-b73c-63fec73e597c")])]),e._v(" "),d("td",[e._v("Calculate the hash of the message using SHA256 digest algorithm.")])]),e._v(" "),d("tr",[d("td",[e._v("hello_world-rs")]),e._v(" "),d("td",[d("code",[e._v("133af0ca-bdab-11eb-9130-43bf7873bf67")])]),e._v(" "),d("td",[e._v("Increment and decrement an integer value.")])]),e._v(" "),d("tr",[d("td",[e._v("hotp-rs")]),e._v(" "),d("td",[d("code",[e._v("1585d412-bdab-11eb-ba91-3b085fd2601f")])]),e._v(" "),d("td",[e._v("Generate HMAC based One Time Password which is  described in "),d("a",{attrs:{href:"https://www.ietf.org/rfc/rfc4226.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC4226")]),e._v(".")])]),e._v(" "),d("tr",[d("td",[e._v("message_passing_interface-rs")]),e._v(" "),d("td",[d("code",[e._v("17556a46-bdab-11eb-b325-d38c9a9af725")])]),e._v(" "),d("td",[e._v("Passing serde json message between host application and TA, which is more convenient to send structured data.")])]),e._v(" "),d("tr",[d("td",[e._v("random-rs")]),e._v(" "),d("td",[d("code",[e._v("197c710c-bdab-11eb-8f3f-17a5f698d23b")])]),e._v(" "),d("td",[e._v("Generate a random UUID.")])]),e._v(" "),d("tr",[d("td",[e._v("secure_storage-rs")]),e._v(" "),d("td",[d("code",[e._v("1cd6d392-bdab-11eb-9082-abc902ac5cd4")])]),e._v(" "),d("td",[e._v("Read / write / delete raw data from / into the OP-TEE secure storage.")])]),e._v(" "),d("tr",[d("td",[e._v("serde-rs")]),e._v(" "),d("td",[d("code",[e._v("1ed47816-bdab-11eb-9ebd-3ffe0648da93")])]),e._v(" "),d("td",[e._v("Invoke third party crate "),d("code",[e._v("serde")]),e._v(" for serialization and deserialization.")])]),e._v(" "),d("tr",[d("td",[e._v("supp_plugin-rs")]),e._v(" "),d("td",[d("code",[e._v("255fc838-de89-42d3-9a8e-d044c50fa57c")])]),e._v(" "),d("td",[e._v("TA actively invokes a command defined in normal world plugins. Do interaction between host <-> TA <-> plugin. The plugin is identified by UUID: ef620757-fa2b-4f19-a1c4-6e51cfe4c0f9.")])]),e._v(" "),d("tr",[d("td",[e._v("tcp_client-rs")]),e._v(" "),d("td",[d("code",[e._v("59db8536-e5e6-11eb-8e9b-a316ce7a6568")])]),e._v(" "),d("td",[e._v("Do HTTP connection from Trusted Application.")])]),e._v(" "),d("tr",[d("td",[e._v("time-rs")]),e._v(" "),d("td",[d("code",[e._v("21b1a1da-bdab-11eb-b614-275a7098826f")])]),e._v(" "),d("td",[e._v("Set / get TEE time.")])]),e._v(" "),d("tr",[d("td",[e._v("udp_socket-rs")]),e._v(" "),d("td",[d("code",[e._v("87c2d78e-eb7b-11eb-8d25-df4d5338f285")])]),e._v(" "),d("td",[e._v("Do UDP socket connection from Trusted Application.")])]),e._v(" "),d("tr",[d("td",[e._v("signature_verification-rs")]),e._v(" "),d("td",[d("code",[e._v("c7e478c2-89b3-46eb-ac19-571e66c3830d")])]),e._v(" "),d("td",[e._v("Sign a message and verify the signature using the third party crate "),d("a",{attrs:{href:"https://github.com/veracruz-project/ring",target:"_blank",rel:"noopener noreferrer"}},[e._v("ring")]),e._v(".")])]),e._v(" "),d("tr",[d("td",[e._v("tls_client-rs")]),e._v(" "),d("td",[d("code",[e._v("ec55bfe2-d9c7-11eb-8b0e-f3f8fad927f7")])]),e._v(" "),d("td",[e._v("Do TLS connection from Trusted Application.")])]),e._v(" "),d("tr",[d("td",[e._v("tls_server-rs")]),e._v(" "),d("td",[d("code",[e._v("69547de6-f47e-11eb-994e-f34e88d5c2b4")])]),e._v(" "),d("td",[e._v("Set up the TLS server in Trusted Application.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);