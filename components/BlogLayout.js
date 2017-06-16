import Link from 'next/link'

const MyLink = ({ href, as, children }) => (
  <span>
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
    <style jsx>{`
      span {
        margin-right: 20px;
      }

      a {
        color: #0288D1;
        text-decoration: none;
        font-size: 15px;
      }

      a:hover {
        opacity: 0.7;
      }
    `}</style>
  </span>
)

export default ({ children }) => (
  <div>
    <header>
      <MyLink href="/">Home</MyLink>
      <MyLink href="/blog">Blog</MyLink>
    </header>
    <article>
      { children }
    </article>
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        margin: 10px 0;
        padding: 30px;
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
  </div>
)
