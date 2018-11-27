import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'

const fastaiShellInfo = markdown(components)`
This is [fastai-shell](https://github.com/arunoda/fastai-shell). It will allow you to create a GPU based instance starting from just $0.2/hour.
`

export default WithDoc({
  title: 'Top 3 Myths About Deep Learning',
  image: 'https://user-images.githubusercontent.com/50838/49079724-67185000-f267-11e8-95cc-32641ba47733.jpg',
  description: 'There are a lot of myths about deep learning. Let\'s have a look at them.',
  slug: 'top-3-myths-about-deep-learning',
  date: '27 November, 2018',
  links: {
    twitter: '',
    facebook: ''
  }
})(markdown(components)`

{<Image
  src="https://user-images.githubusercontent.com/50838/49079724-67185000-f267-11e8-95cc-32641ba47733.jpg"
/>}

Every time I started trying to study deep learning, I got stuck. But not this time, thanks to [fast.ai](https://www.fast.ai/). After two months of deep learning experience, I understand why I got stuck before.

I can group them into three myths. Let’s discover.

## #1: Deep learning requires expert knowledge.

Deep learning is an ocean of jargon. Here are some of the trickier words and phrases:

  * neural network and layers
  * Sigmoid, ReLU, and activation functions
  * learning rate
  * convergence

These terms looks scary at first. But if you get a good foundation in deep learning, you'll know that these are simple things.
And if you use the right tool, you won't need to worry at all about most of this stuff.

In order to practice deep learning and solve day-to-day problems, you don't need a PhD. If you are familiar with basic programming fundamentals, you are good to go.

## #2: Deep learning is time consuming.

You may have heard that you need to have a lot of data to train in a deep learning model, and that it will be time-intensive as a result, taking days and months of training.

Actually, that argument is not always false. But with recent developments in deep learning, it is also not always true. That's basically due to the following things:

* Better hardware: We have powerful GPUs that we can use to train quickly.
* Better techniques: We have tools like learning rate finders, which minimize training cycles.
* Transfer learning: We can use previous results, so we don't need to start from scratch.

I'd like to talk a bit more about transfer learning, which I really like. It's similar to using a third-party software library. Let me give you an example:

### IMDB Classification:

There's a popular [dataset](http://ai.stanford.edu/~amaas/data/sentiment/) extracted from IMDB reviews. It also shows the reaction of the user (negative or positive) for a given review. Our task is to predict the reaction just by looking at the review itself for a different set of data.

This used to be a tough job requiring a lot of training. But not anymore. This is how we can do it today:

* We have a pre-trained English language model, which understands English well.
* Then we need to train this IMDB dataset for classification using the above pre-trained model.
* The language model understands English well, so that helps a lot with the classification.

That's transfer learning.

We can train this dataset in about an hour with approximately [94% accuracy](https://nbviewer.jupyter.org/github/fastai/course-v3/blob/master/nbs/dl1/lesson3-imdb.ipynb). This is very close to state-of-the-art accuracy (95%) for this dataset.

## #3: Deep learning is very expensive.

I already mentioned that we use GPUs for deep learning. We could use traditional gaming GPUs, and there are some powerful GPUs made especially for deep learning. They tend to be very expensive. This Tesla v100 GPU costs almost [$6000](https://www.amazon.com/PNY-TCSV100MPCIE-PB-Nvidia-Tesla-v100/dp/B076P84525).

However, we don't need to buy these GPUs in order to work with deep learning. We can use cloud GPUs from cloud service providers like AWS or Google. For the previously mentioned v100 GPU, you would pay around $2.50/hour, and there are ways to [cut down](https://github.com/arunoda/fastai-shell) this cost to something around $0.80/hour.

${
  <Image
    src='https://user-images.githubusercontent.com/50838/48072112-d3240d00-e201-11e8-860d-22bc5a9697ee.png'
    title={fastaiShellInfo}
    href='https://github.com/arunoda/fastai-shell'
  />
}

If you are just getting started, you can use FREE trial credits from these cloud vendors, or use free services like [Google Colab](https://colab.research.google.com/).

## Myths Are Not Always Myths

Myths often contain a grain of truth. For example, you might find deep learning more difficult if:

* You are trying to invent a new algorithm
* You can't use transfer learning, or there is no public research related to your task
* You are trying to achieve prediction accuracy close to 100%

But for day-to-day problems, you should be able to use deep learning.

## Deep learning is hard

It's not difficult to get started with deep learning and use it for your own projects. But it's also not a simple task. You need to acquire data, clean it for deep learning, select the proper tools and techniques, and deploy models into production, among many other things.

Deep learning is as hard as any other software engineering project. But it's something you can definitely do.

---

I am in no way an expert in deep learning or data science. This is just what I have learned over the last couple of months. To me, fast.ai was the turning point.

If you are still struggling on the deep learning track, try [fast.ai](https://github.com/arunoda/fastai-shell). You won't regret it.

`)
