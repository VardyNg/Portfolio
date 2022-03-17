import react from 'react'
import { ReactComponent as FrontEnd } from '../../../Images/PPT/Front-End-DevOps.svg'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function DevOps(props){
  return(
    <>
      <Typography>
        The front end is hosted in AWS S3
      </Typography>
      <FrontEnd/>
    </>
  )
}

export default DevOps