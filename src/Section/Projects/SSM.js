import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import * as React from 'react';
import ReactGA from 'react-ga4';
import { useNavigate } from "react-router-dom";
import App_Icon from '../../Images/SSM/App_Icon.png';
import {
  AppStoreButton,
  PlayStoreButton,
  WebButton,
} from './SSM/index.js';

const appStoreURL = "https://apps.apple.com/bm/app/sigicker-sticker-maker/id1550885981";
const playStoreURL = "https://play.google.com/store/apps/details?id=com.app.signalstickermaker"

function Mobile() {
  return(
    <Stack>
      <Typography>
        Created using <b>React Native</b>, downloaded <b>&gt; 5,000</b> times on both iOS and Android.
      </Typography>
      <Typography>
        Download now to see how it looks! 
        (
          <Link
            onClick={(e) => {
              window.open(appStoreURL, '_blank')
            }}
          >
            iOS
          </Link>
          /
          <Link
            onClick={(e) => {
              window.open(playStoreURL, '_blank')
            }}
          >
            Android
          </Link>
        )
      </Typography>
      
    </Stack>
  )
}

function Web(){
  return(
    <>
      <Typography variant="body">
        Developed by <b>ReactJS</b>, hosted on AWS S3 and CloudFront, served <b>&gt; 11,000</b> users world wide.
      </Typography>
    </>
  )
}

function Backend(){
  return(
    <Stack
      spacing={1}
    >
      <Typography variant="body">
        Leveraged <b>AWS Serverless Model</b> (API Gateway & Lambda), integrated with managed services like S3, VPC, CloudWatch...etc, to provide <b>reliable, efficient, and low-cost service</b>.
      </Typography>
      <Typography variant="body">
        Read the complete story of SignalStickerMaker.com's backend evolution in my blog:
      </Typography>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <Button
          onClick={() => {window.open("https://medium.com/@vardyng/the-journey-behind-signalstickermaker-coms-backend-architecture-from-students-to-professionals-b7f1babf26d1", "_blank").focus()}}
        >
          <Card sx={{ width: '100%' }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*FXXtC4rMIKX6D9YH6uHuug.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The journey behind SignalStickerMaker.com’s backend architecture: from Students to Professionals
              </Typography>
              <Typography variant="body2" color="text.secondary">
                By the time in 2021, an idea of create a tool to help create Signal sticker as easy as possible arise, but the two final year students (me and my friend) only got a very limited tool sets, and some what traditional, we know that:...
              </Typography>
              <Button size="large">Read</Button>
            </CardContent>
          </Card>
        </Button>
      </div>
    </Stack>
  )
}

function createDataForComponent(title, content, icons){
  return {title, content, icons}
}
function SSM(props) {
  const [show, setShow] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  
  const components = [
    createDataForComponent('Mobile', <Mobile />, <></>),
    createDataForComponent('Web', <Web/>, <></>),
    createDataForComponent('Backend', <Backend/>, <></>),
  ]

  const closeDialog = async() => {
    setShow(false);
    await new Promise(r => setTimeout(() => r(), 200));
    navigate("/")
  }

  const downloadButtonHeight = 50;

  const Description = () => {
    return(
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item container style={{flex: 'flex', justifyContent: "center", alignItem: "center"}}>
            <img src={App_Icon} alt="App Icon" height="150" width="150" style={{maginLeft: "500"}}/>
          </Grid>
          <Grid item container xs={12} sm style={{justifyContent: "center", alignItem: "center"}}>
            <ul>
              <li>
                <Typography variant="body">
                  An web/mobile application that allows users to create Signal Sticker pack from their own images.
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  Developed with another developer as a side project.
                  </Typography>
              </li>
              <li>
                <Typography variant="body">
                  Served <b>&gt; 16,000</b> users world wide and created <b>&gt; 25,000</b> stickers.
                </Typography>
              </li>
            </ul>
            <Grid 
              container 
              xs={12}
              style={{flex: 'flex', justifyContent: "center", alignItem: "center", backgroundColor: ''}}
              spacing={1}
              padding={2}
            >
              <Grid item>
                <AppStoreButton height={downloadButtonHeight}/>
              </Grid>
              <Grid item>
                <PlayStoreButton height={downloadButtonHeight}/>
              </Grid>
              <Grid item>
                <WebButton height={downloadButtonHeight}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
  }
  return(
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      maxWidth='md'
      open={show}
      onClose={closeDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4">
          SignalStickerMaker.com
          <Chip label={"Launched"} variant="outlined" color="primary" style={{marginLeft: 10}}/>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Description />
        <Divider style={{marginBottom: 10, marginTop: 10}}/>    
        <Grid container xs={12} spacing={3}>
          {components.map((component, index) => (
              <Grid item>
                <div style={{display: 'flex', alignItems: 'center', spacing: 2}}>
                  <Typography
                    variant="h5"
                    style={{
                      marginRight: 10,
                    }}
                  >
                    {component.title}
                  </Typography>
                </div>
                {component.content}
              </Grid>
          ))}
          
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={closeDialog} 
          fullWidth
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SSM