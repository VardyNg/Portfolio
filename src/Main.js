import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './App.css';
import Contacts from './Section/Contacts';
import Education from './Section/Education';
import Footer from './Section/Footer';
import Greeting from './Section/Greeting';
import LanguageLibraries from './Section/LanguageLibraries';
import Projects from './Section/Projects';
import WorkingExperience from './Section/WorkingExperience';
import {  BrowserRouter as Router,  Routes,  Route, Navigate, useNavigate} from "react-router-dom"
import ReportRoute from './Section/Projects/'


function createDataForSections(component, ref, style, margin, show, id){
  return {component, ref, style, margin, show, id}
}

function App() {
  const [showEducation, setShowEducation] = useState(true)
  const [showWorkingExperience, setShowWorkingExperience] = useState(true)
  const [showProjects, setShowProjects] = useState(true)
  const [showSkillSets, setShowSkillSets] = useState(true)

  const education = useRef(null)
  const workingExperience = useRef(null)
  const projects = useRef(null)
  const contacts = useRef(null)
  const sections = [
    createDataForSections(<Greeting/>, null, {backgroundColor: '#FFFFF'}, 0, true, 'greeting'),
    createDataForSections(<Contacts/>, contacts, {backgroundColor: '#AEBFC8'}, 0, true, 'contacts'),
    createDataForSections(<Projects/>, contacts, {backgroundColor: '#FFFFF'}, 0, showProjects, 'projects'),
    createDataForSections(<div style={{padding: 35}}> </div>, null, {backgroundColor: '#D4BFAD'}, 20, true, ''),
    createDataForSections(<LanguageLibraries/>, contacts, {}, 20, true, 'skills'),
    createDataForSections(<Education/>, education, {backgroundColor: '#E4E5E0'}, 20, showEducation, 'education'),
    createDataForSections(<WorkingExperience/>, workingExperience, {}, 20, showWorkingExperience, 'workingExperience'),
    createDataForSections(<Footer/>, null, {backgroundColor: '#677886'}, 0, true, ''),

  ]
  const TopBar = () => {
    return(
      <AppBar position="static" style={{backgroundColor: "#677886"}}>
        <Toolbar>
          <Grid container style={{width: '100%', marginTop: 10, display: 'flex', justifyContent: 'center'}}>
            <Grid item xs={12} sm={9} md={8} >
              <Typography variant="h6" color="inherit" component="" style={{fontFamily: "Raleway"}} >
                Ng Hoi Wa's Portfolio
              </Typography>
            </Grid>
            <Grid item style={{backgroundColor: 'pink'}}>
              <Button component={HashLink} scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to='/#contacts' color="white" size="small">
                Contacts
              </Button>
              <Button component={HashLink} scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to='/#projects' color="white" size="small">
                Projects
              </Button>
              <Button component={HashLink} scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to='/#education' color="white" size="small">
                Education
              </Button>
              <Button component={HashLink} scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to='/#workingExperience' color="white" size="small">
                Working Experiences
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  const ScrollButton = () => {
    return (
      <div style={{
        position: "fixed", 
        display: 'flex',
        justifyContent: 'right',
        width: "100%",
        right: "50",
        bottom: "20px",
        zIndex: 1,
        cursor: "pointer",
        // backgroundColor: "green",
      }}>
        <IconButton
          component={HashLink} 
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} 
          to='/#top' 
          variant="contained"
          style={{
            backgroundColor: "lightBlue",
            marginRight: 20
          }}
          size="large"
        >
          <ArrowUpwardIcon />
        </IconButton>
      </div>
    )
  }
  return (
    <>
      <Routes>
        <Route path="/projects/*" element={<ReportRoute/>}/>
      </Routes>
      <TopBar id="top"/>
      <ScrollButton/>
      {sections.map((section, index) => {
        console.log(section.style)
        return(
          <Grow in={section.show} key={index} id={section.id}>
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
