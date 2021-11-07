import react, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Hello from '../Images/Hello.png'
import Hello2 from '../Images/Hello2.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@mui/material/Grow';
import SkillSets from './SkillSets'
import Divider from '@mui/material/Divider';
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
              I am a year 5 student from Hong Kong PolyU. Love coding, make useful tools and fun games.
            </Typography>
            <Divider style={{margin: 20}}/>
            <SkillSets/>
          </div>
        </Grid>
        <Grid xs={12} sm={5} className={theme.figure} >
          <img src={Hello2} height={350} style={{marginTop: 0, backgroundColor: ''}}/>
        </Grid>
      </Grid>
    // </Grow>
  )
}

export default Greeting