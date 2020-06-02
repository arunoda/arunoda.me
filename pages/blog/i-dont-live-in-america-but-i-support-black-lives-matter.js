import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'

export default WithDoc({
  title: "I don't live in America. But I support #BlackLivesMatter",
  description: "I just donated, and here's why you should too.",
  image: 'https://user-images.githubusercontent.com/50838/83489386-f55c3a80-a4cb-11ea-9c68-bd097611bab9.png',
  slug: 'i-dont-live-in-america-but-i-support-black-lives-matter',
  date: 'June 2, 2020',
  links: {
    twitter: 'https://twitter.com/arunoda',
  }
})(markdown(components)`

${
  <Image
    src="https://user-images.githubusercontent.com/50838/83489386-f55c3a80-a4cb-11ea-9c68-bd097611bab9.png"
  />
}

[Try to do the same.](https://www.obama.org/anguish-and-action/)

I don't know much about US politics or a lot about the current situation. But things I saw on Twitter and News is just wrong. 

At the same time, I don't support violence and hurting innocent people — no matter which side they are. I am not in a position to advise anyone. But act peacefully and respect everyone.

## So, why am I supporting?

I don't think this is only about Black people or related to recent events anymore. It's about injustice. 

In these years, I have work with many American contributors and friends with open-source projects like [Meteor](https://twitter.com/meteorjs), [Storybook](https://twitter.com/storybookjs), and [Next.js](https://nextjs.org/). So, it's my responsibility to help them when they are in trouble.

<br/>

# Here are some questions you might ask?
<br/>

**Are you just following the Twitter trend?**

In a way, Yes. I follow fellow open-source leaders like [@rauchg](https://twitter.com/rauchg), [@dan_abramov](https://twitter.com/dan_abramov) and [@stolinski](https://twitter.com/stolinski).
What's wrong with that?
<br/>
<br/>

**I live in country XXX; I don't care what happens in the US?**

Even though you don't care, there are many software products, open-source libraries written and contributed by many Americans. So, you are here writing apps, because of them. You need to help them in a situation like this.

I don't ask you to donate or riot. At least try to understand what's going on.
<br/>
<br/>

**See, these rioters are hurting innocent people. Why the fuck I want to support this?**

Me too. If there is violence, police and law enforcement should handle it properly. They deserve any lawful punishment. But still, I don't think that's the majority.
<br/>
<br/>

**Our country had similar events; Americans didn't care about that?**

That could be true. Do you want to do the same? Consider this as an opportunity to bring everyone together and fight injustice. This event should be a lesson for the whole world.

[Be a part of it.](https://www.obama.org/anguish-and-action/)
`)
