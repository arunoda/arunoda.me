import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Note from '~/components/Note'

export default WithDoc({
  title: '🙏 Thank you, Vercel',
  description: "I am leaving Vercel, and here's what I do next.",
  image: '',
  slug: 'thank-you-vercel',
  date: 'July 2, 2020'
})(markdown(components)`
After [Kadira](https://kadira.io), I joined Vercel (AKA: ZEIT) in early 2017. Then I maintained Next.js for about a year until [Tim](https://twitter.com/timneutkens) took it over. I didn't add many features to Next.js, but I think I made some improvements in testing and reliability.

${
  <Note>I still think my most significant contribution to Next.js is the "Learn Next.js" project. </Note>
}

## My Time at Vercel

Then I got the responsibility of a critical part of Vercel deployment flow. I really love working on that. Literally, we were building a startup, and I played a crucial role in that. That's excited me to keep working.

I never wanted to work on backend/infra forever. Due to that reason, I no longer enjoy working on that responsibility. That's why I'm leaving.

> I'm not leaving Vercel due to any problem I faced at the company. And I'm not looking for work right now.
> Thank you!

I want to thank [rauchg](https://twitter.com/rauchg) for hiring me and everyone who worked at Vercel with me. It's fantastic to work in a remote company with people from all over the world. I will miss that for sure.

# What's next?

Even though I am taking a break, I'm not going on a long holiday. Instead, I try to experiment with what I always love to do -- Teach and work on open source projects.

## Teaching

I think I collected a lot of knowledge these years, and there are many ways I could share that experience. I believe in open education -- but at the same time, content creators should get paid properly. 

I will try some ideas related to this in the coming months. If you are interested, [join my newsletter](https://buttondown.email/arunoda?special=1) or [follow me](https://twitter.com/arunoda) on Twitter.

## Open Source

In every app, there's a common set of functionalities we have to do. But most of the time, we re-create them from scratch. I get it, we need a different look and feel and slightly different functionality. Still, there's room for reusability. We waste a lot of resources.

What if we have something like this:

* When you are starting up, you get some standard set of components and build your app quickly.
* You might want to customize how those components work, and there are some options you could choose. 
* For example, you can use Auth0, firebase, Magic Link, or even next-auth to add login functionality. But how you code the login functionality in the same.
* Then you want to use an existing Login component from NPM. You use [uber/baseweb](https://github.com/uber/baseweb). But creators of that component never heard about baseweb. But still, the login component works really well.
* After a few months, you need to add some additional login functionality. So, you build your own component.
* You might even consider sharing it with everybody.

This is just for the auth layer, what if we can apply the same for many other things. 

That's what I am excited about.

${<Note>See you soon with some exciting news.</Note>}
`)
