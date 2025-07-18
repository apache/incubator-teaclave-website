// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache Teaclave (incubating)',
  tagline: 'Open-source SDKs to build memory-safe Trusted Applications on Intel SGX, Arm TrustZone, and beyond.',
  favicon: undefined,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://teaclave.apache.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apache', // Usually your GitHub org/user name.
  projectName: 'incubator-teaclave', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'detect',
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      result.frontMatter.slug = result.frontMatter.permalink;
      // Add sidebar for index docs
      const indexDocs = {
        './docs/teaclave-docs/README.md': 'teaclave',
        './docs/teaclave-sgx-sdk/documents/README.md': 'teaclave-sgx-sdk',
        './docs/teaclave-trustzone-sdk/docs/README.md': 'teaclave-trustzone-sdk',
        './docs/teaclave-faas-legacy/docs/README.md': 'teaclave-faas-legacy',
      };
      Object.keys(indexDocs).forEach((key) => {
        if (path.resolve(params.filePath) == path.resolve(key)) {
          result.frontMatter.displayed_sidebar = `${indexDocs[key]}_sidebar`;
        }
      }); 

      return result;
    },
    // Replace autolinks to avoid mdx rendering issues.
    preprocessor: (file) => {
      const autolinks = file.fileContent.match(/<((https?:)|(mailto:))[\S]+>/gi);
      autolinks?.forEach((link) => {
        file.fileContent = file.fileContent.replaceAll(link, `[${link.slice(1, -1)}](${link.slice(1, -1)})`);
      });
      const notices = file.fileContent.match(/^:::([\s\S]+?)^:::$/gm);
      notices?.forEach((n) => {
        const lines = n.split('\n');
        lines[0] = '**' + lines[0].split(' ').slice(2).join(' ') + '** <br/>';
        lines.pop(); // Remove the last line which is `:::`
        file.fileContent = file.fileContent.replaceAll(n, lines.map(i=>'> '+i).join('\n'));
      });
      return file.fileContent;
    },

  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          routeBasePath: '/',
          include: [
            '*.md',
            'api-docs/*.md',
            'blog/*.md',
            'community/*.md',
            'teaclave-docs/**/*.md',
            'teaclave-faas-legacy/**/*.md',
            'teaclave-sgx-sdk/documents/*.md',
            'teaclave-trustzone-sdk/docs/*.md',
          ],
          exclude: [
            'teaclave/sdk/rust/target/*',
            'teaclave-faas-legacy/target/*',
            'teaclave-trustzone-sdk/optee-utee/target/*',
            'teaclave-trustzone-sdk/optee-teec/target/*',
          ]
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: undefined,
        logo: {
          alt: 'Apache Teaclave',
          src: 'img/logo.svg',
          style: {
            height: '5.6rem',
            paddingLeft: '1.6rem',
            position: 'relative',
            top: '-1.8rem',
          }
        },
        items: [
          { to: '/powered-by', label: 'Powered By', position: 'right' },
          {
            to: '/community',
            label: 'Community',
            items: [
              { label: 'Contributing', to: '/contributing' },
              { label: 'Contributors', to: '/contributors' },
              { label: 'Becoming a Member', to: '/becoming-a-member' },
              { label: 'Maturity Assessment', to: '/maturity' },
              { label: 'Release Guide', to: '/release-guide' },
            ],
            position: 'right',
          },
          { to: '/download', label: 'Download', position: 'right' },
          {
            to: '/teaclave-docs',
            label: 'Docs',
            items: [
              { label: 'Teaclave', to: '/teaclave-docs/' },
              { label: 'Teaclave TrustZone SDK', to: '/trustzone-sdk-docs/' },
              { label: 'API Docs: Teaclave TrustZone SDK (Host)', href: 'https://teaclave.apache.org/api-docs/trustzone-sdk/optee_teec', target: '_self', rel: '' },
              { label: 'API Docs: Teaclave TrustZone SDK (TA)', href: 'https://teaclave.apache.org/api-docs/trustzone-sdk/optee_utee', target: '_self', rel: '' },
              { label: 'Teaclave SGX SDK', to: '/sgx-sdk-docs/' },
              { label: 'API Docs: Teaclave SGX SDK', href: 'https://teaclave.apache.org/api-docs/sgx-sdk/', target: '_self', rel: '' },
              { label: 'Teaclave FaaS (legacy)', to: '/docs/' },
            ],
            position: 'right',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            label: 'Repos',
            items: [
              { label: 'Teaclave', href: 'https://github.com/apache/incubator-teaclave' },
              { label: 'Teaclave SGX SDK', href: 'https://github.com/apache/incubator-teaclave-sgx-sdk' },
              { label: 'Teaclave TrustZone SDK', href: 'https://github.com/apache/incubator-teaclave-trustzone-sdk' },
              { label: 'Teaclave Java TEE SDK', href: 'https://github.com/apache/incubator-teaclave-java-tee-sdk' },
              { label: 'Teaclave Website', href: 'https://github.com/apache/incubator-teaclave-website' }
            ],
            position: 'right',
          },
          {
            label: 'ASF',
            items: [
              { label: 'ASF Homepage', href: 'https://www.apache.org/' },
              { label: 'License', href: 'https://www.apache.org/licenses/' },
              { label: 'Sponsorship', href: 'https://www.apache.org/foundation/sponsorship.html' },
              { label: 'Security', href: 'https://www.apache.org/security/' },
              { label: 'Privacy', href: 'https://privacy.apache.org/policies/privacy-policy-public.html' },
              { label: 'Thanks', href: 'https://www.apache.org/foundation/thanks.html' },
              { label: 'Events', href: 'https://www.apache.org/events/current-event.html' },
            ],
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `<div style="font-size:.7rem; text-align:left;">`
          + `Apache Teaclave (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. `
          + `Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. `
          + `While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF. `
          + `Copyright © 2020 The Apache Software Foundation. `
          + `Licensed under the Apache License, Version 2.0. Apache Teaclave, Apache, the Apache feather, and the Apache Teaclave project logo are either trademarks or registered trademarks of the Apache Software Foundation.`
          + `</div>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
