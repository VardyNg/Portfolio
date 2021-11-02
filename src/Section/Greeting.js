import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Hello from '../Images/Hello.png'
function Greeting(){
  return(
    <Grid container xs={12} style={{marginTop: 0, marginBottom: -30}}>
      <Grid xs={12} sm={6} style={{backgroundColor: '', justifyContent: 'center', alignItems: 'center', }}>
        <div style={{backgroundColor: '', marginTop: "50%", marginBottom: "50%",}}>
          <Typography variant="h3" component="div" style={{fontFamily: "Raleway"}}>
            Hello, I am Ng Hoi Wa!
          </Typography>
          <Typography variant="h5" component="div" style={{fontFamily: "Raleway"}}>
            Welcome to my portfolio.
          </Typography>
        </div>
      </Grid>
      <Grid xs={12} sm={6} style={{backgroundColor: '', justifyContent: 'center', alignItems: 'center', }}>
        <img src={Hello}/>
      </Grid>
    </Grid>
  )
}

export default Greeting