import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import { Route, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './App.css';
import Contacts from './Section/Contacts';
import Credentials from './Section/Credentials';
import Education from './Section/Education';
import Footer from './Section/Footer';
import Greeting from './Section/Greeting';
import LanguageLibraries from './Section/LanguageLibraries';
import Projects from './Section/Projects';
import ReportRoute from './Section/Projects/';
import WorkingExperience from './Section/WorkingExperience';
import GitHub from './Section/GitHub';
import OSS from './Section/OSS';
function createDataForSections(component, style, margin, id){
  return {component, style, margin, id}
}

function createDataForMenu(title, id, bold){
  return {title, id, bold}
}

function Main() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/" });
  },[])

  const sections = [
    createDataForSections(<Greeting/>,{backgroundColor: '#FFFFF'}, 0, 'greeting'),
    createDataForSections(<Contacts/>, {backgroundColor: '#AEBFC8'}, 0, 'contacts'),
    createDataForSections(<Projects/>, {backgroundColor: '#FFFFF'}, 20, 'projects'),
    createDataForSections(<GitHub/>, {backgroundColor: '#FFFFFF'}, 0, 'github'),
    createDataForSections(<OSS />, {backgroundColor: '#FFFFFF'}, 0, 'oss'),
    createDataForSections(<div style={{padding: 25}}> </div>,{backgroundColor: '#eeeee4'}, 20, ''),
    createDataForSections(<LanguageLibraries/>, {}, 20, 'skills'),
    createDataForSections(<Credentials/>, {}, 20, 'credentials'),
    createDataForSections(<WorkingExperience/>,  {backgroundColor: '#eeeeee'}, 20, 'workingExperience'),
    createDataForSections(<Education/>,  {}, 20, 'education'),
    createDataForSections(<Footer/>,{backgroundColor: '#677886'}, 0, ''),
  ]

  const MenuItems = [
    createDataForMenu("Contacts", 'contacts', false),
    createDataForMenu("Projects", 'projects', true),
    createDataForMenu("Skills & Certs", 'skills', true),
    createDataForMenu("Working Experience", 'workingExperience', false),
    createDataForMenu("Education", 'education', false),
  ]
  const TopBar = () => {
    return(
      <AppBar position="static" style={{backgroundColor: "#677886"}}>
        <Toolbar>
        <Grid container style={{width: '100%', marginTop: 10, display: 'flex', justifyContent: 'center',}}>
          <Grid item xs={12} sm={9} md={8} >
            <Typography variant="h6" color="inherit" component="" style={{fontFamily: "Raleway", marginLeft: 7}} >
              Vardy's Portfolio
            </Typography>
            <div>
              {MenuItems.map((item, index) => (
                <Button 
                  key={index}
                  component={HashLink} 
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} 
                  to={'/#' + item.id} 
                  color="white"
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  const ScrollButton = () => {
    return (
      <div 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          height: '100%',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Grid
          container xs={12} sm={9} md={8}
          style={{
            // height: '100%',
            position: "fixed", 
            zIndex: 1,
            transform: 'rotateY(180deg)',
            // backgroundColor: 'green',
            bottom: 0,
            // right: 5,
          }}
        >
          <div
            style={{
              // backgroundColor: 'blue',
              // position: "fixed", 
              marginBottom: "20px",
              transform: 'rotateY(180deg)',
            }}
          >
            <IconButton
              component={HashLink} 
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} 
              to='/#top' 
              variant="contained"
              style={{
                backgroundColor: "lightBlue",
                // marginLeft: '70%'
              }}
              size="large"
            >
              <ArrowUpwardIcon />
            </IconButton>
          </div>
        </Grid>
      </div>
    )
  }
  return (
    <div style={{overflowX: "hidden",}}>
      <Routes>
        <Route path="/projects/*" element={<ReportRoute/>}/>
      </Routes>
      <TopBar id="top"/>
      <ScrollButton/>
      {sections.map((section, index) => {
        console.log(section.style)
        return(
          <Grow in={true} key={index} id={section.id}>
            <Grid container align="center" justifyContent="center" style={section.style}>
              <Grid item xs={12} sm={9} md={8} >
                {section.component}
              </Grid>
            </Grid>    
          </Grow>
        )
      })}
      {/* </Scroller> */}
    </div>
  );
}

export default Main;
