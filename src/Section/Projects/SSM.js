import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import GA from '../../Images/SSM/GA.png'
import Xcode_icon from '../../Images/Xcode_icon.png'
import { ReactComponent as ReactNativeIcon } from '../../Images/ReactNativeIcon.svg';


function IOS(props){
  return(
    <>
      <Typography variant="subtitle2" component="div" color="gray">
        Downloads: <b>100+</b> | iOS 13 or above | iPhone, iPad, iPod, and Mac (with M1 chips)
      </Typography>
      <Typography variant="body">
        Developed by using <b>Xcode</b> and <b>Swift</b>, support create sticker with emojis😎, save and add existing stickers, and many other functions.
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
        Previously developed by <b>Android Studio</b> and <b>Java</b>, currently a web app. A new version is coming soon by using <b>React Native</b>!
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
        Previously developed by pure HTML with CSS and JavaScripts, A new version written in <b>ReactJS</b> (Beta website) is coming soon.
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
            <b>AWS S3</b> is used to host the website. The backend service converts the user uploaded images to Signal Sticker pack for all iOS, Android, and Web platforms.
          </Typography>
        </li>
        <li>
          <Typography variant="body" component="div">
            With the AWS serverless architecture, the services is handled by API Gateways and Lambda functions. It is not only reducing the cost but also make the services more scalable. 
          </Typography>
        </li>
      </ul>
    </>
  )
}

function createDataForComponent(title, content, icons){
  return {title, content, icons}
}
function SSM(props) {
  const [show, setShow] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const IOSHeader = () => {
    return(
      <>
        <ReactNativeIcon/>
      </>
    )
  }
  
  const components = [
    createDataForComponent('iOS', <IOS/>, <IOSHeader/>),
    createDataForComponent('Android', <Android/>, <></>),
    createDataForComponent('Web', <Web/>, <></>),
    createDataForComponent('Backend', <Backend/>, <></>),
  ]
  return(
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      maxWidth='md'
      open={show}
      onClose={() => {setShow(false)}}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4">
          SignalStickerMaker.com
          <Chip label={"Launched"} variant="outlined" color="primary" style={{marginLeft: 10}}/>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item style={{flex: 'flex', justifyContent: "center", alignItem: "center"}}>
              <img src={App_Icon} alt="App Icon" height="150" style={{maginLeft: "500"}}/>
            </Grid>
            <Grid item container xs={12} sm style={{justifyContent: "center", alignItem: "center"}}>
              <ul>
                <li>
                  <Typography variant="body">
                    An online application for sticker creation for the Signal app, launched since January, 2021.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body">
                    Developed by myself with my partner as a side project and for interest. 
                    </Typography>
                </li>
                <li>
                  <Typography variant="body">
                    Served over 7000 +  users from many countries, base on Goolge Analtyics.
                    <img src={GA} alt="GA" height="200"/>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body">
                    Available on iOS, Android, and Web.
                  </Typography>
                </li>
              </ul>
              <Grid 
                container 
                item 
                xs={12} sm={6}
                style={{flex: 'flex', justifyContent: "center", alignItem: "center", backgroundColor: '', spacing: 0}}
              >
                <a href="https://apps.apple.com/bm/app/sigicker-sticker-maker/id1550885981" target="_blank" rel="noreferrer">
                  <img src={AppStore_download} alt="link to AppStore" height="50"/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.app.signalstickermaker" target="_blank" rel="noreferrer">
                  <img src={Playstore_download} alt="Download in Google Play Store" height="50"/>
                </a>
              </Grid>
              <Grid 
                container 
                item 
                xs={12} sm={6}
                style={{flex: 'flex', justifyContent: "center", alignItem: "center", backgroundColor: ''}}
              >
                <ButtonGroup
                  variant="outlined"
                  style={{height: 50}}
                >
                  <Button
                    onClick={() => {window.open("https://dev.signalstickermaker.com", "_blank").focus()}}
                    startIcon={<WebIcon/>}
                  >
                    Visit the BETA webiste
                  </Button>
                  <Button
                    onClick={() => {window.open("https://signalstickermaker.com", "_blank").focus()}}
                    startIcon={<WebIcon/>}
                  >
                    Visit the website
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Divider style={{marginBottom: 10, marginTop: 10}}/>    
        <Grid xs={12}>
          {components.map((component, index) => (
            <Accordion
              expanded
            >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <div style={{display: 'flex', alignItems: 'center', spacing: 2}}>
                <Typography
                  variant="h5"
                  style={{
                    marginRight: 10,
                  }}
                >
                  {component.title}
                </Typography>
                {component.icons}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {component.content}
            </AccordionDetails>
          </Accordion>
          ))}
          
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {setShow(false)}} autoFocus fullWidth>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SSM