import { useEffect } from 'react'
import Router from 'next/router'
import * as gtag from '~/lib/gtag'
import type { AppProps } from 'next/app'
import '~/styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview({url})
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default App