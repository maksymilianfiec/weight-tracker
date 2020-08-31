import React, { useState } from 'react';
import logo from './sport.svg';

import Autocomplete from '@material-ui/lab/Autocomplete';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  makeStyles,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Slider,
  Tab,
  Tabs,
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
  const classes = useStyles();
  const [reps, setReps] = useState(10);
  const [kgs, setKgs] = useState(0);
  const [duration, setDuration] = useState(120);
  const [exercise, setExercise] = useState('');
  const [rows, setRows] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const exercises = [
    'Biceps curl',
    'Chest fly',
    'Chest press',
    'Lateral raise',
    'Plank hold',
    'Raised leg hold',
    'Standing curl',
  ];

  function updateReps(event, value) {
    setReps(value);
  }

  function updateKgs(event, value) {
    setKgs(value);
  }

  function updateDuration(event, value) {
    setDuration(value);
  }

  function updateExercise(value) {
    setExercise(value);
  }

  function createData(name, reps, kgs) {
    return { name, reps, kgs };
  }

  function addToTable() {
    tabValue === 0
    ? setRows([...rows, createData(exercise, `${reps} reps`, kgs!==0 ? kgs : '-')])
    : setRows([...rows, createData(exercise, `${duration / 60} min`, '-')]);
  }

  function clearSliders() {
    setExercise('');
    setReps(10);
    setKgs(0);
    setDuration(120);
  }

  function deleteRow(index) {
    setRows([...rows.slice(0, index), ...rows.slice(index+1)]);
  }

  function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={index}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  }

  const changeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box className={classes.root}>
      {/* ------------------------ LOGO ------------------------ */}
      <img src={logo} className={classes.logo} alt="logo" />
      <Grid container>
        {/* ------------------------ LEFT SIDE ------------------------ */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h1" gutterBottom>
            Log exercise
          </Typography>
          <Paper className={classes.inputPanel}>
            <Box className={classes.inputPanelInner}>
              <Tabs value={tabValue} onChange={changeTab} aria-label="Reps(0) or Duration(1)">
                <Tab label="Reps" id={0} />
                <Tab label="Duration" id={1} />
              </Tabs>
              <Autocomplete
                inputValue={exercise}
                onInputChange={(event, newInputValue) => {updateExercise(newInputValue)}}
                options={exercises}
                freeSolo
                className={classes.autocomplete}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
              />
              <TabPanel value={tabValue} index={0}>
                <Box className={classes.sliders}>
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
                </Box>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Box className={classes.sliders}>
                  <Typography gutterBottom>
                    Duration
                  </Typography>
                  <Slider
                    value={duration}
                    aria-labelledby="non-linear-slider"
                    step={15}
                    min={0}
                    max={600}
                    scale={(x) => x / 60}
                    valueLabelDisplay="on"
                    onChange={updateDuration}
                  />
                </Box>
              </TabPanel>
              <Box className={classes.buttons}>
                <Button color="primary" variant="text" size="large" onClick={clearSliders}>Clear</Button>
                <Button color="primary" variant="contained" size="large" onClick={addToTable} disabled={exercise ==='' ? true : false}>Log</Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
        {/* ------------------------ RIGHT SIDE ------------------------ */}
        <Grid item xs={12} sm={6}>
          
            <Typography variant="h5" component="h1" gutterBottom>
              History
            </Typography>
            {rows.length > 0 ?
              <TableContainer component={Paper} className={classes.historyPanel}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Exercise</TableCell>
                      <TableCell align="right">Set</TableCell>
                      <TableCell align="right">Kgs</TableCell>
                      <TableCell align="right"></TableCell>
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
                        <TableCell align="right">
                          <IconButton aria-label="delete" size='small' onClick={() => deleteRow(index)}><DeleteIcon /></IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            :
              <Typography variant="body2">Nothing to display yet</Typography>
            }
          
        </Grid>
      </Grid>
      {/* ------------------------ FOOTER ------------------------ */}
      <Typography className={classes.footer}>Icons made by <a className={classes.footerLinks} href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a className={classes.footerLinks} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    height: '10vh',
    margin: '5vh',
  },
  inputPanel: {
    width: '90%',
    padding: theme.spacing(3),
    margin: '0 auto 30px',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
  },
  inputPanelInner: {
    width: '90%',
    maxWidth: 640,
  },
  autocomplete: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  },
  sliders: {
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'left',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  historyPanel: {
    width: '90%',
    margin: '0 auto 30px',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 'center',
    color: 'lightgrey',
    fontSize: 10,
  },
  footerLinks: {
    color: 'lightgrey',
    textDecoration: 'none',
  }
  
}));

export default App;
