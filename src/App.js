import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Greeting from './Section/Greeting'
import Education from './Section/Education'
import WorkingExperience from './Section/WorkingExperience'
import Projects from './Section/Projects'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="div">
          Ng Hoi Wa's Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container align="center" justifyContent="center">
      <Grid item xs={12} sm={9} md={8}>
        {/* Greeting */}
        <Greeting/>
        {/* Education */}
        <Education/>
        {/* Working Experiences */}
        <WorkingExperience/>
        {/* Projects */}
        <Projects/>
      </Grid>
    </Grid>
    </>
  );
}

export default App;
