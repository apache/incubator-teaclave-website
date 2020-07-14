---
title: Aapache Incubation Proposal
date: 2019-08-20
author: The Teaclave PPMC
---

```
MesaTEE Apache Incubation Proposal

= Abstract =

MesaTEE is a framework for universal secure computing.

= Proposal =

MesaTEE is the next-gen solution to enable general computing service for
security-critical scenarios. It will allow even the most sensitive data to
be securely processed to enable offshore businesses without leakage.

The solution combines the advanced Hybrid Memory Safety (HMS) model and the
power of the Trusted Computing technologies (e.g., TPM) as well as the
Confidential Computing technologies (e.g., Intel SGX).

  * Code base:
    * https://github.com/mesalock-linux/mesatee
    * https://github.com/baidu/rust-sgx-sdk
  * Website: https://mesatee.org
  * Documentation: https://mesatee.org/doc/mesatee_sdk/

= Background =

The emerging technologies of big data analytics, machine learning, cloud/edge
computing, and blockchain are significantly boosting our productivity, but at
the same time they are bringing new confidentiality and integrity concerns. On
public cloud and blockchain, sensitive data like health and financial records
may be consumed at runtime by untrusted computing processes running on
compromised platforms; during in-house data exchange, confidential information
may cross different clearance boundaries and possibly fall into the wrong hands;
also not to mention the privacy issue arises in offshore data supply chains.

Although the consequences of data breaching have been extensively elaborated, we
should also note that proprietary computing algorithms themselves, such as AI
models, also need to be well protected. Once leaked, attackers can steal the
intellectual properties, or launch whitebox attacks and easily exploit the
weaknesses of the models.

Facing all these risky scenarios, we are in desperate need of a trusted and
secure mechanism, enabling us to protect both private data and proprietary
computing models during a migratable execution in potentially unsafe
environments, yet preserving functionalities, performance, compatibility, and
flexibility. MesaTEE is targeting to be, as we call it, the full "Universal
Secure Computing" stack, so it can help users resolve these runtime security
risks.

MesaTEE aims to promote the development of universal secure computing ecosystem
through open source and openness, to provide basic support for trust protection
for the productivity revolution brought by big data and AI, to completely solve
the data exchange or multi-party computing between departments/companies, to
enable privacy-crucial services such as financial and medical care using
blockchain/cloud services, and to convoy businesses that are closely related to
life and safety such as autonomous driving. MesaTEE has been working closely
with mainstream cloud computing/blockchain/chip vendors and
universities/research institutions to promote hardware TEE, software memory
safety, and versatile computing services to create an internationally protected
and flexible secure computing framework. MesaTEE’s open-source release will
greatly accelerate the development of the next generation of big data business
applications, and it is also of great importance to promoting AI in all business
areas.

= Rationale =

MesaTEE stack redefines future AI and big data analytics by providing a trusted
and secure offshore computing environment. The confidentiality and privacy of
data and models can be well protected with MesaTEE, even if data and model
originate from different parties with no mutual trust. Moreover, the computing
platform itself is not necessarily trusted either. The Trusted Computing Base
(TCB) can thus be largely reduced to MesaTEE framework alone. A detailed
description of target use-cases can be found at
https://github.com/mesalock-linux/mesatee/blob/master/docs/case_study.md.

We believe that Apache way of open source community empowers MesaTEE to attract
a diverse set of contributors who can bring new ideas into the project.

= Initial Goals =

  * Move the existing codebase, website, documentation, and mailing lists to an
    Apache-hosted infrastructure.
  * Integrate with the Apache development process.
  * Ensure all dependencies are compliant with Apache License version 2.0.
  * Incrementally develop and release per Apache guidelines.

= Current Status =

The MesaTEE project (and its sub-project Rust SGX SDK) has been designed and
developed at Baidu since 2017, and was open sourced under the Apache License,
Version 2.0 in 2019. The source code is currently hosted at github.com
(https://github.com/mesalock-linux/mesatee and
https://github.com/baidu/rust-sgx-sdk), which will seed the Apache git
repository.

== Meritocracy ==

We are fully committed to open, transparent, and meritocratic interactions with
our community. In fact, one of the primary motivations for us to enter the
incubation process is to be able to rely on Apache best practices that can
ensure meritocracy. This will eventually help incorporate the best ideas back
into the project and enable contributors to continue investing their time in the
project. We already have some guidelines to help external contributors:

  * https://github.com/mesalock-linux/mesatee/blob/master/docs/rust_guideline.md
  * https://github.com/mesalock-linux/mesatee/blob/master/docs/how_to_add_your_function.md
  * https://github.com/mesalock-linux/mesatee/blob/master/CODE_OF_CONDUCT.md

== Community ==

The MesaTEE community is fairly young. Since our sub-project (Rust SGX SDK) was
open sourced in 2017, we received many contributions from various companies and
individual researchers (https://github.com/baidu/rust-sgx-sdk/pulls). Our
primary goal during the incubation would be to grow the community and groom our
existing active contributors for committers.

== Core Developers ==

Current core developers work at Baidu. We are confident that incubation will
help us grow a diverse community in an open and collaborative way.

== Alignment ==

MesaTEE is designed as a framework for universal secure computing. This is
complementary to the Apache's projects, providing a trusted and secure computing
framework.

Our sincere hope is that being a part of the Apache foundation would enable us
to drive the future of the project in alignment with the other Apache projects
for the benefit of thousands of organizations that already leverage these
projects.

= Known Risks =

== Orphaned Products ==

The risk of abandonment of MesaTEE is low. MesaTEE has been incubated at Baidu
for over two years. Baidu is committed to the further development of the project
and will keep investing resources towards the Apache processes and community
building, during the incubation period.

== Inexperience with Open Source ==

Even though the initial committers are new to the Apache world, some have
considerable open source experience - Yu Ding, Yiming Jing, Mingshen Sun. We
have been successfully managing the current open source community, answering
questions, and taking feedback already. Moreover, we hope to obtain guidance and
mentorship from current ASF members to help us succeed in the incubation.

== Length of Incubation ==

We expect the project to be in incubation for 2 years or less.

== Homogenous Developers ==

Currently, the lead developers for MesaTEE are from Baidu. However, we have an
active set of early contributors/collaborators from Alibaba and other companies,
which we hope will increase the diversity going forward. Once again, a primary
motivation for the incubation is to facilitate this in the Apache way.

== Reliance on Salaried Developers ==

Both the current committers and early contributors have several years of core
expertise around designing trusted computing systems. Current committers are
very passionate about the project and have already invested hundreds of hours
towards helping and building the community. Thus, even with employer changes, we
expect they will be able to actively engage in the project either because they
will be working in similar areas even with newer employers or out of belief in
the project.

== Relationships with Other Apache Products ==

To the best of our knowledge, there are no directly competing projects with
MesaTEE that offer all of the feature set - memory safety, secure computing,
multi-party computation, etc. However, some projects share similar goals, e.g.,
OpenWhisk which provides a serverless cloud platform. We are committed to open
collaboration with such Apache projects and incorporating changes to MesaTEE or
contributing patches to other projects, with the goal of making it easier for
the community at large, to adopt these open source technologies.

== Excessive Fascination with the Apache Brand ==

The Apache Brand is very respected. We are very honored to have the opportunity
to join ASF, with the understanding that its brand policies shall be respected.
And we hope Apache can help us build the ecosystem around MesaTEE and attract
more developers.

= Documentation =

  * Detailed documentation: https://github.com/mesalock-linux/mesatee
  * MesaTEE SDK API documentation: https://mesatee.org/doc/mesatee_sdk/

= Initial Source =

The codebase is currently hosted on Github:

  * https://github.com/mesalock-linux/mesatee
  * https://github.com/baidu/rust-sgx-sdk

During incubation, the codebase will be migrated to an Apache infrastructure.
The source code of MesaTEE is under Apache version 2.0 License, while Rust SGX
SDK is under BSD 3-Clauses License.

= Source and Intellectual Property Submission Plan =

We will work with the committers to get ICLAs signed. We will provide a Software
Grant Agreement from an authorized signer per
https://www.apache.org/licenses/software-grant-template.pdf

= External Dependencies =

MesaTEE directly depends on these third-party Rust crates:

  * adler32, 1.0.3, BSD-3-Clause
  * aho-corasick, 0.7.4, Unlicense/MIT
  * array_tool, 1.0.3, MIT
  * assert_matches, 1.3.0, MIT/Apache-2.0
  * autocfg, 0.1.4, Apache-2.0/MIT
  * base64, 0.10.1, MIT/Apache-2.0
  * bincode, 1.1.4, MIT
  * bit-vec, 0.6.1, MIT/Apache-2.0
  * bitflags, 1.1.0, MIT/Apache-2.0
  * byteorder, 1.3.2, MIT/Unlicense
  * bytes, 0.5.0, MIT
  * cc, 1.0.37, MIT/Apache-2.0
  * cfg-if, 0.1.9, MIT/Apache-2.0
  * chrono, 0.4.7, MIT/Apache-2.0
  * color_quant, 1.0.1, MIT
  * crc32fast, 1.2.0, MIT
  * ctor, 0.1.9, Apache-2.0
  * deflate, 0.7.20, MIT/Apache-2.0
  * either, 1.5.2, MIT/Apache-2.0
  * env_logger, 0.6.2, MIT/Apache-2.0
  * erased-serde, 0.3.9, MIT
  * fnv, 1.0.6, Apache-2.0
  * getrandom, 0.1.6, MIT
  * ghost, 0.1.0, MIT/Apache-2.0
  * gif, 0.10.2, MIT/Apache-2.0
  * gzip-header, 0.3.0, MIT/Apache-2.0
  * half, 1.3.0, MIT/Apache-2.0
  * hashbrown, 0.3.1, Apache-2.0/MIT
  * heapsize, 0.4.2, MIT/Apache-2.0
  * hex, 0.3.2, MIT
  * http, 0.1.17, MIT/Apache-2.0
  * httparse, 1.3.4, MIT/Apache-2.0
  * humantime, 1.2.0, MIT/Apache-2.0
  * image, 0.21.0, MIT
  * inflate, 0.4.5, MIT
  * inventory, 0.1.3, MIT
  * inventory-impl, 0.1.3, MIT
  * iovec, 0.2.0, MIT/Apache-2.0
  * itertools, 0.8.0, MIT/Apache-2.0
  * itoa, 0.4.4, MIT
  * jpeg-decoder, 0.1.15, MIT
  * lazy_static, 1.3.0, MIT/Apache-2.0
  * libc, 0.2.59, MIT
  * linked-hash-map, 0.5.2, MIT/Apache-2.0
  * log, 0.4.7, MIT
  * lzw, 0.10.0, MIT/Apache-2.0
  * matrixmultiply, 0.2.2, MIT/Apache-2.0
  * md5, 0.6.1, Apache-2.0/MIT
  * memchr, 2.2.1, Unlicense/MIT
  * memory_units, 0.3.0, MPL-2.0
  * net2, 0.2.33, MIT/Apache-2.0
  * num, 0.2.0, MIT/Apache-2.0
  * num-bigint, 0.2.2, MIT/Apache-2.0
  * num-complex, 0.2.3, MIT/Apache-2.0
  * num-integer, 0.1.41, MIT/Apache-2.0
  * num-iter, 0.1.39, MIT/Apache-2.0
  * num-rational, 0.2.2, MIT/Apache-2.0
  * num-traits, 0.2.8, MIT/Apache-2.0
  * parity-wasm, 0.31.3, MIT/Apache-2.0
  * png, 0.14.1, MIT/Apache-2.0
  * proc-macro2, 0.4.30, MIT/Apache-2.0
  * profiler_builtins, 0.1.0, profiler_builtins
  * quick-error, 1.2.2, MIT/Apache-2.0
  * quote, 0.3.15, MIT
  * quote, 0.6.13, MIT
  * rand, 0.6.5, MIT/Apache-2.0
  * rand_core, 0.4.0, MIT/Apache-2.0
  * rand_hc, 0.1.0, MIT/Apache-2.0
  * rand_pcg, 0.1.2, MIT/Apache-2.0
  * rawpointer, 0.1.0, MIT/Apache-2.0
  * regex, 1.1.9, MIT/Apache-2.0
  * regex-syntax, 0.6.8, MIT/Apache-2.0
  * ring, 0.14.6, ISC-style
  * rulinalg, 0.4.2, MIT
  * rustls, 0.15.2, Apache-2.0/ISC/MIT
  * rusty-machine, 0.5.4, MIT
  * ryu, 1.0.0, Apache-2.0
  * sct, 0.5.0, Apache-2.0/ISC/MIT
  * serde, 1.0.94, MIT
  * serde_cbor, 0.10.0, MIT/Apache-2.0
  * serde_derive, 1.0.94, MIT
  * serde_json, 1.0.40, MIT
  * sha1, 0.6.0, BSD-3-Clause
  * sha2, 0.8.0, sha2
  * spin, 0.5.0, MIT
  * syn, 0.11.11, MIT
  * syn, 0.15.39, MIT
  * synom, 0.11.3, MIT/Apache-2.0
  * termcolor, 1.0.5, Unlicense
  * thread_local, 0.3.6, Apache-2.0/MIT
  * tiff, 0.3.1, MIT
  * toml, 0.5.1, MIT/Apache-2.0
  * typetag, 0.1.3, MIT
  * typetag-impl, 0.1.3, MIT
  * ucd-util, 0.1.3, MIT/Apache-2.0
  * unicode-xid, 0.0.4, MIT/Apache-2.0
  * unicode-xid, 0.1.0, MIT/Apache-2.0
  * utf8-ranges, 1.0.3, Unlicense/MIT
  * uuid, 0.7.4, Apache-2.0
  * wabt, 0.6.0, Apache-2.0
  * wasmi, 0.5.0, MIT/Apache-2.0
  * wasmi-validation, 0.1.0, MIT/Apache-2.0
  * webpki, 0.19.1, ISC-style
  * webpki-roots, 0.16.0, MPL-2.0
  * winapi, 0.3.7, MIT/Apache-2.0
  * winapi-i686-pc-windows-gnu, 0.4.0, MIT/Apache-2.0
  * winapi-util, 0.1.2, Unlicense/MIT
  * winapi-x86_64-pc-windows-gnu, 0.4.0, MIT/Apache-2.0
  * wincolor, 1.0.1, Unlicense/MIT
  * yasna, 0.3.1, MIT/Apache-2.0

Note that this is not an exhaustive dependency list and only direct
dependencies
of MesaTEE's trusted libs are included.

== Cryptography ==

MesaTEE uses following cryptographic libraries:

  * ring (https://github.com/briansmith/ring): a Rust crypto library based on
BoringSSL
  * rustls: a Rust TLS library
  * sgx_tcrypto in Intel SGX SDK (https://software.intel.com/en-us/sgx/sdk)

= Required Resources =

== Mailing lists ==

  * private@mesatee.incubator.apache.org (with moderated subscriptions)
  * dev@mesatee.incubator.apache.org
  * commits@mesatee.incubator.apache.org
  * user@mesatee.incubator.apache.org

== Git Repositories ==

Upon entering incubation, we want to transfer the existing repos from
https://github.com/mesalock-linux/mesatee and
https://github.com/baidu/rust-sgx-sdk to Apache organization in GitHub like:

  * https://github.com/apache/incubator-mesatee
  * https://github.com/apache/incubator-mesatee-rust-sgx-sdk

== Issue Tracking ==

MesaTEE currently uses GitHub to track issues. Would like to continue doing
so.

== Continuous Integration Service ==

MesaTEE currently uses self-hosted continuous integration (CI) service which can
help developers to automatically test commits. The CI service involves several
nodes which support Intel SGX. We would like to continue doing so.

= Initial Committers =

The list is sorted alphabetically:

  * Mingshen Sun <mssun at mesatee.org>
  * Pei Wang <wangpei at mesatee.org>
  * Rundong Zhou <rundongzhou at mesatee.org>
  * Tao Wei <lenx at mesatee.org>
  * Tongxin Li <litongxin at mesatee.org>
  * Yiming Jing <jingyiming at mesatee.org>
  * Yu Ding <d at mesatee.org>
  * Yulong Zhang <ylzhang at mesatee.org>
  * Zhaofeng Chen <zf at mesatee.org>

= Sponsors =

== Champion ==

  * Zhijie Shen <zjshen@apache.org>

== Nominated Mentors ==

  * Jianyong Dai <daijy@apache.org>
  * Luciano Resende <lresende@apache.org>
  * Matt Sicker
  * Furkan Kamaci

== Sponsoring Entity ==

The Incubator PMC
```
