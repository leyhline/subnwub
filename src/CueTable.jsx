import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default class CueTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Start</TableCell>
            <TableCell>Stop</TableCell>
            <TableCell>Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.subtitles.map((row) => (
            <TableRow key={row[0]} sx={{ bgcolor: row[3] ? 'action.focus' : 'background.default' }}>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
              <TableCell>{row[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  }
}