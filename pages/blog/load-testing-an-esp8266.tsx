import markdown from 'markdown-in-js'
import WithDoc, { components } from '~/lib/with-doc'

import Image from '~/components/Image'

export default WithDoc({
  title: 'Load Testing an ESP8266',
  description: 'ESP8266 works great. But, I wanted to load test it and see how reliable it is.',
  image: 'https://user-images.githubusercontent.com/50838/32901959-2f83b472-cb17-11e7-9bf2-4a1c21320159.png',
  slug: 'load-testing-an-esp8266',
  date: 'November 16, 2017',
  links: {
    twitter: 'https://twitter.com/arunoda/status/931199229984350208',
    facebook: 'https://www.facebook.com/arunoda.susiripala/posts/10156074418128606?pnref=story'
  }
})(markdown(components)`
[ESP8266](https://en.wikipedia.org/wiki/ESP8266) is a really cheap WiFi module with a built-in TCP/IP stack. Basically, you can program it just like an Arduino.
It works, but I was not quite sure about the reliability nor the performance of it.

Therefore, I decided to do a load test.

## Test Case

Unlike a normal CPU, the processor of an ESP8266 (or any microcontroller) always runs at 100% unless it's sleeping. So the goal of this load test is not to test the CPU performance, but to measure the strength of its WiFi capabilities.

In this test case, the ESP8266 is serving a huge file around 1TB to any client who connects to it. We are using ESP8266's [Arduino C++ API](https://github.com/esp8266/Arduino) for this.

[Here's the code snippet](https://gist.github.com/arunoda/3f17eba4f3f1fd5e1a7adc86e7b62ca7).

## Test Client

Even though we are downloading the file via the local network, I didn't want to download and save a huge file on my laptop. So I just wrote a simple Node.js http client to get the download speed without saving any data.

[Here it is](https://gist.github.com/arunoda/7c977b5b722ffc4b83ea780d97d21219).

## Test Setup

I uploaded this code to my ESP8266 via the Arduino IDE.
My ESP8226 is a generic [ESP-12F](https://www.instructables.com/id/Getting-Started-with-the-ESP8266-ESP-12/) chip with a custom made dev board.

${<Image src='https://user-images.githubusercontent.com/50838/32901740-8f793fba-cb16-11e7-8ec6-1dc1f85bfb02.jpeg' />}

When uploading the code, I've set the clock speed to 160 MHz to get the maximum output from the ESP8266.

My WiFi access point is 2 meters away from the dev board and separated by a wall.
I could download up to **3 mega-bytes per sec** from the Internet using my laptop (This is the maximum speed of my ISP).

> It's the same laptop as my test client and it's just a few inches from my ESP8266.

## Result

So, I started the client and ran it for 3 days. Here are the result.

NOTE: All of the download speed numbers are in **Killo Bytes Per Seconds (kBps)**.

First of all, let me show you the time series chart of the download speed data I [collected](https://gist.github.com/arunoda/adad7657d7e89b512212df793526d237).

${<Image src='https://user-images.githubusercontent.com/50838/32901946-2527f182-cb17-11e7-8870-8a714ea9ce85.png' />}

Just by looking at it, you can see that it was performing really well. It has some drops and that could be a slowdown in the ESP8266 or something with my WiFi setup (which is not very reliable).

This is the histogram of the whole data points:

${<Image src='https://user-images.githubusercontent.com/50838/32901959-2f83b472-cb17-11e7-9bf2-4a1c21320159.png' />}

Here's a set of summary statistics:

* mean - 488
* standard deviation - 87
* 5th percentile - 341
* 25th percentile - 440
* 25th percentile(median) - 490
* 75th percentile - 550

## Conclusion

This is a really good result.<br/>
It delivered more than **341 kilo bytes/sec (2.7 mega bits/sec)** for 95% of the time for a range of 3 days.
That's a very impressive result for a [cheap](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20171116081811&SearchText=esp+8266) WiFi module.

In a real world ESP8266 project, I would never want to transfer this amount of data over WiFi. Therefore. this is more than enough for me.

I could load test for a few other cases, like the number of connections per second or WiFi range.
But I am now pretty confident with the module.

I'll go ahead with a real-world project and test the performance with that.

`)
