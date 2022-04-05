import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import Video from './Video';
import Upload from './Upload';

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
    this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
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

  handleGoButtonClick(clickEvent) {
    console.log("GOOOOO!")
  }

  render() {
    return (
      <Container sx={{ maxWidth: "xl", minWidth: 1280}}>
        <Stack direction="row" sx={{ mb: 2 }}>
          <Upload label="Upload Video" width="12em" accept="video/webm" labelId="video-upload" onUploadFinished={this.handleVideoUpload} />
          <Upload label="Upload Subtitle" width="12em" accept="text/vtt" labelId="subtitle-upload" onUploadFinished={this.handleSubtitleUpload} />
          <Fab color="primary" onClick={this.handleGoButtonClick}>GO</Fab>
        </Stack>
        <Box>
          <Video videoURL={this.state.videoURL} subtitleURL={this.state.subtitleURL} />
        </Box>
      </Container>
    );
  }
}
