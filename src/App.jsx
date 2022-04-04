import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
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
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example
          </Typography>
          <ProTip />
          <Video videoURL={this.state.videoURL} subtitleURL={this.state.subtitleURL} />
          <VideoUpload onVideoUpload={this.handleVideoUpload} />
          <SubtitleUpload onSubtitleUpload={this.handleSubtitleUpload} />
        </Box>
      </Container>
    );
  }
}
