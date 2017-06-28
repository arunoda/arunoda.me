import dynamic from 'next/dynamic'
import theme from 'react-syntax-highlighter/dist/styles/github-gist'

// We use dynamic import here to make sure we don't copy this module across pages.
const SyntaxHighlighter = dynamic(import('react-syntax-highlighter'), {
  loading: () => (<div></div>)
})

const customPreStyle = {
  padding: 15,
  fontSize: "90%",
  borderRadius: 3,
  backgroundColor: "#FAFAFA"
}

export default ({ language, children }) => (
  <div className="code">
    <SyntaxHighlighter
      language={language}
      style={theme}
      customStyle={customPreStyle}
    >
      { children.trim() }
    </SyntaxHighlighter>
    <style jsx>{`
      .code {
        margin: 30px 0;
      }
    `}</style>
  </div>
)
