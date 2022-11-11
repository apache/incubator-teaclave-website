const path = require("path");

module.exports = {
    title: 'Apache Teaclave (incubating)',
    description: 'Apache Teaclave (incubating) is an open source universal secure computing platform, making computation on privacy-sensitive data safe and simple.',
    base: '/',
    patterns: [
        '*.md',
        'api-docs/*.md',
        'blog/*.md',
        'teaclave/**/*.md',
        'teaclave-sgx-sdk/documents/*.md',
        'teaclave-trustzone-sdk/docs',
        '!teaclave/sdk/rust/target/**',
        '!node_modules/**',
        '!teaclave-trustzone-sdk/optee-utee/target/**',
        '!teaclave-trustzone-sdk/optee-teec/target/**',
    ],
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cutive+Mono|Roboto:100,300,400,500,700,900|Roboto+Condensed:300,400|Noto+Sans+SC:400,500,700,900' }],
        ['script', { src: 'https://use.fontawesome.com/releases/v5.15.0/js/all.js' } ],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, '../assets')
            }
        }
    },
    themeConfig: {
        search: false,
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        twitter: '@ApacheTeaclave',
        domain: 'https://teaclave.apache.org',
        dateFormat: 'MMMM D, YYYY',
        nav: [
            { text: 'ABOUT', link: '/' },
            { text: 'POWERED BY', link: '/powered-by/' },
            { text: 'COMMUNITY', link: '/community/' },
            { text: 'DOWNLOAD', link: '/download/' },
            { text: 'CONTRIBUTORS', link: '/contributors/' },
            {
                text: 'DOCS',
                link: '/docs/',
                items: [
                    { text: 'Teaclave', link: '/docs/' },
                    { text: 'Teaclave SGX SDK', link: '/sgx-sdk-docs/' },
                    { text: 'Teaclave TrustZone SDK', link: '/trustzone-sdk-docs/' },
                    {
                        text: 'APIS',
                        items: [
                            { text: 'Teaclave Client SDK (Rust)', link: 'https://teaclave.apache.org/api-docs/client-sdk-rust/', target: '_self', rel: '' },
                            { text: 'Teaclave Client SDK (Python)', link: 'https://teaclave.apache.org/api-docs/client-sdk-python/', target: '_self', rel: '' },
                            { text: 'Teaclave SGX SDK', link: 'https://teaclave.apache.org/api-docs/sgx-sdk/', target: '_self', rel: '' },
                            { text: 'Teaclave TrustZone SDK (Host)', link: 'https://teaclave.apache.org/api-docs/trustzone-sdk/optee-teec', target: '_self', rel: '' },
                            { text: 'Teaclave TrustZone SDK (TA)', link: 'https://teaclave.apache.org/api-docs/trustzone-sdk/optee-utee', target: '_self', rel: '' },
                            { text: 'Crates in Teaclave (Enclave)', link: 'https://teaclave.apache.org/api-docs/crates-enclave/', target: '_self', rel: '' },
                            { text: 'Crates in Teaclave (App)', link: 'https://teaclave.apache.org/api-docs/crates-app/', target: '_self', rel: '' },
                        ]
                    },
                ]
            },
            { text: 'BLOG', link: '/blog/' },
            {
                text: 'REPOS',
                link: 'https://github.com/apache/incubator-teaclave',
                items: [
                    { text: 'Teaclave', link: 'https://github.com/apache/incubator-teaclave'},
                    { text: 'Teaclave SGX SDK', link: 'https://github.com/apache/incubator-teaclave-sgx-sdk'},
                    { text: 'Teaclave TrustZone SDK', link: 'https://github.com/apache/incubator-teaclave-trustzone-sdk'},
                    { text: 'Teaclave Java TEE SDK', link: 'https://github.com/apache/incubator-teaclave-java-tee-sdk'},
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
                      '/teaclave/docs/azure-confidential-computing',
                      '/teaclave/docs/executing-wasm',
                      '/teaclave/docs/inference-with-tvm',
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
                      '/teaclave/docs/adding-executors',
                      '/teaclave/docs/papers-talks',
                  ],
              },
              {
                  title: 'Contribute',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave/docs/release-guide',
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
                  title: 'Development',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave-sgx-sdk/documents/environment-setup',
                      '/teaclave-sgx-sdk/documents/is_x86_feature_detected-in-sgx-sdk',
                      '/teaclave-sgx-sdk/documents/developing-with-vscode',
                      '/teaclave-sgx-sdk/documents/debugging-a-local-rust-sgx-enclave-in-docker-with-sgx-gdb',
                      '/teaclave-sgx-sdk/documents/public-cloud-for-rust-sgx-development',
                  ],
              },
              {
                  title: 'Tutorial',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave-sgx-sdk/documents/sgxtime',
                      '/teaclave-sgx-sdk/documents/performance-optimization-tips',
                  ],
              },
              {
                  title: 'Security',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave-sgx-sdk/documents/everything-about-cve-2020-5499',
                      '/teaclave-sgx-sdk/documents/mitigation-of-intel-sa-00219-in-rust-sgx',
                  ],
              },
          ],
          '/teaclave-trustzone-sdk/': [
              {
                  title: 'Development',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                      '/teaclave-trustzone-sdk/docs/overview-of-optee-rust-examples',
                      '/teaclave-trustzone-sdk/docs/debugging-optee-ta',
                  ],
              },
          ]
        }
    },
    plugins: [
        '@vuepress/medium-zoom',
        '@vuepress/plugin-back-to-top',
        [
            'feed',
            {
                canonical_base: 'https://teaclave.apache.org',
            }
        ],
        [
            'sitemap',
            {
                hostname: 'https://teaclave.apache.org'
            }
        ],
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        id: 'blog',
                        dirname: 'blog',
                        path: '/blog/',
                        layout: 'IndexPost',
                        pagination: {
                            lengthPerPage: 100,
                        },
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
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-192555999-1'
            }
        ]
    ],
    markdown: {
        extendMarkdown(md) {
            md.use(require('markdown-it-toc-done-right'))
            md.use(require('markdown-it-footnote'))
        }
    },
    chainMarkdown(config) {
        const { PLUGINS } = require('@vuepress/markdown')
        const originalLinkPlugin = require('@vuepress/markdown/lib/link.js');

        config
            .plugins
            .delete(PLUGINS.CONVERT_ROUTER_LINK)

        const linkPlugin = function (md) {
            const result = originalLinkPlugin.apply(this, arguments);
            const close = md.renderer.rules.link_close;
            md.renderer.rules.link_close = function() {
                return close.apply(this, arguments).replace('<OutboundLink/>', '');
            }
            return result;
        };

        config
            .plugin(PLUGINS.CONVERT_ROUTER_LINK)
            .use(linkPlugin, [{
                // The config.markdown.externalLinks options https://vuepress.vuejs.org/config/#markdown-externallinks
                target: '_blank',
                rel: 'noopener noreferrer'
            }])
    },
}
