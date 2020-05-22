import React from 'react'
import Image from './Image'
import * as gtag from '~/lib/gtag'

export default class Youtube extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = { showVideo: false }
  }

  renderVideo (options = {}) {
    const { autoplay = false } = options
    const { videoId, width = '100%', height = 315 } = this.props
    const src = `https://www.youtube.com/embed/${videoId}`
    const videoUrl = autoplay ? `${src}?autoplay=1` : src
    return (
      <iframe width={width} height={height} src={videoUrl} frameborder='0' allow='autoplay; encrypted-media' allowfullscreen='1' />
    )
  }

  handleShowVideo() {
    this.setState({ showVideo: true })
    gtag.event({
      action: 'play_video',
      category: 'videos',
      label: this.props.videoId
    });
  }

  render () {
    const { showVideo } = this.state
    const { videoId } = this.props

    const overlay = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

    if (showVideo) {
      return this.renderVideo({ autoplay: true })
    }

    return (
      <div id='container'>
        <div id='click-to-play'>Play Now</div>
        <Image src={overlay} onClick={() => this.handleShowVideo()} />
        <style jsx>{`
          #container {
            position: relative;
            cursor: pointer;
          }

          #click-to-play {
            position: absolute;
            width: 200px;
            height: 30px;
            line-height: 30px;
            border: 2px solid #000;
            color: #FFF;
            background-color: #ca0c0c;

            text-align: center;
            left: 50%;
            margin-left: -100px;
            top: 50%;
            margin-top: -17px;
            pointer-events:none;

            font-family: arial;
            letter-spacing: 4px;
            text-transform: uppercase;
            font-size: 13px;
            font-weight: bold;
          }

          div :global(img) {
            border: 3px solid #000;
          }

          div:hover {
            opacity: 0.8;
          }
        `}
        </style>
      </div>
    )
  }
}
