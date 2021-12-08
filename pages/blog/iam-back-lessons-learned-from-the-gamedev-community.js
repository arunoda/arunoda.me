import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Note from '~/components/Note'

const subscribe = (
  <Note>{markdown(components)`
You can [subscribe](https://buttondown.email/arunoda) to my NewsLetter to get them right into your inbox.
  `}</Note>
)


export default WithDoc({
  title: 'I\'m Back! - Lessons Learned from the GameDev Community',
  description: "",
  image: '',
  slug: 'iam-back-lessons-learned-from-the-gamedev-community',
  date: 'December 8, 2021'
})(markdown(components)`

After [leaving Vercel](/blog/thank-you-vercel) in June 2020, I wanted a fresh start. I tried to start teaching online & it didn't work well. So, I made a U-turn & start learning 3D. Eventually, I ended up making tools for game developers & 3D artists.

Currently, I am selling those tools on the [Unreal Engine marketplace](https://www.unrealengine.com/marketplace/en-US/profile/ArunodaSusiripala) & they are trending & we have a healthy community. I also make tutorials on [Youtube](https://www.youtube.com/GDi4K). And I even teach [3D Math](https://www.udemy.com/course/math-for-unreal-engine/) for game developers as well.

Due to some personal reasons, I wanted to get back into web development. But, I wanted to bring some of the key lessons I learned from the game-dev/3D community. Let me share with you some of those.

## No Code Rules

If you wanted to make games, you want to work with the GPU & work with shaders. In other words, you want to write Math related code that renders things on the screen. At the same time, you want to write game-related logic & work with animations & so on.

For a web developer like me, this seems quite difficult. Interestingly, most of these games are created by artists & developers just like you & me. Definitely not by Math wizards. I wondered, how they are doing this.

The answer is simple. They are using no-code tools like graph editors & reusing a lot of pre-built functionality. So, it's super easy for almost anyone to do something complex without digging through Math & code.

${
  <Image
    title="Here's a screenshot of the GPU shader creation tool available in Unreal Engine"
    src='https://user-images.githubusercontent.com/50838/145187292-925ae180-bd2a-46c1-b213-fa0ac1777255.png'
  />
}

Basically, you can connect these nodes & create very complex rendering logic which runs on the GPU. You can rewire them, experiment & create something beautiful.

Still, there's a huge role for knowing Math & how to write code. But 90% of the things can be done with these no-code tools.

### What we can learn

I'm not trying to say what we do with web-dev is simple. But basically, we need to build an interface between the user & some third-party server (or a database). Even after 10 years of my web dev experience, I don't see any mainstream no-code platform/framework for building websites in such a way.

I used to make dynamic webapps with frontpage & dreamweaver. Now, things are way more complicated than that.

> I know about webflow, is it a mainstream tool? Can we build a proper app with that? Are you using it?

Instead, we are wasting our time building new frameworks which try to do the same thing in a slightly different way. Also, we are trying to adapt to technologies introduced by some hosting providers. Those are not simplifying the existing workflow, but pass the burden to developers & to a different service provider.

No no. I'm not talking about Lambdas 🤣

## Sustainable Community

Unreal Engine & Unity are the two major players in the game dev community. None of these projects are open-source in the traditional way. Even though it's FREE to get started, you need to pay at some point. (Especially if you are making money, which makes sense.)

Apart from developers who make games, there's a huge community of people who make plugins & third-party content. They sell those plugins in a marketplace. If you create a good product, you can make a comfortable living from those sales. I am talking from my experience on selling plugins in the unreal engine marketplace.

Interestingly, the people who bought these plugins actively communicate with developers for asking questions, requesting features & even helping to iron out bugs. It's almost similar to any of the OpenSource communities I work with including Next.js & MeteorJS.

Unlike in open-source communities, it's a sustainable model.

${
  <Image
    title="This is the Unreal Engine Marketplace"
    src='https://user-images.githubusercontent.com/50838/145190554-ea6e8e47-e50f-4b21-bf71-b2fa31807c65.png'
  />
}

### What we can learn

Most of the open-source web dev projects these days are based on MIT or a similar license. It's quite hard to make a living by making these projects for individuals, Even though companies who use these tools earn in millions. That's why almost all of these projects are backed by a company or forced to build a company around it with VC money.
<br/>
(I think Remix Run is the latest victim.)

GitHub is trying to build is a model with donations. But, donations are not a sustainable model & I don't think it gives proper value to the effort made by these developers.

## Strong Typed Languages

Most of the time, game developers use C++, C#, or a no-code product built on top of these languages. So, everything is strongly typed & which makes things simple.

I had some trouble adapting to strongly typed languages. But I was forced & there was no other choice. As a result of that, I was comfortable using IDE tools & which eventually made the development faster.

Most importantly, I could make user interfaces without writing any UI code. All I had to define types for the given class, and the game engine will create a decent UI from those types.

Here's such a UI.

${
  <Image
    title="This input UI is generated from member variables of a C++ class."
    src='https://user-images.githubusercontent.com/50838/145189225-489b92b9-d886-4fbf-b6b6-09ea0ff66fa1.png'
  />
}

### What we can learn

Yeah! We are using Typescript & it's towards a good direction. There are similar UI tools that are similar to what I mentioned above. Still, I think Typescript is a patch & not a proper solution. I don't think any of the browser vendors have plans for native TS support yet. Since web assembly is fully supported in these browsers, I wish we could use C++, C# to build web apps in the future.

I Still believe we should use no-code tools & these strongly typed languages hand-in-hand to build apps faster & add rich functionality.

## What's Next?

These are the top 3 things that come to my mind with my experience working with the game-dev community throughout the last year. Now, building those gamedev-tools became a hobby & it's a part of my life.

Anyway, I am not asking you to ditch Next.js or Typescript & try to sell something I am planning to create. But instead, I am looking to build a language-level no-code solution, which we can use to write apps with a framework of your choice. At least for non-UI-related logic.

I don't have a proper answer to solve the problem that I mentioned related to the unsustainable community in web-dev. Maybe someone could create a version of NPM which has a revenue model similar to Netflix.

---

Thanks for still listening to my words. See you soon with something interesting.

`)
