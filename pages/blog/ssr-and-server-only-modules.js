import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Code from '~/components/Code'

export default WithDoc({
  title: 'SSR and Server Only Modules',
  description: 'Using server only modules in a SSR enabled app could make your app slower. You need to use them wisely',
  image: 'https://res.cloudinary.com/dsdjlta5b/image/upload/v1498729190/arunoda.me/webpack-analyzer-output-for-a-nextjs-app.png',
  slug: 'ssr-and-server-only-modules',
  date: 'June 29, 2017',
  links: {
    twitter: '',
    facebook: ''
  }
})(markdown(components)`

Recently there was an interesting discussion about [Next.js](https://github.com/zeit/next.js/)'s performance on Twitter.

${
  <Image
    src="https://res.cloudinary.com/dsdjlta5b/image/upload/v1498691479/arunoda.me/Screen_Shot_2017-06-29_at_1.33.42_AM.png"
    width={450}
    title="Screenshot of the tweet without the author info."
  />
}

Basically, it took about a minute to build the app with \`next build\` and the resulting app's bundle was around 1.2 MB.

Technically, this is impossible for a simple [hello world](https://abc-nfedfcfmoe.now.sh/) Next.js app. Here is what a simple hello world app looks like.

${
  <Image
    src="https://res.cloudinary.com/dsdjlta5b/image/upload/v1498729185/arunoda.me/hello-world-nextjs-app-network-tab.png"
    title="A simple Next.js app only contains less than 100 KB of content."
  />
}


Apparently, the mentioned app was using a **server-only** module which caused the issue. That module was only meant to run inside the server, but webpack bundled it.

## Who is to blame?

Actually, this the wrong question. The question should be the following:

**How can we prevent this?**

Before we answer this question, I need to talk a bit more about some basics.

### Webpack and NPM modules

Usually, most of the NPM modules we use in client side web apps can be used in both server and client environments. Rarely, we may use some of the server only modules in the client side too. For example, we do this for most of the crypto-based modules.

So, webpack always tries to bundle all of the NPM modules as much as it possibly can. It also [comes](https://github.com/webpack/node-libs-browser) with a set of NPM modules which implements client side versions of some of the core Node.js modules.

### Server side rendering (SSR)

SSR is pretty interesting and it runs your client side code in the server. Usually, most of the NPM modules we use could work in both environments.

But sometimes, we need to import some NPM modules only to run inside the server.

For an example, when [fetching data](https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle) in
a Next.js app we might use a server only module to fetch data.

Have a look at the following code:

${
  <Code language="js">{`
import React from 'react'
import Link from 'next/link'

export default class Index extends React.Component {
  static getInitialProps ({ req }) {
    if (req) {
      // Runs only in the server
      const faker = require('faker')
      const name = faker.name.findName()
      return { name }
    }

    // Runs only in the client
    return { name: 'Arunoda' }
  }

  render () {
    const { name } = this.props
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome, {name}</p>
        <div>
          <Link href='/about'><a>About Page</a></Link>
        </div>
      </div>
    )
  }
}
    `}</Code>
}

In the above example, our intention is to use \`faker\` module only in the server.

But webpack includes \`faker\` module in client side as well. So, the app's bundle size increases and it takes more time to build.

## How to identify

Frankly, there's no simple way to identify this issue. You need to use a webpack analyzer to visualize what's inside your bundle.

Here's a sample Next.js [app](https://github.com/zeit/next.js/tree/master/examples/with-webpack-bundle-analyzer) which comes with a [webpack analyzer](https://github.com/th0r/webpack-bundle-analyzer).

Download the app and run the following command:

${
  <Code language="bash">{`
npm run analyze
  `}</Code>
}

Then it will open a HTML page in the browser and it'll look like this:

${
  <Image
    src="https://res.cloudinary.com/dsdjlta5b/image/upload/v1498729190/arunoda.me/webpack-analyzer-output-for-a-nextjs-app.png"
  />
}

You can clearly see \`faker\` module is included in the client side bundle of the “index.js” page.

As shown in the above example app, you can configure [webpack-bundle-analyzer](https://github.com/th0r/webpack-bundle-analyzer) with your app and see what's included in your client side bundle(s).

## How to fix it

After you've identified the issue, it's pretty easy to fix it. There are two ways to do this.

### 1. Using Eval

You can require the module inside \`eval\` as mentioned below:

${
  <Code language="js">{`
const faker = eval("require('faker')")
  `}</Code>
}

Webpack can't statically analyze what's inside eval. So it won't bundle the \`faker\` module.

### 2. Using Webpack Ignore plugin

Webpack also has a [plugin](https://webpack.js.org/plugins/ignore-plugin/) where you can ignore modules. Here's how to use it.

Create a file called \`next.config.js\` in your Next.js app and add the webpack IgnorePlugin.

${
  <Code language="js">{`
module.exports = {
  webpack: function (config) {
    config.plugins.push(
      new require('webpack').IgnorePlugin(/faker/)
    )

    return config
  }
}
  `}</Code>
}

> If you are using webpack directly, just use the plugin directly.

## Lack of tools and awareness

This is a problem we face not only with [Next.js](https://github.com/zeit/next.js/), but with any SSR enabled app (including [PWAs](https://developers.google.com/web/progressive-web-apps/)).
Normally, most of the developers are not aware of this issue.

So we need some better tooling to detect this problem other than manually inspecting the bundle.

It'd be great if we could build a webpack plugin to warn users if webpack sees a server-only module.

> If you want to contribute to webpack, this would be a great start.

Until then, all we can do is educate developers with posts like this.

`)
