import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'

export default WithDoc({
  title: 'All about Basic Attention Token (BAT)',
  description: 'BAT is a new concept for online advertising which doesn\'t compromise users\' privacy.',
  image: 'https://basicattentiontoken.org/fonts/BAT_explode.svg',
  url: `${ROOT_URL}/blog/all-about-basic-attention-token`,
  links: {
    twitter: 'https://ssd/twitter',
    facebook: 'https://ssd/facebook'
  }
})(markdown(components)`

${<Image src="https://basicattentiontoken.org/fonts/BAT_explode.svg" width={300}/>}

**TLDR;** <br/>
You might not have heard about BAT but it's a pretty interesting privacy focused technology trying to complete with Google and others in the online advertising space.

BAT is a part of the Brave browser eco-system and it's co-founded by Brendan Eich who created Mozilla and JavaScript.

Interestingly they just raised a USD 36 million funding round and it's not venture backed.

* * *

Before we begin, we need to make sure everyone is in the same page. So, I'll layout the ground work for BAT in the first few sections.

## User Tracking and Online Privacy

This is not a new topic anymore. User tracking is not a bad thing specially for logged-in users.

But the issue comes when some parties try to track user activities across multiple websites. This is extensively used in online advertising and often called as re-targeting.

For an example, google knows everything inside gmail and what you are searching. Then when you visit [techcruch.com](http://techcruch.com/) you will starting to see ads based on the content inside gmail and what you have searched for.

This is pretty scary since this works across Google, Twitter, Facebook and almost all over the internet. So, now a set of third parties know what you are doing in the internet without your consent.

${
  <Image
    src="https://basicattentiontoken.org/fonts/BAT_explode.svg"
    title={'This is the browser marker share according to the bloomberg in year 2015.'}
  />
}

## AdBlockers

This is where AdBlockers comes into the game. They are usually browser extensions which detect those trackers and block them. So those third parties won't be able to track you across the internet and they'll be blocked. Also AdBlockers usually block most of the display ads in websites.

## AdBlocker Dectectors

Even though AdBlockers are great for end users, they will directly affect the revenue generation of publishers. Because ads are a very good revenue stream for them.

So, some websites using [AdBlocker Detectors](http://www.detectadblock.com/) which detect AdBlockers and warn users to stop using them. Only as a few publishers do this right now, but if AdBlockers usage continue to increase things will be different.

## Brave Browser and Brave Payments

Brave is a chromium based web browser which comes with a in built AdBlocker. It is co-founded by Brendan Eich who is father of both Mozilla and JavaScript.

It does more than adblocking. It's trying to solve the revenue problem publishers face when users use AdBlockers. So, they don't need to use Adblocker Dectectors.

Brave does this via Brave Payments. Here's how it works:


* I can decide the budget I am willing to share with websites I visit
* Let's say I allocated $5 per month
* Now brave keeps a ledger of all the websites I visit and time I spend on.
* At the end of the month, brave will share my $5 with above sites based on proportion of time I spend on them
* In this process, brave doesn't send my data to a central sever and everything happens inside my browser.
* Publishers(websites) get paid end of the month but they don't know anything about users.
* So, there's no privacy issue

This is a pretty good concept. But in order to make this practical across the web, Brave has to do a lot and it's tough. I will talk more about this in a later section.

## Basic Attention Token (BAT)

Finally, now we can talk about Basic Attention Token. (BAT)

Advertising is not a bad thing. That's the way how we get to know about products we care about. So, it's an essential part of the web.  But it should be done in a proper way without compromising user privacy.

Brave Payments introduce a new monatization strategy for publishers. BAT is the way how it introduce advertisers into the picture and extend Brave Payments.

With BAT, Users, publishers and advertisers directly connect with each other. There are no middlemen. User privacy is the number one priority.

So, BAT creates a very healthy open and efficient relationship between all these parties.

## How BAT Works

Let's have a look at how BAT works.

This is a marketplace. Here we've four main stackholders.

1. Users - End users like you and me
2. Publishers - Content creating websites like TechCrunch and Facebook.
3. Advertisers - Who pays for the ads
4. Brave - The brave system which does all the transactions

Here's how this works:

* Advertisers pays money to display ads
* Publishers has places to display ads in their websites
* Brave browser knows about the user and it picks relevant ads to display inside publishers' websites.
* Brave picks ads totally based on the user data on the browser and it won't send anything to a central server


Then based on how users view ads along with the content in publishers' websites, brave will distribute the advertisers' payments between following parties:

* Users - For viewing ads and the content
* Brave - To do the transaction and cover other costs
* Publisher - Publisher gets the rest of the advertisers payment

So, it's a open system and everything is clear. Most importantly user privacy will be protected while serving relevant ads to the user.

Interestingly with BAT, users will get paid too. That's a very important factor.
User are a part of the content creation process. So, they should also be in the revenue equation.
It incentives users to not to block these ads.

You can learn more about BAT by reading the [BAT whitepape](https://basicattentiontoken.org/wp-content/uploads/2017/05/BasicAttentionTokenWhitePaper-4.pdf)r.

## The Technology

First of all, I'm not going to go deep technology. But I'll give you a simple overview.
BAT is based on the blockchain technology Etherium. It's like Bitcoin but it allows developers to write code and execute them in the distributed manner.

So, it's a very good software system to implement anonymous and distributed financial transactions. Even though this is a new technology, it has a market valuation around [36 billion USD](https://coinmarketcap.com/currencies/ethereum/).

In BAT, all the ad transaction are based on this Etherium platform. In order to do a such a transaction we need to pay an amount. This is a reason why Brave charges an amount from the ad revenue.

All of these code will be open source and anybody will be able to inspect it and contribute. In addition to that, all these transaction will be done in public but anonymously. That's why we consider brave as an open platform.

## The Currency (And Funding)

BAT itself is the currency for this system and usually we refer to it as BATcoins. There's an public pool of 1 billion BATcoins available for trading right now. Brave foundations sold all of these BATcoins in the open market for around 36 millions USD in 31st may. And this was happened in just 30 seconds.

Now you can buy BATcoins from a crytocurrency exchange like [Liqui](https://liqui.io/#/exchange/BAT_BTC) and spend on advertising.

Interestingly, BAT is itself funded without any venture backing. So, that's a pretty good things and it seems like the general public has a good faith in this technology (At least among the people who participle in crytocurrency  markets).

## Challenges

The goal of BAT is a massive one. So, they'll have to solve lot of problems and there will be many challenges. Here are a set of challenges BAT might have to tackle sooner or later.

### Browser Share

We know Chrome, IE, Firefox and Safari almost holds the entire browser marketplace. Existing AdBlockers are pretty good. So, it'll be very tough to beat these browsers in the browser market share even in the long run.

The only solution I can see is to build a Brave extension for each of the browser. So, they'll have Brave capabilities.

### Mobile APPS

It's not secret that, we tend to use mobile apps for most of things in our daily routine. But the browser is rarely in that list. Even it was there, it might be fired inside Facebook or Twitter.

In the BAT whitepaper, they haven't mention how they bring BAT into mobile app eco-space. That's something I am curious to know about.

### Closed platforms / Publishers

It's not a secret that Google and Facebook itself holds a vast majority of global ad revenue. New platforms like Snapchat tries to introduce their own ad system. And this is continue to happen.

So It'll be an extreme challenge for BAT to convince these closed platforms to use BAT instead of using their own ad platforms.
Interestingly, these are the platforms where users spent most of their time.

I'll be tough.

### BAT Market Instability

BAT is a new Etherium (a bitcoin like technology) based currency. The whole market is new. Not only BAT, but even the Etherium market itself.

So, there's a chance for an instability in BAT and the price might fluctuate rapidly.

Currently the whole BAT market is based people who thinks BAT will be successful. Advertisers haven't come to the market yet. So, it's not cleat what'll happen when advertisers jump into the market.

If there's rapid fluctuation in the currency, advertisers has to deal with that beside managing the ad campaign.

Then middlemen might come to the equation and things won't be simple as it seems now.

## Implementation and Execution

Currently Brave browser and the Brave Payments is the only implementation we've seen from Brave.

They haven't released anything related to BAT yet. So, it's not possible to comment about it yet.
But they neee to make it pretty simple for everyone to use.

## Finally

As I mentioned before, BAT is a pretty interesting solution to a burning problem. But they have to face a lot of challenges. And this will be a long journey.

Anyway it's too early to predict anything about BAT. But we need to give some time and see how it works in the real world.

I think we can help them in many ways to make BAT successful. As a baby step, download the Brave browser today and start using it.
`)
