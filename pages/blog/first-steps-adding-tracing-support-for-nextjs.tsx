import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Note from '~/components/Note'

const subscribe = (
  <Note>{markdown(components)`
👋 I started writing a set of Next.js auth patterns like this. I will publish at least one such pattern every week.

You can [subscribe](https://buttondown.email/arunoda) to my NewsLetter to get them right into your inbox.
  `}</Note>
)


export default WithDoc({
  title: 'First Steps: Adding Tracing Support for Next.js',
  description: "Here are my first steps on adding tracing support for Next.js. With that, we can understand what's happening inside a Next.js app.",
  image: 'https://user-images.githubusercontent.com/50838/91061330-ab599f80-e649-11ea-9115-0a315fd030d0.png',
  slug: 'first-steps-adding-tracing-support-for-nextjs',
  date: 'August 24, 2020'
})(markdown(components)`

${
  <Image
    src="https://user-images.githubusercontent.com/50838/91061330-ab599f80-e649-11ea-9115-0a315fd030d0.png"
    title="How these traces looks like inside a Dashboard"
  />
}

Next.js is a pretty solid framework. You will get very little to none performance-related issues. Unlike a pure static framework, Next.js contains a few places where we run inside the server, just like:

* getServerSideProps - With SSR & fetching data from server
* getStaticProps - When building static pages on-demand in background
* getInitialProps - With SSR pages
* API routes - Accessing data-stores, authentication, etc

Code inside these will run inside a dedicated Node.js server or a lambda. 

> Running things in the server is not a bad thing. That [decision allows](https://arunoda.me/blog/hey-nextjs-is-server-side-rendering-dead) Next.js to add incremental page building support without a dedicated build-service. (Basically, no vendor lock-in)

## Running in the Dark

If you run your app by default, it will work, but you will get very little information about how it runs on the server. If you deploy your app as a custom Node.js server, you can try using existing Node.js based tracing/APM solution. 

But, it will be tough to get information if you run your app inside Lambdas. (AKA: Vercel/Netlify)

## Adding Tracing Support

I don't like running things in the dark. I want to see how my app behaves in production, understand bottlenecks. Then I can plan, act & debug accordingly. 

In the last week, I started adding tracing support to a Next.js app. I even did [two](https://www.youtube.com/watch?v=MD85DMmA4Tc) [Livestreams](https://www.youtube.com/watch?v=iYqlsJ2B1jU) & share what I did. I did it in the userspace without modifying the core. So, I had to do some nasty monkey-patching, but it worked.

With that, I could see:

* How Next.js spends time on getStaticProps, getServerSideProps etc
* Understand the time spend on API routes

Most importantly, I could get a breakdown of the overall response time. (time spend for databases, APIs, etc.)

${
  <Image
    src="https://user-images.githubusercontent.com/50838/91061317-a72d8200-e649-11ea-9967-4b0e1d28fc7f.png"
    title="This is a trace."
  />
}

## Oh, my Serverless!

But things went south, right after I started deploying my app on Vercel. This is not a problem of Vercel or serverless, but the monkey-patching I did, didn't work for serverless.

So, I gave up!

## Not so fast 😅 

Then I thought, it'll be great if I can add tracing support directly into the core & get rid of all these monkey-patching. That's what I'm doing this week.

I will fork Next.js & add the tracing capability to the core. Then I will submit an RFC and get feedback from the core team & the community. I think this is the correct approach.

> 👋 I am doing two live streams on Tuesday & Thursday and sharing updates as I go.

## Limitless Possibilities

Once we have the core tracing support, individual libraries like databases, APIs can track time directly inside their APIs. Then when someone uses those libraries, Next.js sees how these libraries spent time & create a report. (AKA: A trace).

Then users can send these traces into dashboarding services like Honeycomb, Sentry, Datadog & even Google Analytics. In the end, each & every Next.js app runs with full visibility. That's when I can sleep properly.

`)
