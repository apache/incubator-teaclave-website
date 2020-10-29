---
title: Announcing Apache Teaclave (incubating) 0.1.0
date: 2020-10-22
author: Mingshen Sun
---

[English](/blog/2020-10-21-announcing-teaclave-0-1-0/) | [中文](/blog/2020-10-28-announcing-teaclave-0-1-0-cn/)

On behalf of the Teaclave community, I am happy to announce the *first* Apache
Incubator release of Teaclave, 0.1.0. Teaclave is a universal secure computing
platform, making computation on privacy-sensitive data safe and simple.

The 0.1.0 release marks an important milestone for the Teaclave community. This
is the first public release of the Teaclave platform. Moreover, this is the
first official release since we entered Apache Incubator on August 19, 2019.

## Project highlights

Since this is our first public release, I still want to emphasize the highlights
of the Teaclave project.

Apache Teaclave (incubating) has following highlights:

- **Security**: Teaclave adopts multiple security technologies to enable secure
  computing. In particular, Teaclave uses Intel SGX to serve the most
  security-sensitive tasks with *hardware-based isolation*, *memory encryption*,
  and *attestation*. Also, Teaclave is written in Rust to prevent
  *memory-safety* issues.
- **Functionality**: Teaclave is provided as a *function-as-a-service platform*.
  With many built-in functions, it supports tasks like machine learning, private
  set intersection, crypto computation, etc. In addition, developers can also
  deploy and execute Python scripts in Teaclave. More importantly, unlike
  traditional FaaS, Teaclave supports both general secure computing tasks and
  *flexible single- and multi-party computation*.
- **Usability**: Teaclave builds its components in containers, therefore, it
  supports deployment both locally and within cloud infrastructures. Teaclave
  also provides convenient endpoint APIs, client SDKs, and command-line tools.
- **Modularity**: Components in Teaclave are designed in modular, and some components 
  like remote attestation can be easily embedded in other projects. In addition,
  Teaclave SGX SDK can also be used separately to write standalone SGX enclaves
  for other purposes.

![Teaclave Architecture](./img/teaclave-architecture.png)

## Changes since entering Apache Incubator

Since we entered Apache Incubator, we started an ambitious task of refactoring
and improving the project in many perspectives. These include:

* Supporting function and data registration.
    - input data of a function can be fetched from external storage
    - reuse registered function in new tasks
* Redesigning function development workflow.
    - developers only need to write python script with native libraries written in Rust
* Providing persistent database implementation.
    - port rusty-leveldb to SGX enclave using protected FS to secure file I/O
    - add dedicated database service called "storage service" for data persistency
* Supporting protobuf compatible RPC protocol.
    - refactor existing service protocol with `.proto` files
    - redesign PRC protocol with remote attestation
* Supporting distributed workers.
    - support docker deployment
    - decouple services into different containers
* Supporting customized workers.
    -  service provider can deploy with other kinds of customized workers besides builtin worker
* Providing better documentation.
* Providing better error handling.
    - errors can be propagated through RPC
    - better error triage
* Testsuite cleanup/refactoring.
* Implementing more built-in functions: we have nine built-in functions, including
  echo, face detection, gbdt predict/train, logistic regression predict/train,
  online decrypt, ordered set intersect, private join and compute, and RSA sign.
* Supporting more flexible attestation mechanisms (DCAP): providing a reference
  implementation of DCAP attestation service and supporting DCAP in our
  attestation library and build system as well.
* RPC enhancement.
    - multi-language client
* Many other changes.

These changes include 876 files changed, 78,237 insertions, and 54,846 deletions.
We have also closed 102 issues on GitHub to answer questions from the community
and implementing feature requests.

## Download

Teaclave 0.1.0 can be downloaded at [the download page](/download/). Note that 
it is essential to verify the integrity of the downloaded file using the
PGP signature (.asc file) or a hash (.md5 or .sha* file).

## Documentation

If it is the first time to try Teaclave, we provide a simple but clear tutorial
to guide you getting stated with Teaclave by invoking
[your first function](/docs/my-first-function/) in Teaclave.

Basically, you can build the Teaclave platform using docker with these commands:

```sh
$ cd incubator-teaclave
$ docker run --rm -v $(pwd):/teaclave -w /teaclave \
  -it teaclave/teaclave-build-ubuntu-1804-sgx-2.9.1:latest \
   bash -c ". /root/.cargo/env && \
     . /opt/sgxsdk/environment && \
     mkdir -p build && cd build && \
     cmake -DTEST_MODE=ON .. && \
     make"
```

Launch all services with `docker-compose`:

```sh
$ (cd docker && docker-compose -f docker-compose-ubuntu-1804.yml up --build)
```

And invoke function with a Python client:

```sh
$ cd examples/python
$ PYTHONPATH=../../sdk/python python3 builtin_echo.py 'Hello, Teaclave!'
[+] registering user
[+] login
[+] registering function
[+] creating task
[+] approving task
[+] invoking task
[+] getting result
[+] done
[+] function return:  b'Hello, Teaclave!'
```

If you want to understand the internals of Teaclave, we provide several
documents about the [design](/docs/#design) of Teaclave. Also, we extensively
document our [codebase](docs/#codebase) in each sub directories. At last, [API references](docs/#api-references)
are automatically generated and uploaded to our homepage.

## Community

Along our road to the first public release, we also see the growth of the
community who started to follow the project and using in their products. We have
seen at least four [organizations](community/#organizations) using Teaclave in
their products, and more than nine open source [projects](community/#projects)
building on top of Teaclave platform or Teaclave SGX SDK.

We build several channels to communicate with the community including GitHub issues,
[mailing lists](https://lists.apache.org/list.html?dev@teaclave.apache.org), and
Twitter account ([@ApacheTeaclave](https://twitter.com/ApacheTeaclave)).

We also attended ApacheCon this year to introduce Teaclave to the Apache community.
If you missed the talk, please find the slides and other materials of talks,
papers, and related articles at [this page](/docs/papers-talks/).

## Thanks

I'd like to thank all [contributors](/contributors/) to build this community.
Thanks to our project [mentors](/contributors/#mentors), who help us to
understand the Apache way of open source. Furthermore, 
thanks to all [PPMC members and committers](/contributors/#committers)
for governing and expanding the community, organizing meetups, discussing
roadmap, designing components, writing documents, contributing code, and
advertising the project. Moreover, thanks to all [external contributors](/contributors/#contributors-2)
who send pull requests to fix bugs
and implementing features. In addition, I'd like to thank people who tries
Teaclave themselves, files bugs or feature requests. This also helps us to
understand the project and figure out where we can improve.
Finally, I'd like to thank companies who use Teaclave and contribute back to
the community.

At last, 0.1.0 is just the start of Teaclave. We will continue working hard with
the community implementing new features, writing documents, and expanding the
community.

Happy Teaclaving. Cheers!
