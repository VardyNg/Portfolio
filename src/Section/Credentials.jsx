import Typography from '@mui/material/Typography';
import { ReactComponent as AWSSAA } from '../Images/Certs/AWS-SAA.svg';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import moment from 'moment';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
function createDataForCerts(title, icon, issueDate, expirationDate, credentialLinkl){
  return {title, icon, issueDate, expirationDate, credentialLinkl}
}

const certs = [
  createDataForCerts(
    "AWS Certified Solutions Architect – Associate",
    <AWSSAA style={{height: 100}}/>,
    "2022-04-03",
    "2025-04-03",
    "https://www.credly.com/badges/7794c6a8-5d2d-487d-992a-7beb697ce65e"
  )
]
function Credentials(){
  
  return(
    <div style={{marginTop: 10, marginBottom: 20}}>      
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway", padding: 10}}>
          <b>Certifications</b>
        </Typography>
        {certs.map(cert => (
          <Card sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: 3 }}>
            {cert.icon}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent >
                <Typography component="div" variant="h6">
                  {cert.title}
                </Typography>
                
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Validity: {moment(cert.issueDate).format("MMM YYYY")}
                  {cert.expirationDate !== null && <> - {moment(cert.expirationDate).format("MMM YYYY")}</>}
                </Typography>
                <Button
                  startIcon={<LinkIcon/>}
                  onClick={() => window.open(cert.credentialLinkl)}
                >
                  Show credentials
                </Button>
              </CardContent>
            </Box>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Credentials;