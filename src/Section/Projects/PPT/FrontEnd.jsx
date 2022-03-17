import React, { useState } from 'react'
import { ReactComponent as ReactJSIcon } from '../../../Images/PPT/reactjs.svg'
import { ReactComponent as FrontEndArch} from '../../../Images/PPT/FrontEnd-Arch.svg'
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
import Grid from '@mui/material/Grid';

function FrontEnd(props){
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
    <Stack spacing={2}>
      <Typography variant="h4">
        Front end
      </Typography>
      <Divider/>
      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
            <ReactJSIcon style={{height: 75, width: 75, marginRight: 5}}/>
            <b>React JS</b>
          </Typography>
          <Typography variant="body1">
            The front end is written in <b>React JS</b> with <b>Material UI</b> and other libraries, it is designed for both mobile and desktop by make adopting responsive designs.
          </Typography>
        </div>
      </Stack>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>

      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
            <b>Hosting</b>
          </Typography>
          <Typography variant="body1">
            <b>AWS S3</b> is for the static hosting of the website.
          </Typography>
        </div>
      </Stack>
      <FrontEndArch style={{width: '100%'}}/>
    </Stack>
  )
}

export default FrontEnd