import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Code from '~/components/Code'
import Note from '~/components/Note'
import Question from '../../components/Question'

const q1 = (
  <Question
    id = "typescript-is-a-dev-tool-q1"
    question = "What's the issue with this code block?"
    answers = {[
      "This is incorrect TypeScript syntax",
      "There is no input validation",
      "You missed the return statement",
      "There is no issue with this code block"
    ]}
    correctAnswer = {1}
    points = {30}
    explaination = {markdown(components)`
According to TypeScript, there is no issue with this code. But what if  \`req.body\` is not a valid JSON. Even it's a valid JSON string, what if \`req.body.transaction\` is not a number.   
    `}
  />
)

const q2 = (
  <Question
    id = "typescript-is-a-dev-tool-q2"
    question = "These third-party libraries are written with Typescript. So, why do I still need to worry?"
    answers = {[
      "They might use directives like @ts-ignore",
      "They might not validate input correctly",
      "Those types could be wrong with the actual implementation",
      "All of the above",
      "No. We don't need to worry"
    ]}
    correctAnswer = {3}
    points = {30}
    explaination = {markdown(components)`
Typescript type safety is a dev time assurance. In the runtime, nothing is preventing from breaking types. Here are some potential cases which might break types:

* They might use directives like @ts-ignore. 
* They might not validate inputs correctly.
* Those types could be wrong with the actual implementation.

TypeScript does not offer runtime type safety. In practice, there no difference in JavaScript and TypeScript at runtime.
    `}
  />
)

export default WithDoc({
  title: 'TypeScript is a Dev Tool; Not Your Test Suite',
  description: 'This is not another article shitting on TypeScript, but trying to show what it offers and what it doesn\'t.',
  image: 'https://user-images.githubusercontent.com/50838/82894473-40c49500-9f70-11ea-9bb0-82930bcaa13f.png',
  slug: 'typescript-is-a-dev-tool-not-your-test-suite',
  date: 'May 26, 2020',
  links: {
    twitter: 'https://twitter.com/arunoda'
  }
})(markdown(components)`

This is not another article shitting on TypeScript, but trying to show what it offers and what it doesn't.

${
  <Image
    src="https://user-images.githubusercontent.com/50838/82894593-6ea9d980-9f70-11ea-8d4d-a608557c39fb.png"
  />
}

Sometimes, developers(and managers) think that using TypeScript will fix bugs or reduce potential bugs. In reality, TypeScript has very little to do with bugs, but it gives you these benefits (among others):

* Reduce human errors (This will prevent some bugs for sure)
* Faster development with code intelligence
* A form of documentation due to the use of types

## So, what's missing?

It doesn't protect you from runtime errors. Let me share an example:

${<Code language="ts">{`
interface Payload {
    email: string
    transaction: number
}

interface HTTPRequest {
    body: string
}

interface HTTPResponse {
    send: (output: string) => void
}

function handleRequest(req: HTTPRequest, res: HTTPResponse) {
    const payload = JSON.parse(req.body) as Payload
    const currentBalance = 5000 - payload.transaction
    const {email} = payload
    res.send(JSON.stringify({ email, currentBalance }))
}
`}</Code>}

${q1}

## Another Example

${<Code language="ts">{`
interface ExternalLib {
  sum: (a: number, b: number) => number;
}

async function calculatePoints(lib: ExternalLib) {
  const newPoints = lib.sum(10, 20);
  return newPoints * 1.1; 
}
`}</Code>}

In this code, we use a third-party library; even it is correctly typed, we are not confident that it will always return a number.

${q2}

Likewise, I can give a ton of examples like this. TypeScript alone cannot handle any runtime errors or knows how to deal with them. It still our job to take care of them.

${<Note>
  So, if you think a bit, TypeScript is an upgrade from ESLint.
</Note>}

## Any Solutions?

Actually, the solutions are not new or specific to TypeScript. It's the usual best practices when making apps. You have to use input validations and write tests. 

For input validation, you can try using [io-ts](https://github.com/gcanti/io-ts). It adds runtime type checking capabilities to Typescript. For that, you have to change how you create types, but that's worth it.

If we talk about tests, I don't think there's anything specific to TypeScript. Just use any framework you like. You'll get notable results when you started to write end to end testing.

## Find the Right Balance

Now we know, TypeScript is not a substitute for testing even though it uses types. TypeScript alone does not make your app bulletproof. 

> So, shall I use it with my projects?

Okay. That's a tough question.

TypeScript adds a build step to your app. If you already have a build step, TypeScript will slow it down.
There's a learning curve as well.

So, converting all your existing projects to use TypeScript may not be a wise idea.

We use TypeScript at [Vercel](https://vercel.com) for new projects and new functionalities. It improves dev time productivity and self-document the codebase, and that's a win for us.

${
  <Note>
    TypeScript is just another devtool. So, think before you decide.
    <br/>
    Don't follow the crowd.
  </Note>
}

Oh! I forgot to mention this.
<br/>
Google for "CoffeeScript." Then maybe "Flow type."

`)
