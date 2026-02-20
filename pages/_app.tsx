import { useEffect } from 'react'
import Router from 'next/router'
import * as gtag from '~/lib/gtag'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { generateDefaultSeo } from 'next-seo/pages'
import '~/styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview({ url })
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Head>
        {generateDefaultSeo({
          titleTemplate: '%s | Arunoda Susiripala',
          defaultTitle: 'Arunoda Susiripala',
          description: "Arunoda Susiripala's personal website.",
          openGraph: {
            type: 'website',
            locale: 'en_US',
            url: 'https://arunoda.me/',
            siteName: 'Arunoda Susiripala',
          },
          twitter: {
            handle: '@arunoda',
            site: '@arunoda',
            cardType: 'summary_large_image',
          },
        })}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App