module.exports = {
    title: 'Apache Teaclave (incubating)',
    description: 'Apache Teaclave (incubating) is an open source universal secure computing platform, making computation on privacy-sensitive data safe and simple.',
    base: '/',
    themeConfig: {
        search: false,
        nav: [
            { text: 'Documentation', link: '/docs/' },
            { text: 'GitHub', link: 'https://github.com/apache/incubator-teaclave' }
        ],
        sidebar: [
            {
                title: 'Documentation',
                path: '/docs/my-first-function/',
                collapsable: false,
                children: [
                    '/teaclave/docs/my-first-function',
                    '/teaclave/docs/threat-model',
                    '/teaclave/docs/rust-guideline',
                    '/teaclave/docs/mutual-attestation',
                ],
            },
            {
                title: 'Codebase',
                path: '/services/',
                collapsable: false,
                children: [
                    '/teaclave/services/',
                    '/teaclave/config/',
                    '/teaclave/dcap/',
                    '/teaclave/keys/',
                    '/teaclave/docker/',
                ],
            },
        ]
    },
}
