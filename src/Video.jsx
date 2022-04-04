import * as React from 'react'

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.videoURL) {
      return <video controls preload="auto" src={this.props.videoURL}>
        <track default kind="subtitles" label="日本語" srcLang="ja" src={this.props.subtitleURL} />
      </video>
    } else {
      return <video />
    }
  }
}