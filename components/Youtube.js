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
    const { videoId, width = '100%', height = 366 } = this.props
    const src = `https://www.youtube.com/embed/${videoId}`
    const videoUrl = autoplay ? `${src}?autoplay=1` : src
    return (
      <>
        <iframe width={width} height={height} src={videoUrl} frameborder='0' allow='autoplay; encrypted-media' allowfullscreen='1' />
        <style jsx>{`
          iframe {
            border-radius: 4px;
          }
        `}</style>
      </>
    )
  }

  handleShowVideo () {
    this.setState({ showVideo: true })
    gtag.event({
      action: 'play_video',
      category: 'videos',
      label: this.props.videoId
    })
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
        <div className='click-to-play' onClick={() => this.handleShowVideo()}>Play Now</div>
        <Image src={overlay} onClick={() => this.handleShowVideo()} />
        <style jsx>{`
          #container {
            position: relative;
            cursor: pointer;
          }

          .click-to-play {
            position: absolute;
            width: 200px;
            height: 30px;
            line-height: 30px;
            border-radius: 20px;
            box-shadow: 0px 0px 7px 1px #9e9e9e;
            color: #FFF;
            background-color: #ca0c0c;

            text-align: center;
            left: 50%;
            margin-left: -100px;
            top: 50%;
            margin-top: -17px;

            font-family: arial;
            letter-spacing: 4px;
            text-transform: uppercase;
            font-size: 13px;
            font-weight: bold;
          }

          div :global(img) {
            border: 0;
            box-shadow: 0px 0px 7px 0px #9e9e9e;
            border-radius: 4px;
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
