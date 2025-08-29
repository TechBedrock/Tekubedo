import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '开始使用',
    to: '/docs/',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        从环境、规则到玩法，一步一步带你进入 <b>TechBedrock</b> 的世界。
        打开文档首页快速上手。
      </>
    ),
  },
  {
    title: '游玩指南',
    to: '/docs/towny-guide/',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        从领略特殊的世界生成, 面对全新的怪物,
        到成为一名合格的镇长, 或是一名优秀的玩家，这里有你需要的所有信息。
      </>
    ),
  },
  {
    title: '参与贡献',
    to: 'https://github.com/TechBedrock/Tekubedo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        欢迎补充与修正文档！提交 <code>Issue/PR</code>，
        或在站内页脚找到反馈入口一起完善 Wiki。
      </>
    ),
  },
];

function Feature({Svg, title, description, to}) {
  const href = useBaseUrl(to); // 适配 baseUrl
  const isExternal = String(to || '').startsWith('http');

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div style={{marginTop: '0.5rem'}}>
          {isExternal ? (
            <a className="button button--secondary button--sm" href={to} target="_blank" rel="noopener noreferrer">
              了解更多 →
            </a>
          ) : (
            <Link className="button button--primary button--sm" to={href}>
              立即前往
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
