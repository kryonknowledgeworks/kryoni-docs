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
        // ------------navbar-----------
        items: [
          {to: '/journal-management-system/Introduction/Overview', label: 'JMS', position: 'left'},

          // uncommand after adding  jobnest and stream space
          // {to: '/job-nest/intro', label: 'Job Nest', position: 'left'},
          // {to:'/stream-space/intro',label:'Stream Space',position:'left'},

          {to: '/blog', label: 'Blog', position: 'left'},
          {href:'https://www.kryoni.com/',label:'Go To Kryoni Website', position:'right'}
        ],
      },
      
      // ----------------footer-----------
      footer: {
        style: 'light',     
        links: [
          {
          items: [ 
          {
            html: `
               <div class="kryonilogofooter">
                  <a href="https://www.kryoni.com/" target="_blank" rel="noreferrer noopener" aria-label="Kryoni Logo">
                    <img src="https://cdn.kryoni.com/kryoni/images/icons/footer-logo.png" alt="Kryoni Logo" width="200" height="60" />
                  </a>
                  <p>  Our unique suite of software solutions is designed to meet all your publishing needs. </p>
                  <div class="social-icons">
                    <a href="https://x.com/Kryoni_"><img src="https://cdn.kryoni.com/kryoni/images/icons/logo-twitter.png" alt="x"></a>
                    <a href="https://www.facebook.com/profile.php?id=61557829957560"><img src="https://cdn.kryoni.com/kryoni/images/icons/logo-facebook.png" alt="fb"></a>
                    <a href="https://www.instagram.com/kryoni_/"><img src="https://cdn.kryoni.com/kryoni/images/icons/logo-instagram.png" alt="instagram"></a>
                    <a href="https://www.linkedin.com/company/kryoni/"><img src="https://cdn.kryoni.com/kryoni/images/icons/logo-linkedin.png" alt="linkedin"></a>
                  </div>
                </div>
              `,
          } ] },
          {
            title: 'PRODUCTS',
            items: [ 
              {
                label: 'JMS',
                href: 'https://www.kryoni.com/products/docs/jms',
              },
              {
                label:'Job Nest',
                href:'https://www.kryoni.com/products/job-nest',
              },
              {
                label:'Stream Space',
                href:'https://www.kryoni.com/products/stream-space',
              },
              {
                label:'Plagiarism Checker',
                href:'#',
              },
            ],
          },
          {
            title: 'MAIN LINKS',
            items: [
              {
                label: 'About Us',
                href: 'https://www.kryoni.com/about',
              },
              {
                label:'Why Kryoni',
                href:'https://www.kryoni.com/why-kryoni',
              },
              {
                label:'Learning',
                href:'https://www.kryoni.com/products/docs',
              },
              {
                label:'Support',
                href:'#',
              },
            ],

          },
           {
            title: 'QUICK LINKS',
            items: [
              {
                label: 'Blog',
                href: '#',
              },
              {
                label:'Contact Us',
                href:'#',
              },
              {
                label:'Terms of Use',
                href:'#',
              },
              {
                label:'Privacy Policy',
                href:'#',
              },
            ],
          },
          {
            items: [ 
            {
              html: `
                 <div class="col-5 px-0 footer-links">
                    <h4>Newsletter</h4>
                    <form action="#" class="popup-form d-flex">
                      <input type="email" class="popup-form-input" placeholder="Enter Email" required="">
                      <button class="popup-form-submit"> Subscribe</button>
                    </form>
                  </div>
                `,
            } ] },
        ],
        copyright: `Kryoni @ ${new Date().getFullYear()} , All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
