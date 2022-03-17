import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Hello3 from '../Images/Hello3.png';
import SkillSets from './SkillSets';


const useStyles = makeStyles((theme) => ({
  greetingText: {
    [theme.breakpoints.up('sm')]: {
      marginTop: "10%",
      marginBottom: "10%",
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: "10%",
      marginBottom: "0%",
    },
  },
  figure: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 5
    },
  }
}))

function Greeting(){
  const theme = useStyles()
  
  return(
    // <Grow in={true}>
      <Grid container xs={12} style={{backgroundColor: ""}}>
        <Grid xs={12} sm={7} style={{backgroundColor: '', justifyContent: 'center', alignItems: 'center', }}>
          <div className={theme.greetingText}>
            <Typography variant="h3" component="div" style={{fontFamily: "Raleway"}}>
              Hello, I am Ng Hoi Wa, Vardy
            </Typography>
            <Typography variant="h5" component="div" style={{fontFamily: "Raleway"}}>
              Welcome to my portfolio.
            </Typography>
            <Divider style={{margin: 20}}/>
            <Typography variant="body1" component="div" style={{fontFamily: "Raleway"}}>
              I am a Full Stack Developer. Love coding, making useful application and learn new techniques.
            </Typography>
            <Divider style={{margin: 20}}/>
            <SkillSets/>
          </div>
        </Grid>
        <Grid xs={12} sm={5} className={theme.figure} >
          <img src={Hello3} height={350} style={{marginTop: 0, backgroundColor: ''}}/>
        </Grid>
      </Grid>
    // </Grow>
  )
}

export default Greeting