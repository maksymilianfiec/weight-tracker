import React from 'react';
import logo from './sport.svg';
import './App.css';

import {
  Button,
  Paper,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

function createData(name, sets, reps, kgs) {
  return { name, sets, reps, kgs };
}

const rows = [
  createData('Chest press', 2, 10, 25),
  createData('Chest press', 2, 15, 15),
  createData('Chest press', 1, 20, 40),
];

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h5" component="h1" gutterBottom>
        Chest press
      </Typography>
      <div className="sliders">
        <Typography gutterBottom>
            Sets
        </Typography>
        <Slider
            defaultValue={3}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={1}
            max={6}
            valueLabelDisplay="on"
        />
        <Typography gutterBottom>
            Reps
        </Typography>
        <Slider
            defaultValue={10}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={1}
            max={20}
            valueLabelDisplay="on"
        />
        <Typography gutterBottom>
            Kgs
        </Typography>
        <Slider
            defaultValue={30}
            aria-labelledby="discrete-slider-small-steps"
            step={2.5}
            marks
            min={2.5}
            max={60}
            valueLabelDisplay="on"
        />
      </div>
      <Button color="primary" variant="contained" size="large">Add</Button>
      <div className="table">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Kgs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.sets}</TableCell>
                  <TableCell align="right">{row.reps}</TableCell>
                  <TableCell align="right">{row.kgs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="icon-author">Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
