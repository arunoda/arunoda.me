import Link from 'next/link'

const MainLink = ({ href, as, children }) => (
  <span>
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
    <style jsx>{`
      span {
        margin-right: 20px;
      }

      a {
        font-family: 'Source Sans Pro', sans-serif;
        text-decoration: none;
        color: #2196F3;
        font-size: 20px;
      }
    `}</style>
  </span>
)

export default () => (
  <div>
    <div id="intro">
      <h1>Arunoda Susiripala</h1>
    </div>
    <div id="ct2">
      <MainLink href="https://twitter.com/arunoda">Twitter</MainLink>
      <MainLink href="/blog">Blog</MainLink>
      <MainLink href="https://github.com/arunoda">GitHub</MainLink>
    </div>
    <style jsx>{`
      #intro {
        margin: 250px 0 0 0;
        text-align: center;
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      h1 {
        padding: 0;
        margin: 0 0 20px 0;
        font-size: 80px;
        font-weight: 400;
        color: #333;
        line-height: 1;
      }

      h2 a:hover {
        border-bottom: 1px solid #2196F3;
      }

      #ct2 {
        text-align: center;
        margin: 20px 0 0 0;
      }

      @media screen and (max-width: 650px) {
        #intro {
          margin: 150px 0 0 0;
        }
      }
    `}</style>
  </div>
)
