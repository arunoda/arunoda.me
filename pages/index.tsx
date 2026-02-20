import Link from 'next/link'
import Head from 'next/head'
import { generateNextSeo as NextSeo } from 'next-seo/pages'
import styles from './index.module.css'

const MainLink = ({ href, as, children, nomargin }: any) => (
  <span className={nomargin ? styles.spanNoMargin : styles.span}>
    {href.startsWith('http') ? (
      <a href={href} className={styles.a}>{children}</a>
    ) : (
      <Link href={href} as={as} legacyBehavior>
        <a className={styles.a}>{children}</a>
      </Link>
    )}
  </span>
)

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Head>
        {NextSeo({
          title: "Arunoda Susiripala",
          description: "Arunoda Susiripala's personal space on the internet."
        })}
      </Head>
      <div>
        <div className={styles.intro}>
          <h1 className={styles.h1}>Arunoda Susiripala</h1>
        </div>
        <div className={styles.ct2}>
          <MainLink href='https://twitter.com/arunoda'>Twitter</MainLink>
          <MainLink href='/blog'>Blog</MainLink>
          <MainLink href='https://github.com/arunoda'>GitHub</MainLink>
          <MainLink href='/live'>Live</MainLink>
        </div>
      </div>
    </div>
  )
}
