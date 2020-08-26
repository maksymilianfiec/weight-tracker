import React from 'react';
import logo from './sport.svg';
import './App.css';

import {
  Button,
  Slider,
  Typography
} from '@material-ui/core';

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
      <div className="icon-author">Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
