import * as React from 'react';
import { styled } from '@mui/system';

const VideoHTML = styled('video')(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  height: 720,
  width: 1280
}));

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.videoURL) {
      return <VideoHTML controls preload="auto" src={this.props.videoURL}>
        <track default kind="subtitles" label="日本語" srcLang="ja" src={this.props.subtitleURL} />
      </VideoHTML>
    } else {
      return <VideoHTML />
    }
  }
}