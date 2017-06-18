import React from 'react'
import Head from 'next/head'
import Layout from '~/components/BlogLayout'
import P from '~/components/P'

export default function WithDoc (options) {
  return function (content) {
    return class BlogPost extends React.Component {
      render () {
        return (
          <Layout>
            <Head>
              <title>{options.title}</title>
              <meta name="description" content={options.description} />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@arunoda" />
              <meta name="twitter:url" content={options.url} />
              <meta name="twitter:title" content={options.title} />
              <meta name="twitter:description" content={options.description} />
              <meta name="twitter:image" content={options.image} />

              <meta name="og:type" content="blog" />
              <meta name="og:site_name" content="Arunoda's Blog" />
              <meta name="og:url" content={options.url} />
              <meta name="og:title" content={options.title} />
              <meta name="og:description" content={options.description} />
              <meta name="og:image" content={options.image} />
            </Head>
            <div className="content">
              <h1>{options.title}</h1>
              <div className="markdown-content">
                {content}
              </div>
            </div>
            <style jsx>{`
              .content {
                margin: 70px auto 0 auto;
                max-width: 600px;
              }

              .content h1 {
                color: #333;
                font-size: 30px;
                margin: 0 0 50px 0;
              }
            `}</style>

            <style jsx global>{`
              .markdown-content {
                color: #333;
                line-height: 24px;
                font-size: 16px;
              }

              .markdown-content hr {
                border: 0;
                border-bottom: 1px solid #DDD;
                margin: 40px 60px;
              }

              .markdown-content a {
                color: #1e88e5;
                text-decoration: none;
                border-bottom: 1px solid #1e88e5;
              }

              .markdown-content li {
                margin: 10px 0;
              }

              .markdown-content h2 {
                font-size: 25px;
                margin: 40px 0 10px 0;
                line-height: 30px;
              }

              .markdown-content h3 {
                font-size: 18px;
                margin: 30px 0 0 0;
                text-transform: uppercase;
                line-height: 22px;
                letter-spacing: 0.5px;

              }
            `}</style>
          </Layout>
        )
      }
    }
  }
}

export const components = {
  p: P
}
