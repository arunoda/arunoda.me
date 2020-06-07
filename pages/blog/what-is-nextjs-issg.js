import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Note from '~/components/Note'
import Code from '~/components/Code'
import Question from '~/components/Question'
import Website from '~/components/Website'

const q1 = (
  <Question
    id = "what-is-nextjs-issg-q1"
    question = "Do this multiple times. What was your experience?"
    answers = {[
      "The updated time is the same always",
      "The updated time is changing every time.",
      "I got an error.",
      "The updated time changed around every 20 secs."
    ]}
    correctAnswer = {1}
    points = {30}
    explaination = {markdown(components)`
As you experienced, every time you load the page, the updated time was changed. That's because Next.js is regenerating the page every time you load it.
    `}
  />
)

const q2 = (
  <Question
    id = "what-is-nextjs-issg-q2"
    question = "What is a benefit of SSR?"
    answers = {[
      "Faster builds times",
      "Faster page load times",
      "The only solution for SEO for a React app",
      "Easy to build the app"
    ]}
    correctAnswer = {0}
    points = {30}
    explaination = {markdown(components)`
In the past, SSR really helped with SEO. But nowadays, search engines know how to crawl Single Page Apps. Still, there could be some benefits related to SEO, but there are many other alternatives.

The real advantage of Next.js + SSR is the ability to create dynamic web apps and build them quickly. You don't need to create pages at build time. Next.js can generate them at runtime at will.
    `}
  />
)

const q3 = (
  <Question
    id = "what-is-nextjs-issg-q3"
    question = "Is there any problem(s) with SSR?"
    answers = {[
      "It consumes a lot of server resources",
      "It could slow page load time",
      "It's a waste of resources including DB calls, external API hits",
      "All of the above"
    ]}
    correctAnswer = {3}
    points = {30}
    explaination = {markdown(components)`
Since we generate pages at runtime, it needs to run all the logic for that in the server. Which takes a lot of resources, including CPU, Memory, and external API calls. Which could affect the page load time.

If your pages do not often change (like news articles), regenerating the same page every time is a waste.
    `}
  />
)

const q4 = (
  <Question
    id = "what-is-nextjs-issg-q4"
    question = "Do this multiple times. What was your experience?"
    answers = {[
      "The updated time is the same always",
      "The updated time is changing every time.",
      "I got an error.",
      "The updated time changed around every 20 secs."
    ]}
    correctAnswer = {0}
    points = {30}
    explaination = {markdown(components)`
As you have seen, even if you reload, the page updated time does not change. That's because there's no page generation process in the server. It serves a set of static files.
    `}
  />
)

const q5 = (
  <Question
    id = "what-is-nextjs-issg-q5"
    question = "Is there any problem(s) with SSG?"
    answers = {[
      "If you have more pages, it will take more time to build the app.",
      "If you want to add some new content, you need to rebuild the app.",
      "All of the above.",
      "There is no problem with SSG."
    ]}
    correctAnswer = {2}
    points = {30}
    explaination = {markdown(components)`
With SSG, you need to rebuild your app every time you add new content or change the app itself.
If your app contains more pages, it will take more time to build your app as well.

This sounds fine for a personal blog. But for a news portal like BBC, this is problematic. That's because such an app needs to add new pages every day, and they actively develop the app itself. Which leads to more rebuild times.
    `}
  />
)

const q6 = (
  <Question
    id = "what-is-nextjs-issg-q6"
    question = "What was your experience?"
    answers = {[
      "The updated time does not change",
      "In the first reload, there's no change. Then it changed in the next reload",
      "The updated time is changing always",
      "The updated time is changing every 10 seconds automatically"
    ]}
    correctAnswer = {1}
    points = {30}
    explaination = {markdown(components)`
As you have seen, In the first reload, there's no change. Then it changed in the next reload.

Next.js only changes the updated time when it's generating the page. We can check this time to detect whether a page has regenerated or not.
    `}
  />
)

