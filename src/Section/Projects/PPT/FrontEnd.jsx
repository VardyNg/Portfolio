import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { ReactComponent as AmplifyIcon } from '../../../Images/Amplify.svg'
import { ReactComponent as CloudflareIcon } from '../../../Images/cloudflare.svg'
import { ReactComponent as ReactJSIcon } from '../../../Images/PPT/reactjs.svg'
import { ReactComponent as S3Icon } from '../../../Images/S3.svg'

function FrontEnd(props){

  return(
    <Stack spacing={2}>
      <Typography variant="h4">
        Web Tech
      </Typography>
      <Divider/>
      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
            <ReactJSIcon style={{height: 75, width: 75, marginRight: 15}}/>
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
            <S3Icon style={{height: 75, width: 75, marginRight: 15}}/>
            <b>AWS S3</b>
          </Typography>
          <Typography variant="body1">
            The website is hosted in AWS S3 with its static hosting service.
          </Typography>
        </div>
      </Stack>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
            <AmplifyIcon style={{height: 75, width: 75, marginRight: 15}}/>
            <b>AWS Amplify</b>
          </Typography>
          <Typography variant="body1">
            User authentication and authorization are handled by making use of AWS Amplify.
          </Typography>
        </div>
      </Stack>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>
      <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center'}}>
        <div>
          <Typography variant="h5" style={{display: 'flex', alignItems: 'center'}}>
            <CloudflareIcon style={{height: 75, width: 75, marginRight: 15}}/>
            <b>Cloudflare</b>
          </Typography>
          <Typography variant="body1">
            Cloudflare CDN is used for delivery the website faster and reliably. 
          </Typography>
        </div>
      </Stack>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider variant="middle" width="50%"/>
      </div>

      
    </Stack>
  )
}

export default FrontEnd