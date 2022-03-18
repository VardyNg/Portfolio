import React, { useState } from 'react'
import { ReactComponent as FrontEndDevOps } from '../../../Images/PPT/Front-End-DevOps.svg'
import { ReactComponent as APIDevOps } from '../../../Images/PPT/API-DevOps.svg'
import { ReactComponent as DatabaseDevOps } from '../../../Images/PPT/Database-DevOps.svg'
import { ReactComponent as GitHubIcon } from '../../../Images/github.svg'
import { ReactComponent as Branching} from '../../../Images/PPT/GitBranching.svg'
import { ReactComponent as JenkinsIcon} from '../../../Images/jenkins.svg'
import { ReactComponent as SonarqubeIcon} from '../../../Images/sonarqube.svg'
import { ReactComponent as SonarqubeJenkins} from '../../../Images/PPT/Sonarqube_Jenkins.svg'
import SonarqubeExample from "../../../Images/PPT/SonarqubeExample.png"
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

function CI(props){
  return(
    <>
      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
            <GitHubIcon style={{height: 75, width: 75, marginRight: 5}}/>
            <b>GitHub</b>
          </Typography>
          <Typography variant="body1">
            GitHub is served as the source control tools in this project, where all 4 of the developers can access to the repository. 
            By making use of the concept of <b>branching strategy</b>, the new source codes are integrated continously.
          </Typography>
        </div>
      </Stack>
      <Branching style={{width: '100%', height: 500}}/>
      <Typography variant="body1">
        In our project, there are 3 stages: Prod, UAT, and Dev, each stage has its branch. 
      </Typography>
      <Typography variant="body1">
        The agile development took place on the <b>Dev branch</b>, where different features are separeted in several <b>feature branches</b>,
        so that the other feature will not affect each other; 
      </Typography>
      <Typography variant="body1">
        After several functional update, the code will be merged to the <b>UAT branch</b> for UAT and release testing. 
      </Typography>
      <Typography variant="body1">
        If UAT has passed, the UAT branch is merged to the <b>production branch</b>, which is protected and require a pull request in order to merge.
      </Typography>
      <Typography variant="body1">
        Hot-fix is possible when there is an urgent defects need to be fixed. In most cases, the new features are integrated from dev to prod sequentially.
      </Typography>
      
    </>
  )
}

function CD(props){
  return(
    <Stack spacing={2}>
      <FrontEnd/>
      <API/>
    </Stack>
  )
}

function FrontEnd(props){
  return(
    <>
      <Typography variant="h5">
        Front End
      </Typography>
      <Stack
        spacing={1}
      >
        <Typography variant="body">
          The front end is hosted in AWS S3. There are 3 separate buckets for the three stages: dev, uat, and production.
        </Typography>
        <Typography variant="body">
          A <b>GitHub Actions workflow</b> is created where the ReactJS is built, the built files are deployed to AWS S3 afterward.
          The pipeline is triggered by merging the staging branch on GitHub.
        </Typography>
        <FrontEndDevOps style={{width: '100%', height: 500}}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Divider variant="middle" width="50%"/>
        </div>
      </Stack>
    </>
  )
}

function API(props){
  return(
    <>
      <Typography variant="h5">
        Back End
      </Typography>
      <Stack
        spacing={2}
      >
        <Typography variant="body">
          The backend is formed with AWS Serverless. In this project, there are 3 serverless group responsible for 3 different stage: dev, uat, and production.
        </Typography>
        <Typography variant="body">
          A <b>GitHub Actions</b> workflow is created to deploy the service by using Serverless Framework,
          the pipeline is triggered by merging the staging branch on GitHub.
        </Typography>
        <APIDevOps style={{width: '100%', height: 500}}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Divider variant="middle" width="50%"/>
        </div>
      </Stack>
    </>
  )
}

function CodeAnalysis(props){
  return(
    <Stack
      spacing={2}
    >
      <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
        <JenkinsIcon style={{height: 75, width: 75, marginRight: 5}}/>
        <SonarqubeIcon style={{height: 150, width: 150, marginRight: 5}}/>
      </Typography>
      <Typography variant="body">
        <b>SonarQube</b> are deployed on an on-perm server to provide code analysis. 
      </Typography>
      <Typography variant="body">
        In particular, the Jenkins is triggered via GitHub webhook, and it will command SnoarQube to do code scanning. 
      </Typography>
      <SonarqubeJenkins style={{width: "100%"}}/>
      <img src={SonarqubeExample} style={{width: "100%"}}/>
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
      <DatabaseDevOps style={{width: '100%', height: 200}}/>
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
    <Stack spacing={2}>
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
        <Tab label="Continuous Integration (CI)" />
        <Tab label="Continuous Delivery (CD)" />
        <Tab label="Code Analysis" />
        <Tab label="Database Staging" />
      </Tabs>
      <Box
        style={{padding: 10}}
      >
        <TabPanel value={value} index={0}>
          <CI/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CD/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CodeAnalysis/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Database/>
        </TabPanel>
      </Box>
    </Stack>
  )
}

export default DevOps