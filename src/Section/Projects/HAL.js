import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
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
import HAL3000 from '../../Images/HAL3000.png';
import MainScreen from '../../Images/HAL3000/MainScreen.png';
import ScreenCap1 from '../../Images/HAL3000/ScreenCap1.png';
import ScreenCap2 from '../../Images/HAL3000/ScreenCap2.png';
const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 20
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

function HAL(props) {
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
      onClose={async() => {setShow(false); 
            await new Promise(r => setTimeout(() => r(), 200));
            navigate("/")}}
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
                  <Typography className={classes.text} variant="h5"> Introduction </Typography>
                  <Grid item xs={12} style={{backgroundColor: ''}} >
                    <ul>
                      <li><Typography className={classes.text} variant="body1">An 3D game dedicated for children or teenagers with or without programming experiences, to learn programming logics and concepts.  </Typography></li>
                      <li><Typography className={classes.text} variant="body1">Block base programming, intuitive interface, learn programming progressively. </Typography></li>
                      <li><Typography className={classes.text} variant="body1">Available for <b>macOS</b>, <b>Windows</b>, <b>iOS</b>, and <b>Android</b>. </Typography></li>
                      <li><Typography className={classes.text} variant="body1">Developed by using <b>Unity3D</b> and <b>C#</b>. </Typography></li>
                      <li><Typography className={classes.text} variant="body1">Intermediate product for my final year project.</Typography></li>
                      
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <div className={classes.parent}>
              <img src={MainScreen} style={{height: 250}} className={classes.images}/>
              <img src={ScreenCap1} style={{height: 250}} className={classes.images}/>
              <img src={ScreenCap2} style={{height: 250}} className={classes.images}/>
            </div>
          </Grid>
          <Grid container padding={5}>
            <Grid xs={12} className={classes.parent}>
              <Typography className={classes.text} variant="h5" >Main Story</Typography>
              <Typography className={classes.text} variant="body1" >
                One day, a lazy boy waked up on his bed, struggling for changing his clothes and go to school. 
                He was hoping for someone who can clone him and replace him to school. 
                Suddenly, a robot came out from the drawer, looked the same as the boy. 
                The robot promised to replace him to school, but the boy must control the robot over the internet by programme, and try to avoid being discovered. 
              </Typography>
            </Grid>
          </Grid>
          <Grid container padding={5} >
            <Grid xs={12} className={classes.parent}>
              <Typography className={classes.text} variant="h5" >Watch the presentation video</Typography>
            </Grid>
            <Grid xs={12} className={classes.parent}>
              <Grid item xs={12} className={classes.imageContainer}>
                <iframe width="75%" height="500" src="https://www.youtube.com/embed/6fnqcI7amdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={async() => {
            setShow(false); 
            await new Promise(r => setTimeout(() => r(), 200));
            navigate("/")
          }} 
          fullWidth
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default HAL