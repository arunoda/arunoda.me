import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps (ctx) {
    return Document.getInitialProps(ctx)
  }

  render () {
    return (
     <html>
       <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,600" rel="stylesheet"/>
       </Head>
       <body className="custom_class">
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
