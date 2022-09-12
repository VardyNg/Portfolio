import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga4';
function ThreeDAnimations(props) {
  const [show, setShow] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  return(
    <Dialog
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      open={show}
      onClose={async() => {setShow(false); 
            await new Promise(r => setTimeout(() => r(), 200));
            navigate("/")}}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h5">
          3D Animations with Blender and AutoCAD 3DS MAX
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Some school 3D animations individual assignments!
        </Typography>

        <Typography variant="h6" style={{fontWeight: 'bold'}} sx={{ fontStyle: 'italic' }}>
          Close Enounter
        </Typography>

        <iframe width="100%" height="300" src="https://www.youtube.com/embed/Y8c5hOXNL7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <ul>
          <li>Inspired by the movie <i>2001: A Space Odyssey</i></li>
          <li>A short story about an astronaut try to reach to aliens but end up being elimitated</li>
          <li>Created by using AutoCAD 3DS MAX</li>
        </ul>
        <Typography variant="h6" style={{fontWeight: 'bold'}} sx={{ fontStyle: 'italic' }}>
          Conflagration
        </Typography>
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/l6ZQsRN4WqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>  
        <ul>
          <li>Created by using Blender</li>
          <li>A short animation aims to demostrate the visual effects</li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={async() => {
            setShow(false); 
            await new Promise(r => setTimeout(() => r(), 200));
            navigate("/")}
          } 
          fullWidth
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ThreeDAnimations