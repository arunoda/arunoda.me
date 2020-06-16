import dynamic from 'next/dynamic'
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/github-gist'

// We use dynamic import here to make sure we don't copy this module across pages.
// eslint-disable-next-line
const SyntaxHighlighter = dynamic(import('react-syntax-highlighter'), { // eslint-disable-line no-use-before-define
  loading: () => (<div />)
})

const customPreStyle = {
  padding: 15,
  fontSize: '90%',
  borderRadius: 3,
  backgroundColor: '#FAFAFA'
}

export default ({ language, wrap, title, children }) => (
  <div className='code'>
    <SyntaxHighlighter
      language={language}
      style={theme}
      customStyle={customPreStyle}
    >
      { children.trim() }
    </SyntaxHighlighter>
    {title? (
      <div className="title">{title}</div>
    ) : null}
    <style jsx>{`
      .code {
        margin: 30px 0;
      }

      .code :global(pre) {
        ${wrap ? 'white-space: normal' : ''};
      }

      .title {
        text-align: center;
        color: #888;
        font-size: 13px;
        line-height: 22px;
        padding: 5px 20px;
      }
    `}</style>
  </div>
)
