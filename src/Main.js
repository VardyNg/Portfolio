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

const appBarColor = ""

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    overflow: "auto"
  },
  headerTextContainer: {
    [theme.breakpoints.up('sm')]: {
      // backgroundColor: 'red'
    },
    [theme.breakpoints.down('xs')]: {
      // backgroundColor: 'blue',
      alignItems: "center",
      justifyContent: "center",
      width: "100%"
    },
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

          if (scrollerEl.scrollTop > trackedEl.offsetTop + trackedEl.offsetHeight/3 - scrollerEl.offsetHeight)
            onScrollToElement(trackedEl);
        }
      }}
    >
      {children}
    </div>
  );
}

function createDataForSections(component, ref, style, margin, show){
  return {component, ref, style, margin, show}
}



function App() {
  const classes = useStyles();
  const [showEducation, setShowEducation] = useState(true)
  const [showWorkingExperience, setShowWorkingExperience] = useState(true)
  const [showProjects, setShowProjects] = useState(true)
  const [showSkillSets, setShowSkillSets] = useState(true)

  const education = useRef(null)
  const workingExperience = useRef(null)
  const projects = useRef(null)
  const contacts = useRef(null)
  const sections = [
    createDataForSections(<Greeting/>, null, {backgroundColor: '#FFFFF'}, 0, true),
    createDataForSections(<Contacts/>, contacts, {backgroundColor: '#AEBFC8'}, 0, true),
    createDataForSections(<Projects/>, contacts, {backgroundColor: '#FFFFF'}, 0, showProjects),
    createDataForSections(<div style={{padding: 35}}> </div>, null, {backgroundColor: '#D4BFAD'}, 20, true),
    createDataForSections(<LanguageLibraries/>, contacts, {}, 20, true),
    createDataForSections(<Education/>, education, {backgroundColor: '#E4E5E0'}, 20, showEducation),
    createDataForSections(<WorkingExperience/>, workingExperience, {}, 20, showWorkingExperience),
    createDataForSections(<Footer/>, null, {backgroundColor: '#677886'}, 0, true),

  ]
  const TopBar = () => {
    return(
      <AppBar position="static" style={{backgroundColor: "#677886"}}>
        <Toolbar>
          <Grid container style={{width: '100%', marginTop: 10}}>
            <Grid item >
              <div className={classes.headerTextContainer}>
                <Typography variant="h6" color="inherit" component="div" style={{fontFamily: "Raleway"}} className={classes.headerText}>
                  Ng Hoi Wa's Portfolio
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <Button onClick={() => contacts.current.scrollIntoView()} color="white" size="small">
                Contacts
              </Button>
              <Button onClick={() => projects.current.scrollIntoView()} color="white" size="small">
                Projects
              </Button>
              <Button onClick={() => education.current.scrollIntoView()} color="white" size="small">
                Education
              </Button>
              <Button onClick={() => workingExperience.current.scrollIntoView()} color="white" size="small">
                Working Experiences
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
  return (
    <>
      <TopBar/>
      {/* <Scroller
        className={classes.container}
        trackIds={["education", "workingExperience", "projects"]}
        onScrollToElement={(el) => {
          if (el.id === "education") setShowEducation(true)
          if (el.id === "workingExperience") setShowWorkingExperience(true)
          if (el.id === "projects") setShowProjects(true)
          // if (el.id === "skillsets") setShowSkillSets(true)
        }}
      > */}
        {sections.map((section, index) => {
          console.log(section.style)
          return(
            <Grow in={section.show}>
              <Grid container align="center" justifyContent="center" style={section.style}>
                <Grid item xs={12} sm={9} md={8} >
                  {section.component}
                </Grid>
              </Grid>    
            </Grow>
          )
        })}
      {/* </Scroller> */}
    </>
  );
}

export default App;
