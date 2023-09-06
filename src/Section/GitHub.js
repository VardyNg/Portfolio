import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

function GitHub(props) {
  return(
    <>
      <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
        <Link
          style={{
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          onClick={() => window.open('https://GitHub.com/VardyNg', '_blank').focus()}
        >
          <GitHubIcon fontSize='14'/>
          GitHub.com/VardyNg
        </Link>
      </Typography>
      <img
        src="https://ghchart.rshah.org/vardyng"
        alt="VardyNg's Github chart" 
        width='80%'
      />
    </>
  )
}

export default GitHub;