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
        dateFormat: 'MMMM D, YYYY',
        nav: [
            { text: 'About', link: '/' },
            { text: 'Community', link: '/community/' },
            { text: 'Download', link: '/download/' },
            { text: 'Contributors', link: '/contributors/' },
            {
                text: 'Documentation',
                link: '/docs/',
                items: [
                    { text: 'Teaclave', link: '/docs/' },
                    { text: 'Teaclave SGX SDK', link: '/sgx-sdk-docs/' },
                ]
            },
            { text: 'Blog', link: '/blog/' },
            {
                text: 'API Docs',
                items: [
                    { text: 'Teaclave Client SDK (Python)', link: 'https://teaclave.apache.org/api-docs/client-sdk-python/', target: '_self', rel: '' },
                    { text: 'Teaclave SGX SDK', link: 'https://teaclave.apache.org/api-docs/sgx-sdk/', target: '_self', rel: '' },
                    { text: 'Crates in Teaclave (Enclave)', link: 'https://teaclave.apache.org/api-docs/crates-enclave/', target: '_self', rel: '' },
                    { text: 'Crates in Teaclave (App)', link: 'https://teaclave.apache.org/api-docs/crates-app/', target: '_self', rel: '' },
                ]
            },
            {
                text: 'Repository',
                link: 'https://github.com/apache/incubator-teaclave',
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
        sidebar: {
          '/teaclave/':
          [
              {
                  title: 'Try',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave/docs/my-first-function',
                      '/teaclave/docs/functions-in-python',
                      '/teaclave/docs/builtin-functions',
                  ],
              },
              {
                  title: 'Design',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave/docs/threat-model',
                      '/teaclave/docs/mutual-attestation',
                      '/teaclave/docs/access-control',
                      '/teaclave/docs/build-system',
                      '/teaclave/docs/service-internals',
                      '/teaclave/docs/papers-talks',
                  ],
              },
              {
                  title: 'Contribute',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave/docs/development-tips',
                      '/teaclave/docs/rust-guideline',
                  ],
              },
              {
                  title: 'Codebase',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave/attestation/',
                      '/teaclave/binder/',
                      '/teaclave/cli/',
                      '/teaclave/common/',
                      '/teaclave/config/',
                      '/teaclave/crypto/',
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
                      '/teaclave/tool/',
                      '/teaclave/types/',
                      '/teaclave/worker/',
                  ],
              },
          ],
          '/teaclave-sgx-sdk/': [
              {
                  title: 'Security',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave-sgx-sdk/documents/everything-about-cve-2020-5499',
                  ],
              },
          ]
        }
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
                        itemPermalink: '/blog/:year-:month-:day-:slug',
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
