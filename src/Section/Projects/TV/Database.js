import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

function Database(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="h4">
          Database
        </Typography>
        <Divider/>
        <Typography variant="body1">
          <b>MySQL</b> is used as the database for the application, it is hosted on the same server where front end and service api are hosted.
        </Typography>
      </Stack>
    </>
  )
}

export default Database