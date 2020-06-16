import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Code from '~/components/Code'
import Note from '~/components/Note'


const newsletter = (
  <Note>{markdown(components)`
I write content like this every week. You'd like my [Newsletter](https://buttondown.email/arunoda).
  `}</Note>
)

export default WithDoc({
  title: 'Hey Next.js, Is Server Side Rendering Dead?',
  description: 'These days, we discuss a lot about static site generation when it comes to Next.js. So, it server-side rendering dead?',
  image: '',
  slug: 'hey-nextjs-is-server-side-rendering-dead',
  date: 'June 17, 2020',
})(markdown(components)`
If you ask someone about Next.js, they will talk about server-side rendering(SSR) for sure. But recently, we started to talk more about [static site generation](/blog/what-is-nextjs-issg) when it comes to Next.js.

So, is server rendering dead? If so, what I should use Next.js instead of Jekyll and GitHub pages.

You will get your answers at the end of this article.

## History Lesson: SSR & Next.js

Next.js is not the first solution to introduce SSR with React, but it shows an excellent way to fetch data(AKA: \`getInitialProps\`). With that, we could build pages without worrying about how and when to render them.

${
<Code
  title="This is how we used getInitialProps inside a page. But now, Next.js recommends using `getStaticProps` and `getServerSideProps`"
>{`
export default function HomePage({ name }) {
  return (
    <div>
      Hello, {name}
    </div>
  )
}

HomePage.getInitialProps = async function() {
  // Fetch some data from an external API
  return {
    name: "Arunoda Susiripla"
  }
}
`}
</Code>
}

SSR shines when you want to build a dynamic web app with public-facing pages. You can make your apps easily visible to search engines and provides various social media discovery features. (Like Twitter cards, etc.)

It can even help to make the initial page render faster without waiting for JavaScript assets.

## Do we need SSR in 2020?

With SSR, we have to run React on the server. It consumes a lot of resources. If you need to fetch data on the server, it adds latency to your overall page load time.

Now Google can render client-side JavaScript apps. It even prefers to do that instead of just looking at the HTML output. So, for dynamic web apps, SSR is not needed to index inside Google. 

${
  <Image
    alt="This is how Google renders a Next.js web page inside a mobile browser."
    title="This is how Google renders a Next.js web page inside a mobile browser."
    src="/hey-nextjs-is-server-side-rendering-dead/rendering-nextjs-page-inside-google.png"
  />
}

But still, SSR helps to implement various social media features like Twitter cards. For even that, we only need to render the HTML head.

With the recent development of Webpack and Next.js, initial JavaScript assets can be made very small. We can also preload data and cache them locally. Combining those, we can load and render pages very fast inside the client without SSR.

## Let's go All Static

Due to these reasons, we can build apps without using SSR. For example, vercel.com is a fully static web site. That includes marketing web pages and even the dashboard.

Here's how you can do this. It's not that hard.

### 1. Build your public pages as static pages

These public pages could include homepages, various marketing pages, docs, and the blog. Here's such an example:

### 2. Build your dynamic pages with a static shell

A static shell is a page structure without any data. It's a simple static page. Then inside the client, you load data and fill the structure.

${<Note>This is not a new concept at all. This is the basic building block for client-side apps.</Note>}

But now, we can do the initial render very fast without SSR. 

Look at this example. It lists a set of tweets from the public timeline. Try to reload the page and see.

This app [preload data](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) just like any other asset on your website. we can render the data without waiting for a fetch API call.

> There are many optimizations and tricks when it comes to data fetching. I am writing more about these topics in the coming weeks.
> <br/>
> [Subscribe](https://buttondown.email/arunoda) to get them right into your inbox.

## Okay. We no longer need SSR, right?

Hmm. We need SSR, and it's still a major component of Next.js. Let me show you.

### Fallback and Incremental Regeneration needs SSR

With [incremental static regeneration](/blog/what-is-nextjs-issg), but we can generate static pages and update them on-demand in the server. Here we create pages inside the server, and that uses server-side rendering.

### CMS Preview Support

Next.js supports most of the [popular CMS providers](https://nextjs.org/blog/next-9-4#cms-examples) and comes with real-time [preview](https://nextjs.org/blog/next-9-3#preview-mode) support. That's a built-in feature of Next.js and does not need any support from a hosting provider.

To make this possible, it uses server-side rendering.

### Application Shell with Minimum Data

"Application Shell" is an excellent concept. But sometimes, we might need to render a part of the page in the server. It could be the header with user info. In such cases, you need server-side rendering.

### Social Sharing Tools

If you go with the "Application Shell" model and those are public-facing pages, you need to include social sharing metadata for Twitter cards, etc. For that, you need to render those HTML head metadata dynamically.

For that, you need server-side rendering.

# SSR is still awesome

As you have seen, SSR is significant when it comes to Next.js. But it doesn't use SSR in the traditional sense to generate pages all the time. If you think carefully, it gives you these benefits.

## No Vendor Locking

Yes. [Vercel](https://vercel.com/) maintains Next.js, and they are in the hosting business. But non of the cool features on Next.js does not depend on the Vercel platform. Let me give you some examples:

* Incremental builds support is a feature of Next.js
* CMS Preview support is a feature of Next.js

Because of this, you can deploy your Next.js app to any place you like. You can use Vercel if you don't want to worry about hosting and related tasks. Otherwise you can use Netlify, AWS, or run it on your hardware.

This helps third-party vendors too. If you work for a new CMS company, you can get the Next.js preview support by merely writing a starter template. It's something you can do in a few hours.

## You've got the Power

If I say, Next.js is the only way to build a web app. It's a complete lie.

If you need a simple blog and you write occasionally, try using Medium, Wordpress, or even GitHub Pages.
If you are looking to build a demo in a week or so, you might consider Meteor.

But if you want to build a well-planned product, integrate with wide range of APIs, or you need to customize your app as you want, choosing Next.js is the ideal approach.

${newsletter}
`)
