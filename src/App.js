import React, {useState} from 'react';
import logo from './sport.svg';
import './App.css';

import Autocomplete from '@material-ui/lab/Autocomplete';
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
  TextField,
  Typography
} from '@material-ui/core';

function App() {
  const [reps, setReps] = useState(10);
  const [kgs, setKgs] = useState(0);
  const [exercise, setExercise] = useState('');
  const [rows, setRows] = useState([]);
  const exercises = [
    'Chest press',
    'Biceps curl',
    'Chest fly',
    'Standing curl',
    'Lateral raise'
  ];

  function updateReps(event, value) {
    setReps(value);
  }

  function updateKgs(event, value) {
    setKgs(value);
  }

  function updateExercise(value) {
    setExercise(value);
  }

  function createData(name, reps, kgs) {
    return { name, reps, kgs };
  }

  function addToTable() {
    setRows([...rows, createData(exercise, reps, kgs)]);
  }

  function clearSliders() {
    setExercise('');
    setReps(10);
    setKgs(0);
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Autocomplete
        inputValue={exercise}
        onInputChange={(event, newInputValue) => {updateExercise(newInputValue)}}
        options={exercises}
        freeSolo
        style={{ width: '85%', maxWidth: 640, marginBottom: 30 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      />
      <div className="sliders">
        <Typography gutterBottom>
            Reps
        </Typography>
        <Slider
            value={reps}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={1}
            max={20}
            valueLabelDisplay="on"
            onChange={updateReps}
        />
        <Typography gutterBottom>
            Kgs
        </Typography>
        <Slider
            value={kgs}
            aria-labelledby="discrete-slider-small-steps"
            step={0.25}
            marks
            min={0}
            max={50}
            valueLabelDisplay="on"
            onChange={updateKgs}
        />
      </div>
      <div>
        <Button color="primary" variant="text" size="large" onClick={clearSliders}>Clear</Button>
        <Button color="primary" variant="contained" size="large" onClick={addToTable}>Log</Button>
      </div>
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
                  <TableCell align="right">Reps</TableCell>
                  <TableCell align="right">Kgs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.name + index}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
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
