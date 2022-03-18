import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './App.css';
import Contacts from './Section/Contacts';
import Education from './Section/Education';
import Footer from './Section/Footer';
import Greeting from './Section/Greeting';
import LanguageLibraries from './Section/LanguageLibraries';
import Projects from './Section/Projects';
import ReportRoute from './Section/Projects/';
import WorkingExperience from './Section/WorkingExperience';
import { makeStyles } from "@mui/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
function createDataForSections(component, style, margin, id){
  return {component, style, margin, id}
}

function createDataForMenu(title, id, bold){
  return {title, id, bold}
}

function App() {
  const theme = useTheme();
  const upXS = useMediaQuery(theme.breakpoints.up('sm'));

  const sections = [
    createDataForSections(<Greeting/>,{backgroundColor: '#FFFFF'}, 0, 'greeting'),
    createDataForSections(<Contacts/>, {backgroundColor: '#AEBFC8'}, 0, 'contacts'),
    createDataForSections(<Projects/>, {backgroundColor: '#FFFFF'}, 0, 'projects'),
    createDataForSections(<div style={{padding: 25}}> </div>,{backgroundColor: '#D4BFAD'}, 20, ''),
    createDataForSections(<LanguageLibraries/>, {}, 20, 'skills'),
    createDataForSections(<Education/>,  {backgroundColor: '#E4E5E0'}, 20, 'education'),
    createDataForSections(<WorkingExperience/>,  {}, 20, 'workingExperience'),
    createDataForSections(<Footer/>,{backgroundColor: '#677886'}, 0, ''),
  ]

  const MenuItems = [
    createDataForMenu("Contacts", 'contacts', false),
    createDataForMenu("Projects", 'projects', true),
    createDataForMenu("Skills", 'skills', true),
    createDataForMenu("Education", 'education', false),
    createDataForMenu("Working Experience", 'workingExperience', false),
  ]
  const TopBar = () => {
    return(
      <AppBar position="static" style={{backgroundColor: "#677886"}}>
        <Toolbar>
        <Grid container style={{width: '100%', marginTop: 10, display: 'flex', justifyContent: 'center'}}>
          <Grid item xs={12} sm={9} md={8} >
            <Stack>
              <Typography variant="h6" color="inherit" component="" style={{fontFamily: "Raleway"}} >
                Ng Hoi Wa's Portfolio
              </Typography>
              <div>
                {MenuItems.map((item, index) => (
                  <Button 
                    component={HashLink} 
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} 
                    to={'/#' + item.id} 
                    color="white"
                    sx={{
                      fontWeight: item.bold ? 'bold' : '',
                    }}

                  >
                    {item.title}
                  </Button>
                ))}
              </div>
            </Stack>
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
    </>
  );
}

export default App;
