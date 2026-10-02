import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

interface SectionCard {
  title: string;
  description: string;
  link: string;
  count: string;
}

const SECTIONS: SectionCard[] = [
  {
    title: 'Projeye Başlamak',
    description: 'Fikri küçültmek, ilk sürümü tanımlamak ve temiz bir repository kurmak.',
    link: '/docs/baslangic/projeye-nasil-baslanir',
    count: '5 Rehber',
  },
  {
    title: 'GitHub ile Çalışmak',
    description: 'Etkili Issue açmak, işleri parçalamak, iyi PR hazırlamak ve code review yapmak.',
    link: '/docs/github/iyi-issue-nasil-yazilir',
    count: '4 Rehber',
  },
  {
    title: 'Takım Olarak Çalışmak',
    description: 'Küçük ekiplerin bürokrasiye boğulmadan hizalanması, görev sahipliği ve koordinasyon.',
    link: '/docs/takim/ekip-projeye-nasil-baslar',
    count: 'Rehber',
  },
  {
    title: 'Maintainer Olmak',
    description: 'Proje kapsamını korumak, katkıları değerlendirmek ve saygıyla "hayır" diyebilmek.',
    link: '/docs/maintainer/maintainer-ne-yapar',
    count: 'Rehber',
  },
  {
    title: 'Açık Kaynak',
    description: 'Lisanslar, katkı patikaları, topluluk iletişimi ve ilk contributor deneyimi.',
    link: '/docs/acik-kaynak/acik-kaynak-ne-demektir',
    count: 'Rehber',
  },
  {
    title: 'Release ve Proje Sağlığı',
    description: 'v0.1 zamanlaması, versiyonlama, sürüm notları ve teknik borç yönetimi.',
    link: '/docs/release/v01-ne-zaman-cikar',
    count: 'Rehber',
  },
  {
    title: 'Octacity Bağlamı',
    description: 'Octacity Docs\'un kullanım mantığı ve .github ile olan sınırlar.',
    link: '/docs/octacity/docs-nasil-kullanilmali',
    count: '2 Rehber',
  },
];

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>
          Açık kaynak proje geliştirirken &ldquo;bunu nasıl yapmalıyım?&rdquo; sorusuna pratik cevaplar.
        </p>
        <div className={styles.ctaContainer}>
          <Link
            className={`button button--primary button--lg ${styles.ctaButton}`}
            to="/docs/baslangic/projeye-nasil-baslanir">
            Dokümantasyona Başla
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Pratik Açık Kaynak Rehberi"
      description="Açık kaynak proje geliştirirken 'bunu nasıl yapmalıyım?' sorusuna pratik cevaplar.">
      <HomepageHero />
      <main className={styles.sectionsSection}>
        <div className="container">
          <div className={styles.grid}>
            {SECTIONS.map((sec) => (
              <Link key={sec.link} to={sec.link} className={styles.card}>
                <div className={styles.cardHeader}>
                  <Heading as="h3" className={styles.cardTitle}>
                    {sec.title}
                  </Heading>
                  <span className={styles.cardArrow}>→</span>
                </div>
                <p className={styles.cardDescription}>{sec.description}</p>
                <div className={styles.cardFooter}>{sec.count}</div>
              </Link>
            ))}
          </div>

          <div className={styles.manifestoNote}>
            <strong>Not:</strong> Octacity Docs bir kurallar kitabı değildir. Pratik bir saha rehberidir.
          </div>
        </div>
      </main>
    </Layout>
  );
}
