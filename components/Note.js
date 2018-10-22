const Note = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        background-color: #ffffd0;
        padding: 20px;
      }

      div :global(.p) {
        margin: 0;
      }
    `}</style>
  </div>
)

export default Note;