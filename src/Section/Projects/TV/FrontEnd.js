import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function FrontEnd(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="h4">
          Web Tech
        </Typography>
        <Divider/>
        <Typography variant="body1">
          <b>ReactJS</b> is used as the front-end framework for the application, it is hosted on the same server where database and service api are hosted.
        </Typography>
        <Typography variant="body1">
          A <b>GitHub actions workflow</b> is used to build and deploy the application to the server.
        </Typography>
        <Typography variant="body1">
          <b>Let's Encrypt</b> is used to generate SSL certificates for the application to provide HTTPS access.
        </Typography>

      </Stack>
    </>
  )
}

export default FrontEnd