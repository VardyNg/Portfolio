import React, { useState } from 'react'
import { ReactComponent as CognitoIcon } from '../../../Images/PPT/cognito.svg'
import { ReactComponent as AmplifyIcon } from '../../../Images/PPT/amplify.svg'
import { ReactComponent as AmplifyArch } from '../../../Images/PPT/AmplifyArch.svg'
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
import SignInWithApple from '../../../Images/PPT/AppleSignIn.png'
import SignInWithGoogle from '../../../Images/PPT/GoogleSignIn.png'

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

function FederatedLogin(props){
  return(
    <>
      <Typography variant="body1">
        With the beneift of Amplify, SignIn With Apple and Google is also available, making the login more seemless and easy.
      </Typography>
      <div style={{display: '', alignItem: 'center'}}>
        <img src={SignInWithApple} width="50%"/>
        <img src={SignInWithGoogle} width="50%"/>
      </div>
    </>
  )
}


function Architecture(props){
  return(
    <Stack spacing={2}>
      <Typography variant="body1">
        <b>Amplify</b> and <b>Cognito</b> are used to handle the authendication and authorization (1, 2). Client Side will hold a JWT issued by Cognito.
      </Typography>
      <Typography variant="body1">
        When the client side make requests (3), the token is sent to the <b>API Gateway</b> and be verified (4) by also the <b>Cognito</b>. Then ,the requests is sent to and handled by lambda functions (5, 6). Finally, the requests are sent to the <b>API Gateway</b> and returned to the client side (7).
      </Typography>
      <Typography>
        With this architecture, the authendication is outsoruced to AWS who are trusted by many others.
      </Typography>
      <AmplifyArch/>
    </Stack>
  )
}
function Security(props){
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
    <Stack spacing={2}>
      <Typography variant="h4">
        Security
      </Typography>
      <Divider/>
      <div>
        <CognitoIcon style={{height: 75, width: 75}}/>
        <AmplifyIcon style={{height: 75, width: 75}}/>
      </div>
      <div>
        <Typography variant="body1"> 
          <b>AWS Amplify and AWS Cognito</b> is used to handle the authendication and authorization.
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
          <Tab label="Architecture" />
          <Tab label="Federated Login" />
        </Tabs>
        <Box
          style={{padding: 10}}
        >
          <TabPanel value={value} index={0}>
            <Architecture/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FederatedLogin/>
          </TabPanel>
        </Box>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
    </Stack>
  )
}

export default Security