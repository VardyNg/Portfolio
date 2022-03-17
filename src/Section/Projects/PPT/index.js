import DevOps from './DevOps'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';

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
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabContent = () => {
    return(
      <div
        style={{
          overflow: 'auto',
          width: '90%'
        }}
      >
        <TabPanel value={value} index={0} >
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          <DevOps/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </div>
    )
  }

  return(
    <Dialog
      fullScreen={fullScreen}
      maxWidth="lg"
      fullWidth
      open={props.open}
      onClose={props.onClose}
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
          <Tab label="Front End" />
          <Tab label="API" />
          <Tab label="Database" />
          <Tab label="DevOps" />
          <Tab label="IaC" />
        </Tabs>
        {!fullScreen && 
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'y-reverse' : 'y'}
            index={value}
            onChangeIndex={handleChange}
          >
            <TabContent/>
          </SwipeableViews>
          }
      </Box>
      {fullScreen && 
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChange}
        >
          <TabContent/>
        </SwipeableViews>
      }
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autoFocus fullWidth>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PrivateTutorPlus