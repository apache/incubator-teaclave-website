---
permalink: /download
sidebar: false
---
# Download

The followings are Apache Incubator releases for Teaclave projects.
These source archives are generated from tagged releases. You can verify your
download by following these
[procedures](https://www.apache.org/info/verification.html) and using these
[KEYS](https://www.apache.org/dist/incubator/teaclave/KEYS).

### Teaclave

| Version | Date | Source Code               | PGP/SHA | Notes |
|:-------:|:------------:|:-------------------------:|:-------:|:-------------:|
| 0.2.0   | 2021-03-02   | [apache-teaclave-0.2.0-incubating.tar.gz](https://www.apache.org/dyn/closer.cgi/incubator/teaclave/0.2.0/apache-teaclave-0.2.0-incubating.tar.gz)| [asc](https://www.apache.org/dist/incubator/teaclave/0.2.0/apache-teaclave-0.2.0-incubating.tar.gz.asc), [sha512](https://www.apache.org/dist/incubator/teaclave/0.2.0/apache-teaclave-0.2.0-incubating.tar.gz.sha512) | [link](https://github.com/apache/incubator-teaclave/releases/tag/v0.2.0) |
| 0.1.0   | 2020-10-09   | [apache-teaclave-0.1.0-incubating.tar.gz](https://www.apache.org/dyn/closer.cgi/incubator/teaclave/0.1.0/apache-teaclave-0.1.0-incubating.tar.gz)| [asc](https://www.apache.org/dist/incubator/teaclave/0.1.0/apache-teaclave-0.1.0-incubating.tar.gz.asc), [sha512](https://www.apache.org/dist/incubator/teaclave/0.1.0/apache-teaclave-0.1.0-incubating.tar.gz.sha512) | [link](https://github.com/apache/incubator-teaclave/releases/tag/v0.1.0) |

### Teaclave SGX SDK

| Version | Date | Source Code               | PGP/SHA | Notes |
|:-------:|:------------:|:-------------------------:|:----:|:-------:|
| - | - | - | - | - |

### Teaclave TrustZone SDK

| Version | Date | Source Code               | PGP/SHA | Notes |
|:-------:|:------------:|:-------------------------:|:----:|:-------:|
| - | - | - | - | - |

## Verify the Integrity of the Files

::: tip NOTE
It is essential that you verify the integrity of the downloaded file using the
PGP signature (`.asc` file) or a hash (`.md5` or `.sha*` file). Please read
[Verifying Apache Software Foundation Releases](https://www.apache.org/info/verification.html)
for more information on why you should verify our releases.
:::

The PGP signature can be verified using PGP or GPG. First download the
[KEYS](https://www.apache.org/dist/incubator/teaclave/KEYS) as
well as the asc signature file for the relevant distribution. Make sure you get
these files from the main distribution site, rather than from a mirror. Then
verify the signatures using

```
$ gpg --import KEYS
$ gpg --verify downloaded_file.asc downloaded_file
```
or
```
$ pgpk -a KEYS
$ pgpv downloaded_file.asc
```
or
```
$ pgp -ka KEYS
$ pgp downloaded_file.asc
```
Alternatively, you can verify the hash on the file.

Hashes can be calculated using GPG:

```
$ gpg --print-md SHA256 downloaded_file
```

The output should be compared with the contents of the SHA256 file. Similarly
for other hashes (SHA512, SHA1, MD5 etc) which may be provided.

Windows 7 and later systems should all now have `certUtil`:

```
$ certUtil -hashfile pathToFileToCheck
```

HashAlgorithm choices: `MD2`, `MD4`, `MD5`, `SHA1`, `SHA256`, `SHA384`, `SHA512`

Unix-like systems (and macOS) will have a utility called `md5`, `md5sum` or `shasum`
