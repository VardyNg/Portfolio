import React, { useState } from 'react'
import { ReactComponent as Serverless } from '../../../Images/PPT/Serverless.svg'
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


function API(props){
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
    <Stack spacing={2}>
      <Typography variant="h4">
        API
      </Typography>
      <Divider/>
      <div>
        <Typography variant="body1">
          <b>Serverless Architecture</b> is used to handle all the requests. The requests are recieved in <b>API Gateway</b> and distributed to the <b>Lambda Functions</b>.
        </Typography>
        <Typography variant="body1">
          In this architecture, <b>no dedicated servers</b> are reserved to handle the requests, 
          reduced the cost of hosting and maintenance. The cost is charged based on the number of API requests, there will be $0 charge for 0 usage.
        </Typography>
        <Typography variant="body1">
          The service is also highly <b>scable</b> with the beneift of lambda functions.
        </Typography>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
      <div>
        <Typography variant="body1">
          The lambda functions are written in <b>Node.JS</b> and <b>Python</b>.
        </Typography>
      </div>
      <Serverless/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
    </Stack>
  )
}

export default API