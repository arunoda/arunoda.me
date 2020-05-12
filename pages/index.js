import Link from 'next/link'

const MainLink = ({ href, as, children }) => (
  <span>
    {href.startsWith('http')? (
      <a>{children}</a>
    ) : (
      <Link href={href} as={as}>
        <a>{children}</a>
      </Link>
    )}
    <style jsx>{`
      span {
        margin-right: 20px;
      }

      a {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        text-decoration: none;
        color: #000;
        font-size: 20px;
      }

      a:hover {
        color: #FFF;
      }
    `}</style>
  </span>
)

export default () => (
  <div className='wrapper'>
    <div className='page'>
      <div id='intro'>
        <h1>Arunoda Susiripala</h1>
      </div>
      <div id='ct2'>
        <MainLink href='https://twitter.com/arunoda'>Twitter</MainLink>
        <MainLink href='/blog'>Blog</MainLink>
        <MainLink href='https://github.com/arunoda'>GitHub</MainLink>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .page {
      }

      #intro {
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      h1 {
        padding: 0;
        margin: 0;
        font-size: 35px;
        font-weight: 400;
        color: #FFF;
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
        
      }
    `}</style>
    <style jsx global>{`
      body {
        background-color: #8BC34A;
      }
    `}</style>
  </div>
)
