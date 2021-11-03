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

function ThreeDAnimations(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  return(
    <Dialog
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      open={props.open}
      onClose={props.onClose}
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

        <iframe width="100%" height="300" src="https://www.youtube.com/embed/Y8c5hOXNL7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <ul>
          <li>Inspired by the movie <i>2001: A Space Odyssey</i></li>
          <li>A short story about an astronaut try to reach to aliens but end up being elimitated</li>
          <li>Created by using AutoCAD 3DS MAX</li>
        </ul>
        <Typography variant="h6" style={{fontWeight: 'bold'}} sx={{ fontStyle: 'italic' }}>
          Conflagratios
        </Typography>
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/l6ZQsRN4WqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
        <ul>
          <li>Created by using Blender</li>
          <li>A short animation aims to demostrate the visual effects</li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autoFocus fullWidth>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ThreeDAnimations