
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import * as React from 'react';
import ReactGA from 'react-ga4';
import { useNavigate } from "react-router-dom";
import App_Icon from '../../../Images/SSM/App_Icon.png';
import AppStoreButton from './AppStoreButton.tsx';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image1 from '../../../Images/EKK/1.webp';
import Image2 from '../../../Images/EKK/2.webp';
import Image3 from '../../../Images/EKK/3.webp';

const images = [
  {
    original: Image1
  },
  {
    original: Image2
  },
  {
    original: Image3
  },
]

function EKK(props) {
  const [show, setShow] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  
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
            <Typography variant="body">
              An iOS app that let you mix and share emojis right on your keyboard
            </Typography>
            <Grid 
              container 
              xs={12}
              style={{flex: 'flex', justifyContent: "center", alignItem: "center", backgroundColor: ''}}
              spacing={1}
              padding={2}
            >
              <AppStoreButton height={downloadButtonHeight}/>
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
          Emoji Kitchen Keyboard
          <Chip label={"Launched"} variant="outlined" color="primary" style={{marginLeft: 10}}/>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Description />
        <Divider style={{marginBottom: 10, marginTop: 10}}/>    
        <Grid container xs={12} spacing={3} alignItems={'center'} justifyContent={'center'}>
          <Grid item>
            <ImageGallery items={images} />
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

export default EKK;