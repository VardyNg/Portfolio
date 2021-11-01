import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Hello from '../Images/Hello.png'
function Greeting(){
  return(
    <Grid container xs={12} style={{marginTop: 50, marginBottom: 50}}>
      <Grid xs={12} sm={6} >
        <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'pink'}}>
          <Typography variant="h3" component="div">
            Hello, I am Ng Hoi Wa!
          </Typography>
          <Typography variant="h5" component="div">
            Welcome to my portfolio.
          </Typography>
        </div>
      </Grid>
      <Grid xs={12} sm={6}>
        <img src={Hello}/>
      </Grid>
    </Grid>
  )
}

export default Greeting