import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles, useTheme } from '@mui/styles';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import ScreenCap1 from '../../Images/Navigator/ScreenCap1.png';
import ScreenCap2 from '../../Images/Navigator/ScreenCap2.png';
import ScreenCap3 from '../../Images/Navigator/ScreenCap3.png';
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
  const [show, setShow] = React.useState(true);
  const theme = useTheme();
  const classes = useStyles()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()
  return(
    <Dialog
      fullScreen={fullScreen}
      open={show}
      maxWidth
      fullWidth="md"
      onClose={() => {setShow(false); window.history.replaceState(null, null, window.location.pathname);}}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4">
          Navigator: The TCP/IP Network
        </Typography>
          
      </DialogTitle>
      <DialogContent>
        <ul>
          <li><Typography className={classes.text} variant="body1">A 2D web game designed for children to learn the TCP/IP concepts, which is difficult to visualize and provide hands on experience.</Typography></li>
          <li><Typography className={classes.text} variant="body1">We try to visualize the complicated concepts of TCP/IP into some simple game tasks, so that the player can learn the concept by game. </Typography></li>
          <li><Typography className={classes.text} variant="body1">The game is also a final project for the subject "SD3985 Computer Game Development" in the Hong Kong Polytechnic University</Typography></li>
          <li><Typography className={classes.text} variant="body1">Developed by using <b>Phaser.io</b> and <b>JavaScript</b>.</Typography></li>
        </ul>
        <div style={{textAlign:'center'}}>
          <img src={ScreenCap1} style={{height: 250}} className={classes.images}/>
          <img src={ScreenCap2} style={{height: 250}} className={classes.images}/>
          <img src={ScreenCap3} style={{height: 250}} className={classes.images}/>
        </div>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={async() => {
            setShow(false); 
            await new Promise(r => setTimeout(() => r(), 1000));
            navigate("/")}
          } 
          autoFocus fullWidth
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TCPIP