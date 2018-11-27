const Note = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        background-color: #ffffd0;
        padding: 20px;
        margin: 30px 0;
      }

      div :global(.p:nth-child(1)) {
        margin-top: 0;
      }

      div :global(.p:nth-child(n)) {
        margin-bottom: 0;
      }
    `}</style>
  </div>
)

export default Note
