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
        color: #000;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
      }

      a:hover {
        color: #FFF;
      }
    `}</style>
  </span>
)

export default ({ children }) => (
  <div>
    <header>
      <MyLink href='/'>Home</MyLink>
      <MyLink href='/blog'>Blog</MyLink>
    </header>
    <article>
      { children }
    </article>
    <style jsx>{`
      header {
        padding: 30px 30px;
        background-color: #8BC34A;
      }

      article {
        padding: 0 30px;
      }
    `}</style>
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
  </div>
)
