import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Note from '~/components/Note'
import Youtube from '~/components/Youtube'

const newsletter = (
  <Note>{markdown(components)`
I am working on a Cypress.io tutorial and planning to do a LiveStream about E2E & Cypress. Join my [newsletter](https://buttondown.email/arunoda) if you are interested.
  `}</Note>
)

export default WithDoc({
  title: 'We need tests. But now or later?',
  description: '',
  image: 'https://arunoda.me/we-need-tests-but-now-or-later/tests-now-or-later.png',
  slug: 'we-need-tests-but-now-or-later',
  date: 'July 16, 2020',
})(markdown(components)`
${
  <Image src="/we-need-tests-but-now-or-later/tests-now-or-later.png" />
}
We all agree we need to write tests for our apps. But writing tests takes time, and they take time to run. Sometimes, you may have to spend more on tests, rather than building features.

So, we tend to skip tests to ship something faster. I did that, and I have learned consequences as well.

Here is my story on testing.

## New Project: GetStarted

I recently started a new project: [GetStarted](https://getstarted.sh). It begins as something pretty small, and no one using it. I even didn't think about testing at all. Then I added features every day one at a time. 

I'm talking to some partners, and I need to add new features. Now,  I am not comfortable shipping anything new because I have no way to test whether they will break the app or not.

## End to End Testing

GetStarted is a typical client-server application. I have a Next.js app and a GraphQL server talking to a database. So, how should I start testing?

Currently, We are just starting up; we don't have a lot of resources. So, we cannot spend time on writing tests for database logic and testing individual components. That will slow us down.

That's why I decided to use End to End (E2E) testing forgetting all other types of testing. Now, I'm testing my app as an end-user. If those tests are working, I have the confidence to ship.

I might need to do component & UI testing in sometime later. But I'm not worried about it right now.

## Choosing Cypress

I [wrote](https://github.com/vercel/next.js/pull/640) the initial E2E testing setup for Next.js using Chromedriver, and it works great. Now, [puppeteer](https://github.com/puppeteer/puppeteer) is an excellent solution because Google and a growing community back it. But these are just headless browser automation tools; I need to take care of everything else.

Right now, I don't have time for experiments. That's why I choose [Cypress](https://www.cypress.io). It's an all in one solution. You can set it up and start writing tests. It has a fantastic set of dev tools, which help you to write & debug tests faster.

Have a look at this:

${<Youtube videoId="H096CrfTMvc" />}

I have found some obstacles when simulating input elements inside an Iframe. I am talking about Stripe Elements here. I didn't find a solution yet, but I made some changes to my UI code as a workaround.

${newsletter}

## Fake or Not to Fake

Now lets a look at how do we run our e2e setup.

We run our backend server with a database seeded with some initial data
Then we run the frontend app which talks to the above server
Our app has a GitHub based login system. In the test mode, we skip that and automatically create a new user whenever someone tries to log in.
Then we run Cypress tests the frontend.

As you can see, here we are faking the login system. Ideally, we should avoid faking when we do E2E testing. But it's something hard to do. That's why we go with faking the login system.

Here's I'm talking about an app with a simple architecture. But as we bring more components into that, it'll be tough to run the production system locally or inside a CI server.

## Production/Canary Testing

We should also run E2E testing for the production system. That's something we could run after we shipped a new release or with an interval.

> I'm planning to reuse my existing Cypress tests to run against the production system. But that's something for later.

As it became really hard to run the production system inside CI, we could try to find a way to do canary releases and run E2E tests against it. But I'm trying to design a system avoiding that scenario.

## Start writing E2E tests Today

If your app doesn't have an E2E test suite, create it Today. Do not defer it. I had my lessons, and I speak from my experience. 

${<Note>At least create a single E2E test case. </Note>}

You don't need to use Cypress at all. That's something I choose. But there are some cloud-based solutions like Checkly & Ghost Inspector.
`)