const q7 = (
  <Question
    id = "what-is-nextjs-issg-q7"
    question = 'Why I asked you to load this "Sri Lanka" page explicitly?'
    answers = {[
      "It's just because I live in SriLanka.",
      "\"Sri Lanka\" page is generated via the fallback, but it doesn't matter",
      "The other two pages are generated at the build time, so it's hard to demonstrate page regeneration.",
      "\"Sri Lanka\" page is generated via the fallback, that's the only way to get iSSG support."
    ]}
    correctAnswer = {2}
    points = {30}
    explaination = {markdown(components)`
"Sri Lanka" page is generated via the fallback. Next.js supports revalidation regardless of whether it's generated at the build time or via the fallback support.

But it's hard to demonstrate iSSG revalidation with a public website since many users can access the same page at the same time. So, one user could trigger the revalidation, and the next user will get the new content.

But for the "Sri Lanka" page, we use a route with a format like \`/news/srilanka-[random-id]\`. With that, we can make sure you will get a new page every time.
    `}
  />
)

const subscribe = (
  <Note>{markdown(components)`
There's more to iSSG and how to build a modern app with Next.js. I am creating more content like this and publish once every week. 

[Subscribe](https://buttondown.email/arunoda) to get these posts right into your inbox.
  `}</Note>
)

export default WithDoc({
  title: 'What is Next.js iSSG?',
  description: "It's a combination of best features from server-side rendering(SSR) and static site generation(SSG).",
  image: '',
  slug: 'what-is-nextjs-issg',
  date: 'June 8, 2020',
  links: {
    twitter: 'https://twitter.com/arunoda'
  }
})(markdown(components)`
Next.js iSSG means "Incremental Static Site Generation." With that, you can build your app as a static web app. But it can also regenerate those static pages at runtime. In a way, it's like putting a static cache in front of your server-side rendered(SSR) app.

${
  <Note>
    So, you get the benefits of both SSR and static site generation(SSG). 
  </Note>
}

Unlike a caching server, this is a built-in feature of Next.js, and you are in full control of how to manage those pages. You can use your existing deployment solution to get the full benefits of iSSG. But if you deploy your app with [Vercel](https://vercel.com), it will be much faster and smoother.

I know you have a lot of questions, let's dive in.

## Server Side Rendering (SSR)

One of the core selling points of Next.js was its ability to build Server Side Rendered apps. With that, you can generate pages at runtime. For example, let's say you are running a news website.

* You create a generic page like \`/news/[slug].js\`. 
* If a user asks for a page like \`/news/covid19\`, Next.js will render it inside the server and send it to the user.
* This process applies even the user asks for the same page again, or it's a different page like \`/news/global-warming\`

Have a look at this example:

${
  <Code>{`
import Link from 'next/link'

export default function NewsPage({slug, updatedAt}) {
    const timeString = new Date(updatedAt).toLocaleTimeString();

    return (
          <div className="container">
            <h1>News: {slug}</h1>
            <p>This is a news about: {slug}</p>
            <div className="meta">
                Updated at <span className="time">{timeString}</span>
            </div>
            <div>
                <Link href="/"><a>Home</a></Link>
            </div>
        </div>
    )
}

NewsPage.getInitialProps = async ({query}) => {
    return {
        slug: query.slug,
        updatedAt: Date.now()
    }
};  
  `}</Code>
}

It's a simple page served via SSR. It contains the time the page has generated. 

([View source code on GitHub](https://github.com/arunoda/nextjs-issg-example/tree/ssr))

Try to follow these steps in the above web site:

* Click the page "Covid 19". 
* Remember the time it was updated. 
* Go back. 
* Come back again.
* Check the time now.

${q1}

Let me ask you some questions.

${q2}
${q3}

## Static Site Generation (SSG)

With the static site generation, we generate pages at build time into static HTML. Then, when a user asks for a page, Next.js can quickly deliver the page. (There's no runtime page generation process.)

After you build the app, you will get a set of HTML files and related assets. Since there's no need for a Node.js server, you have more options to deploy your app.

Here's a Next.js page of a simple news portal app built with SSG:

${
  <Code>{`
import Link from 'next/link'

export default function NewsPage({slug, updatedAt}) {
    const timeString = new Date(updatedAt).toLocaleTimeString();

    return (
          <div className="container">
            <h1>News: {slug}</h1>
            <p>This is a news about: {slug}</p>
            <div className="meta">
                Updated at <span className="time">{timeString}</span>
            </div>
            <div>
                <Link href="/"><a>Home</a></Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {slug: 'covid19'}},
            {params: {slug: 'globalwarming'}},
        ],
        fallback: false
    }
}

