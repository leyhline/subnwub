import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

const Input = styled('input')({
  display: 'none',
});

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      filename: ""
    }
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(uploadEvent) {
    const fileList = uploadEvent.target.files;
    console.assert(fileList.length == 1, `Upload expected exactly 1 file, got ${fileList.length}`);
    const file = fileList[0];
    this.props.onUploadFinished(file);
    this.setState({
      loaded: true,
      filename: file.name
    });
  }

  render() {
    return <Box sx={{ width: this.props.width }}>
      <Tooltip title={this.state.filename}>
        <label htmlFor={this.props.labelId}>
          <Input accept={this.props.accept} id={this.props.labelId} type="file" onChange={this.uploadFile} disabled={this.state.loaded} />
          <Button sx={{ width: this.props.width }} variant="contained" component="span" disabled={this.state.loaded}>
            {this.props.label}
          </Button>
        </label>
      </Tooltip>
      <LinearProgress sx={{ width: this.props.width }} variant="determinate" value={this.state.loaded ? 100 : 0} />
    </Box>
  }
}