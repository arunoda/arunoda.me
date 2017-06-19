import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'

export default WithDoc({
  title: 'All about Basic Attention Token (BAT)',
  description: 'BAT is a pretty interesting privacy focused online ad-tech trying to compete with Google and others',
  image: 'https://res.cloudinary.com/dsdjlta5b/image/upload/v1497872902/arunoda.me/BAT_explode.svg',
  slug: 'all-about-basic-attention-token',
  date: 'June 19, 2017',
  links: {
    twitter: '',
    facebook: ''
  }
})(markdown(components)`

${<Image src="https://res.cloudinary.com/dsdjlta5b/image/upload/v1497872902/arunoda.me/BAT_explode.svg" width={300}/>}

**TL;DR;** <br/>
You might not have heard about BAT yet, but it's a pretty interesting privacy focused online ad-tech trying to compete with Google and others. 

BAT is a part of the [Brave](https://brave.com/) browser eco-system and it's co-founded by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) who is the creator of Mozilla and JavaScript. 

Interestingly, they just raised **36 million USD** in funding, and it's not venture backed. 

* * *

Before we begin, we need to make sure everyone is on the same page. So, I'll layout the ground work for BAT in the first few sections.

## User Tracking and Online Privacy 

This is not a new topic anymore. Generally, user tracking is not a bad thing, especially for logged-in users.

But an issue arises when some parties try to track user activities across multiple websites. This is extensively used in online advertising and is often called re-targeting. 

For an example, Google knows everything you search for on the internet. Then, when you visit [techcruch.com](http://techcruch.com/) you will starting to see ads based on your search history. 

This is pretty scary since this works across Google, Twitter, Facebook and almost all over the internet. So, now a set of third parties know what you are doing on the internet without your consent. 

That's crazy. 

## AdBlockers

This is where [AdBlockers](https://www.ublock.org/) comes into the game. They are usually browser extensions which detect those trackers and block them. So those third parties won't be able to track you across the internet anymore. Also AdBlockers usually block most of the display ads in websites.

They are pretty popular and completely legal to use. 

## AdBlocker Dectectors

Even though AdBlockers are great for end users, they will directly affect the revenue generation of websites (publishers) you visit. Because ads are a very good revenue stream for them.

So, some websites are using [AdBlocker Detectors](http://www.detectadblock.com/) which detect AdBlockers and warn users to stop using them. Only a few set of publishers do this right now, but if everyone starts using adblockers, they might have to use them. 

## Brave Browser and Brave Payments

[Brave](https://brave.com/) is a Chromium(the open source version of Google Chrome) based web browser which comes with a built in AdBlocker. It is co-founded by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich), who is the father of both Mozilla and JavaScript. 

Brave does more than adblocking. It's trying to solve the revenue problem publishers face when users are using AdBlockers. So, publishers don't have to use Adblocker Dectectors.

${
  <Image
    src="https://res.cloudinary.com/dsdjlta5b/image/upload/v1497874114/arunoda.me/payments_screen_100.png"
    title="A screenshot of Brave Payments inside the Brave browser."
  />
}

Brave does this via [Brave Payments](https://www.brave.com/Payments_FAQ.html). Here's how it works:

* As a user I can decide the budget I am willing to share with websites I visit
* Let's say I allocated $5 per month
* Now Brave keeps a ledger of all the websites I visit and time I spend on them 
* At the end of the month, Brave will share my $5 with above sites based on proportion of time I spend on them
* In this process, Brave doesn't send my data to a central server and everything happens inside my browser 
* Publishers (websites) get paid at the end of the month but they don't know anything about me and other users 
* So, there's no privacy issue 

This is a pretty good concept. But in order to make this practical across the web, Brave has to do a lot and it's tough. I will talk more about this in a later section.

## Basic Attention Token (BAT)

Finally, now we can talk about Basic Attention Token. (BAT)

Advertising is not a bad thing. That's the way we get to know about products we care about. So, it's an essential part of the web. But it should be done in a proper way without compromising user privacy.

Brave Payments already introduced a new monetizing strategy for publishers. BAT is the way it introduces advertisers into the picture and extends Brave Payments.

With BAT, users, publishers and advertisers directly connect with each other in a open marketplace. There are no middlemen. User privacy is the number one priority.

So, BAT creates a healthy, open and efficient relationship between all these parties.

## How BAT Works

Let's have a look at it. 

This is a marketplace. Here we have four main stackholders.

1. Users - end users like you and me
2. Publishers - content creating websites like TechCrunch and Facebook.
3. Advertisers - those who pay for the ads
4. Brave - the Brave system which does all the transactions

Here's how this works:

* Advertisers pay money to display ads
* Publishers have places to display ads in their websites
* Brave browser knows about the user and it picks relevant ads to display inside publishers' websites.
* Brave picks ads totally based on the user data on the browser and it won't send anything to a central server

Then, based on how users view ads along with the content in publishers' websites, Brave will distribute the advertisers' payments between following parties:

* Users - for viewing ads and the content
* Brave - to do the transaction and cover other costs
* Publisher - for displaying ads along with the website content

So, it's an open system and everything is clear. Most importantly, user privacy will be protected while serving relevant ads to the user.

Interestingly with BAT, users will get paid too. That's a very important factor. 
Users are a part of the content creation process. So, they should also be in the revenue equation.
It is also an incentive for users to not block these ads.

## The Technology

First of all, I'm not trying to deep dive into the underline technology. This is just an overview. 

> But if you need more information, you can refer to the [BAT whitepaper](https://basicattentiontoken.org/BasicAttentionTokenWhitePaper-4.pdf). 

BAT is based on the blockchain technology [Ethereum](https://www.ethereum.org/). Ethereum is something like [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin) but it allows developers to write code and execute them in distributed fashion without a central authority.

So, it's a very good software system to implement anonymous, self serving financial transactions. Just like Bitcoin, Ethereum also has monitory value. It's also just as big as Bitcoin and has over [30 billion USD market valuation](https://coinmarketcap.com/currencies/).

${
  <Image
    src="https://res.cloudinary.com/dsdjlta5b/image/upload/v1497873913/arunoda.me/ethereum-market-cap.png"
    title="A list of market caps of top cryptocurrencies as of June 19, 2017."
  />
}

In BAT, all the ad transactions are based on this Ethereum platform. In order to execute such a transaction we need to pay an amount. This is a reason why Brave charges an amount from the ad revenue.

All of these codes will be open sourced and anyone can inspect them and contribute back. In addition to that, all these transactions will be done in public but anonymously. That's why we consider BAT an open platform.

## The Currency (And Funding)

Interestingly, BAT has it's own currency. It's also known as [BAT](https://coinmarketcap.com/assets/basic-attention-token/). 

> Technically, there's more to this. But to make things simple, let's call BAT's currency as Batcoin.

There's a public pool of 1 billion Batcoins available for trading right now. Brave foundation sold all of these Batcoins in the open market for around [36 million USD](https://steemit.com/cryptocurrency/@rooby/how-bat-earn-36-million-in-a-dozen-seconds) on the 31st of May. And this happened in just 30 seconds. 

As of writing this post, it's market valuation was around 195 million USD. So, it's doing pretty well.

${
  <Image
    src="https://res.cloudinary.com/dsdjlta5b/image/upload/v1497874511/arunoda.me/bat-market-cap.png"
    title="A list of market caps of top tokens as of June 19, 2017."
  />
}

Now you can buy Batcoins from a cryptocurrency exchange like [Liqui](https://liqui.io/#/exchange/BAT_BTC) right away. This will be the currency for all the transactions in BAT.

Interestingly, because of Batcoins, BAT funded itself without any venture backing. So, that's a pretty good thing. Additionally, it seems like the general public has good faith in this technology. 

## Challenges

The goal of BAT is a massive one. So, they'll have to solve a lot of problems and there will be many challenges. Here are a set of challenges BAT might have to tackle sooner or later.

### Browser Share

We know Chrome, IE, Firefox and Safari hold almost the entire browser marketplace. Existing AdBlockers are pretty good too. So, it'll be very tough to beat these browsers (along with AdBlockers), even in the long run.

The only solution I can see is to build a Brave extension for each of the browsers. So, they'll have Brave capabilities.

### Mobile APPS

It's no secret that we tend to use mobile apps for most things in our daily routine. But the browser is rarely on that list. Even if it was there, it might be launched inside Facebook or Twitter app.

In the BAT whitepaper, they haven't mentioned how they bring BAT into a mobile app eco-space. That's something I'm curious to know about.

### Closed Platforms

It's no secret that Google and Facebook hold a vast majority of the global ad revenue. And most of the popular platforms like twitter, snapchat, whatsapp and others have their own ad system, or they rely on Google.

Converting these platforms to use BAT will be hard from both technical and business point of view. 

Most importantly, these are places where end users are. So, without these platforms, it's harder for BAT to succeed.

### Batcoin Market Instability

Batcoin market is new. Not only Batcoin, the whole cryptocurrency market is new and experimental. So, things might go wrong. 

There might be a software bug in Ethereum which will directly affect Batcoin; There might be some government regulations; Just like this there are many other possibilities for market instability. 

So, if there's a such an instability, the price of Batcoin might drop or fluctuate rapidly.

If there's a rapid fluctuation in the currency, advertisers have to deal with that rather than just focus on their ad campaign. That'll be an obstacle to deal with. 

Also, middlemen might come into the equation and things won't be as simple as they seem now.

## Implementation and Execution

Currently, Brave browser and the Brave Payments are the only implementation we've seen. There's a public [roadmap ](https://basicattentiontoken.org/bat-roadmap-1-0.html) for BAT but we have not seen anything yet.

They are going against a solid ad-tech solution, so the implementation of BAT should be solid and easy to use for all parties.

## Finally

As I mentioned before, BAT is a pretty interesting solution to a burning problem. But they have to face a lot of challenges. And this will be a long journey. 

Anyway, it's too early to predict anything about BAT at this moment. But we need to give some time and see how it works in the real world.

We are a part of this eco-system and we should help them to make BAT a success. As a baby step, download the [Brave browser](https://brave.com/) today and start using it.
`)
