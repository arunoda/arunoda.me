import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Note from '~/components/Note'
import Code from '~/components/Code'

const subscribe = (
  <Note>{markdown(components)`
👋 I started writing a set of Next.js auth patterns like this. I will publish at least one such pattern every week.

You can [subscribe](https://buttondown.email/arunoda) to my NewsLetter to get them right into your inbox.
  `}</Note>
)

const diagram = (
  <Image
    src="https://user-images.githubusercontent.com/50838/89654950-07e95a80-d8e7-11ea-9d60-b3ecc388076b.png"
    title={markdown(components)`View diagram: <https://git.io/JJPbE>`}
  />
)

export default WithDoc({
  title: 'Add auth support to a Next.js app with a custom backend',
  description: "Here's how to add an auth system to a Next.js app that uses a separate API server.",
  image: 'https://user-images.githubusercontent.com/50838/89654950-07e95a80-d8e7-11ea-9d60-b3ecc388076b.png',
  slug: 'add-auth-support-to-a-next-js-app-with-a-custom-backend',
  date: 'August 7, 2020'
})(markdown(components)`

You can consider Next.js as a full-stack framework because now you can create API routes. If you deploy your into a lambda backed deployment provider, these routes will be lambdas.

But still, there are reasons to use a separate API server. That could be due to many reasons, including:

* You want to have a clear separation between client & server
* You already have a backend
* You want to create your backend using some other language/framework
* You may need to use a database that is not yet optimized for Lambdas (like MongoDB)

Then the question is, how do you communicate between these two. That includes creating a login system that works with both the Next.js app and the API server.

## Use Case: GetStarted

I'm using MongoDB for <https://getstarted.sh>, so I decided to use a separate API server. Also, I like to have a clear separation between the API and UI.

But at the same time, I really like [next-auth](https://next-auth.js.org), which is my favorite auth provider. It's even simpler than setting up Auth0.

So, this is the architecture I come up with:

${diagram}

After the sign-in process, I have to create(or update) a user inside my api-server and return a token in return. Interestingly, all of the other components are managed by next-auth.

${
  <Note>
    🏆 That's a massive win for me.
  </Note>
}

## Implementation

First, you need to setup next-auth with your app. Trust me; you can do that in 30 minutes. You can follow my [step by step guide](https://getstarted.sh/bulletproof-next/add-social-authentication) or follow the [instructions](https://next-auth.js.org/getting-started/example) on the website.

Then we need to customize the next-auth to create a user after the sign-in process. To do that, you need to change \`pages/api/[..next-auth].js\` file with something like this:

${
  <Code language="js">{`
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const providers = [
    Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
]

const callbacks = {}

callbacks.signIn = async function signIn(user, account, metadata) {
    if (account.provider === 'github') {    
        const githubUser = {
            id: metadata.id,
            login: metadata.login,
            name: metadata.name,
            avatar: user.image
        }
    
        user.accessToken = await getTokenFromYourAPIServer('github', githubUser)
        return true
    }

    return false;
}

callbacks.jwt = async function jwt(token, user) {
    if (user) {
        token = { accessToken: user.accessToken }
    }

    return token
}

callbacks.session = async function session(session, token) {
    session.accessToken = token.accessToken
    return session
}

const options = {
    providers,
    callbacks
}

export default (req, res) => NextAuth(req, res, options)
  `}</Code>
}

Now, you have a token which can talk to your api-server inside the \`session.token\` field. You can access this token inside the client-side using \`useSession\` hook as mentioned below.

${
  <Code language="js">{`
const { useSession } from 'next-auth/client'

export default function MyComponent() {
  const [session] = useSession()
  
  if (session) {
    console.log(session.accessToken)
  }

  return <div>MyComponent</div>
}
  `}</Code>
}

If you like, you can even add the user information to the session object using the session callback:

${
  <Code language="js">{`
callbacks.session = async function session(session, token) {
  session.accessToken = token.accessToken
  session.user = getUserFromTheAPIServer(session.accessToken)

  return session
}
  `}</Code>
}

That's it.

---

${subscribe}
`)
