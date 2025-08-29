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

  // 组织 + 项目仓库（GitHub Pages）
  url: 'https://techbedrock.github.io',
  baseUrl: '/Tekubedo/',
  organizationName: 'TechBedrock', // 组织名
  projectName: 'Tekubedo',         // 仓库名
  trailingSlash: false,            // 建议关，避免路径兼容问题

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
          // 把“编辑此页”指向你的仓库（可改为具体分支/路径）
          editUrl: 'https://github.com/TechBedrock/Tekubedo/edit/main/',
          routeBasePath: 'docs', // 文档根路径 /docs
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // 不启用 blog（如后续需要可开启）
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
      // 社交卡片（先用默认图，之后替换）
      image: 'img/docusaurus-social-card.jpg',

      // 颜色模式：默认暗色，更贴合 TechBedrock 风格
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
          // 左侧：文档侧边栏入口
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          // 右侧：外部链接
          {
            href: 'https://github.com/TechBedrock/Tekubedo',
            label: 'GitHub',
            position: 'right',
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
              // 这些是占位链接：后续可替换为你们的实际渠道
              { label: 'QQ群', href: 'https://qm.qq.com/q/rUFqideS1c' },
              { label: '反馈/建议', href: 'https://github.com/TechBedrock/Tekubedo/issues' },
            ],
          },
          {
            title: '相关',
            items: [
              { label: 'TechBedrock Github', href: 'https://github.com/TechBedrock' },
              // {label: '开源许可', to: '/docs/license'}, // 如无此页可暂时移除
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

      // 文档页样式细节
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'tb_announce',
        content: '🎉 欢迎来到 <b>Tekubedo</b> Wiki！',
        backgroundColor: '#fffbe6', // 亮色下的浅黄色背景
        textColor: '#7a5a3a',       // 亮色下的棕色文字
        isCloseable: true,
      },
    }),
};

export default config;
