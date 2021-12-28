import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Note from '~/components/Note'
import Tweet from '~/components/Tweet'

const elonTweet = (
  <Tweet>
    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Has anyone seen web3? I can’t find it.</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1473165434518224896?ref_src=twsrc%5Etfw">December 21, 2021</a></blockquote>
  </Tweet>
);

const jackTweet = (
  <Tweet>
    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">You don’t own “web3.”<br/><br/>The VCs and their LPs do. It will never escape their incentives. It’s ultimately a centralized entity with a different label. <br/><br/>Know what you’re getting into…</p>&mdash; jack⚡️ (@jack) <a href="https://twitter.com/jack/status/1473139010197508098?ref_src=twsrc%5Etfw">December 21, 2021</a></blockquote>
  </Tweet>
);

const noteAboutVCs = (
  <Note>{markdown(components)`
💡 In nutshell, even though these Web3 projects are VC-funded, some of these projects are pretty good.  We should not hate them just because they are VC-funded.
    
Even Next.js & Gatsby backed by VCs. But there are cases like Meteor which was [abandoned due to VCs](https://twitter.com/awilkinson/status/1233058058873405441).
  `}</Note>
);

export default WithDoc({
  title: 'Web3 - Love It or Hate It?',
  description: "Web3 is a hot topic these days, but do you really know about it? Here's my take on Web3.",
  image: 'https://user-images.githubusercontent.com/50838/147535150-649b4819-925f-40b4-8555-0dfb97440093.png',
  slug: 'web3-love-it-or-hate-it',
  date: 'December 28, 2021'
})(markdown(components)`

If you are following Twitter & Youtube, Web3 shouldn’t be something new for you. If not, just have a look at these tweets from Elon Musk & Jack Dorsey.

${elonTweet}
${jackTweet}

I really wanted to understand what’s really happening here. So I started digging into Web3 and found out some really interesting facts. Let me share them with you. 

## What is Web2

Before we talk about Web3, we need to talk about Web2. I think we started to hear about the Web2 term around 2010 or maybe a little bit earlier. That’s when AJAX was introduced. If you haven’t heard about AJAX, it’s a way to fetch data on the client-side backed by some standard browser API (just like fetch). Even before that, we use another technique called JSONP.

JSON-RPC is another transport-independent data protocol introduced in this era. But, we didn’t see any wider adoption. Now, this is a quite well-known protocol used by many [Web3 clients libs](https://www.google.com/search?q=web3+json+rpc) 😜.

Web2 was not a standard & it was just a buzzword to building rich client-side apps. Basically, it’s the beginning of the Single Page Apps. 

> If you say, we are still building Web2 apps, I am not going to argue with you!

## So, What’s Web3

Just like Web2, it’s just another buzzword. Still, we are not sure about what Web3 really means, but I think it’s something to do with blockchains.

When we talk about blockchains, Bitcoin & Ethereum come to our minds instantly. But, there are quite a lot of new blockchain-related projects & they are quite interesting. I’ll talk about them in a moment.

There’s even something called [Web3 foundation](https://web3.foundation/), but it’s NOT something similar to [W3C](https://www.w3.org/) or [TC39](https://tc39.es/). It’s just a marketing tool for a specific blockchain-related product. Even a lot of pro-Web3 people ignore that.

${<Note>💡 In nutshell, Web3 is not the next era of web technology, it’s just something related to blockchain & distributed computing.</Note>}

## It’s a Business Model

If you are looking at these Web3 related projects, some of these projects offer quite a large sum of grants. I wonder how they are doing that. The answer is quite simple, most of these products are venture-backed or backed by people with a lot of crypto wealth.

Let me give you some examples.

### Web3 Foundation

They have offered [grants](https://web3.foundation/grants/) for a quite bit of projects & it was really interesting. Then they mentioned, Polkadot blockchain as their [flagship project](https://web3.foundation/projects/). If you look at Polkadot’s [Chruchbase profile](https://www.crunchbase.com/organization/polkadot), it’s a well-funded project with over 290 million USD. So, that’s how they can spend money like this.

### Arweave Funding

Arweave is another blockchain-related product & they are also [actively funding](https://www.arweave.org/get-involved/investment-funding) projects. As you expected, it’s also a [well-funded project](https://www.crunchbase.com/organization/arweave/investor_financials).

Most of these Web3 projects are VC-funded. That’s how they can spend like this. I’m not saying this is bad, but it is just a new business model. Maybe it’s a bubble.

## Who owns Web3?

The common argument of Web3 is that the public owns these Web3 projects. There could be one or two projects like that, but it’s far from the truth for most of these projects. 

Let me elaborate on this.

Here’s another popular blockchain product called [Solana](https://solana.com/).

Just like others, it’s a well-funded project with more than [330 Million USD](https://www.crunchbase.com/organization/solana-io/investor_financials). Most of these funds were raised at the initial coin offering. See:

${
  <Image
    src="https://user-images.githubusercontent.com/50838/147533135-8ba2bfb1-6e82-4c48-b132-6dc79956e6e2.png"
    width={"100%"}
    title="Who's behind the Solana blockchain."
  />
}

**Okay. Why it matters?**

Here’s why.

Solana is a blockchain governed by the Proof of Stake model. Whoever owns most of the coins, can control the network. Now we know, who owns a major part of these stakes & who controls the network.

In a blockchain like Bitcoin, it’s quite hard to change since literally there is no single owner. But here with Solana, there’s such an owner. 

Just like this, most of the well-funded Web3 projects are under the control of VCs just like any other startup. So, you don’t own Web3. You are just another user for them.

## So, are they bad?

Not really!

Some of these projects are very interesting & created by very smart people. For example, the selling point of Solana is the scalability & the low transaction cost. These are the two key problems where we cannot use blockchains for commercial projects. 

For example with Ethereum, you need to pay about a 20-50 USD fee for each transaction. But with Solana, they promised to keep it lower than 0.01 USD. As of today, it’s a lot lower than that.

With Ethereum, you can only do about 15 transactions per second, but Solana does over [2000 transactions per second](https://explorer.solana.com/) & they have plans to increase it even further.

So, Solana seems like a perfect blockchain for commercial apps & it might be the winner of this Blockchain race.

${noteAboutVCs}

## Capitalize on Web3

Here’s my view on Web3.

If you are currently settled with a framework & a set of tools, you can continue to work on those. There is no way, it will be replaced by a Web3 project anytime sooner (or ever).

If you are still looking to create a decentralized community-powered web with Web3, just stop! stop! stop!

If you are looking to change your job in 2022, then try to learn a bit about blockchains. Then do some research on a couple of popular Web3 projects & start learning. That might help you to land a pretty good job.

If you are a person who loves new tech & can take a bit of risk, Web3 might be your thing. Especially try to look at projects like Solana & Arweave. 

---

I firmly believe, Web3 is not the next generation of the web. It’s just another business model. I’m fine with that.

Elon Musk & Jack Dorsey talks about it. So, it got their attention. 

And I’m gonna stop here!
`)
