function withHref (el, href) {
  if (!href) {
    return el
  }

  return (
    <a className='href' href={href} target='_blank'>
      {el}
      <style jsx>{`
        a.href{
          border: 0;
        }
      `}</style>
    </a>
  )
}

export default ({ src, width = '100%', height, alt, title, onClick, href }) => (
  <div className='container'>
    {withHref(<img
      src={src}
      width={width}
      height={height}
      alt={alt}
      onClick={onClick}
    />, href)}
    {title ? (
      <div className='title'>
        { title }
      </div>
    ) : null}
    <style jsx>{`
      .container {
        text-align: center;
        max-width: 100%;
        margin: 50px 0;
      }

      img {
        max-width: 100%;
        border-radius: 8px;
      }

      .title {
        color: #888;
        font-size: 13px;
        line-height: 22px;
        padding: 5px 20px;
      }

      .title div {
        margin: 0
      }
    `}</style>
  </div>
)
