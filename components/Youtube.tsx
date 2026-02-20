import React from 'react'
import Image from './Image'
import * as gtag from '~/lib/gtag'
import styles from './Youtube.module.css'

export default class Youtube extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { showVideo: false }
  }

  renderVideo(options: any = {}) {
    const { autoplay = false } = options
    const { videoId, width = '100%', height = 366 } = this.props
    const src = `https://www.youtube.com/embed/${videoId}`
    const videoUrl = autoplay ? `${src}?autoplay=1` : src
    return (
      <iframe className={styles.iframe} width={width} height={height} src={videoUrl} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
    )
  }

  handleShowVideo() {
    this.setState({ showVideo: true })
    gtag.event({
      action: 'play_video',
      category: 'videos',
      label: this.props.videoId,
      value: 0
    })
  }

  render() {
    const { showVideo } = this.state
    const { videoId } = this.props

    const overlay = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

    if (showVideo) {
      return this.renderVideo({ autoplay: true })
    }

    return (
      <div className={styles.container}>
        <div className={styles.clickToPlay} onClick={() => this.handleShowVideo()}>Play Now</div>
        <Image src={overlay} onClick={() => this.handleShowVideo()} />
      </div>
    )
  }
}
