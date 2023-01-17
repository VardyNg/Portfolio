import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles, useTheme } from '@mui/styles';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga4';
const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 20,
  },
  imageContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink'
  },
  parent: {
    textAlign: 'center',
    width: '100%', 
    display: 'block',
  },
  images: {
    padding: 5
  }
}))

function VR3D(props) {
  const [show, setShow] = React.useState(true);
  const theme = useTheme();
  const classes = useStyles()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  const closeDialog = async() => {
    setShow(false);
    await new Promise(r => setTimeout(() => r(), 200));
    navigate("/")
  }
  return(
    <Dialog
      fullScreen={fullScreen}
      open={show}
      maxWidth
      fullWidth="md"
      onClose={closeDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4">
          VR application for 3D object manipulations using Unity
        </Typography>

      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
            <iframe width="80%" height="500" src="https://www.youtube.com/embed/prAfkGpCarI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Grid>
          <Grid item xs={12}>
            <ul>
              <li><Typography className={classes.text} variant="body1">A VR application for manipulating 3D objects in virtual place by hands.</Typography></li>
              <li><Typography className={classes.text} variant="body1">Developed by using <b>Unity3D</b>, <b>C#</b>, and LeepMotion.</Typography></li>
              <li><Typography className={classes.text} variant="body1">Support <b>Voice Commands</b> for moving the player.</Typography></li>
              <li><Typography className={classes.text} variant="body1">Also a final project for the subject "EIE3360 Integrated Projects" in Hong Kong PolyU.</Typography></li>
              <li><Typography className={classes.text} variant="body1">Watch the video for more!</Typography></li>
            </ul>
          </Grid>
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

export default VR3D