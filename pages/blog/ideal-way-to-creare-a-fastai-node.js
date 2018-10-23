import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'
import Code from '~/components/Code'
import Note from '~/components/Note'
import Youtube from '~/components/Youtube'

const mainFeatures = markdown(components)`
  * create a node with the **Tesla v100** GPU for just **$0.8/hour**
  * create a node with the **Tesla K80** GPU for just **$0.2/hour**
  * create a node with No GPU for just **$0.01/hour**
  * switch between these nodes whenever needed
  * install new tools and save data (won't get deleted when switching)
  * run notebooks by just starting the server (no SSH needed)
  * create a password protected jupyter notebooks environment
`

const noteOnJupyterAccess = markdown(components)`
After creating the VM, you will get an external IP.<br/>
simply visit <http://external-ip:8888> to start working with your notebooks.
`

const noteOnDeleting = markdown(components)`
Deleting the VM won't delete the boot disk we created.<br/>
so we won't lose any data or tools that were installed.
`

const noteOnUsage = markdown(components)`
In addition to the computing power, you'll be charged **$8/month** for the SSD boot disk.<br/>
`

export default WithDoc({
  title: 'Ideal Way to Create a Fastai Node',
  description: 'Get a K80 GPU for $0.2/hour or a powerful v100 gpu for just $0.8/hour. No SSH needed to work on jupyter notebooks. Built for customizations.',
  image: 'https://user-images.githubusercontent.com/50838/47286724-8ccd8c00-d60d-11e8-946d-f7d40366460a.png',
  slug: 'ideal-way-to-creare-a-fastai-node',
  date: 'October 22, 2018',
  links: {
    twitter: 'https://twitter.com/arunoda/status/1054375818460315649',
    facebook: 'https://www.facebook.com/arunoda.susiripala/posts/10157059550078606'
  }
})(markdown(components)`
${
  <Youtube
    overlay="https://user-images.githubusercontent.com/50838/47286724-8ccd8c00-d60d-11e8-946d-f7d40366460a.png"
    src="https://www.youtube.com/embed/quMRkV-zGq0"
    height={360}
  />
}

Fast.ai is pretty cool and I've wrote about [it here](https://arunoda.me/blog/introduction-to-fastai). One of its requirements is to have a Nvidia GPU. There are a couple of [options](https://github.com/fastai/course-v3/tree/master/docs) out there.

Some options are very simple to use but may be expensive. Some options are very flexible to work with but are hard to set up and manage. 

_I wanted something better. This is a result of that._

At the end of this post, you will be able to:

${<Note>{mainFeatures}</Note>}

For all of these, you just need to run a set of commands initially. After that, it's just a single command to start the fastai node.

## Before We Begin

 Here we will be using preemptive instances (spot instances) from Google Cloud. Basically, they will last a maximum of 24 hours and could be killed at anytime. These instances are very cheap.

We are not running production models here, so we can live with those limitations and benefit from the cost advantage. 

To use this, you need to create a [Google Cloud](https://cloud.google.com/compute/) account and [enable billing](https://www.youtube.com/watch?v=Nr7-fQEocgo). Once you've done that, start a Google Cloud [shell](https://console.cloud.google.com/) for your account by visiting this URL or clicking the cloud console button as shown below:

${
  <Image
    title="Click the console icon marked with the red square to start the shell"
    src="https://user-images.githubusercontent.com/50838/47280304-53882280-d5f3-11e8-92d0-c0625b728967.png"
  />
}


We'll be using that shell to invoke the commands mentioned below. You don't need to set up anything locally.

## The Network

We need to create a network for our nodes so we don't interfere with other nodes in your account.

First, let's create the network itself:

${<Code wrap language="bash">{`
gcloud compute --project=$DEVSHELL_PROJECT_ID networks create fastai --subnet-mode=auto
`}</Code>}

Then we need to add a firewall rule to open ports:

${<Code wrap language="bash">{`
gcloud compute --project=$DEVSHELL_PROJECT_ID firewall-rules create allow-all --direction=INGRESS --priority=1000 --network=fastai --action=ALLOW --rules=all --source-ranges=0.0.0.0/0
`}</Code>}

## The Boot Disk

Now we are trying to create our boot disk. For that, we need to create a small temporary VM. For that, run the following command:

${<Code language="bash">{`
gcloud beta compute --project=$DEVSHELL_PROJECT_ID instances create fastai-boot --zone=us-west1-b --machine-type=n1-standard-1 --subnet=fastai --network-tier=PREMIUM --maintenance-policy=TERMINATE --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --accelerator=type=nvidia-tesla-k80,count=1 --image=ubuntu-1804-bionic-v20181003 --image-project=ubuntu-os-cloud --boot-disk-size=50GB --no-boot-disk-auto-delete --boot-disk-type=pd-ssd --boot-disk-device-name=fastai-boot
`}</Code>}

SSH into that box by typing the following command:

${<Code wrap language="bash">{`
gcloud compute --project $DEVSHELL_PROJECT_ID ssh --zone "us-west1-b" "fastai-boot"
`}</Code>}

Now run the following commands to set up the disk:

${<Code wrap language="bash">{`
curl https://raw.githubusercontent.com/arunoda/create-fastai-node/master/setup-gce.sh | bash
`}</Code>}

This will take around 30 minutes to complete. After that, it will reboot the machine.
Once it's rebooted, SSH again with the following command:


${<Code wrap language="bash">{`
gcloud compute --project $DEVSHELL_PROJECT_ID ssh --zone "us-west1-b" "fastai-boot"
`}</Code>}

## Configure Jupyter

Now we need to set a password for our jupyter setup. To do that, run the following commands: 

${<Code language="bash">{`
source activate fastai-v1
jupyter notebook --generate-config
jupyter notebook password
`}</Code>}

Now close the SSH session by typing:

${<Code language="bash">{`
exit
`}</Code>}


We don't need our temporary VM anymore. Let’s delete it:

${<Code wrap language="bash">{`
gcloud compute instances delete fastai-boot --zone=us-west1-b --project=$DEVSHELL_PROJECT_ID
`}</Code>}

## Create The Fastai Node

Now everything is ready. We can create a node with one of the following types. Select an option you like and apply the command in the cloud shell:

### 1. POWERFUL GPU ($0.8/HOUR):

This is a setup with Tesla v100 GPU, 8 vCPUs and 30GB RAM.

${<Code language="bash">{`
gcloud beta compute --project=$DEVSHELL_PROJECT_ID instances create fastai --zone=us-west1-b --machine-type=n1-standard-8 --subnet=fastai --network-tier=PREMIUM --no-restart-on-failure --maintenance-policy=TERMINATE --preemptible --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --accelerator=type=nvidia-tesla-v100,count=1 --disk=name=fastai-boot,device-name=fastai-boot,mode=rw,boot=yes
`}</Code>}

### 2. STANDARD GPU ($0.2/HOUR):

This is a setup with Tesla k80 GPU, 4 vCPUs and 15GB RAM.

${<Code language="bash">{`
gcloud beta compute --project=$DEVSHELL_PROJECT_ID instances create fastai --zone=us-west1-b --machine-type=n1-standard-4 --subnet=fastai --network-tier=PREMIUM --no-restart-on-failure --maintenance-policy=TERMINATE --preemptible --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --accelerator=type=nvidia-tesla-k80,count=1 --disk=name=fastai-boot,device-name=fastai-boot,mode=rw,boot=yes
`}</Code>}

### 3. MID RANGE GPU ($0.5/HOUR)

This is a setup with Tesla p100 GPU, 8 vCPUs and 30GB RAM.

${<Code language="bash">{`
gcloud beta compute --project=corded-cortex-665 instances create fastai --zone=us-west1-b --machine-type=n1-standard-8 --subnet=fastai --network-tier=PREMIUM --no-restart-on-failure --maintenance-policy=TERMINATE --preemptible --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --accelerator=type=nvidia-tesla-p100,count=1 --disk=name=fastai-boot,device-name=fastai-boot,mode=rw,boot=yes
`}</Code>}

### 4. NO GPU ($0.01/HOUR)

This doesn't have a GPU, but it is great for management tasks like downloading data and creating notes.

${<Code language="bash">{`
gcloud beta compute --project=$DEVSHELL_PROJECT_ID instances create fastai --zone=us-west1-b --machine-type=n1-standard-1 --subnet=fastai --network-tier=PREMIUM --no-restart-on-failure --maintenance-policy=TERMINATE --preemptible --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --disk=name=fastai-boot,device-name=fastai-boot,mode=rw,boot=yes
`}</Code>}

${
  <Note>{noteOnJupyterAccess}</Note>  
}

### Deleting The Node

After you are done with your notebooks, simply delete the VM by typing:

${<Code language="bash">{`
gcloud compute instances delete fastai --project=$DEVSHELL_PROJECT_ID --zone=us-west1-b
`}</Code>}

You can also delete the instance (named as \`fastai\`) via the Google Cloud UI.

${<Note>{noteOnDeleting}</Note>}

## Usage

After you've deleted the instance, you can start it with a different type of an instance and continue learning. 

Currently, I have included only three types of instances. But we can create different types by mixing GPUs, CPU cores and Memory. <br/>
(You can customize above commands for that.)

${<Note>{noteOnUsage}</Note>}

## Let's Learn

Okay, now that we've covered our fastai node and have spent plenty of time working on the tooling.

Now it's time to dive into the world of [deep learning](https://course.fast.ai/).
`)

