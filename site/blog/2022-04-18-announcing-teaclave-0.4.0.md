---
title: Announcing Apache Teaclave (incubating) 0.4.0
date: 2022-04-18
author: Mingshen Sun
---

On behalf of the Teaclave community, I am happy to announce the *fourth* Apache
Incubator release of Teaclave, 0.4.0. Teaclave is a universal secure computing
platform, making computation on privacy-sensitive data safe and simple.
Apache Teaclave (including the
[FaaS platform](https://github.com/apache/incubator-teaclave),
[SGX SDK](https://github.com/apache/incubator-teaclave-sgx-sdk),
and [TrustZone SDK](https://github.com/apache/incubator-teaclave-trustzone-sdk)) is
being used and contributed by developers from many organizations and
other open source projects. Please see the [*powered by*](/powered-by) page to learn more.

In this release, we mainly focus on better user management, task management,
performance improvement and stability.

## Highlights

In this release, we introduce a role-based access control for user management.
Specifically, we define roles like admin, function owner, data owner, data owner
manager, etc. Additionally, we also add APIs to support user management
functionalities. In addition, we also implement a feature to cancel a running
task to kill a long-run function which is no longer needed. Besides these two
new features, we also made a lot of underlying changes to improve the
performance of RPC and stability of the secure database.

To learn more, here is a list of notable changes in Teaclave version 0.4.0.

**Features**

- Add the `DisableFunction` interface (#620)
- Better user management interfaces: add the `UserUpdate`, `UserChangePassword`, `ResetUserPassword`, `DeleteUser`, and `ListUsers` interfaces
- Support optional input/output files (#603)
- Start Teaclave docker services with auto-detection mechanism (#559)
- Add watchdog functionality to monitor service status (#600)
- Support cancel a task
- Support intermediate cert in DCAP attestation cert

**Enhancements**

- Better error handling in Python client SDK (#632)
- Refactor services error types and messages, make them readable to end users
- Optimize RPC memory footprint of serde (#577)
- Support selectively including executors (#574)
- Support AES-GCM output files (#629)
- Add port probe for service launching
- Update WAMR version to WAMR-01-18-2022 (#616)
- Move execution context into a separate crate (#598)
- Support Ubuntu 20.04 docker image and add corresponding CI pipelines
- Persistent MockDB in test mode (#580)

**Bug Fixes**

- Better task state error and fix cancel error issue in the example (#637)
- Fix privilege issues in the `GetFunction` and `ListFunctions` interfaces (#636)
- Better building system: fix packages rebuild every time, avoid issues in parallel make (#589, #596)
- Fix the issue of generating code coverage of tests (#627)
- Fix LevelDB assertion issue: leveldb lru bug, using disk db for unit test (#583)

**Docs**

- Add release guide for releasing Teaclave in the community: <https://teaclave.apache.org/docs/release-guide/>
- Remove `CONTRIBUTORS.md` and point to the homepage (#552)

## Download

Teaclave 0.4.0 can be downloaded at [the download page](/download/). Note that 
it is essential to verify the integrity of the downloaded file using the
PGP signature (the `.asc` file) or a hash (the `.sha256` file).

## Documentation

If it is the first time to try Teaclave, we provide a simple but clear tutorial
to guide you getting stated with Teaclave by invoking
[your first function](/docs/my-first-function/) in Teaclave.

Basically, you can build the Teaclave platform using docker with these commands:

```sh
$ tar zxvf apache-teaclave-0.4.0-incubating.tar.gz && cd \
  apache-teaclave-0.4.0-incubating
$ # Instructions to verify the source tar: https://teaclave.apache.org/download/#verify-the-integrity-of-the-files

$ docker run --rm -v $(pwd):/teaclave -w /teaclave \
  -it teaclave/teaclave-build-ubuntu-1804-sgx-2.14:latest \
   bash -c ". /root/.cargo/env && \
     . /opt/sgxsdk/environment && \
     mkdir -p build && cd build && \
     cmake -DTEST_MODE=ON -DSGX_SIM_MODE=ON -DGIT_SUBMODULE=OFF .. && \
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
document our [codebase](/docs/#codebase) in each sub directories. At last, [API references](/docs/#api-references)
are automatically generated and uploaded to our homepage.

## Community

- Join us on our [mailing list](https://lists.apache.org/list.html?dev@teaclave.apache.org) and [Discord channel](https://discord.gg/ynECXsxm5P).
- Follow us at [@ApacheTeaclave](https://twitter.com/ApacheTeaclave).
- Meet us at our [monthly community meetup](https://teaclave.apache.org/community/#calendar).
- See [more](https://teaclave.apache.org/community/).
