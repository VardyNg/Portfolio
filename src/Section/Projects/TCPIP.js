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
import ScreenCap1 from '../../Images/Navigator/ScreenCap1.png'
import ScreenCap2 from '../../Images/Navigator/ScreenCap2.png'
import ScreenCap3 from '../../Images/Navigator/ScreenCap3.png'
import { makeStyles } from '@material-ui/core/styles';

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

function TCPIP(props) {
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
          Navigator: The TCP/IP Network
        </Typography>
          
      </DialogTitle>
      <DialogContent>
        <ul>
          <li><Typography className={classes.text} variant="body">A 2D web game designed for children to learn the TCP/IP concepts, which is difficult to visualize and having hands on experience.</Typography></li>
          <li><Typography className={classes.text} variant="body">We try to visualize the complicated concepts of TCP/IP into some simple game tasks, so that the player can learn the concept by solving problems. </Typography></li>
          <li><Typography className={classes.text} variant="body">The game is also a final proejct for the subject "SD3985 Computer Game Development" in the Hong Kong Polytechnic University</Typography></li>
          <li><Typography className={classes.text} variant="body">Developed by using Phaser.io and JavaScript.</Typography></li>
        </ul>
        <div style={{textAlign:'center'}}>
          <img src={ScreenCap1} style={{height: 250}} className={classes.images}/>
          <img src={ScreenCap2} style={{height: 250}} className={classes.images}/>
          <img src={ScreenCap3} style={{height: 250}} className={classes.images}/>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autoFocus fullWidth>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TCPIP