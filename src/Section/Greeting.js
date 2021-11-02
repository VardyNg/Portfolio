import react, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Hello from '../Images/Hello.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  greetingText: {
    [theme.breakpoints.up('sm')]: {
      marginTop: "50%",
      marginBottom: "50%",
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: "10%",
      marginBottom: "0%",
    },
  },
}))

function Greeting(){
  const theme = useStyles()
  
  return(
    <Grid container xs={12} style={{marginTop: 0, marginBottom: 0}}>
      <Grid xs={12} sm={6} style={{backgroundColor: '', justifyContent: 'center', alignItems: 'center', }}>
        <div className={theme.greetingText}>
          <Typography variant="h3" component="div" style={{fontFamily: "Raleway"}}>
            Hello, I am Ng Hoi Wa!
          </Typography>
          <Typography variant="h5" component="div" style={{fontFamily: "Raleway"}}>
            Welcome to my portfolio.
          </Typography>
        </div>
      </Grid>
      <Grid xs={12} sm={6} style={{backgroundColor: '', justifyContent: 'center', alignItems: 'center', }}>
        <img src={Hello} height={400}/>
      </Grid>
    </Grid>
  )
}

export default Greeting