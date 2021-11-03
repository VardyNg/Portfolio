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
import Contacts from './Section/Contacts'
import Fade from '@mui/material/Fade';
import SkillSets from './Section/SkillSets';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div" style={{fontFamily: "Raleway"}}>
            Ng Hoi Wa's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Greeting */}
      <Grid container align="center" justifyContent="center" style={{backgroundColor: '#EEF1EF'}}>
        <Grid item xs={12} sm={9} md={8} >
          <Greeting/>
          </Grid>
        </Grid>
      {/* Contacts */}
      <Grid container align="center" justifyContent="center" style={{backgroundColor: '#A9B4C2'}}>
        <Grid item xs={12} sm={9} md={8} padding={2}>
          <Contacts/>
        </Grid>
      </Grid>
      {/* Skill Sets */}
      <Grid container align="center" justifyContent="center" style={{backgroundColor: '#'}}>
        <Grid item xs={12} sm={9} md={8} padding={2}>
          <SkillSets/>
        </Grid>
      </Grid>
      {/* Education */}
      <Grid container align="center" justifyContent="center" style={{backgroundColor: ''}}>
        <Grid item xs={12} sm={9} md={8} >
          <Education/>
        </Grid>
      </Grid>
      {/* Working Experiences */}
      <Grid container align="center" justifyContent="center" style={{backgroundColor: ''}}>
        <Grid item xs={12} sm={9} md={8} >
          <WorkingExperience/>
        </Grid>
      </Grid>
      {/* Projects */}
      <Grid container align="center" justifyContent="center" style={{backgroundColor: ''}}>
        <Grid item xs={12} sm={9} md={8} >
          <Projects/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
