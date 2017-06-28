export default ({ children }) => (
  <span>
    { children }
    <style jsx>{`
      span {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        padding: 2px 5px;
        margin: 0;
        font-size: 85%;
        background-color: #EEE;
        border-radius: 3px;
      }
    `}</style>
  </span>
)
