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
import HAL3000 from '../../Images/HAL3000.png'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

function HAL(props) {
  const theme = useTheme();
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
          H.A.L. 3000 The School Survival
          <Chip label={"Developing"} variant="outlined" color="error" style={{marginLeft: 10}}/>
        </Typography>

      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{backgroundColor: ''}}>
            <Grid container >
              <Grid item xs={12} md={4}>
                <Grid container style={{flex: 1, justifyContent: "center", alignItem: "center", backgroundColor: ''}}>
                  <img src={HAL3000} style={{height: 250}}/>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8} style={{backgroundColor: ''}}>
                <Grid container style={{height: "100%", flex: 1, justifyContent: "center", alignItem: "center", backgroundColor: ''}}>
                  <Grid item xs={12} style={{backgroundColor: ''}}>
                    <ul>
                      <li><Typography variant="body">An 3D game dedicated for children or teenagers with or without programming experiences.  </Typography></li>
                      <li><Typography variant="body">Block base programming, intuituve interface, learn programming progressively. </Typography></li>
                      <li><Typography variant="body">Available for MacOS, Windows, iOS, and Android. </Typography></li>
                      <li><Typography variant="body">Developed by using Unity3D and C#. </Typography></li>
                      
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autoFocus fullScreen>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default HAL