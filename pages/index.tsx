import Link from 'next/link'
import Head from 'next/head'
import { generateNextSeo as NextSeo } from 'next-seo/pages'
import styles from './index.module.css'
import posts from '../posts'

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
  const latestPosts = posts.slice(0, 5)

  return (
    <div className={styles.wrapper}>
      <Head>
        {NextSeo({
          title: "Arunoda Susiripala",
          description: "Arunoda Susiripala's personal space on the internet."
        })}
      </Head>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h1 className={styles.h1}>Arunoda Susiripala</h1>
        </div>
        <div className={styles.ct2}>
          <MainLink href='https://twitter.com/arunoda'>Twitter</MainLink>
          <MainLink href='/blog'>Blog</MainLink>
          <MainLink href='https://github.com/arunoda'>GitHub</MainLink>
        </div>
        <div className={styles.latestPosts}>
          <h2 className={styles.latestPostsTitle}>Latest Posts</h2>
          <ul className={styles.latestPostsList}>
            {latestPosts.map((post) => (
              <li key={post.slug} className={styles.postItem}>
                <span className={styles.postDate}>{post.date}</span>
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <a className={styles.postLink}>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.seeAll}>
            <Link href='/blog' legacyBehavior>
              <a className={styles.seeAllLink}>See all posts</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
