import React, { useState } from 'react'
import { ReactComponent as Serverless } from '../../../Images/PPT/Serverless.svg'
import { useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Title from './Title'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { ReactComponent as MySQLIcon } from '../../../Images/PPT/mysql.svg';
import { ReactComponent as GCPIcon } from '../../../Images/GCPIcon.svg';
import { ReactComponent as PythonIcon } from '../../../Images/PythonIcon.svg';
import { ReactComponent as NodeJsIcon } from '../../../Images/NodeJsIcon.svg';
import { ReactComponent as JSIcon } from '../../../Images/JSIcon.svg';
import { ReactComponent as HTML5Icon } from '../../../Images/HTML5Icon.svg';
import { ReactComponent as CSSIcon } from '../../../Images/CSSIcon.svg';
import { ReactComponent as DynamoDBIcon } from '../../../Images/dynamodb.svg';
import { ReactComponent as GitHubIcon } from '../../../Images/github.svg';
import { ReactComponent as JenkinsIcon } from '../../../Images/jenkins.svg';
import { ReactComponent as ServerlessIcon } from '../../../Images/PPT/serverless-framework.svg';
import { ReactComponent as TerraformIcon } from '../../../Images/PPT/terraform.svg';
import { ReactComponent as SonarqubeIcon } from '../../../Images/sonarqube.svg';
import { ReactComponent as SQLIcon } from '../../../Images/SQLIcon.svg';
import IconButton from '@mui/material/IconButton'
function Overview(props){
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="h4">
          Overview  
        </Typography>
        <Divider/>
        <Typography variant="h5">
          Development
        </Typography>
        <div>
          <Typography variant="body1">
            <b>Private Tutor Plus</b> is an online application for tutors to manage their business, for example, the class schedule, students, and payments.
          </Typography>
          <Typography variant="body1">
            The application is developed since the beginning of 2022 in a group of 4 developers lead by me.
          </Typography>
          <Typography variant="body1">
            The application is expected to be released for the first UAT in mid-2022, it can be accessed by the following link: <a href="https://privatetutor.plus/">https://privatetutor.plus</a>. <b>Disclaimer: It is still under development.</b>
          </Typography>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Divider variant="middle" width="50%"/>
        </div>
        <Typography variant="h5">
          Idea
        </Typography>
        <div>
          <Typography variant="body1">
            The idea of <b>Private Tutor Plus</b> comes with a family member who works as a full time private tutor with over 20 students. The overwhelming students make the management of student's progress, lesson schedule, payments, and other matters difficult.
          </Typography>
          <Typography variant="body1">
            In additional, in the market, there are few application dedicated for the private tutors to manage their business, while most of the applications are targeted to the tutoring companies.
          </Typography>
          <Typography variant="body1">
            Therefore, I proposed Private Tutor Plus as a solution to solve the problem of managing the tutoring business, with the help of 3 other developers, who are also friend of mine, to develop the application.
          </Typography>
        </div>
            
        {/* <Typography variant="h5">
          Technology Involved
        </Typography> */}
          {/* <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              spacing: 2,
              // height: 100,
              backgroundColor: 'pink'
            }}  
          >
            <MySQLIcon style={{heigt: 50, width: 50}}/>
            <GCPIcon style={{heigt: 50, width: 50}}/>
            <PythonIcon style={{heigt: 50, width: 50}}/>
            <NodeJsIcon style={{heigt: 50, width: 50}}/>
            <JSIcon style={{heigt: 50, width: 50}}/>
            <HTML5Icon style={{heigt: 50, width: 50}}/>
            <CSSIcon style={{heigt: 50, width: 50}}/>
            <DynamoDBIcon style={{heigt: 50, width: 50}}/>
            <GitHubIcon style={{heigt: 50, width: 50}}/>
            <JenkinsIcon style={{heigt: 50, width: 50}}/>
            <ServerlessIcon style={{heigt: 50, width: 50}}/>
            <TerraformIcon style={{heigt: 50, width: 50}}/>
            <SonarqubeIcon style={{heigt: 50, width: 50}}/>
            <SQLIcon style={{heigt: 50, width: 50}}/> 

          </div> */}
      </Stack>
      {/* <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              spacing: 2,
              // height: 100,
              backgroundColor: 'pink'
            }}  
          >
            <MySQLIcon style={{heigt: 50, width: 50}}/>
            <GCPIcon style={{heigt: 50, width: 50}}/>
            <PythonIcon style={{heigt: 50, width: 50}}/>
            <NodeJsIcon style={{heigt: 50, width: 50}}/>
            <JSIcon style={{heigt: 50, width: 50}}/>
            <HTML5Icon style={{heigt: 50, width: 50}}/>
            <CSSIcon style={{heigt: 50, width: 50}}/>
            <DynamoDBIcon style={{heigt: 50, width: 50}}/>
            <GitHubIcon style={{heigt: 50, width: 50}}/>
            <JenkinsIcon style={{heigt: 50, width: 50}}/>
            <ServerlessIcon style={{heigt: 50, width: 50}}/>
            <TerraformIcon style={{heigt: 50, width: 50}}/>
            <SonarqubeIcon style={{heigt: 50, width: 50}}/>
            <SQLIcon style={{heigt: 50, width: 50}}/> 

          </div> */}
    </>
  )
}

export default Overview