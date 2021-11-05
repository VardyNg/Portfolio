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
import Grow from '@mui/material/Grow'
import SkillSets from './Section/SkillSets';
import Footer from './Section/Footer';
import react, { useState, useRef } from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import LanguageLibraries from './Section/LanguageLibraries';

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    overflow: "auto"
  },
}));

function Scroller({ className, children, trackIds, onScrollToElement }) {
  return (
    <div
      className={className}
      onScroll={(e) => {
        for (let i = 0; i <= trackIds.length - 1; i++) {
          const id = trackIds[i];
          const trackedEl = document.getElementById(id);
          const scrollerEl = e.currentTarget;

          if (scrollerEl.scrollTop > trackedEl.offsetTop + trackedEl.offsetHeight/1.5 - scrollerEl.offsetHeight)
            onScrollToElement(trackedEl);
        }
      }}
    >
      {children}
    </div>
  );
}

function App() {
  const classes = useStyles();
  const [showEducation, setShowEducation] = useState(false)
  const [showWorkingExperience, setShowWorkingExperience] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showSkillSets, setShowSkillSets] = useState(false)

  const education = useRef(null)
  const workingExperience = useRef(null)
  const projects = useRef(null)
  const contacts = useRef(null)
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container style={{width: '100%'}}>
            <Typography variant="h6" color="inherit" component="div" style={{fontFamily: "Raleway"}}>
              Ng Hoi Wa's Portfolio | 
            </Typography>
            <Button onClick={() => contacts.current.scrollIntoView()} color="white">
              Contacts
            </Button>
            <Button onClick={() => education.current.scrollIntoView()} color="white">
              Education
            </Button>
            <Button onClick={() => workingExperience.current.scrollIntoView()} color="white">
              Working Experiences
            </Button>
            <Button onClick={() => projects.current.scrollIntoView()} color="white">
              Projects
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <Scroller
        className={classes.container}
        trackIds={["education", "workingExperience", "projects"]}
        onScrollToElement={(el) => {
          if (el.id === "education") setShowEducation(true)
          if (el.id === "workingExperience") setShowWorkingExperience(true)
          if (el.id === "projects") setShowProjects(true)
          // if (el.id === "skillsets") setShowSkillSets(true)
        }}
      >
        {/* Greeting */}
        <Grid container align="center" justifyContent="center" style={{backgroundColor: '#ffffff'}}>
          <Grid item xs={12} sm={9} md={8} >
            <Greeting/>
          </Grid>
        </Grid>
        {/* Contacts */}
        <Grid container align="center" justifyContent="center" style={{backgroundColor: '#9db4c0'}}>
          <Grid item xs={12} sm={9} md={8} padding={1} >
            <div ref={contacts}>
              <Contacts/>
            </div>
          </Grid>
        </Grid>
        {/* Language / Libraries */}
        <Grid container align="center" justifyContent="center" style={{backgroundColor: '#FFFFFF'}}>
          <Grid item xs={12} sm={9} md={8} padding={.5} >
            <div ref={contacts}>
              <LanguageLibraries/>
            </div>
          </Grid>
        </Grid>
        
        {/* Education */}
        <Fade in={showEducation}>
          <Grid container align="center" justifyContent="center" style={{backgroundColor: '#e0fbfc'}}>
            <Grid item xs={12} sm={9} md={8} style={{margin: 20}}>
                <div id="education" ref={education}>
                  <Education/>
                </div>
            </Grid>
          </Grid>
        </Fade>
        {/* Working Experiences */}
        <Fade in={showWorkingExperience}>
          <Grid container align="center" justifyContent="center" style={{backgroundColor: '#fcd29f'}}>
            <Grid item xs={12} sm={9} md={8} style={{margin: 20}}>
                <div id="workingExperience" ref={workingExperience}>
                  <WorkingExperience/>
                </div>
            </Grid>
          </Grid>
        </Fade>
        {/* Projects */}
        <Grow in={showProjects}>
          <Grid container align="center" justifyContent="center" style={{backgroundColor: ''}}>
            <Grid item xs={12} sm={9} md={8} style={{margin: 20}}>
                <div id="projects" ref={projects}>
                  <Projects/>
                </div>
            </Grid>
          </Grid>
        </Grow>
        {/* Footer */}
        <Grid container align="center" justifyContent="center" style={{backgroundColor: ''}}>
          <Grid item xs={12} sm={9} md={8} >
            <Footer/>
          </Grid>
        </Grid>
      </Scroller>
    </>
  );
}

export default App;
