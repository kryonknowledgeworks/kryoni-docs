// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kryoni',
  tagline: 'Kryoni Editiorial is cool',
  favicon: 'img/kryoni-fav-icon-mini.jpg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kryonknowledgeworks', // Usually your GitHub org/user name.
  projectName: 'kryoni-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
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
      image: 'img/Kryoni_logo.png',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'https://cdn.kryoni.com/kryoni/images/icons/Kryoni_logo.png',
        },
        items: [
          {to: '/journal-management-system/Introduction/Overview', label: 'JMS', position: 'left'},
          {to: '/job-nest/intro', label: 'Job Nest', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'JMS',
                to: 'https://www.kryoni.com/products/docs/jms',
              },
              {
                label:'Job Nest',
                to:'https://www.kryoni.com/products/job-nest',
              },
              {
                label:'Syream Space',
                to:'https://www.kryoni.com/products/stream-space',
              },
              {
                label:'Plagiarism Checker',
                to:'#',
              },
            ],
          },
          {
            title: 'MAIN LINKS',
            items: [
              {
                label: 'About Us',
                to: 'https://www.kryoni.com/about',
              },
              {
                label:'Why Kryoni',
                to:'https://www.kryoni.com/why-kryoni',
              },
              {
                label:'Learning',
                to:'https://www.kryoni.com/products/docs',
              },
              {
                label:'Support',
                to:'#',
              },
            ],

          },
           {
            title: 'QUICK LINKS',
            items: [
              {
                label: 'Blog',
                to: '#',
              },
              {
                label:'Contact Us',
                to:'#',
              },
              {
                label:'Terms of Use',
                to:'#',
              },
              {
                label:'Privacy Policy',
                to:'#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
