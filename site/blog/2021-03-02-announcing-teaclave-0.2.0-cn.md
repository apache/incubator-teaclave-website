---
title: Apache Teaclave (incubating) 0.2.0 发布
date: 2021-03-02
author: Mingshen Sun
---

[English](/blog/2021-03-01-announcing-teaclave-0-2-0/) | [中文](/blog/2021-03-01-announcing-teaclave-0-2-0-cn/)

Apache Teaclave (incubating) 是一个隐私安全计算平台，为隐私数据计算赋能。基于硬
件安全能力，Teaclave 确保敏感数据在可信域外和离岸场景下安全可控的流通和处理，无
需担心隐私数据泄露和滥用。 Teaclave 同时支持多方参与的联合计算，打破企业和组织中
的数据孤岛。Teaclave 于 2019 年由百度捐赠进入 Apache 基金会孵化器。在 2020 年 10
月发布第一个开源社区版本。

Teaclave 使用 Intel SGX， 提供基于硬件隔离、内存加密、远程证实等安全技术保护数据
隐私计算任务。 Teaclave 平台提供了函数即服务（function-as-a-service）接口，降低
了使用门槛。平台中也实现了众多内置函数，例如机器学习算法，多方联 合求交，加解密
计算等等常用功能。更重要的是，开发者还可以使用 Python 自由编写函数来操作隐私数据，
在中平台执行。最后，为了避免内存安全漏洞带来的安全风险，Teaclave 还使用内存安全
编程语言 Rust 编写。

2021 年 3 月 2 日，我们迎来了 Teaclave 第二个社区版本的发布 0.2.0。在这一版本中，
我们重点放在提供更多的内建函数，不同语言的客户端 SDK，更方便的 docker 部署环境，
命令行接口，文档等等。

## Teaclave 0.2.0 亮点介绍

在 0.2.0 中，我们添加了多种语言的客户端 SDK，现在我们提供了 Python、Rust、C、
Swift 四种语言的接口，在 Teaclave Meetup #2 中，我们已经介绍了不同语言 SDK 的组
织结构和框架。简单来说，我们使用 JSON 序列化/反序列化的方式作为多语言的边界。下
图描述了这几种语言 SDK 的关系，以及一些事例的接口。

![Teaclave Client SDKs](./img/teaclave-client-sdks.png)

## Teaclave 0.2.0 版本详情

详细来讲 0.2.0 包括一下修改以及新功能：

### Functions

- 增加内置的 PCA (Principal Component Analysis) 函数
- 添加泄漏密码查询内置函数 (#447)

### SDK

- 增加 Rust 客户端 SDK (#455)
- 增加 C 客户端 SDK (#470)
- 增加 Swift 客户端 SDK，也就是 iOS framework
- 修改 SDK 中接口的 CMAC 格式为 byte array

### Docker

- 增加 `teaclave-file-service` 容器作为示例程序的远程文件系统 (#446)
- 修复在仿真模式下的 docker compose 文件 (#462)

### CLI

- 增加 `attesation` 的子命令，可以展示当前 SGX 平台的远程认证报告

### 文档

- 增加 codebase 中的文档
- 增加在 Azure Confidential Compute VM 中部署 Teaclave 的文档介绍

### 其他

- 在 binder 模块中增加 input/output buffer 的检查以及测试
- 使用 Github Action 进行 PR 的编译、测试以及格式检查
- 文档的打磨

## 如何下载

Teaclave 0.2.0 版本可以在官网下载页面找到（注意验证 PGP 签名和 hash）。

## 快速入门

如果您想尝试使用 Teaclave，我们提供了一个简单的上手文档（[https://teaclave.apache.org/docs/my-first-function/](https://teaclave.apache.org/docs/my-first-function/)）来执行一个打印 hello world 的函数。

简单来说，你可以通过以下命令使用 docker 编译 Teaclave：

```
$ cd incubator-teaclave
$ docker run --rm -v $(pwd):/teaclave -w /teaclave \
  -it teaclave/teaclave-build-ubuntu-1804-sgx-2.9.1:latest \
   bash -c ". /root/.cargo/env && \
     . /opt/sgxsdk/environment && \
     mkdir -p build && cd build && \
     cmake -DTEST_MODE=ON .. && \
     make"
```

然后使用 `docker-compose` 在仿真模式下执行 Teaclave 的所有服务：

```
$ (cd docker && docker-compose -f docker-compose-ubuntu-1804-sgx-sim-mode.yml up --build)
```

最后，就可以在 examples 目录下使用 Python 调用 echo 函数打印 "Hello, Teaclave!"：

```
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

如果你想深入的了解 Teaclave 的内部设计和实现，我们还有更多设计文档、API 文档、代码库文档等你发现。
