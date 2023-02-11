import React from 'react'
import { ReactComponent as CognitoIcon } from '../../../Images/PPT/cognito.svg'
import { ReactComponent as AmplifyArch } from '../../../Images/PPT/AmplifyArch.svg'
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import SignInWithApple from '../../../Images/PPT/AppleSignIn.png'
import SignInWithGoogle from '../../../Images/PPT/GoogleSignIn.png'
import { ReactComponent as CloudflareIcon} from '../../../Images/PPT/cloudflare.svg'
import { ReactComponent as FrontEndArch} from '../../../Images/PPT/FrontEnd-Arch.svg'
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
        With the benefit of Amplify, SignIn With Apple and Google is also available, making the login more seamless and easy.
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
        <b>AWS Cognito</b> is used to handle the authentication and authorization (1, 2). Client Side will request and hold a JWT issued by Cognito.
      </Typography>
      <Typography variant="body1">
        When the client side make requests (3), the token is sent to the <b>API Gateway</b> and be verified (4) by also the <b>Cognito</b>. Then ,the requests is sent to and handled by lambda functions (5, 6). Finally, the requests are sent to the <b>API Gateway</b> and returned to the client side (7).
      </Typography>
      <Typography>
        With this architecture, the authentication is outsoruced to AWS Cognito, which is provide various functions to faciliate user expereicne and security.
      </Typography>
      <AmplifyArch style={{width: '100%', height: 300}}/>
    </Stack>
  )
}
function Security(props){
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
      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
            <CloudflareIcon style={{height: 75, width: 75, marginRight: 5}}/>
            <b>Cloudflare</b>
          </Typography>
          <Typography variant="body1">
            <b>Cloudflare</b> is used as the DNS and provide HTTPS for the website.
          </Typography>
        </div>
      </Stack>
      <FrontEndArch style={{width: '100%'}}/>
      <Divider/>
      <div>
        <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
          <CognitoIcon style={{height: 75, width: 75,  marginRight: 5}}/>
          <b>Cognito</b>
        </Typography>
      </div>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ 
            // borderTop: 1,
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