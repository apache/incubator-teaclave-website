---
title: 让安全计算更简单 - Apache Teaclave (incubating) 0.1.0 正式发布
date: 2020-10-29
author: Mingshen Sun
---

[English](/blog/2020-10-21-announcing-teaclave-0-1-0/) | [中文](/blog/2020-10-28-announcing-teaclave-0-1-0-cn/)

Apache Teaclave (incubating) 作为全球首个开源通用安全计算平台，在 2020 年 10 月
21 日社区投票正式通过 0.1.0 的版本发布。0.1.0 版是 Teaclave 社区发展重要的里程碑，
它是暨 Teaclave 进入 Apache 孵化器后发布的第一个正式版本，这意味着 Teaclave 通向
Apache 顶级项目之路走上了正轨。

Teaclave 是一个安全计算平台，为隐私数据计算赋能。基于硬件安全能力，Teaclave 确保
敏感数据在可信域外和离岸场景下安全可控的流通和处理，无需担心隐私数据泄露和滥用。
Teaclave 同时支持多方参与的联合计算，打破企业和组织中的数据孤岛。

简单来说，Teaclave 有以下四个亮点：

- **安全性**：Teaclave 使用多重安全技术保护隐私数据的计算。我们使用 Intel SGX，
  提供基于硬件隔离、内存加密、远程证实等安全技术保护数据隐私计算任务。不仅如此，
  为了避免内存安全漏洞带来的安全风险，Teaclave 还使用内存安全编程语言 Rust 编写。
- **功能性**：Teaclave 平台提供了更加便利的函数即服务（function-as-a-service）接
  口，大大的降低了使用门槛。平台中也实现了众多内置函数，例如机器学习算法，多方联
  合求交，加解密计算等等常用功能。更重要的是，开发者还可以使用 Python 自由编写函
  数来操作隐私数据，提交至 Teaclave 平台执行。与传统 FaaS 框架不同的是，Teaclave
  提供了灵活的多方参与计算接口，大大简化多方安全计算的流程。
- **易用性**：Teaclave 提供便利的部署方式，支持在本地和云上以容器的方式进行部署。
  项目中还提供了完善的接口，客户端 SDK 以及命令行工具帮助开发者使用平台的功能。
- **灵活性**：Teaclave 设计了灵活的组件和服务框架，其他项目仅需少量修改就可以使
  用 Teaclave 中的各种组件。例如，可以在项目中使用 Teaclave 远程证实库作为第三方
  依赖库，或者直接单独部署使用 Teaclave 中的数据库服务等。
  
![Teaclave Architecture](./img/teaclave-architecture.png)

在 Teaclave 进入 Apache 孵化器后，我们启动了对项目的重构计划，同时对整个项目代码
和交互的梳理，0.1.0 的发布是项目从诞生到成长的第一步。简单来说，我们在以下几个方
面做了代码重构和功能特性完善：提供了更完善的函数和数据注册执行，重新设计的函数的
开发流程，支持兼容 protobuf 的 RPC 定义接口，支持分布式执行服务，支持自定义执行
器，提供更佳完善的文档，重新设计了错误处理机制，完善测试框架和测试用例，实现了更
多的内置函数，支持了更加灵活的远程证实方式（DCAP），重新设计 RPC 方式等等。更多
更详细的修改可以看我们的[版本发布文档](https://github.com/apache/incubator-teaclave/releases/tag/v0.1.0)。这次
发布一共修改了 876 个源文件，新增了 78,237 行代码，删除了 54,846 行代码，并且在
GitHub issue 上解决了来自社区的 102 个问题。

Teaclave 0.1.0 版本可以在[官网下载页面](/download/)找到（注意验证 PGP 签名和 hash）。

在新版本中我们提供了非常全面和详细的文档，如果是第一次了解和接触 Teaclave，我们
提供了一个简单易上手的[新手入门文档](/docs/my-first-function/)，你可以在这个文档中
学习如何在 Teaclave 中编译和运行一个简单的函数。当然，如果你想深入的了解
Teaclave 的内部设计和实现，我们还有更多设计文档、API 文档、代码库文档等你发现。

感谢一直以来关注、使用、提问、为项目贡献代码的人们，Teaclave 项目的发展离不开[社区](/community/)的支持与帮助。在此，我们非常高
兴的宣布，已有四家公司或组织在产品中使用 Teaclave，并且有超过九个开源项目使用了
Teaclave 平台和 Teaclave SGX SDK。这些都给项目的发展提供源源不断的动力。

Teaclave 的开源是 [The Apache Way](https://www.apache.org/theapacheway/)的
开源，无论是代码、文档、设计还是路线图规划，我们都会在社区的各个渠道中讨论。如果
你想关注 Teaclave，亦或想加入我们的讨论，可以在 [Github issues](https://lists.apache.org/list.html?dev@teaclave.apache.org)，邮件列
表回复我们、发起新的话题。也可以关注我们的 Twitter 账号
[@ApacheTeaclave](https://twitter.com/ApacheTeaclave)了解最新动态。除此之外，
我们在[官网](/docs/papers-talks/)中提供了
Teaclave 相关的演讲、论文和文章，包括今年在 ApacheCon 的演讲 slides 和视频。

在此，感谢我们所有[贡献者](/contributors/)对于项
目的贡献，感谢 Apache 社区[导师们](/contributors/#mentors)的指导，感谢所有帮助
扩大社区、宣传社区、讨论路线图、组织社区活动的 [PPMC 和 committer 成员](/contributors/#committers)，
还要感谢正在了解
和尝试使用 Teaclave 的人们，以及回馈 Teaclave 社区的公司。你们都为 Teaclave 开源
社区的发展做了巨大的贡献。

最后，0.1.0 只是 Teaclave 的开端，我们还会和 Teaclave 社区继续努力，推动隐私安全
计算的发展。

**Teaclave，让安全计算更简单。**
