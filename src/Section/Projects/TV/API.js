import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function API(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="h4">
          API
        </Typography>
        <Divider/>
        <Typography variant="body1">
          The API is written in <b>NodeJS</b> and hosted on the same server where front end and database are hosted.
        </Typography>
      </Stack>
    </>
  )
}

export default API