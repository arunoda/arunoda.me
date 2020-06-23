import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Note from '~/components/Note'

const subscribe = (
  <Note>{markdown(components)`
  I'm working on a set of tutorials related to these optimizations. If you like to preview them, [subscribe](https://buttondown.email/arunoda?special=1) to my Newsletter.
  `}</Note>
)

const veryBadAppImage = (
  <Image
    src="/lighthouse-syndrome/very-bad-app-lighthouse-score.png"
    title={markdown(components)`Source code: <https://github.com/arunoda/very-bad-app>`}
  />
)

export default WithDoc({
  title: 'Lighthouse Syndrome',
  description: "It's satisfying to see a 100% score on Lighthouse. But what's the meaning of that score?",
  image: 'https://arunoda.me/lighthouse-syndrome/very-bad-app-lighthouse-score.png',
  slug: 'lighthouse-syndrome',
  date: 'June 23, 2020'
})(markdown(components)`

${
  <Image
    src="/lighthouse-syndrome/very-bad-app-lighthouse-score.png"
    title="See. I got a 100% score on Lighthouse."
  />
}

${
  <Note>
    This is not a rant about Lighthouse. But it is about how we use that tool.
    <br/>
    Keep reading my friend.
  </Note>
}

[Lighthouse](https://developers.google.com/web/tools/lighthouse) is a tool that comes with Chrome, which we often use to analyze a website for performance, SEO, best practices, etc. Recently, I discover a trend among developers who want to get the top score for their websites. Or they expect websites to have a 100% score.

So, I want to understand whether it's a good idea to optimize our apps for Lighthouse or not. Then I ran Lighthouse on a set of popular websites I use every day. Here's the result.

### Google

${
  <Image
    src="/lighthouse-syndrome/google-lighthouse-score.png"
  />
}

### Reddit

${
  <Image
    src="/lighthouse-syndrome/reddit-lighthouse-score.png"
  />
}

### Hacker News

${
  <Image
    src="/lighthouse-syndrome/hackernews-lighthouse-score.png"
  />
}

### Twitter

${
  <Image
    src="/lighthouse-syndrome/twitter-lighthouse-score.png"
  />
}

If you look at those results, they are pretty bad. But as an end-user, I really enjoy using those websites. Don't you?

Then I tried to create a pretty unusable website, which took 100% on Lighthouse. Wow.

${ veryBadAppImage }


${<Note>So then, what's that score means?</Note>}

## Lighthouse is a "Vanity Metric"

Lighthouse score does not mean anything about the user experience of the web app or how it performs. It's just another metric. 

**Here's what we should try to do instead:**

If you are interested in the product, maybe focus on your Key Performance Indicators(KPI) like monthly recurring revenue(MRR) or daily active users.
<br/>
(I found [this Startup School video](https://www.youtube.com/watch?v=lL6GdUHIBsM) very helpful.)

Otherwise, try to optimize your app for faster interaction and navigations. A framework like Next.js will help you get things done automatically. Still, there are some things you have to do.

${subscribe}

If you want to go further, try to create an end-to-end test suite using a service like Checkly and monitor for broken user interactions.
<br/>
(rauchg wrote an [insightful article](https://rauchg.com/2020/develop-preview-test) related to this topic.)

## Okay. Should we stop using Lighthouse?

Nope. It's a useful tool in our dev toolbox. It shows insight into various problems and shows you how you can fix them. 

Try to run Lighthouse from time to time. If you find out any issues, create tasks to fix them, and prioritize them.

> I ran Lighthouse today for a new project I'm working on.<br/>
> Here's how I deal with it.

It shows me a bunch of issues, and there's a one issue related to accessibility. The fix is a tiny CSS change, but the improvement is massive. So, I fixed it right away.

There were some other issues. I created a task to run Lighthouse next week.

${<Note>If you got upset by the title, I'm really sorry. But I honestly think this is the reality.</Note>}
`)
