import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Code from '~/components/Code'
import Note from '~/components/Note'
import Youtube from '~/components/Youtube'

const noteOnJupyter = markdown(components)`
In the rest of this post, I'm using some fastai-related code. If you need to run them, you will need a machine with a Nvidia GPU.

Here's [my guide](https://arunoda.me/blog/ideal-way-to-creare-a-fastai-node) on how to build such an environment using Google Cloud Platform.
`

const noteOnValidationSet = markdown(components)`
Validation set is a set of images which we don't use to train this classifier.
We can run the trained classifier with that set and validate the accuracy of our classifier.
`

export default WithDoc({
  title: 'Getting Started with fastai Deep Learning Framework',
  description: 'This is my experience on using Fast.ai to create a deep learning classifier which could differentiate between ten different vehicle models with the accuracy of 97%.',
  image: '-',
  slug: 'getting-started-with-fastai',
  date: 'October 30, 2018',
  links: {
    twitter: '',
    facebook: ''
  }
})(markdown(components)`
This is my experience on using [fastai](http://www.fast.ai/) to create a deep learning classifier which could differentiate between ten different vehicle models with the accuracy of 97%. 

This is not something groundbreaking. The interesting thing is that I just did it with a little amount of code and using some common sense. 

A few years ago, this could be a Ph.D. research.

## Preparing the Dataset

First of all, I needed some images. Google was my friend. I used [this tool](https://github.com/hardikvasa/google-images-download) to download a set of images from Google. Here's the complete command I used:

${<Code language="bash">{`
googleimagesdownload --limit 20 --keywords "Honda Fit, Jeep Wrangler" --format jpg 
`}</Code>}

With this command, it downloads 20 images for both “Honda Fit” and “Jeep Wrangler.” Just like that, you can list as many keywords as you want.

> For the final dataset, I've downloaded 150 images for each keyword.

${
  <Image
    src="https://user-images.githubusercontent.com/50838/47656602-667f9180-dbb5-11e8-88ec-ad741b8ce6ea.png"
  />
}

Then, I browsed through the downloaded images and removed images which were not relevant. After that, I resized these images to the size that I was going to use in my classifier. (Which is 224px * 224px).

For that, I used a simple bash script, which utilizes [ImageMagick](https://imagemagick.org/script/download.php).

${<Code language="bash">{`
#!/bin/bash
SRC="downloads"
DEST="images"

rm -rf $DEST
mkdir -p $DEST

cd $SRC
find . -maxdepth 1 -mindepth 1 -type d -exec convert {}/*.jpg -resize 224x224^ ../$DEST/{}.jpg \; 
`}</Code>}

> Actually, you really don't need to resize these images. But my internet connection was very slow. So resizing helped me to upload them quickly.

Then I created a tarball with these images:

${<Code language="bash">{`
tar cvzf fastai-vehicles.tgz images
`}</Code>}

I uploaded the resulting tarball into a GitHub [release](https://github.com/arunoda/fastai-courses/releases/tag/fastai-vehicles-dataset), so I could easily use them in my notebooks. 

${
  <Note>{noteOnJupyter}</Note>  
}

## The Notebook

Here, I'm using an interactive development environment called [Jupyter notebooks](http://jupyter.org/). A notebook is just like a blog post, but with some code blocks and output of those. It's the de-facto standard in data science related projects.

Since we have the notebook, I won't mention each and every step I did. But If you like to follow along, here's [the notebook](https://github.com/arunoda/fastai-courses/blob/master/dl1/projects/vehicles.ipynb).
If you have a fastai setup, you can clone [this repo](https://github.com/arunoda/fastai-courses) and run this notebook.

You can also watch this screencast to see how I develop this classifier.

${
  <Youtube
    overlay="https://user-images.githubusercontent.com/50838/47286724-8ccd8c00-d60d-11e8-946d-f7d40366460a.png"
    src="https://www.youtube.com/embed/quMRkV-zGq0"
    height={360}
  />
}

## Initial Model

As per the first step, I used an already build model called "resnet34". Basically, it's a publicly-available model which is pre-trained for a huge amount of images.

So, instead of building my classifier from scratch, I can build it on top of resnet34.

> Basically, it's like teaching a kid to identify these vehicles who already knows the difference between a car and bus.

In order to do that, I run the following code:

${<Code language="python">{`
learn1 = ConvLearner(data, models.resnet34, metrics=error_rate)
learn1.fit_one_cycle(4)
`}</Code>}

Here's the result of this:

${<Code language="bash">{`
Total time: 00:18
epoch  train_loss  valid_loss  error_rate
1      2.189602    1.205166    0.409910    (00:04)
2      1.493517    0.697307    0.229730    (00:04)
3      1.112668    0.571896    0.189189    (00:04)
4      0.900561    0.565570    0.202703    (00:04)
`}</Code>}

This model trained for four times with our dataset. In the end, it gave us an error rate of 20%. That means, it incorrectly identified 20% of the images on the validation set.

${<Note>{noteOnValidationSet}</Note>}

An **error rate of 20%** is not bad to start with, but we can do better.

## Unfreezing

This pre-trained model "resnet34" has 34 layers. But we only trained it with the last layer. With unfreezing, we can train our images with all the layers. Hopefully, we can get a better result. 

It doesn't always give us a better result, but we can always try.

Before that, we need to find the learning rate for our model. For that, run the following command:

${<Code language="python">{`
learn1.lr_find();
learn1.recorder.plot();
`}</Code>}

It will give us the following graph. 

${
  <Image
    width="300px"
    src="https://user-images.githubusercontent.com/50838/47656231-b3af3380-dbb4-11e8-8937-24888ec4dcb9.png"
  />
}

Learning rate is a constant which affects the performance of the model. If it's higher, it'll train faster, but it might lead to incorrect results. If it's lower, it'll be slower, and we might not get the result.

By default, Fast.ai uses a good default learning rate. But with the unfreezed model, it's better to specify a range of learning rates manually.

For that, we select a range which has a downward slope from the above graph. In this case, it's 10^-4 to 10^-2. 
Now we can train again:

${<Code language="python">{`
learn1.unfreeze()
learn1.fit_one_cycle(3, slice(1e-4, 1e-2))
`}</Code>}

This gave us an **error rate of 10%**. So, this is a good improvement from the 20% error rate which we had before.

## With resnet50

This is also a pre-trained model like resnet34 but with 50 layers. Hopefully, this would give us better results.

${<Code language="python">{`
learn2 = ConvLearner(data, models.resnet50, metrics=error_rate)
learn2.fit_one_cycle(4)
`}</Code>}

This gave us an **error rate of 18% and 11%** after unfreezing.

> It's not a significant improvement. It seems like I am doing something wrong here.

## Using Square Images

Usually, a picture of the vehicle is a rectangle. But when we are training the classifier, we need to give it a square.
So, fastai automatically crops images like this:

${
  <Image
    src="https://user-images.githubusercontent.com/50838/47656228-b3169d00-dbb4-11e8-8960-0a05672cd58a.png"
  />
}

As you can see, we are not feeding the whole vehicle to the classifier. I thought that's the problem.
So, I resized these images as a square, like below:

${
  <Image
    src="https://user-images.githubusercontent.com/50838/47656233-b3af3380-dbb4-11e8-8324-695bb63881c7.png"
  />
}

To resize, I use the following code:

${<Code language="bash">{`
#!/bin/bash
SRC="vehicles-fastai-original"
DEST="images"

rm -rf $DEST
mkdir -p $DEST

cd $SRC
find . -maxdepth 1 -mindepth 1 -type d -exec convert {}/*.jpg -resize 224x224 -gravity center -extent 224x224 ../$DEST/{}.jpg \;
`}</Code>}

I ran this dataset against both resnet34 and resnet50. But it gave me a similar result as before. 
Actually, it was worse than before.

It could be due to the details of the image. Even though my classifier could see the whole vehicle, it had more white space due to the way I resized these images.

## With Multiple Crops

I certainly believed there was something wrong with my dataset. Instead of making a square image as before, I asked myself: what if I could create multiple crops which covered the whole rectangle. 

Have a look at the example below:

${
  <Image
    src="https://user-images.githubusercontent.com/50838/47656230-b3169d00-dbb4-11e8-8468-1e09cea2a32c.png"
  />
}

With that, I could feed more details into my model with the same set of images I downloaded. With that approach, I created a new dataset with the following resize script:

${<Code language="bash">{`
#!/bin/bash
SRC="vehicles-fastai-original"
DEST="images"

rm -rf $DEST
mkdir -p $DEST

cd $SRC
find . -maxdepth 1 -mindepth 1 -type d -exec convert {}/*.jpg -resize 224x224^ -gravity center -extent 224x224 ../$DEST/{}-center.jpg \;
find . -maxdepth 1 -mindepth 1 -type d -exec convert {}/*.jpg -resize 224x224^ -gravity east -extent 224x224 ../$DEST/{}-east.jpg \;
find . -maxdepth 1 -mindepth 1 -type d -exec convert {}/*.jpg -resize 224x224^ -gravity west -extent 224x224 ../$DEST/{}-west.jpg \;
`}</Code>}


As expected, I received an **error rate of 7% with resnet34 and 3% with resnet50**. Unfreezing didn't help me in this case. 

> This version of the classifier did a very good job with the 97% accuracy. 

Here's the set of images our classifier predicted incorrectly:

${
  <Image
    width="570px"
    src="https://user-images.githubusercontent.com/50838/47661273-b9117b80-dbbe-11e8-9e5a-e68ffd0dc3ae.png"
  />
}

I think some of these errored images are not that easy to classify. As a overall fact, the classifier did a terrific job.

---

With fastai, building an accurate classifier is not as difficult as it seems. It was just some code and using some common sense.

All these possible to the great work done by fast.ai and all the people who work hard to build these pre-trained models and libraries.
`)
