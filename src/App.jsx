import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Video from './Video';
import VideoUpload from './VideoUpload';
import SubtitleUpload from './SubtitleUpload';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: "",
      subtitleURL: "",
      subtitles: undefined
    };
    this.handleVideoUpload = this.handleVideoUpload.bind(this);
    this.handleSubtitleUpload = this.handleSubtitleUpload.bind(this);
  }

  handleVideoUpload(videoFile) {
    const videoURL = URL.createObjectURL(videoFile);
    this.setState({
      videoURL: videoURL
    })
  }

  handleSubtitleUpload(subtitleFile) {
    const subtitleURL = URL.createObjectURL(subtitleFile);
    this.setState({
      subtitleURL: subtitleURL
    })
  }

  render() {
    return (
      <Container maxWidth="xl" minWidth="1280">
        <Box>
          <Video videoURL={this.state.videoURL} subtitleURL={this.state.subtitleURL} />
          <VideoUpload onVideoUpload={this.handleVideoUpload} />
          <SubtitleUpload onSubtitleUpload={this.handleSubtitleUpload} />
        </Box>
      </Container>
    );
  }
}
