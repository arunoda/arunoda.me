import dynamic from 'next/dynamic'
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/github-gist'

// We use dynamic import here to make sure we don't copy this module across pages.
// eslint-disable-next-line
const SyntaxHighlighter: any = dynamic(() => import('react-syntax-highlighter') as any, {
  ssr: false,
  loading: () => (<div style={{ minHeight: '40px' }} />)
})

const customPreStyle = {
  padding: 15,
  fontSize: '90%',
  borderRadius: 3,
  backgroundColor: '#FAFAFA'
}

import styles from './Code.module.css'

export default function Code({ language, wrap, title, children }: any) {
  return (
    <div className={`${styles.code} ${wrap ? styles.codeWrap : ''}`}>
      <SyntaxHighlighter
        language={language}
        style={theme}
        customStyle={customPreStyle}
      >
        {children.trim()}
      </SyntaxHighlighter>
      {title ? (
        <div className={styles.title}>{title}</div>
      ) : null}
    </div>
  )
}
