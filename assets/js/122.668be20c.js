(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{548:function(e,t,n){"use strict";n.r(t);var a=n(27),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"teaclave-services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#teaclave-services"}},[e._v("#")]),e._v(" Teaclave Services")]),e._v(" "),n("p",[e._v("This directory contains protocol definitions and implementations of services in\nthe Teaclave platform.")]),e._v(" "),n("h2",{attrs:{id:"services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),n("p",[e._v("The platform includes several services (or subsystem) running inside TEE, and\ncommunicated with "),n("em",[e._v("mutual-attested channels")]),e._v(". They coordinate together to provide\na safe and secure FaaS platform.")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Authentication Service")]),e._v(": A reference implementation of user authentication\ninfrastructure. Here, we use JSON Web Token (JWT), a simple and widely-used\nauthentication standard, to provide a secure authentication mechanism in the\nplatform. Clients need to get valid token before interacting with the platform.")]),e._v(" "),n("li",[n("strong",[e._v("Frontend Service")]),e._v(": This is the entry point of all requests from users. It will\nvalidate user's identity/token and forward requests to appropriate services.")]),e._v(" "),n("li",[n("strong",[e._v("Management Service")]),e._v(": This service plays an important role in the whole services.\nIt handles almost all requests, such as registering functions/data, creating\ntasks, and invoking tasks. Also, the management service will contact the\naccess control service to authorize operations when needed. In addition, task\nand function information will be persistent into the storage services.")]),e._v(" "),n("li",[n("strong",[e._v("Storage Service")]),e._v(": Basically, the storage service stores persistent data like\nfunction, execution data, and task information in the platform. Here, we\ndeploy a key-value database (an implementation of LevelDB) in TEE and use the\nprotected file system (secured by the enclave) for data persistence.")]),e._v(" "),n("li",[n("strong",[e._v("Access Control Service")]),e._v(": Provides a flexible access control domain specific\nlanguage to support access control rules for secure multi-party computation.\nThe access control engine is written in Python and evaluated in SGX. Please\nread "),n("RouterLink",{attrs:{to:"/teaclave/docs/access-control.html"}},[e._v("this document")]),e._v(" to learn more about the design of it.")],1),e._v(" "),n("li",[n("strong",[e._v("Scheduler Service")]),e._v(": Schedules staged tasks ready for execution to a proper\nexecution node with desirable capabilities.")]),e._v(" "),n("li",[n("strong",[e._v("Execution Service")]),e._v(": A host of different executors interacting with the\nscheduler service to complete tasks. There could be many execution service\ninstances (or nodes) with different capabilities deployed in a cloud\ninfrastructure.")])]),e._v(" "),n("p",[e._v("To learn more about the design and internal implementation of services, please\nread "),n("RouterLink",{attrs:{to:"/teaclave/docs/service-internals.html"}},[e._v("Teaclave Service Internals")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"topology"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#topology"}},[e._v("#")]),e._v(" Topology")]),e._v(" "),n("p",[e._v("These services are communicating through RPC with remote attestation.\nThis topological graph illustrates connections between services.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("clients => authentication <-+       +----\x3e storage <----+\n                            |       |                   |\nclients => frontend ----------\x3e management            scheduler <-- execution\n                                    |\n                                    +--\x3e access_control\n\n\n                                                  =>      api endpoint connections\n                                                  -> internal endpoint connections\n")])])]),n("p",[e._v("Internal endpoint connections will be established and verified with mutual\nremote attestation to ensure the integrity and confidentiality of the whole system.\nTherefore, clients can trust the whole platform and safely interacting with the\nsystem through the attested authentication and frontend services.")])])}),[],!1,null,null,null);t.default=s.exports}}]);