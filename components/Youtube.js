import React from 'react'
import Image from './Image';

export default class Youtube extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {showVideo: false}
  }
  
  renderVideo(options = {}) {
    const {autoplay=false} = options;
    const {src, width="100%", height=315} = this.props
    const videoUrl = autoplay? `${src}?autoplay=1` : src
    return (
      <iframe width={width} height={height} src={videoUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="1"></iframe>
    )
  }

  render () {
    const {showVideo} = this.state;
    const {overlay} = this.props;

    if (showVideo) {
      return this.renderVideo({autoplay: true});
    }
    
    if (overlay) {
      return (
        <div>
          <Image src={overlay} onClick={() => this.setState({showVideo: true})}/>
          <style jsx>{`
            div {
              cursor: pointer;
            }
          `}</style>
        </div>
      );
    }

    return this.renderVideo();
  }
}