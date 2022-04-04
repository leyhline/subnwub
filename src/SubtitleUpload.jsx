import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Input = styled('input')({
  display: 'none',
});

export default class SubtitleUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(uploadEvent) {
    // TODO check bounds
    const subtitleFile = uploadEvent.target.files[0];
    this.props.onSubtitleUpload(subtitleFile);
    this.setState({
      loaded: true
    });
  }

  render() {
    return <Box>
      <label htmlFor="subtitle-upload">
        <Input accept="text/vtt" id="subtitle-upload" type="file" onChange={this.uploadFile} disabled={this.state.loaded} />
        <Button variant="contained" component="span" disabled={this.state.loaded}>
          Upload Subtitle
        </Button>
      </label>
      <LinearProgress variant="determinate" value={this.state.loaded ? 100 : 0} />
    </Box>
  }
}