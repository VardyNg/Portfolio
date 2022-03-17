import React, { useState } from 'react'
import { ReactComponent as FrontEndDevOps } from '../../../Images/PPT/Front-End-DevOps.svg'
import { ReactComponent as APIDevOps } from '../../../Images/PPT/API-DevOps.svg'
import { ReactComponent as DatabaseDevOps } from '../../../Images/PPT/Database-DevOps.svg'
import { useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Title from './Title'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

function FrontEnd(props){
  return(
    <Stack
      spacing={1}
    >
      <Typography variant="body">
        The front end is hosted in AWS S3. There are 3 seperate buckets for the three stages: dev, uat, and production.
      </Typography>
      <Typography variant="body">
        A CI/CD pipeline is created such that ReactJS is built by the GitHub Actions and deployed to AWS S3 afterward.
        The pipeline is triggered by merging the staging branch on GitHub.
      </Typography>
      <FrontEndDevOps/>
    </Stack>
  )
}

function API(props){
  return(
    <Stack
      spacing={2}
    >
      <Typography variant="body">
        The API requests are ditrubuted to the API Gateway and handled by the lambda functions.
      </Typography>
      <APIDevOps/>
      <Typography variant="body">
        A CI/CD pipeline is created to deploy the service by using Serverless Framework. 
        The pipeline is triggered by merging the staging branch on GitHub, and by making use of GitHub Actions to deploy the service.
      </Typography>
    </Stack>
  )
}

function Database(props){
  return(
    <Stack
      spacing={2}
    >
      <Typography variant="body">
        Most of the data are stored in MySQL databases, with MySQL Replications, the data are stored in multiple servers for DR purposes.
      </Typography>
      <DatabaseDevOps/>
      <Typography variant="body">
        There are three databases for each stage, the database DDL is scripted and will be executed on version update. In application, the same script will be executed squentially from dev, uat, to prod.
      </Typography>
    </Stack>
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
      <Typography variant="h4">
        DevOps
      </Typography>
      <Tabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ 
          borderTop: 1,
          borderBottom:1,
          borderColor: 'divider' 
        }}
        centered
      >
        <Tab label="Front End" />
        <Tab label="API" />
        <Tab label="Database" />
      </Tabs>
      <Box
        style={{padding: 10}}
      >
        <TabPanel value={value} index={0}>
          <FrontEnd/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <API/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Database/>
        </TabPanel>
      </Box>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
    </>
  )
}

export default DevOps