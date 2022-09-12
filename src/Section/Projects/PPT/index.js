import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import API from './API';
import Database from './Database';
import DevOps from './DevOps';
import FrontEnd from './FrontEnd';
import IAC from './IAC';
import Overview from './Overview';
import Security from './Security';
import ReactGA from 'react-ga4';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
       
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function PrivateTutorPlus(props) {
  console.log("PrivateTutorPlus")
  const [show, setShow] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabContent = () => {
    return(
      <div
        style={{
          overflow: 'auto',
          width: fullScreen ? '100%' : '90%'
        }}
      >
        <TabPanel value={value} index={0} >
          <Overview/>
        </TabPanel>
        <TabPanel value={value} index={1} >
          <FrontEnd/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <API/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Database/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <DevOps/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <IAC/>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Security/>
        </TabPanel>
      </div>
    )
  }

  return(
    <Dialog
      fullScreen={fullScreen}
      maxWidth="lg"
      fullWidth
      open={show}
      onClose={async() => {setShow(false); 
            await new Promise(r => setTimeout(() => r(), 200));
            navigate("/")}}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h5">
          Private Tutor Plus
        </Typography>
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
          <Tab label="Web Tech" />
          <Tab label="API" />
          <Tab label="Database" />
          <Tab label="DevOps" />
          <Tab label="IaC" />
          <Tab label="Security" />
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
          onClick={async() => {
            setShow(false); 
            await new Promise(r => setTimeout(() => r(), 200));
            navigate("/")}
          } 
          fullWidth
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PrivateTutorPlus