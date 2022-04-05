import * as React from 'react';
import { styled } from '@mui/system';

const VideoHTML = styled('video')(({ theme }) => ({
  backgroundColor: theme.palette.action.disabled,
  height: 720,
  width: 1280
}));

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <VideoHTML id="video-player" controls preload="auto" onCanPlayThrough={this.props.handleSubtitles}>
      <source src={this.props.videoURL} />
      <track default kind="subtitles" label="日本語" srcLang="ja" src={this.props.subtitleURL} />
    </VideoHTML>
  }
}