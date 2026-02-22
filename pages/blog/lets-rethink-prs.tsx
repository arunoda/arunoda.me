import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'

export default WithDoc({
  title: "Let's (Re)think PRs",
  description: "As coding agents make submitting code changes effortless, it's time to think about whether Pull Requests as a feature is needed or not.",
  image: 'https://res.cloudinary.com/dsdjlta5b/image/upload/v1771784693/arunoda.me/Screenshot_2026-02-22_at_22.48.39.png',
  slug: 'lets-rethink-prs',
  date: 'February 22, 2026'
})(markdown(components)`

I think Pull Requests (PRs) has been a key component in the modern day of Open Source. Now with the development of the coding agents (AKA: vibe coding), I think it's time to rethink PRs and the Open Source collaborations from first principles.

## It's Becoming a Problem

${
  <Image
    src="https://res.cloudinary.com/dsdjlta5b/image/upload/v1771784693/arunoda.me/Screenshot_2026-02-22_at_22.48.39.png"
    title="The OpenClaw developer talks about how he is trying to triage those 4500 PRs."
  />
}

This is the OpenClaw guy. I think at the time of this post there were around 4500 pull requests. I don't think Open Source projects were designed to handle such an amount of triage.

Due to the use of coding agents, submitting a PR is very easy. I think that's why there are so many PRs.

## Solution: Let's Stop Using PRs

You might say, that's crazy. PRs is the heart of Open Source.

**I would say, it was.**

With the coding agents, making code changes is easy. You can see that by the number of PRs in the most of the open source projects. Since coding agents are accessible to everyone, I don't think there's a need for contributing back to the original project.

In the pre-AI world, contributions were important because, only a few could code. Now it's not the case. If you have an idea & have some common sense, implementing a feature is not that hard.

So. Let's stop submitting PRs and accepting them. Let the core team introduce features and bug fixes as they like.

If you want a custom feature, just implement it yourself. Talk about it. If others like your features, they (or their agents) will use your version or cherry pick those changes.

> I'm trying to do this with my new project [OkBrain](https://github.com/arunoda/OkBrain). Let's see how it goes.

## What about Discussions?

Even though Pull Requests as a feature is not there, I think it's healthy to have some discussions around the project. Whether it's human or agent based. Let's give everyone a space to discuss. It could be GitHub issues or some form of a forum.

Then the core team can rank those issues & implement them in the project by taking their time with proper reviews.

If the core team is not interested, someone else could implement them on a fork. It's as simple as that.

**I think this is the true form of Open Source.**

`)
