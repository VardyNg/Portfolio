import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { default as Typograhy, default as Typography } from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/styles'
import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Features from './Features'
import Database from './Database'
import API from './API'
import FrontEnd from './FrontEnd'
import ReactGA from 'react-ga4';
function OverView(props){
  return(
    <>
      <Stack spacing={3}>
        <Typography variant="h4">
          Overview  
        </Typography>
        <Divider/>
        <Typography variant="body1">
          The system is the product I worked on during my first full time internship in Crossover Int. Co. Ltd. in Jun - Sep 2021. 
        </Typography>
        <Typography variant="body1">
          The system is developed <b>individually</b>, I was responsible for the development from <b>front-end</b>, <b>api</b>, <b>database</b>, to the <b>server hosting management</b>.
        </Typography>
        <Typography variant="body1">
          The system is dedicated to assist the workflow of competition scoring management, it is built for the <b>internal admins</b> from the company and <b>external judges</b> from the public, you may find more details in the [Feature] tabs.
        </Typography>
        <Typography variant="body1">
          Note:
        </Typography>
        <Typography variant="body1">
          It was the first time I worked in a <b>Full Stack Project</b> under a individual setting, I earn a lot of experience from this project! 
          At the mean time, a lot of <b>improvement</b> can be made and <b>mistakes</b> are found everywhere because of the lack of experience. 
          Overall, this project is a <b>good start</b> for me to learn more about Full Stack development, the result is a great product that I can use in the future.
        </Typography>
      </Stack>
    </>
  )
}




function TabPanel(props) {
  const { children, value, index, fullScreen, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
       width: '100%',
      }}
    >
      {value === index && (
        <Box sx={{ p: fullScreen ? 0 : 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


function TV(props){
  console.log("TV")
  const [show, setShow] = useState(true)
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  let navigate = useNavigate()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const TabContent = () => {
    return(
      <div
        style={{
          // overflow: 'auto',
          width: fullScreen ? '100%' : '90%',
          backgroundColor: ''
        }}
      >
        <TabPanel value={value} index={0}  fullScreen={fullScreen}>
          <OverView/>
        </TabPanel>
        <TabPanel value={value} index={1}  fullScreen={fullScreen}>
          <Features/>
        </TabPanel>
        <TabPanel value={value} index={2}  fullScreen={fullScreen}>
          <FrontEnd/>
        </TabPanel>
        <TabPanel value={value} index={3} fullScreen={fullScreen}>
          <Database/>
        </TabPanel>
        <TabPanel value={value} index={4} fullScreen={fullScreen}>
          <API/>
        </TabPanel>

      </div>
    )
  }
  const closeDialog = async() => {
    setShow(false);
    await new Promise(r => setTimeout(() => r(), 200));
    navigate("/")
  }
  return(
    <Dialog
      open={show}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
      onClose={closeDialog}
    >
      <DialogTitle style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Typograhy
          variant={ fullScreen ? "h6" : "h4" }
        >
          TechVision Competition Management System
        </Typograhy>

      </DialogTitle>
      <DialogContent>
        <Box
          sx={{ 
            flexGrow: 1, 
            bgcolor: 'background.paper', 
            display: 'flex', 
            justifyContent: fullScreen ? 'center' : 'flex-start',
            height: fullScreen ? null : 600,
            width: fullScreen ? "100%" : null,
          }}
        >

          <Tabs
            orientation={fullScreen ? "horizontal" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ 
              borderRight: fullScreen ? 0 : 1, 
              borderBottom: fullScreen ? 1 : 0,
              borderColor: 'divider' 
            }}
            centered
          >
            <Tab label="Overview" />
            <Tab label="Features" />
            <Tab label="Web Tech" />
            <Tab label="Database" />
            <Tab label="API" />
          </Tabs>
          {!fullScreen && 
            <TabContent/>
          }
        </Box>
        {fullScreen && 
          <TabContent/>
        }
      </DialogContent>
      <DialogActions>
        <Button
          onClick={closeDialog}
          fullWidth
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}


export default TV 

