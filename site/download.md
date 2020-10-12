---
permalink: /download
sidebar: false
---
# Download

These source archives are generated from tagged releases.

| Version | Release Date | Source Code               | PGP  | SHA     |
|---------|--------------|---------------------------|------|---------|
| 0.1.0   | 2020-10-09   | [apache-teaclave-0.1.0-incubating.tar.gz](https://downloads.apache.org/incubator/teaclave/0.1.0/apache-teaclave-0.1.0-incubating.tar.gz) | [.asc](https://downloads.apache.org/incubator/teaclave/0.1.0/apache-teaclave-0.1.0-incubating.tar.gz.asc) | [.sha512](https://downloads.apache.org/incubator/teaclave/0.1.0/apache-teaclave-0.1.0-incubating.tar.gz.sha512) |

## Verify Releases

::: tip NOTE
It is essential that you verify the integrity of the downloaded file using the
PGP signature (`.asc` file) or a hash (`.sha512` file). Please read
[Verifying Apache Software Foundation Releases](https://www.apache.org/info/verification.html) for more information on why you should
verify our releases.
:::

The PGP signature can be verified using PGP or GPG. First download the
[KEYS](https://downloads.apache.org/incubator/teaclave/KEYS) as
well as the .asc signature file for the relevant distribution. Make sure you get
these files from the main distribution site, rather than from a mirror. Then
verify the signatures using one of the following alternatives:

```
$ gpg --import KEYS
$ gpg --verify downloaded_file.asc downloaded_file
```

```
$ pgpk -a KEYS
$ pgpv downloaded_file.asc
```

```
$ pgp -ka KEYS
$ pgp downloaded_file.asc
```

You can also verify the hash on the file.

Hashes can be calculated using GPG:

```
$ gpg --print-md SHA512 downloaded_file
```

The output should be compared with the contents of the `.sha512` file.

Windows 7 and later systems should all now have certUtil:

```
$ certUtil -hashfile pathToFileToCheck
```

Unix-like systems (and macOS) will have a utility called `shasum`.
