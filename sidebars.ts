import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Başlangıç',
      collapsible: true,
      collapsed: false,
      items: [
        'baslangic/projeye-nasil-baslanir',
        'baslangic/fikri-nasil-kuculturum',
        'baslangic/ilk-surumde-ne-olmali',
        'baslangic/repository-nasil-hazirlanir',
        'baslangic/iyi-readme-nasil-yazilir',
      ],
    },
    {
      type: 'category',
      label: 'GitHub ile Çalışmak',
      collapsible: true,
      collapsed: false,
      items: [
        'github/iyi-issue-nasil-yazilir',
        'github/isi-nasil-parcalarim',
        'github/iyi-pr-nasil-hazirlanir',
        'github/code-review-nasil-yapilir',
      ],
    },
    {
      type: 'category',
      label: 'Takım Olarak Çalışmak',
      collapsible: true,
      collapsed: false,
      items: [
        'takim/ekip-projeye-nasil-baslar',
      ],
    },
    {
      type: 'category',
      label: 'Maintainer Rehberi',
      collapsible: true,
      collapsed: false,
      items: [
        'maintainer/maintainer-ne-yapar',
      ],
    },
    {
      type: 'category',
      label: 'Açık Kaynak',
      collapsible: true,
      collapsed: false,
      items: [
        'acik-kaynak/acik-kaynak-ne-demektir',
      ],
    },
    {
      type: 'category',
      label: 'Release ve Proje Sağlığı',
      collapsible: true,
      collapsed: false,
      items: [
        'release/v01-ne-zaman-cikar',
      ],
    },
    {
      type: 'category',
      label: 'Octacity Bağlamı',
      collapsible: true,
      collapsed: false,
      items: [
        'octacity/docs-nasil-kullanilmali',
        'octacity/github-repo-farki',
      ],
    },
  ],
};

export default sidebars;
