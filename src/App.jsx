import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import Video from './Video';
import Upload from './Upload';
import CueTable from './CueTable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createVideoElement: false,
      videoURL: "",
      subtitleURL: "",
      subtitles: []
    };
    this.handleVideoUpload = this.handleVideoUpload.bind(this);
    this.handleSubtitleUpload = this.handleSubtitleUpload.bind(this);
    this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
    this.handleSubtitles = this.handleSubtitles.bind(this);
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

  handleGoButtonClick() {
    this.setState({
      createVideoElement: true
    });
  }

  handleSubtitles(canPlayThroughEvent) {
    const tracks = canPlayThroughEvent.target.textTracks;
    console.assert(tracks.length == 1, `Exactly 1 subtitle track expected, got ${tracks.length}`);
    const track = tracks[0];
    this.setState({
      subtitles: [...track.cues].map((cue) => [cue.startTime, cue.endTime, cue.text, false])
    });
    track.oncuechange = () => {
      const startTimes = [...track.activeCues].map((cue) => cue.startTime);
      this.setState({
        subtitles: this.state.subtitles.map((cue) => [cue[0], cue[1], cue[2], startTimes.includes(cue[0])])
      });
    };
  }

  render() {
    return (
      <Container sx={{ maxWidth: "xl", minWidth: 1280}}>
        <Stack direction="row" sx={{ mb: 2 }}>
          <Upload label="Upload Video (WebM)" width="15em" accept="video/webm" labelId="video-upload" onUploadFinished={this.handleVideoUpload} />
          <Upload label="Upload Subtitle (VTT)" width="15em" accept="text/vtt" labelId="subtitle-upload" onUploadFinished={this.handleSubtitleUpload} />
          <Fab color="primary" onClick={this.handleGoButtonClick} disabled={this.state.createVideoElement}>{this.state.createVideoElement ? "DONE" : "GO"}</Fab>
        </Stack>
        <Box sx={{ width: 1280, height: 720, backgroundColor: 'action.disabled' }}>
          {this.state.createVideoElement &&
            <Video videoURL={this.state.videoURL} subtitleURL={this.state.subtitleURL} handleSubtitles={this.handleSubtitles} />
          }
        </Box>
        <CueTable subtitles={this.state.subtitles}></CueTable>
      </Container>
    );
  }
}
