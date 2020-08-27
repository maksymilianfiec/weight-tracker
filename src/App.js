import React, {useState} from 'react';
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

function App() {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [kgs, setKgs] = useState(0);
  const [rows, setRows] = useState([]);

  function updateSets(e) {
    setSets(e.target.innerText);
    console.log(sets);
  }

  function updateReps(e) {
    setReps(e.target.innerText);
    console.log(reps);
  }

  function updateKgs(e) {
    setKgs(e.target.innerText);
    console.log(kgs);
  }

  function createData(name, sets, reps, kgs) {
    return { name, sets, reps, kgs };
  }

  function addToTable() {
    setRows([...rows, createData('Chest press', sets, reps, kgs)]);
  }

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
            onChange={(e) => updateSets(e)}
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
            onChange={(e) => updateReps(e)}
        />
        <Typography gutterBottom>
            Kgs
        </Typography>
        <Slider
            defaultValue={25}
            aria-labelledby="discrete-slider-small-steps"
            step={0.25}
            marks
            min={0}
            max={50}
            valueLabelDisplay="on"
            onChange={(e) => updateKgs(e)}
        />
      </div>
      <Button color="primary" variant="contained" size="large" onClick={addToTable}>Log</Button>
      <div className="table">
        <Typography variant="h5" component="h2" gutterBottom>
          History
        </Typography>
        {rows.length > 0 ?
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
        :
          <Typography>Nothing to display yet</Typography>
        }
      </div>
      <div className="icon-author">Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
