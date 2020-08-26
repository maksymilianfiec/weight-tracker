import React from 'react';
import logo from './sport.svg';
import './App.css';

import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      
      <Button color="primary" variant="contained" size="large">OK</Button>
      <div className="icon-author">Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
