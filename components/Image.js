export default ({ src, width="100%", height, alt, title }) => (
  <div className="container">
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
    {title? (
      <div className="title">
        { title }
      </div>
    ) : null}
    <style jsx>{`
      .container {
        text-align: center;
        max-width: 100%;
        margin: 30px 0;
      }

      img {
        max-width: 100%;
      }

      .title {
        color: #888;
        font-size: 13px;
        line-height: 17px;
        padding: 5px 0;
      }

      .title div {
        margin: 0
      }
    `}</style>
  </div>
)
