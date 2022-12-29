import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Hello3 from '../Images/Hello3.png';
import SkillSets from './SkillSets';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start'
    },
  },
  greetingTextContainer: {
    [theme.breakpoints.up('sm')]: {
      marginTop: "10%",
      marginBottom: "10%",
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: "5%",
      marginBottom: "5%",
    },
  },
  greetingText: {
    fontFamily: "Raleway"
  },
  divider:{
    width: 100,
    margin: 20
  },
  figure: {
    // backgroundColor: 'pink',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      // padding: 5
    },
  }
}))

function Greeting(){
  const theme = useTheme();
  const classes = useStyles(theme)
  const upXS = useMediaQuery(theme.breakpoints.up('sm'));
  console.log(upXS)
  

  return(
    <Grid container xs={12} className={classes.container} >
      <Grid item xs={12} sm={7} >
        <div className={classes.greetingTextContainer}>
          <Typography variant="h3" component="div" className={classes.greetingText} style={{marginTop: 20}}>
            Hello, I am 
          </Typography>
          <Typography variant="h3" component="div" className={classes.greetingText} display="inline">
            Ng Hoi Wa, 
          </Typography>
          <Typography variant="h3" component="div" className={classes.greetingText} display="inline">
            {" "} Vardy
          </Typography>
          <Typography variant="h5" component="div" className={classes.greetingText}>
            Welcome to my portfolio
          </Typography>
          <Divider className={classes.divider}/>
          <Typography variant="body1" component="div" style={{fontFamily: "Raleway"}}>
            I am a Full Stack Developer. Love coding, making useful application and learn new techniques.
          </Typography>
          <Divider className={classes.divider}/>
          <SkillSets/>
        </div>
      </Grid>
      <Grid xs={12} sm={5}  className={classes.figure}>
        <img src={Hello3} height={'100%'} style={{marginTop: 0, backgroundColor: ''}} alt='my memoji' />
      </Grid>
    </Grid>
  )
}

export default Greeting