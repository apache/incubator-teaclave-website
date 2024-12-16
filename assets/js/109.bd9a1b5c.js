(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{538:function(e,a,t){"use strict";t.r(a);var r=t(27),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"release-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-guide"}},[e._v("#")]),e._v(" Release Guide")]),e._v(" "),t("p",[e._v("This document guide you through how to prepare and publish an official release.\nReleasing a new version in the community contains multiple steps, here is an\noverview.")]),e._v(" "),t("nav",{staticClass:"table-of-contents"},[t("ol",[t("li",[t("a",{attrs:{href:"#release-guide"}},[e._v(" Release Guide")]),t("ol",[t("li",[t("a",{attrs:{href:"#prepare-the-release-notes"}},[e._v(" Prepare the Release Notes")])]),t("li",[t("a",{attrs:{href:"#prepare-the-gpg-signing-key"}},[e._v(" Prepare the GPG Signing Key")])]),t("li",[t("a",{attrs:{href:"#cut-a-release-candidate"}},[e._v(" Cut a Release Candidate")])]),t("li",[t("a",{attrs:{href:"#create-release-artifacts"}},[e._v(" Create Release Artifacts")])]),t("li",[t("a",{attrs:{href:"#check-the-artifacts"}},[e._v(" Check the Artifacts")])]),t("li",[t("a",{attrs:{href:"#upload-the-release-candidate-artifacts"}},[e._v(" Upload the Release Candidate Artifacts")])]),t("li",[t("a",{attrs:{href:"#publish-the-pre-release-on-github"}},[e._v(" Publish the Pre-Release on GitHub")])]),t("li",[t("a",{attrs:{href:"#call-a-vote-on-the-release-candidate"}},[e._v(" Call a Vote on the Release Candidate")])]),t("li",[t("a",{attrs:{href:"#post-the-release"}},[e._v(" Post the Release")])]),t("li",[t("a",{attrs:{href:"#update-the-website"}},[e._v(" Update the Website")])]),t("li",[t("a",{attrs:{href:"#post-the-announcement"}},[e._v(" Post the Announcement")])])])])])]),t("h2",{attrs:{id:"prepare-the-release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-release-notes"}},[e._v("#")]),e._v(" Prepare the Release Notes")]),e._v(" "),t("p",[e._v("For a new release, you should first prepare the release note. Release note\ncontains summaries of new features, enhancements, bug fixes,\ndocs, known issues, and deprecation, etc. You can see the notes of\n"),t("a",{attrs:{href:"https://github.com/apache/incubator-teaclave/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("past release")]),e._v(" as an example.")]),e._v(" "),t("h2",{attrs:{id:"prepare-the-gpg-signing-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-gpg-signing-key"}},[e._v("#")]),e._v(" Prepare the GPG Signing Key")]),e._v(" "),t("p",[e._v("You can skip this section if you have already uploaded your key. That is, the\nGPG signing key has been added in the following places:")]),e._v(" "),t("ul",[t("li",[e._v("The KEYS file in repo ("),t("a",{attrs:{href:"https://github.com/apache/incubator-teaclave/blob/master/KEYS",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/incubator-teaclave/blob/master/KEYS")]),e._v(")")]),e._v(" "),t("li",[e._v("Apache release dist sever ("),t("a",{attrs:{href:"https://dist.apache.org/repos/dist/release/incubator/teaclave/KEYS",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://dist.apache.org/repos/dist/release/incubator/teaclave/KEYS")]),e._v(")")])]),e._v(" "),t("p",[e._v("If you are the first to publish a release, please follow this instruction to\ngenerating and uplaoding keys.")]),e._v(" "),t("p",[e._v("To generate GPG key, please refer to\n"),t("a",{attrs:{href:"https://www.apache.org/dev/openpgp.html#generate-key",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.apache.org/dev/openpgp.html#generate-key")]),e._v(" for details.")]),e._v(" "),t("p",[e._v("If you want to do the release on another machine, you can transfer your GPG key\nto that machine via the "),t("code",[e._v("gpg --export")]),e._v(" and "),t("code",[e._v("gpg --import")]),e._v(" commands.")]),e._v(" "),t("p",[e._v("The last step is to update the KEYS file with your code signing key. Check in\nthe changes to the main branch of the repository, as well as ASF SVN,")]),e._v(" "),t("p",[e._v("Here is an instruction of editing the KEYS file in the ASF SVN.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# the --depth=files will avoid checkout existing folders\nsvn co --depth=files "https://dist.apache.org/repos/dist/dev/incubator/teaclave" svn-dev-teaclave\ncd svn-dev-teaclave\n# edit KEYS file\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m "Update KEYS"\n# update downloads.apache.org\nsvn rm --username $ASF_USERNAME --password "$ASF_PASSWORD" https://dist.apache.org/repos/dist/release/incubator/teaclave/KEYS -m "Update KEYS"\nsvn cp --username $ASF_USERNAME --password "$ASF_PASSWORD" https://dist.apache.org/repos/dist/dev/incubator/teaclave/KEYS https://dist.apache.org/repos/dist/release/incubator/teaclave/ -m "Update KEYS"\n')])])]),t("h2",{attrs:{id:"cut-a-release-candidate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cut-a-release-candidate"}},[e._v("#")]),e._v(" Cut a Release Candidate")]),e._v(" "),t("p",[e._v("To cut a release candidate, one needs to first cut a branch from the main branch\nusing selected version string. We follow the "),t("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("semantic versioning")]),e._v("\nguidelines for new version string. In short, x.y.z means MAJOR.MINOR.PATCH. Since we\nalready have the release note, we can decide the version string to be released\nbased on the changes.")]),e._v(" "),t("p",[e._v("Note that in our workflow, the main branch should be freezed during the\nreleasing period, i.e, no new features and enhancements can be merged into it.\nOnly changes on this release can be merged and committed into the releasing\nbranch.")]),e._v(" "),t("p",[e._v("For example, to release version 1.0.0, let us first create a new branch\n"),t("code",[e._v("release-v1.0.0")]),e._v(" from the main branch.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/apache/incubator-teaclave\ncd incubator-teaclave\ngit checkout -b release-v1.0.0\n")])])]),t("p",[e._v("The next step is to do a complete version bumping (e.g., changing files which\ncontain versions and bump them from v0.9.0 to v1.0.0). Note that this affect\nmultiple files in different languages. Then, commit the changes to this\nreleasing branch. Other bug fixes and docs improvements can be also commited at\nthis time.")]),e._v(" "),t("p",[e._v('When cleanups are done, make sure all tests can be passed. Then, add a tag with\nthe current commit in the form of "v1.0.0-rc.1" where 1 means it\'s the first\nrelease candidate. You can add the tag using git or add on GitHub.')]),e._v(" "),t("p",[e._v("Using Git:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git tag v1.0.0-rc.1\ngit push origin v1.0.0-rc.1\n")])])]),t("h2",{attrs:{id:"create-release-artifacts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-release-artifacts"}},[e._v("#")]),e._v(" Create Release Artifacts")]),e._v(" "),t("p",[e._v("Create the source code artifacts, including a self-contained tarball without git\nhistory, a signature file signed by keys in the KEYS file, and a sha256 hash\nfile.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('git clone git@github.com:apache/incubator-teaclave.git apache-teaclave-1.0.0-rc.1-incubating\ncd apache-teaclave-1.0.0-rc.1-incubating\ngit checkout v1.0.0-rc.1\nmkdir build && cd build && cmake .. && cd ..    # This will init submodules and apply patches\nrm -rf build\nfind . -name ".git" -print0 | xargs -0 rm -rf   # Remove all .git directories\ncd ..\ntar czvf apache-teaclave-1.0.0-rc.1-incubating.tar.gz apache-teaclave-1.0.0-rc.1-incubating\n')])])]),t("p",[e._v("Use your GPG key to sign the created artifact. First make sure your GPG is set\nto use the correct private key,")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --list-key\n/home/user/.gnupg/pubring.kbx\n------------------------------------\npub   rsa4096 2020-08-17 [SC]\n      154xxx\nuid           [ unknown] XXX (CODE SIGNING KEY) <xxx@apache.org>\nsub   rsa4096 2020-08-17 [E]\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg -u 154xxx --armor --detach-sign apache-teaclave-1.0.0-rc.1-incubating.tar.gz\nsha512sum apache-teaclave-1.0.0-rc.1-incubating.tar.gz > apache-teaclave-1.0.0-rc.1-incubating.tar.gz.sha512\n")])])]),t("p",[e._v("At this point, we got three files in the release artifacts:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("apache-teaclave-1.0.0-rc.1-incubating.tar.gz")]),e._v(": source code tarball")]),e._v(" "),t("li",[t("code",[e._v("apache-teaclave-1.0.0-rc.1-incubating.tar.gz.asc")]),e._v(": signature")]),e._v(" "),t("li",[t("code",[e._v("apache-teaclave-1.0.0-rc.1-incubating.tar.gz.sha512")]),e._v(": SHA512 hash")])]),e._v(" "),t("h2",{attrs:{id:"check-the-artifacts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-the-artifacts"}},[e._v("#")]),e._v(" Check the Artifacts")]),e._v(" "),t("p",[e._v("We suggest to double check the release artifacts, e.g., verify the signature,\nhash value and build from scratch.\nThere is a "),t("a",{attrs:{href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist",target:"_blank",rel:"noopener noreferrer"}},[e._v("checklist")]),e._v(" which can help the process.")]),e._v(" "),t("h2",{attrs:{id:"upload-the-release-candidate-artifacts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-the-release-candidate-artifacts"}},[e._v("#")]),e._v(" Upload the Release Candidate Artifacts")]),e._v(" "),t("p",[e._v("The release artifacts needs to be uploaded to ASF SVN,")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# the --depth=files will avoid checkout existing folders\nsvn co --depth=files "https://dist.apache.org/repos/dist/dev/incubator/teaclave" svn-dev-teaclave\ncd svn-dev-teaclave\nmkdir 1.0.0-rc.1\n# copy files (.tar.gz, .asc, .sha512) into it\nsvn add 1.0.0-rc.1\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m "Add 1.0.0-rc.1"\n')])])]),t("h2",{attrs:{id:"publish-the-pre-release-on-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-the-pre-release-on-github"}},[e._v("#")]),e._v(" Publish the Pre-Release on GitHub")]),e._v(" "),t("p",[e._v('The next step is to publish a pre-release. Go to the GitHub repo\'s "Releases"\ntab and click "Draft a new release".')]),e._v(" "),t("ul",[t("li",[e._v("Choose a tag and select v1.0.0-rc.1.")]),e._v(" "),t("li",[e._v("Copy and paste the release note draft into the description box.")]),e._v(" "),t("li",[e._v('Select "This is a pre-release".')]),e._v(" "),t("li",[e._v("Upload the artifacts created by the previous steps.")]),e._v(" "),t("li",[e._v('Click "Publish release".')])]),e._v(" "),t("h2",{attrs:{id:"call-a-vote-on-the-release-candidate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call-a-vote-on-the-release-candidate"}},[e._v("#")]),e._v(" Call a Vote on the Release Candidate")]),e._v(" "),t("p",[e._v("There are two votes need to be done for releasing a incubating project.\nThe first vote takes place on the Apache Teaclave developers list\n("),t("code",[e._v("dev@teaclave.apache.org")]),e._v("). Once it is closed with pass, we can call for the\nsecond in the Apache Incubator general list\n("),t("code",[e._v("general@incubator.apache.org")]),e._v("). Look at past voting threads to see how this\nproceeds. The email should contains these information.")]),e._v(" "),t("ul",[t("li",[e._v("Provide the link to the draft of the release notes in the email")]),e._v(" "),t("li",[e._v("Provide the link to the release candidate artifacts")]),e._v(" "),t("li",[e._v("Make sure the email is in text format and the links are correct")])]),e._v(" "),t("p",[e._v("For the dev@ vote, there must be at least 3 binding +1 votes and more +1 votes\nthan -1 votes. Once the vote is done, you should also send out a summary email\nwith the totals, with a subject that looks something like "),t("code",[e._v("[VOTE][RESULT]")]),e._v(".")]),e._v(" "),t("p",[e._v("In ASF, votes are open at least 72hrs (3 days). If you don't get enough number\nof binding votes within that time, you cannot close the voting deadline. You\nneed to extend it.")]),e._v(" "),t("p",[e._v("If the voting fails, the community needs to modified the release accordingly,\ncreate a new release candidate and re-run the voting process.")]),e._v(" "),t("p",[e._v("Here are some examples:")]),e._v(" "),t("p",[t("strong",[e._v("Vote in the dev@teaclave list")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("subject: [VOTE] Release Apache Teaclave (incubating) v0.3.0-rc.1")]),e._v(" "),t("li",[e._v("to: dev@teaclave.apache.org")]),e._v(" "),t("li",[e._v("link: "),t("a",{attrs:{href:"https://lists.apache.org/thread/9dzwv0y9l9qf9hol2rpwv85ns1xfgn7k",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lists.apache.org/thread/9dzwv0y9l9qf9hol2rpwv85ns1xfgn7k")])])]),e._v(" "),t("p",[t("strong",[e._v("Result in the dev@teaclave list")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("subject: [RESULT][VOTE] Release Apache Teaclave (incubating) v0.3.0-rc.1")]),e._v(" "),t("li",[e._v("to: dev@teaclave.apache.org")]),e._v(" "),t("li",[e._v("link: "),t("a",{attrs:{href:"https://lists.apache.org/thread/tyqhx2m9q0z1qg7dbxczf58nnpvxfzrn",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lists.apache.org/thread/tyqhx2m9q0z1qg7dbxczf58nnpvxfzrn")])])]),e._v(" "),t("p",[t("strong",[e._v("Vote in the general@incubator list")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("subject: [VOTE] Release Apache Teaclave (incubating) v0.3.0-rc.1")]),e._v(" "),t("li",[e._v("to: general@incubator.apache.org")]),e._v(" "),t("li",[e._v("link: "),t("a",{attrs:{href:"https://lists.apache.org/thread/mrwl41shgx60p432mw2lc6zcdw1lk6lk",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lists.apache.org/thread/mrwl41shgx60p432mw2lc6zcdw1lk6lk")])])]),e._v(" "),t("p",[t("strong",[e._v("Result in the general@incubator list")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("subject: [RESULT][VOTE] Release Apache Teaclave (incubating) v0.3.0-rc.1")]),e._v(" "),t("li",[e._v("to: general@teaclave.apache.org")]),e._v(" "),t("li",[e._v("link: "),t("a",{attrs:{href:"https://lists.apache.org/thread/gbv3f7l9bf6t1876byqm1v4stsw7g00z",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lists.apache.org/thread/gbv3f7l9bf6t1876byqm1v4stsw7g00z")])])]),e._v(" "),t("h2",{attrs:{id:"post-the-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-the-release"}},[e._v("#")]),e._v(" Post the Release")]),e._v(" "),t("p",[e._v("After the vote passes, we need to crate the final release artifacts:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('cd svn-dev-teaclave\nmkdir 1.0.0\n# copy RC files (.tar.gz, .asc, .sha512) into it and rename them\ncp 1.0.0-rc.1/apache-teaclave-1.0.0-rc.1-incubating.tar.gz 1.0.0/apache-teaclave-1.0.0-incubating.tar.gz\ncp 1.0.0-rc.1/apache-teaclave-1.0.0-rc.1-incubating.tar.gz.asc 1.0.0/apache-teaclave-1.0.0-incubating.tar.gz.asc\ncp 1.0.0-rc.1/apache-teaclave-1.0.0-rc.1-incubating.tar.gz.sha512 1.0.0/apache-teaclave-1.0.0-incubating.tar.gz.sha512\n# edit the file name (i.e., remove the rc version) in the sha512 file\nvi 1.0.0/apache-teaclave-1.0.0-incubating.tar.gz.sha512\nsvn add 1.0.0\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m "Add 1.0.0"\n')])])]),t("p",[e._v("To upload the binaries to Apache mirrors, you copy the binaries from the dev\ndirectory (this should be where they are voted) to the dist directory.\nThese artifacts will be automatically propagated to the CDN service.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('export SVN_EDITOR=vim\nsvn cp https://dist.apache.org/repos/dist/dev/incubator/teaclave/1.0.0 https://dist.apache.org/repos/dist/release/incubator/teaclave/1.0.0\n\n# If you\'ve added your signing key to the KEYS file, also update the release copy.\nsvn co --depth=files "https://dist.apache.org/repos/dist/release/incubator/teaclave" svn-dist-teaclave\ncurl "https://dist.apache.org/repos/dist/dev/incubator/teaclave/KEYS" > svn-dist-teaclave/KEYS\n(cd svn-dist-teaclave && svn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m "Update KEYS")\n')])])]),t("p",[e._v("Merge commits in the release branch to the main branch, create a new release tag\n(v1.0.0 in this case) on Github and remove the pre-release candidate tag.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git checkout master\n## merge the release branch and use --ff-only to ensure the commit hash for voting is also in the master branch\ngit merge release-v1.0.0 --ff-only\ngit tag v1.0.0\ngit push origin v1.0.0\ngit push --delete origin v1.0.0-rc.1\ngit push --delete origin release-v1.0.0\n")])])]),t("p",[e._v("At last update the release notes and corresponding artifacts on GitHub.")]),e._v(" "),t("h2",{attrs:{id:"update-the-website"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-the-website"}},[e._v("#")]),e._v(" Update the Website")]),e._v(" "),t("p",[e._v("The website repository is located at "),t("a",{attrs:{href:"https://github.com/apache/incubator-teaclave-website",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/incubator-teaclave-website")]),e._v(".\nModify the download page to include the release artifacts as well as the GPG\nsignature and SHA hash. Note that only put the latest version in the download page.\nOlder releases are archived in the archive site automatically\n("),t("a",{attrs:{href:"https://archive.apache.org/dist/incubator/teaclave/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://archive.apache.org/dist/incubator/teaclave/")]),e._v(").")]),e._v(" "),t("p",[e._v("Note that the links to the release artifact should start with\n"),t("code",[e._v("https://dlcdn.apache.org/incubator/teaclave")]),e._v(" to better utilize the\nApache CND. You can refer to the previous release link.")]),e._v(" "),t("h2",{attrs:{id:"post-the-announcement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-the-announcement"}},[e._v("#")]),e._v(" Post the Announcement")]),e._v(" "),t("p",[e._v("Post new version release annoucement to the mailing list, blog and other\nchannels (Twitter, Discord, etc.).")]),e._v(" "),t("p",[t("strong",[e._v("Mailing list example")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("subject: [ANNOUNCE] Apache Teaclave (incubating) 0.3.0 released")]),e._v(" "),t("li",[e._v("to: announce@apache.org, dev@teaclave.apache.org")]),e._v(" "),t("li",[e._v("link: "),t("a",{attrs:{href:"https://lists.apache.org/thread/frck6z5v135f8c7w64nkgqk86w1soqc7",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lists.apache.org/thread/frck6z5v135f8c7w64nkgqk86w1soqc7")])])]),e._v(" "),t("p",[t("strong",[e._v("Blog example")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("title: Announcing Apache Teaclave (incubating) 0.3.0")]),e._v(" "),t("li",[e._v("link: "),t("a",{attrs:{href:"https://teaclave.apache.org/blog/2021-10-01-announcing-teaclave-0-3-0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://teaclave.apache.org/blog/2021-10-01-announcing-teaclave-0-3-0/")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);