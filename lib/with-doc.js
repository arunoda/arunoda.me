/* global ROOT_URL */

import React from 'react'
import Head from 'next/head'
import Layout from '~/components/BlogLayout'
import Link from '~/components/Link'
import P from '~/components/P'
import InlineCode from '~/components/InlineCode'

export default function WithDoc (options) {
  return function (content) {
    return class BlogPost extends React.Component {
      getUrl () {
        return `https://arunoda.me/blog/${options.slug}`
      }

      getTwitterShareLink() {
        const tweet = `${options.title} ${this.getUrl()}`
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
      }

      getFacebookShareLink() {
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.getUrl())}`
      }

      getShareLink (link) {
        return link;
      }

      render () {
        return (
          <Layout>
            <Head>
              <title>{options.title}</title>
              <meta name='description' content={options.description} />

              <meta name='twitter:card' content='summary_large_image' />
              <meta name='twitter:site' content='@arunoda' />
              <meta name='twitter:url' content={this.getUrl()} />
              <meta name='twitter:title' content={options.title} />
              <meta name='twitter:description' content={options.description} />
              <meta name='twitter:image' content={options.image} />

              <meta name='og:type' content='blog' />
              <meta name='og:site_name' content="Arunoda's Blog" />
              <meta name='og:url' content={this.getUrl()} />
              <meta name='og:title' content={options.title} />
              <meta name='og:description' content={options.description} />
              <meta name='og:image' content={options.image} />
            </Head>
            <div className='content'>
              <div className='date'>Published on {options.date}</div>
              <h1>{options.title}</h1>
              <div className='markdown-content'>
                {content}
              </div>
              <div className='social-share'>
                Discuss on
                {' '}
                <a target="_blank" href={this.getTwitterShareLink()}>Twitter</a>
                {', '}
                <a target="_blank" href={this.getFacebookShareLink()}>Facebook</a>
              </div>
              <div className='subscribe'>
                <a href="https://buttondown.email/arunoda">Subscribe to my NewsLetter</a>
              </div>
            </div>
            <style jsx>{`
              .content {
                margin: 50px auto 0 auto;
                max-width: 650px;
              }

              .content h1 {
                color: #333;
                font-size: 30px;
                margin: 0;
              }

              .date {
                color: #888;
                font-size: 13px;
              }

              .markdown-content {
                margin: 50px 0 0 0;
              }

              .social-share {
                border-top: 1px solid #8BC34A;
                padding: 20px 0 0px 0;
                margin: 50px 0 0 0;
              }

              .subscribe {
                padding: 10px 0 20px 0;
                margin: 10px 0 30px 0;
              }

              .social-share a,
              .subscribe a {
                color: #1e88e5;
                text-decoration: none;
                border-bottom: 1px solid #1e88e5;
              }

              .subscribe a {
                font-size: 14px;
              }
            `}</style>

            <style jsx global>{`
              .markdown-content {
                color: #333;
                line-height: 28px;
                font-size: 18px;
              }

              .markdown-content hr {
                border: 0;
                border-bottom: 1px solid #8BC34A;
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

              .markdown-content h1 {
                font-size: 30px;
                margin: 50px 0 30px 0;
                line-height: 40px;
              }

              .markdown-content h2 {
                font-size: 25px;
                margin: 50px 0 10px 0;
                line-height: 30px;
              }

              .markdown-content h3 {
                font-size: 18px;
                margin: 30px 0 0 0;
                text-transform: uppercase;
                line-height: 22px;
                letter-spacing: 0.5px;
              }

              .markdown-content blockquote {
                padding: 1px 0 1px 20px;
                margin: 40px 0;
                border-left: 5px solid #8BC34A;
              }
            `}</style>
          </Layout>
        )
      }
    }
  }
}

export const components = {
  p: P,
  code: InlineCode,
  a: Link
}
