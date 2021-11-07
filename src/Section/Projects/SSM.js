import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Img} from 'react-image'
import AppStore_download from '../../Images/AppStore_download.svg'
import Playstore_download from '../../Images/PlayStore_download.png'
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WebIcon from '@mui/icons-material/Web';
import App_Icon from '../../Images/App_Icon.png'
import Chip from '@mui/material/Chip';

function IOS(props){
  return(
    <>
      <Typography variant="subtitle2" component="div" color="gray">
        Downloads: 100＋ | iOS 13 or above | iPhone, iPad, iPod, and Mac (with M1 chips)
      </Typography>
      <Typography variant="body">
        Developed by using Xcode and Swift, support create sticker with emojis😎, save and add existing stickers, and many other functions.
      </Typography>
    </>
  )
}

function Android(props){
  return(
    <>
      <Typography variant="subtitle2" component="div" color="gray">
        Downloads: <b>1000＋</b> | Android 4.4 or above
      </Typography>
      <Typography variant="body">
        Previosuly developed by Android Studio and Java, currently a web app. A new version is coming soon by using React Native!
      </Typography>
    </>
  )
}

function Web(props){
  return(
    <>
      <Typography variant="subtitle2" component="div" color="gray">
        Visits: <b>4000+</b> 
      </Typography>
      <Typography variant="body">
        Previosuly developed by pure HTML with CSS and JavaScripts, it will be refreshed by using ReactJS very soon.
      </Typography>
    </>
  )
}

function Backend(props){
  return(
    <>
      <Typography variant="subtitle2" component="div" color="gray">
        Main platform: <b>AWS</b> 
      </Typography>
      <ul>
        <li>
          <Typography variant="body" component="div">
            We use AWS to host the website and the related services, which is to process user uploaded images and convert into Signal sticker packs for all the frontends. 
          </Typography>
        </li>
        <li>
          <Typography variant="body" component="div">
            With the benefits of using AWS, the backend is in serverless architecture, in which the services are handled by API Gateways and Lambda functions. It is not only reducing the cost but also make the services more scalable. 
          </Typography>
        </li>
      </ul>
    </>
  )
}
function SSM(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  return(
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      maxWidth={"md"}
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4">
          SignalStickerMaker.com
           <Chip label={"Launched"} variant="outlined" color="primary" style={{marginLeft: 10}}/>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{backgroundColor: ''}}>
            <Grid container >
              <Grid item xs={12} md={3}>
                <Grid container style={{flex: 1, justifyContent: "center", alignItem: "center", backgroundColor: ''}}>
                  <Img src={App_Icon} alt="App Icon" height="150"/>
                </Grid>
              </Grid>
              <Grid item xs={12} md={9} style={{backgroundColor: ''}}>
                <Grid container style={{height: "100%", flex: 1, justifyContent: "center", alignItem: "center", backgroundColor: ''}}>
                  <Grid item xs={12} style={{backgroundColor: ''}}>
                    <ul>
                      <li><Typography variant="body">An online application for sticker creation for the Signal app. </Typography></li>
                      <li><Typography variant="body">Developed by myself with my partner as a side project and for interest. </Typography></li>
                      <li><Typography variant="body">Served over 5000 users from many countries. </Typography></li>
                      <li><Typography variant="body">Available on iOS, Android, and Web.</Typography></li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <Grid container style={{flex: 1, justifyContent: "center", alignItem: "center", backgroundColor: ''}}>
              <a href="https://apps.apple.com/bm/app/sigicker-sticker-maker/id1550885981" target="_blank" rel="noreferrer">
                <Img src={AppStore_download} alt="link to AppStore" height="50"/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.app.signalstickermaker" target="_blank" rel="noreferrer">
                <img src={Playstore_download} alt="Download in Google Play Store" height="50"/>
              </a>
              <Button
                variant="outlined"
                onClick={() => {window.open("https://signalstickermaker.com", "_blank").focus()}}
                startIcon={<WebIcon/>}
                style={{height: 50}}
              >
                Visit the website
              </Button>
            </Grid>
            <Divider style={{marginBottom: 10, marginTop: 10}}/>    
            <Grid xs={12}>
               <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>iOS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <IOS/>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>Android</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Android/>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>Web</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Web/>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>Backend</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Backend/>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autoFocus fullWidth>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SSM