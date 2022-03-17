import React, { useState } from 'react'
import { ReactComponent as FrontEndDevOps } from '../../../Images/PPT/Front-End-DevOps.svg'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

function FrontEnd(props){
  return(
    <>
      <Typography>
        The front end is hosted in AWS S3
      </Typography>
      <FrontEndDevOps/>
    </>
  )
}
function DevOps(props){
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
    <>
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
    </>
  )
}

export default DevOps