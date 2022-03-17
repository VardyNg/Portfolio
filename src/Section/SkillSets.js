import { makeStyles } from '@mui/styles';
import Android_Studio_Icon from '../Images/Android_Studio_Icon.png';
import Java_Icon from '../Images/Java_Icon.png';
import React_Native_icon from '../Images/React_Native_icon.png';
import Unity3D from '../Images/Unity3D.png';
import Xcode_icon from '../Images/Xcode_icon.png'
import aws from '../Images/aws.png';
import NodeJS from '../Images/NodeJS.png';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

const useStyles = makeStyles((theme) => ({
  icons: {
    height: 40,
    margin: 5
  }
}))
function SkillSets(){
  const classes = useStyles()
  return(
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway"}}>
          Frontend / Backend / Game developer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img src={Android_Studio_Icon} className={classes.icons}/>
        <img src={Xcode_icon} className={classes.icons}/>
        {/* <img src={Java_Icon} className={classes.icons}/> */}
        <img src={React_Native_icon} className={classes.icons}/>
        <img src={Unity3D} className={classes.icons}/>
        <img src={aws} className={classes.icons}/>
        <img src={NodeJS} className={classes.icons}/>

      </Grid>
    </Grid>
  )
}

export default SkillSets