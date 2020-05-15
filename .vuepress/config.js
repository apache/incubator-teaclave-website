module.exports = {
    title: 'Apache Teaclave (incubating)',
    description: 'Apache Teaclave (incubating) is an open source universal secure computing platform, making computation on privacy-sensitive data safe and simple.',
    base: '/',
    themeConfig: {
        search: false,
        nav: [
            { text: 'Documentation', link: '/docs/my-first-function/' },
            { text: 'GitHub', link: 'https://github.com/apache/incubator-teaclave' },
            {
                text: 'Apache Software Foundation',
                ariaLabel: 'Apache Software Foundation',
                items: [
                    { text: 'Apache Homepage', link: 'https://www.apache.org/' },
                    { text: 'License', link: 'https://www.apache.org/licenses/' },
                    { text: 'Sponsorship', link: 'https://www.apache.org/licenses/' },
                    { text: 'Security', link: 'https://www.apache.org/security/' },
                    { text: 'Thanks', link: 'https://www.apache.org/foundation/thanks.html' },
                    { text: 'Current Event', link: 'https://www.apache.org/events/current-event.html' },
                ]
            }
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