export async function getStaticProps({params}) {
    return {
        props: {
            slug: params.slug,
            updatedAt: Date.now()
        }
    }
}
  `}</Code>
}

([View source code on GitHub](https://github.com/arunoda/nextjs-issg-example/tree/ssg))

Try to follow these steps in the above web site:

* Click the page "Covid 19". 
* Remember the time it was updated. 
* Go back. 
* Click "Covid 19" again
* Check the updated time now.

${q4}

With static apps, 

* Users can access pages very quickly
* Server resource usage is much less compared with an SSR app.

${q5}

## Incremental Static Site Generation (iSSG)

As we discussed, SSG apps perform really well at runtime. It saves server resources, and users can access pages very quickly. But it has two main disadvantages:

1. It takes more time to build the app
2. To add new content or update existing, we need to rebuild the app

That's where iSSG is going to help us.

### Fallback Support

Just like in SSG, we can generate a set of pages at the build time. But it can also generate new pages dynamically if needed at runtime. 

Let me give you an example:

* Here's a route for a typical news portal: \`/news/[slug]\`
* We can generate pages via SSG for \`/news/covid19\` and \`/news/global-warming\`
* But it can dynamically(at runtime) create pages for a new slug like \`/news/so-srilanka\`

${
  <Note>
    With this, we don't need to build all the pages at build time. That will reduce the build time.
  </Note>
}

### Page Regeneration

Sometimes pages contain dynamic content, or we need to fix a typo. With page regeneration, Next.js can rebuild these pages dynamically as it gets requests. But unlike SSR, they do not generate on every page request. You can set a timeout called \`unstable_revalidate\` in seconds.

With that, Next.js can regenerate these pages after the timeout in the background. But if there are no requests to a given page, it won't regenerate it.

${
  <Note>With this, we can update pages at runtime, just like in an SSR app.</Note>
}

> As you can see, iSSG is a combination of positive things from SSR and SSG.

Let me show you an example:

${
  <Code>{`
import Link from 'next/link'

export default function NewsPage({slug, updatedAt}) {
    const timeString = new Date(updatedAt).toLocaleTimeString();

    return (
         <div className="container">
            <h1>News: {slug}</h1>
            <p>This is a news about: {slug}</p>
            <div className="meta">
                Updated at <span className="time">{timeString}</span>
            </div>
            <div>
                <Link href="/"><a>Home</a></Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {slug: 'covid19'}},
            {params: {slug: 'globalwarming'}},
        ],
        fallback: true
    }
}

export async function getStaticProps({params}) {
    // You can fetch external data here
    return {
        props: {
            slug: params.slug,
            updatedAt: Date.now()
        },
        unstable_revalidate: 10
    }
}
  `}</Code>
}

([View source code on GitHub](https://github.com/arunoda/nextjs-issg-example))

${
  <Note>Make your attention to <b><code>fallback</code></b> and <b><code>unstable_revalidate</code></b>.</Note>
}

We generated the following two pages in the build time:

* \`/news/covid19\`
* \`/news/globalwarming\`

(We provide this information via the getStaticPaths function)

But it can also generate news pages like \`/news/srilanka\` in the runtime, because we have set \`fallback\` to true. Then we need to write our getStaticProps function to fetch related data in the runtime as well.

> In our example app, we don't fetch any external data. In a real-world app, it'll be your CMS or a database.

${<Website src="https://nextjs-issg-example.now.sh"/>}

Try to follow these steps in the above iSSG web app:

* Click the "Sri Lanka" page
* Wait until it asks you to reload the page
* Remember the updated time
* Reload it again
* Wait for a second and Reload it again

${q6}

This is what's happening behind the scenes:

* In the first reload, Next.js sends you the current version of the page.
* But it starts to rebuild the page in the background. 
* In the next reload, you will get the newly built page.

${
  <Note>Yes, you have to reload the page twice to get the updated version. But if multiple users are accessing the page, it's not problem at all.</Note>
} 

This is very similar to how [stale-while-revalidate](https://tools.ietf.org/html/rfc5861) HTTP header works.
<br/>
(Next.js uses that header too.)

${q7}

Now you have a much better understanding of what Next.js iSSG means and how you can get the real benefit of it.

[Clone this](https://github.com/arunoda/nextjs-issg-example) example repository and play with it.

${subscribe}
`)
