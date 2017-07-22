import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import * as NewsLetter from '~/components/NewsLetter'

export default WithDoc({
  title: 'Bitcoin: The Decentralized Currency - Or Is It?',
  description: 'Here we talk about Bitcoin and how decentralized it is.',
  image: 'https://user-images.githubusercontent.com/50838/28486354-cbd0775a-6e9e-11e7-84be-714fdba9853e.png',
  slug: 'bitcoin-the-decentralized-currency',
  date: 'July 22, 2017',
  links: {
    twitter: '',
    facebook: ''
  }
})(markdown(components)`
I'm pretty sure, you may have heard about [Bitcoin](https://bitcoin.org/en/). It is a decentralized currency, which means that it is not controlled by a central bank: imagine US dollars without the control of the Federal Reserve Bank.

Theoretically, with Bitcoin, you could send a payment to someone on the other side of the world very quickly using the Bitcoin software. All Bitcoin transactions are immutable; this means that no-one could stop or reverse a transaction.

## The Market

Bitcoin's marketcap is less than USD 100 billion; if we compare that to the overall money circulation of the world, the Bitcoin market is relatively small.

${
  <Image
    src="https://user-images.githubusercontent.com/50838/28466565-8086049e-6e4a-11e7-9f5f-b7620a7729eb.jpg"
    width={650}
    title="Source: https://howmuch.net/articles/worlds-money-in-perspective"
  />
}

However, the Bitcoin market is experiencing rapid growth. A few years ago, you could buy a Bitcoin for a few dollars. Today, its worth is more than [USD 2,500](https://coinmarketcap.com/currencies/bitcoin/) and still increasing.

## How Bitcoin works

It is not easy to explain how Bitcoin works without going into detail about its cryptography and distributed computing technologies; however, let's try to understand it by comparing with fiat currencies (like USD).

### Network

With fiat currencies, governments, banks and payment providers (such as Visa) are participants in the network. With Bitcoin, anyone in the world can participate in the network just by [downloading](https://bitcoin.org/en/download) a software.

After running that software, you become a "node" in the Bitcoin network. Afterwhich, you will see all transactions happening inside the network and you may even have the chance to verify those transactions.

### Accounts

As a client of a bank, you will have an account which maintains a balance. At any time, you can see how much you have in the bank and you may withdraw or send any amount from that balance.

Similarly, with Bitcoin, instead of a bank account, you have something called a Bitcoin "address": this is where your Bitcoins are kept. Just like how you can have many bank accounts, you can have many Bitcoin addresses.

### Transactions

Any transaction between two parties (two bank accounts) must be monitored by the respective banks who act as financial intermediaries (the "middlemen"). With Bitcoin, the transactions are performed between addresses and they are not governed by any central authority. 

The Bitcoin network maintains a record of all transactions that have ever occurred in the network. All of those transactions are publicly available and anyone can inspect them at anytime. 

While these Bitcoin transactions are public information, it is hard to reveal the identities behind them. (But it's not impossible)

${
  <Image
    src="https://user-images.githubusercontent.com/50838/28486111-4f58be50-6e9c-11e7-8761-92f1c09cae33.png"
    width={650}
    title="This is a public Bitcoin transaction (https://goo.gl/Xyy2GV)."
  />
}

### Validating

All transactions must be validated on any currency system.

Before you complete a bank transaction, the bank validates it by checking your balance and verifying your identity.

With Bitcoin, you broadcast a transaction to the Bitcoin network. Afterwhich, the network selects a node every ten minutes: that node then validates your transaction and adds it to the network.

### Coins 

Bitcoins are immutable. 

After a transaction is recorded on the network, receivers of that transaction can spend those coins but they cannot spend the same coin twice. Just like coins (and bills) in fiat currencies, we need to spend the whole coin (or bill) and receive a return (a change).

Let me explain:

Suppose you have a ten-dollar ($10) bill. You want to pay $3 for a coffee. You give the $10 bill to the cashier and the cashier gives you change (in bills or coins) worth $7.

To pay for that same coffee using Bitcoin, you spend a coin worth $10 (that you have received through a previous transaction) by sending a coin worth $3 to the cashier and a coin worth $7 to yourself. After that transaction, your coin worth $10 is gone and you cannot spend that same coin again.

### Mining

As explained, the Bitcoin network selects a node every ten minutes to validate transactions. This selection process (commonly known as "mining") is distributed. 

The selection process is like a lottery. Instead of luck, the node has to do a very complex computation in order to win. The faster your computer is, the higher the chance you will be selected as the winner node. 

As more and more people join the Bitcoin network, your chance of winning decreases. This increasing difficulty builds the need for faster computers and higher electricity consumption. 

This makes mining Bitcoins increasingly expensive.

${
  <Image
    src="https://user-images.githubusercontent.com/50838/28485811-c38210ea-6e99-11e7-9c98-1198ab120cdf.jpg"
    width={650}
    title="Currently, bitcoin mining is done using a special hardware device known as ASIC. That's the efficient solution right now."
  />
}

**So why would anyone participate in mining?**

The reward of Bitcoin mining is great. The winning node earns 12.5 Bitcoins — that is worth approximately USD 32,000 at the time of publishing this article.

### Further validations

In Bitcoin, the winning miner validates transactions broadcast to the network within the ten-minute window. However, that node may be "evil" and include incorrect transactions (for example, send 1,000 Bitcoins to an address that the node controls).

In that case, other nodes in the network could simply ignore those invalid transactions.

Transactions are only validated when everyone in the network accepts them.

### Mining pools

As explained, mining Bitcoins is an increasingly expensive and difficult job as more and more people join the network. 

Because it was hard to act alone, people began grouping together to form "[mining pools](https://en.bitcoin.it/wiki/Comparison_of_mining_pools)". A mining pool is a set of nodes, where miners work together by pooling their computational resources to win.

If the pool wins for a given ten-minute window, the reward of 12.5 Bitcoins will be distributed between all the nodes in the pool.

${<NewsLetter.Cryptocurrency />}

### Exchanges

In order to perform a Bitcoin transaction, you need Bitcoins. You can obtain Bitcoins through mining but as discussed, mining has become increasingly difficult and time-consuming. 

This is where [Bitcoin exchange](https://bitcoin.org/en/exchanges) comes to play: you can buy and sell Bitcoins using fiat currencies.

Just like the exchange rate between two fiat currencies, the value of a Bitcoin is influenced by its supply and demand.

You could buy a Bitcoin for a few dollars in 2012 when the demand for Bitcoins was low; today, the demand for Bitcoins is high — one Bitcoin is worth thousands of dollars.

${
  <Image
    src="https://user-images.githubusercontent.com/50838/28485674-b9e27fbc-6e98-11e7-9669-fb56959ae885.png"
    width={650}
    title="This is how you can buy bitcoins using the cex.io exchange"
  />
}

### Wallets

As explained earlier, a Bitcoin address is like a bank account. A Bitcoin transaction is sent to an address. This address is publicly available, much like your bank account number. 

Every address has a secret key, much like the signature that you use to withdraw funds from your bank account.

Suppose one of your addresses has $10 worth of Bitcoins. To spend that, you will need to create a new transaction by using your secret key for that address.

These days, you will use a different address for each transaction: this is to increase your anonymity. Therefore you will have many addresses, you need to store those related secret keys in a secure place: this is where a "wallet" is used.

[Bitcoin wallets](https://bitcoin.org/en/choose-your-wallet) also provide a simple interface to perform transactions: this eases the worry of managing multiple secret keys and addresses.

${
  <Image
    src="https://user-images.githubusercontent.com/50838/28485999-6bfaf6fa-6e9b-11e7-91e8-f41fbf25922e.png"
    width={650}
    title="This is a popular online wallet hosted at https://blockchain.info. (The numbers in the image are edited)"
  />
}

Types of Bitcoin wallets include:

* software wallets
* hardware wallets
* paper wallets
* online wallets

and some other new types.

Each type of wallet has its own pros and cons. Using an online wallet is convenient, while using a paper wallet with a local Bitcoin node provides excellent security and control.

## Distributed Nature of Bitcoins

Now that we have a good understanding of how Bitcoin works, let us analyze how it is distributed across the world.

There are three major stakeholders in the Bitcoin network who controls it. They are:

* Miners
* Exchanges
* Wallets

### Miners

While you can mine for Bitcoins yourself, your odds of winning is very small. So you may choose to join a mining pool. But then you will no longer be able to validate transactions. The transactions will be validated by the person who runs the mining pool while you do the computations.

As mining becomes more and more centralized, even though many participate in mining, only a few validate transactions.

${
  <Image
    src="https://user-images.githubusercontent.com/50838/28486192-7ed7cb66-6e9d-11e7-8a84-c97e090aab5a.png"
    width={650}
    title="This is the distribution of the bitcoin mining network. Only a few mining pools control it."
  />
}

### Exchanges

You can buy some Bitcoins by using an exchange. However, only a few exchanges exists and they each have their own restrictions. For example, some exchanges (like [Coinbase](https://www.coinbase.com/)) are not available in some countries. 

There are still not many products and services that you can purchase with Bitcoins, you will need to cash out Bitcoins at some point.

This makes exchanges significant in the Bitcoin circulation.

### Wallets

As a regular Bitcoin user, it is unlikely that you will run a Bitcoin node to maintain secrets and create transactions. You may be using some form of an online wallet or a remote node. Some of those wallets have great security measures, so you are in good hands.

However, you won't be validating transactions — that happens in a remote node or an online wallet service.

---

As mentioned, while many are involved in the Bitcoin network, the problem is that only a few major players control it, just like with traditional currencies.

### Issues of network control

Since only a few entities control the Bitcoin network, it may defeat the value of the distributed nature of Bitcoin.

Here are some major issues:

1. Mining pools could create incorrect transactions.
2. Exchanges can freeze your Bitcoins or block you from using them.
3. Wallet services can block some transactions.

### Unlikely to happen

If the major mining pools starting to work together, they could create invalid transactions. (Like sending 1000 bitcoins to themselves). But wallet services and exchanges won't accept those transactions.

Then miners will not be able to cash out or redeem Bitcoins: this will affect their mining business.

It's possible to freeze or steel Bitcoins in an exchange, but then it'll affect the credibility of the exchange. Anyway, you could always keep your bitcoins inside a wallet you control. So, exchanges can't do anything about them.
They could also block you from using the exchange. But there are alternatives.

If a wallet service block transactions, users may respond by using alternative services or running wallets by themselves — this will also impact the acceptability of the wallet service.

Even above mentioned issues are valid, they are unlickly to happen.

### Acting together

If all stackholders can act together, they could do anything in the Bitcoin Network. They probably do that for a good cause. But if that affects users, the public will loose the trust for Bitcoin. 

Then the value of the Bitcoin goes down. Then the profits of these stakeholders goes down as well. 

So it's safe to assume, that's something they don't want to happen.

### August 1st, 2017

If you follow the news, you may have heard that a [huge change](https://news.bitcoin.com/august-1-potential-disruption-bitcoin-network/) is coming to the Bitcoin network on August 1st, 2017: it is a software change generally known as SegWit. It will fix bugs in the Bitcoin network while making it possible to scale Bitcoins in the future. 

> Currently, we can only do less than five Bitcoin transactions per second; that is very slow for a global payment system.

The SegWit depends on the consensus of the Bitcoin community: the majority of Bitcoin stakeholders need to use the updated software by August 1st to activate it.

Due to some politics surrounding SegWit, different parties wanting to accomplish different things with this software change. After the announcement of the August 1st deadline, the general public was not sure what was going to happen — this led to a sudden drop in the value of the Bitcoin. 

After miners began to show an interest in adopting SegWit, Bitcoin price recovered.

${
  <Image
    src="https://user-images.githubusercontent.com/50838/28486354-cbd0775a-6e9e-11e7-84be-714fdba9853e.png"
    width={650}
    title="This is the above mentioned price drop."
  />
}

> This is a good example of how public users can influence main stakeholders with the price of Bitcoin.

## Conclusion

Bitcoin is not a massively distributed currency as it was promised when it was first introduced. Only a few entities possess control of the Bitcoin network, but none of them are working together to regulate the network (which can be seen as a good thing). 

However, if these entities start to collaborate and control the network, Bitcoin will be like other traditional currencies or worse. The benefits of using Bitcoins will be lost and that could be the end of the Bitcoin.

${<NewsLetter.Cryptocurrency />}
`)