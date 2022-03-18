import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { ReactComponent as ServerlessIcon } from '../Images/PPT/serverless-framework.svg';
import { ReactComponent as TerraformIcon } from '../Images/PPT/terraform.svg';
import { ReactComponent as NodeJsIcon } from '../Images/NodeJsIcon.svg';
import { ReactComponent as AWSIcon } from '../Images/AWSIcon.svg';
import { ReactComponent as ReactNativeIcon } from '../Images/ReactNativeIcon.svg';
import { ReactComponent as Unity3DIcon } from '../Images/Unity3D.svg';
import Xcode_icon from '../Images/Xcode_icon.png';

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
        <Typography variant="h5" sx={{ textAlign: 'center' }} style={{fontFamily: "Raleway", backgroundColor: ''}}>
          Frontend / Backend / DevOps developer
        </Typography>
      </Grid>
      <Grid item xs={12} 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          margin: '10px',
          spacing: 2
        }}  
      >
        <TerraformIcon style={{width: 50, height: 50, marginLeft: 5}}/>
        <ServerlessIcon style={{width: 50, height: 50, marginLeft: 5}}/>
        <img src={Xcode_icon} className={classes.icons}/>
        <ReactNativeIcon style={{width: 50, height: 50, marginLeft: 5}}/>
        <Unity3DIcon style={{width: 50, height: 50, marginLeft: 10}}/>
        <AWSIcon style={{width: 50, height: 50, marginLeft: 10}}/>
        <NodeJsIcon style={{width: 50, height: 50, marginLeft: 15}}/>

      </Grid>
    </Grid>
  )
}

export default SkillSets