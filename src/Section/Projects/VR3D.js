import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import HAL3000 from '../../Images/HAL3000.png'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';

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
  const theme = useTheme();
  const classes = useStyles()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  return(
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      maxWidth
      fullWidth="md"
      onClose={props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4">
          VR application for 3D object manipulations using Unity
        </Typography>

      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{backgroundColor: ''}}>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/prAfkGpCarI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Grid>
          <Grid item xs={12}>
            <ul>
              <li><Typography className={classes.text} variant="body">A VR application for manipulating 3D objects in virtual place by hands.</Typography></li>
              <li><Typography className={classes.text} variant="body">Developed by using Unity3D, C#, and LeepMotion.</Typography></li>
              <li><Typography className={classes.text} variant="body">Support Voice Commands for moving the player.</Typography></li>
              <li><Typography className={classes.text} variant="body">Also a final project for the subject "EIE3360 Integrated Projects".</Typography></li>
              <li><Typography className={classes.text} variant="body">Watch the video for more!</Typography></li>
            </ul>
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

export default VR3D