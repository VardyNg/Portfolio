import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import React from 'react';
import { ReactComponent as Serverless } from '../../../Images/PPT/Serverless.svg';


function API(props){
  return(
    <Stack spacing={2}>
      <Typography variant="h4">
        API
      </Typography>
      <Divider/>
      <div>
        <Typography variant="body1">
          <b>Serverless Architecture</b> is servered as the backend. The API is provided and received in <b>API Gateway</b> and distributed to the <b>Lambda Functions</b>.
        </Typography>
        <Typography variant="body1">
          In this architecture, <b>no dedicated servers</b> are reserved to handle the requests, 
          it <b>reduced the cost</b> of hosting and maintenance in this project. To explain, the cost is charged based on the number of API requests, there can be $0 charge in case of 0 usage.
        </Typography>
        <Typography variant="body1">
          The service is also highly <b>scableable</b> with the benefit of lambda functions, which can provided unlimited concurrency.
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
      <Serverless style={{width: '100%'}}/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
    </Stack>
  )
}

export default API