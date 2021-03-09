---
title: Announcing Apache Teaclave (incubating) 0.2.0
date: 2021-03-02
author: Mingshen Sun
---

[English](/blog/2021-03-01-announcing-teaclave-0-2-0/) | [中文](/blog/2021-03-01-announcing-teaclave-0-2-0-cn/)

On behalf of the Teaclave community, I am happy to announce the *second* Apache
Incubator release of Teaclave, 0.2.0. Teaclave is a universal secure computing
platform, making computation on privacy-sensitive data safe and simple.

In 0.2.0, we focus on various components including built-in functions, SDKs in
different languages, docker, command line interface, documents, etc.

## Highlights

In version 0.2.0, we added more client SDKs in different languages; Rust, C, and
even Swift. In [Teaclave Meetup #2](/blog/2021-02-24-teaclave-meetup-2), we
introduced the design of client SDKs.
Basically, we are using JSON serialization/deserialization to make the interface
simple and easy to work on.

![Teaclave Client SDKs](./img/teaclave-client-sdks.png)

## 0.2.0 Release Notes

Specifically, we have following updates:

### Functions

- Add the builtin PCA (Principal Component Analysis) function
- Add the exposed password checking built-in function (#447)

### SDK

- Add Rust client SDK (#455)
- Add C client SDK and examples (#470)
- Add Swift SDK (iOS framework)
- Change CMAC format from string to bytes array

### Docker

- Add a `teaclave-file-service `container to the docker compose file to help run the examples (#446)
- Fix sim mode docker compose file (#462)

### CLI

- [cli] Add the attest subcommand to display attestation report from the remote Teaclave service

### Documents

- [docs] Add permalink for codebase's README (#428)
- [docs] Add document of Deploying Teaclave on Azure Confidential Computing Virtual Machines

### Bug Fixes

- [binder] Add checks and test case for input/output buffer. (#423)

### Misc

- Start to use GitHub Action (#473)
- Add GitHub issue templates (#476)
- Document polishing

## Download

Teaclave 0.2.0 can be downloaded at [the download page](/download/). Note that 
it is essential to verify the integrity of the downloaded file using the
PGP signature (the `.asc` file) or a hash (the `.sha256` file).

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

Launch all services with `docker-compose` using simulation mode:

```sh
$ (cd docker && docker-compose -f docker-compose-ubuntu-1804-sgx-sim-mode.yml up --build)
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
