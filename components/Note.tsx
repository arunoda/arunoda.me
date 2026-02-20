const Note = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        background-color: hsl(54deg 100% 93%);
        padding: 20px;
        margin: 30px 0;
        border-radius: 8px;
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
