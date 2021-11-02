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

function HAL(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  return(
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h5">
          H.A.L. 3000 The School Survival
        </Typography>
      </DialogTitle>
      <DialogContent>
        A online application for sticker creation for the Signal app.
        Available on iOS, Android, and Web.
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default HAL