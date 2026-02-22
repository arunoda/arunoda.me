export default ({ children }) => (
  <div className='p'>
    {children}
    <style jsx>{`
      .p {
        margin: 15px 0;
      }
    `}</style>
  </div>
)
