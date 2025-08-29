// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tekubedo',
  tagline: 'TechBedrock 服务器 Wiki',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://techbedrock.github.io',
  baseUrl: '/Tekubedo/',
  organizationName: 'TechBedrock',
  projectName: 'Tekubedo',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/TechBedrock/Tekubedo/edit/main/',
          routeBasePath: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Tekubedo',
        hideOnScroll: true,
        logo: {
          alt: 'Tekubedo Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            href: 'https://github.com/TechBedrock/Tekubedo',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              { label: '开始旅程', to: '/docs/' },
              { label: '站点地图', to: '/docs/' },
            ],
          },
          {
            title: '社区',
            items: [
              { label: 'QQ群', href: 'https://qm.qq.com/q/rUFqideS1c' },
              { label: '反馈/建议', href: 'https://github.com/TechBedrock/Tekubedo/issues' },
            ],
          },
          {
            title: '相关',
            items: [
              { label: 'TechBedrock Github', href: 'https://github.com/TechBedrock' }
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} TechBedrock. Built with Docusaurus.`,
      },

      // 代码高亮
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'java', 'kotlin', 'yaml'],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'tb_announce',
        content: '🎉 欢迎来到 <b>Tekubedo</b> Wiki！',
        backgroundColor: '#fffbe6',
        textColor: '#7a5a3a',
        isCloseable: true,
      },
    }),
};

export default config;
