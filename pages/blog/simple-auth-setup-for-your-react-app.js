import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'
import Note from '~/components/Note'
import Image from '~/components/Image'
import Code from '~/components/Code'

const finalNote = (
  <Note>
    {markdown(components)`
You need to install the \`@magic-sdk/admin\` NPM module and get the "Secret Key" from the Magic Link [dashboard](https://dashboard.magic.link). 
    `}
  </Note>
)

export default WithDoc({
  title: 'Simple Auth Setup for Your React App',
  image: 'https://user-images.githubusercontent.com/50838/82573539-89143980-9ba3-11ea-81ef-efedbf7ac994.png',
  description: 'There are a lot of myths about deep learning. Let\'s have a look at them.',
  slug: 'top-3-myths-about-deep-learning',
  date: '22 May, 2020',
  links: {
    twitter: 'https://twitter.com/arunoda'
  }
})(markdown(components)`

I recently got super excited about Deeplearning, and wanted to share my experience. So, I created [Deeplearning Mantra](https://deeplearningmantra.com/). I needed to add login functionality to it, but existing solutions are not that simple and hard to manage.

${
  <Note>
    This app is just a side project. I have limited time to spend on it.
  </Note>
}

Then I found [Magic Link](https://magic.link/). It's simple and easy to use. Here's how it works:

* User enter the email and waiting for the login to complete
* They receive an email with a link.
* User clicks on it
* Boom, user enter to the app
<br/>

Try this example app:
${
  <Image
    src="https://user-images.githubusercontent.com/50838/82573539-89143980-9ba3-11ea-81ef-efedbf7ac994.png"
    href="https://nextjs-magic-bank.now.sh"
    title="Click this image to visit https://nextjs-magic-bank.now.sh"
  />
}

## Integrating with Your React App

Magic Link API is simple to use. But, I made it super simple with this React Hook: [use-magic-link](https://github.com/arunoda/use-magic-link). Here's how to use it:

> Before we do that, create an account on [Magic Link](https://magic.link/) and get the "Publishable Key".

Let's say; you want login/logout functionality, here's how to do it:

${
  <Code language='javascript'>{`
// Get this with "yarn add use-magic-link"
import useMagicLink from 'use-magic-link'

export default function Home() {
  // create the hook
  const auth = useMagicLink('<Publishable Key>');

  function loginNow() {
    const email = prompt('Enter your email');
    auth.login(email);
  }

  function getContent() {
    // Show a loading screen until we detect the login-state
    if (auth.loading || auth.loggingIn || auth.loggingOut) {
      return '...'
    }

    // Show this, if logged in
    if (auth.loggedIn) {
      return (
        <div>
          You are logged-in.
          <br/>
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      )
    }

    // Show this, if not logged-in
    return (
      <div>
        <button onClick={loginNow}>Login Now</button>
      </div>
    )
  }

  return (
    <div className="container">
      <main>
        <h1>Next.js Bank</h1>
        <div className="content">{getContent()}</div>
      </main>
    </div>
  )
}  
  `}</Code>
}

It's that simple.

## What about Data Fetching?

Having just the login-state in a client app is not enough. You may need to interact with a database, a CMS, or some APIs. With \`use-magic-link,\` that's pretty simple too.

Whenever you want to do an API call, use the \`fetch\` instance provides by the hook.

For example, here's how you can create a simple Bank statement that gets data from an API:
(In this case, we use Next.js's built-in [API routes](https://nextjs.org/docs/api-routes/dynamic-api-routes))

${
  <Code>{`
import { useState, useEffect } from 'react';
import useMagicLink from 'use-magic-link'

export default function BankStatement() {
    const auth = useMagicLink('<Publishable Key>');
    const [statement, setStatement] = useState(null);

    useEffect(() => {
        if (auth.loggedIn) {
            auth.fetch('/api/statement')
                .then(res => res.json())
                .then((payload) => {
                    setStatement(payload);
                })
        }
    }, [auth.loggedIn])

    if (!auth.loggedIn) {
        return (<div>Not Authorized!</div>)
    }

    if (statement === null) {
        return (<div>Checking your statement ...</div>)
    }

    return (
        <div>
            Hello "{statement.email}", your balance is: {statement.balance} USD.
        </div>
    )
}
  `}</Code>
}

${
  <Note>
    You can put this "BankStatement" component anywhere in your app.
  </Note>
}

Inside the Next.js API route, we need to authenticate the request and here's how we are doing it:

${
<Code>{`
import { Magic } from '@magic-sdk/admin'
const magic = new Magic('<Magic Secret Key>')

function sendError(res, error) {
  console.error(error.stack);
  res.statusCode = 401
  res.json({
    error: {
      message: 'Unauthorized'
    }
  })
}

export default async (req, res) => {
  const magicToken = (req.headers.authorization || '').replace('Bearer ', '')
  try {
    // Authorize the request
    const metadata = await magic.users.getMetadataByToken(magicToken)
    
    // send the statement
    res.statusCode = 200
    res.json({ balance: 3000, email: metadata.email })
  } catch (err) {
    sendError(res, err)
  }
}
`}</Code>
}

${finalNote}

Here's the final result:

* [App hosted on Vercel](https://nextjs-magic-bank.now.sh)
* [Source code on GitHub](https://github.com/arunoda/nextjs-magic-bank)

---

With "use-magic-link" React hook, we can add a login system to your React app in a few minutes. It saves your time to do things that matter.


`)
