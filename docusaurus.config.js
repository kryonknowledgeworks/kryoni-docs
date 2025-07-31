// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kryoni Docs",
  // tagline: 'Kryoni Editiorial is cool',
  favicon: "img/kryoni-fav-icon-mini.jpg",

  // Set the production url of your site here
  url: "https://docs.kryoni.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kryonknowledgeworks", // Usually your GitHub org/user name.
  projectName: "kryoni-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // other configurations

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css",
        integrity:
          "sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "script",
      attributes: {
        src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js",
        crossorigin: "anonymous",
        defer: "true",
      },
    },
    {
      tagName: "script",
      attributes: {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
        crossorigin: "anonymous",
        defer: "true",
      },
    },   
    {
      tagName: "script",
      attributes: {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",
        crossorigin: "anonymous",
        defer: "true",
        integrity:"sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q",
      },
    },   
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "description",
          content:
            "Learn how to set up, use, and customize Kryoni with our comprehensive resources and guides for effective editorial management needs.",
        },
        {
          name: "keywords",
          content:
            "Kryoni Docs,Kryoni User Guide,Editorial management solutions,Editorial management setup,Kryoni resource center",
        },
      ],
      // Replace with your project's social card
      announcementBar: {
        id: 'announcement',
        content: 'Announcement: We deliver an integrated, real-time platform that’s cost-effective and accessible to all, helping you streamline your workflow.',
        isCloseable: false,
      },
      // image: "img/Kryoni_logo.png",
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "https://cdn.kryoni.com/kryoni/images/version-1/kryoni-website-logo.webp",
          width:"220px",
          height:"auto",
          href:"/",
          target:"_self",
        },
        // ------------navbar-----------
        items: [
          {
            to: "/journal-management-system/get-started/introduction",
            label: "JMS",
            position: "right",
          },

          // uncommand after adding  jobnest and stream space
          // {to: '/job-nest/intro', label: 'Job Nest', position: 'left'},
          // {to:'/stream-space/intro',label:'Stream Space',position:'right'},

          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://www.kryoni.com/",
            label: "Home",
            position: "right",
            className:"navbar__item navbar__link navbar-home-icon"         
          },
        ],
      },

      // ----------------footer-----------
      footer: {
        style: "light",
        copyright: `Kryoni @ ${new Date().getFullYear()} , All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },   
      zoom: {
          selector: '.markdown :not(em) > img',
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          },   
      },       
    }),   
    plugins: [ require.resolve('docusaurus-plugin-image-zoom') ],
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        ({         
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          indexPages: true,          
        }),
      ]
    ]
};

export default config;