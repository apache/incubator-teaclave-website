module.exports = {
    title: 'Apache Teaclave (Incubating)',
    description: 'Apache Teaclave (incubating) is an open source universal secure computing platform, making computation on privacy-sensitive data safe and simple.',
    base: '/',
    themeConfig: {
        search: true,
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        twitter: '@ApacheTeaclave',
        domain: 'https://teaclave.apache.org',
        nav: [
            { text: 'About', link: '/' },
            { text: 'Community', link: '/community/' },
            { text: 'Contributors', link: '/contributors/' },
            { text: 'Documentation', link: '/docs/my-first-function/' },
            { text: 'SGX SDK', link: 'https://teaclave.apache.org/docs/sgx-sdk/', target: '_self', rel: '' },
            { text: 'Blog', link: '/blog/' },
            {
                text: 'Repository',
                items: [
                    { text: 'Teaclave', link: 'https://github.com/apache/incubator-teaclave'},
                    { text: 'Teaclave SGX SDK', link: 'https://github.com/apache/incubator-teaclave-sgx-sdk'},
                    { text: 'Teaclave Website', link: 'https://github.com/apache/incubator-teaclave-website'},
                ]
            },
            {
                text: 'ASF',
                ariaLabel: 'Apache Software Foundation',
                items: [
                    { text: 'ASF Homepage', link: 'https://www.apache.org/' },
                    { text: 'License', link: 'https://www.apache.org/licenses/' },
                    { text: 'Sponsorship', link: 'https://www.apache.org/foundation/sponsorship.html' },
                    { text: 'Security', link: 'https://www.apache.org/security/' },
                    { text: 'Thanks', link: 'https://www.apache.org/foundation/thanks.html' },
                    { text: 'Current Event', link: 'https://www.apache.org/events/current-event.html' },
                ]
            }
        ],
        sidebar: [
            {
                title: 'Try Teaclave',
                collapsable: false,
                children: [
                    '/teaclave/docs/my-first-function',
                ],
            },
            {
                title: 'Design',
                collapsable: false,
                children: [
                    '/teaclave/docs/threat-model',
                    '/teaclave/docs/rust-guideline',
                    '/teaclave/docs/mutual-attestation',
                    '/teaclave/docs/access-control',
                    '/teaclave/docs/build-system',
                ],
            },
            {
                title: 'Codebase',
                collapsable: false,
                children: [
                    '/teaclave/attestation/',
                    '/teaclave/cli/',
                    '/teaclave/config/',
                    '/teaclave/dcap/',
                    '/teaclave/docker/',
                    '/teaclave/examples/',
                    '/teaclave/executor/',
                    '/teaclave/file_agent/',
                    '/teaclave/function/',
                    '/teaclave/keys/',
                    '/teaclave/rpc/',
                    '/teaclave/runtime/',
                    '/teaclave/sdk/',
                    '/teaclave/services/',
                    '/teaclave/tests/',
                    '/teaclave/third_party/',
                    '/teaclave/worker/',
                ],
            },
        ]
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        id: 'blog',
                        dirname: 'blog',
                        path: '/blog/',
                        layout: 'IndexPost',
                        itemPermalink: '/blog/:year/:month/:day/:slug',
                    },
                ],
            },
        ],
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
        [
            'seo',
            {
                customMeta: (add, context) => {

                    const {
                        $site, // Site configs provided by Vuepress
                        $page, // Page configs provided by Vuepress

                        // All the computed options from above:
                        siteTitle, title, description, author, tags,
                        twitterCard, type, url, image, publishedAt, modifiedAt,
                    } = context;

                    add('twitter:site', $site.themeConfig.twitter);
                },
            }
        ],
    ],
}
