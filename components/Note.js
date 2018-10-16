const Note = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        background-color: #ffffd0;
        padding: 20px;
      }
    `}</style>
  </div>
)

export default Note;