import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Code from '~/components/Code'
import Note from '~/components/Note'

const noteOnMyGpuChoice = markdown(components)`
I use Paperspace since it is the middle ground between Crestle and AWS. It costs around 0.50 USD an hour for the GPU usage.

I think most of us can spare 1 USD per day to learn something really useful for 2 hours.
`

export default WithDoc({
  title: 'Introduction to Fast.ai',
  description: 'Fast.ai is the best way to get started with AI. This is my introduction to it.',
  image: 'https://user-images.githubusercontent.com/50838/47049269-6bf2da00-d1ba-11e8-9a7a-a13bd789f874.png',
  slug: 'introduction-to-fastai',
  date: 'October 17, 2017',
  links: {
    twitter: '',
    facebook: ''
  }
})(markdown(components)`
I wanted to be good at Artificial Intelligence (AI), specially in deep learning and machine learning, as it is something important in a developer's toolbox. In the last couple of years, I followed a few popular AI courses from [Andrew Ng](https://www.coursera.org/learn/machine-learning), Coursera and Udacity.

However, I never finished those courses because I lost interest. I don't blame those courses per se, but for me the problem lay with how the courses were organized; they introduced a lot of math or very complex code right from the beginning.

_So... I'm still not good at AI._

Then something called [fast.ai](http://www.fast.ai/) changed my perception of AI.

> This is a beginner's introduction to fast.ai. If you are an expert in this field, I think you can ignore the rest of this blog post. :D

## What is fast.ai? 

If you visit the [fast.ai](http://www.fast.ai/)website, you'd think it's just another blog. If you hopover to their [MOOC](http://course.fast.ai/), you'd think it just looks like a set of videos recorded in some university classroom. If you check [fast.ai'](https://github.com/fastai/fastai)s GitHub repository, you'd definitely ask, "What the hell is this?"

Yet despite what it looks like, what's behind fast.ai is very interesting.

It is a research lab started by [two people](http://www.fast.ai/about/), one a former President of Kaggle and the other a well known expert in AI. Their mission is to make AI accessible for all.

${<Image 
    src="https://user-images.githubusercontent.com/50838/47047606-a1e18f80-d1b5-11e8-93d9-7eac0c5a56e4.jpg"
    title="Jeremy Howard and Rachel Thomas, founders of fast.ai"
  />
}

fast.ai can be described as a research lab bundled with courses, an easy-to-use Python library with a huge community. Their library wraps popular deep learning and machine learning libraries for common workflows and provides a user-friendly interface.

Most importantly, it follows the **"bottom up"** approach. 

"Bottom up" is exactly like how we learn a sport. We start by trying to play it, without worrying about rules. Once we are confident, we learn the rules and tricks one by one.

Similarly, fast.ai allows us to build a model using only a few lines of code. After that, we can improve it further.
For example, have a look at the following code:

${
  <Code language="python">{`
PATH = 'location/to/images/to/train'
arch = resnet34
data = ImageClassifierData.from_paths(PATH, tfms=tfms_from_model(arch, sz))
learn = ConvLearner.pretrained(arch, data, precompute=True)
learn.fit(0.01, 3)
  `}
  </Code>
}

Using this code, I build an image classifier which could detect elephants and lions with 95% accuracy. 

${
  <Image
    src="https://user-images.githubusercontent.com/50838/47048045-defa5180-d1b6-11e8-994d-81e510c363ab.png"
    title="Validating the above model with some random images"
  />
}

## Computing Resources

In order to follow these courses, you would definitely need to use a GPU from Nvidia. Unless you own a gaming PC, it is unlikely that you have a Nvidia GPU.
Even if you have a Nvidia GPU, you may need to download a lot of data from the internet to train models.

The best option is to use a Cloud GPU. 

Here are some options for you:

### Crestle

[Crestle](https://www.crestle.com) is the easiest option to get started with. It costs about US$0.60 per hour.
You don't need to set anything up, just start learning.


### Paperspace

[Paperspace](https://www.paperspace.com/) has a range of GPU options for you to choose from. The starter option is cheaper and more powerful than Crestle.
The downside is that you would have to spend an hour or so to do the [initial setup](https://github.com/reshamas/fastai_deeplearn_part1/blob/master/tools/paperspace.md). It could be difficult if you don't have some Linux experience.


### AWS and GCE

Both of these cloud providers have a wide range of GPU options and they could be more cost-efficient than Paperspace in the long run (especially by using spot instances).
You could also utilize FREE sign up credits.

Google for "fastai aws" or "fastai GCE" to get started.


### Google CoLab

With [Google CoLab](https://colab.research.google.com/), you can get a GPU for FREE. As it's mainly built for Tensorflow (Google's deep learning toolkit), running fast.ai on CoLab is challenging.
If you have time to experiment, you could try making it work for fast.ai.

${
  <Note>{noteOnMyGpuChoice}</Note>  
}

## Fast.ai v1

fast.ai recently [released v1](http://www.fast.ai/2018/10/02/fastai-ai/) of the library with a lot of improvements. However, there are no tutorials or guides to use it, unless you are already familiar with fast.ai and how it works.

Fortunately, the team is starting a live course for fast.ai v1 on October 22nd. Unfortunately, enrollment in the course is now closed.

After October 22nd, you can expect to see tutorials on how to use the fast.ai library v1. I'm also planning to write a series of blog posts as I'm taking the course.

Everyone will be able to access this new course early next year. But please don't wait, visit <http://course.fast.ai> and start learning today.
`)
