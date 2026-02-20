import Link from 'next/link'
import styles from './BlogLayout.module.css'

const MyLink = ({ href, as, children }: { href: string; as?: string; children: React.ReactNode }) => (
  <span className={styles.span}>
    {href.startsWith('http') ? (
      <a href={href} className={styles.a}>{children}</a>
    ) : (
      <Link href={href} as={as} legacyBehavior>
        <a className={styles.a}>{children}</a>
      </Link>
    )}
  </span>
)

const Subscribe = () => (
  <span className={styles.span}>
    <span className={styles.divider}>|</span>
    <MyLink href='https://buttondown.email/arunoda'>Subscribe</MyLink>
  </span>
)

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className={styles.header}>
        <MyLink href='/'>Home</MyLink>
        <MyLink href='/blog'>Blog</MyLink>
        <Subscribe />
      </header>
      <article className={styles.article}>
        {children}
      </article>
    </div>
  )
}
