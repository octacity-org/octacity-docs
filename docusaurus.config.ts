import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Octacity Docs',
  tagline: 'Açık kaynak projeler için pratik ve açık fikirli rehber',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://octacity-org.github.io',
  baseUrl: '/octacity-docs/',

  organizationName: 'octacity-org',
  projectName: 'octacity-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/octacity-org/octacity-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Octacity Docs',
      logo: {
        alt: 'Octacity Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Dokümantasyon',
        },
        {
          to: '/docs/baslangic/projeye-nasil-baslanir',
          label: 'Başlangıç',
          position: 'left',
        },
        {
          to: '/docs/github/iyi-issue-nasil-yazilir',
          label: 'GitHub',
          position: 'left',
        },
        {
          to: '/docs/octacity/docs-nasil-kullanilmali',
          label: 'Octacity Hakkında',
          position: 'left',
        },
        {
          href: 'https://github.com/octacity-org/octacity-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Rehberler',
          items: [
            {
              label: 'Başlangıç',
              to: '/docs/baslangic/projeye-nasil-baslanir',
            },
            {
              label: 'GitHub ile Çalışmak',
              to: '/docs/github/iyi-issue-nasil-yazilir',
            },
            {
              label: 'Takım Olarak Çalışmak',
              to: '/docs/takim/ekip-projeye-nasil-baslar',
            },
            {
              label: 'Maintainer Rehberi',
              to: '/docs/maintainer/maintainer-ne-yapar',
            },
          ],
        },
        {
          title: 'Süreçler',
          items: [
            {
              label: 'Açık Kaynak',
              to: '/docs/acik-kaynak/acik-kaynak-ne-demektir',
            },
            {
              label: 'Release ve Proje Sağlığı',
              to: '/docs/release/v01-ne-zaman-cikar',
            },
            {
              label: 'Octacity Docs Kullanımı',
              to: '/docs/octacity/docs-nasil-kullanilmali',
            },
            {
              label: '.github ile Farkı',
              to: '/docs/octacity/github-repo-farki',
            },
          ],
        },
        {
          title: 'Resmi Kaynaklar',
          items: [
            {
              label: 'octacity-org/.github',
              href: 'https://github.com/octacity-org/.github',
            },
            {
              label: 'Octacity GitHub Organizasyonu',
              href: 'https://github.com/octacity-org',
            },
            {
              label: 'Dokümantasyon Deposu',
              href: 'https://github.com/octacity-org/octacity-docs',
            },
          ],
        },
      ],
      copyright: `Octacity Docs bir kurallar kitabı değildir. Pratik bir saha rehberidir. © ${new Date().getFullYear()} Octacity.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
