import React, { useState } from 'react'
import { ReactComponent as ServerlessIcon } from '../../../Images/PPT/serverless-framework.svg'
import { ReactComponent as TerraformIcon } from '../../../Images/PPT/terraform.svg'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Title from './Title'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

function IAC(props){
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
    <Stack spacing={2}>
      <Typography variant="h4">
        IaC
      </Typography>
      <Divider/>
      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h6" style={{display: 'flex', alignItems: 'center'}}>
            <ServerlessIcon style={{height: 75, width: 75}}/>
            <b>Serverless Framework</b>
          </Typography>
          <Typography variant="body1">
            Serverless Framework is used to build the serverless architecture in most CSPs. For this project, it is in AWS.
          </Typography>
          <Typography variant="body1">
            All the <b>architecutre are written in code</b> and deployed to AWS via Serverless Framework, 
            it makes the architecitre reusable and deployed to other AWS region base on demands with minimal efforts.
          </Typography>
        </div>
      </Stack>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h6" style={{display: 'flex', alignItems: 'center'}}>
            <TerraformIcon style={{height: 75, width: 75}}/>
            <b>MySQL and ProxySQL</b>
          </Typography>
          <Typography variant="body1">
            There are 3 types of database server in this project: Master, Slave, and ProxySQL
          </Typography>
          <Typography variant="body1">
            Each of the server has different settings and provide different services. And <b>Scalling</b> is necessary in case of demand increases and <b>DR</b> is also requried.
          </Typography>
          <Typography variant="body1">
            <b>Terraform</b> is used to define the server and deploy them to CSPs (AWS in this project). <b>New Slaves</b> can deployed based on the coded architecture and ready to serve with little configurations; <b>New ProxySQL</b> and <b>Master</b> instances can also be deployed in a minimum time to reduce impact in user experience, in case of failures.
          </Typography>
        </div>
      </Stack>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
    </Stack>
    
  )
}

export default IAC