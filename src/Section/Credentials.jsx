import Typography from '@mui/material/Typography';
import { ReactComponent as AWSSAA } from '../Images/Certs/AWS-SAA.svg';
import { ReactComponent as AWSDVA } from '../Images/Certs/AWS-DVA.svg';
import { ReactComponent as HTCAO002 } from '../Images/Certs/HTCAO002.svg';
import { ReactComponent as AWSDOP } from '../Images/Certs/AWS-DOP.svg';
import { ReactComponent as AWSSOA } from '../Images/Certs/AWS-SOA.svg';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import moment from 'moment';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import ReactGA from 'react-ga4';
import { gaEvent } from "../functions";
import { GA_CATEGORY_BUTTON_CLICK } from '../constants';
function createDataForCerts(title, icon, issueDate, expirationDate, credentialLinkl){
  return {title, icon, issueDate, expirationDate, credentialLinkl}
}

const certs = [
  createDataForCerts(
    "AWS Certified Solutions Architect – Associate (SAA-C02)",
    <AWSSAA style={{height: 100}}/>,
    "2022-04-03",
    "2025-12-13",
    "https://www.credly.com/badges/7794c6a8-5d2d-487d-992a-7beb697ce65e"
  ),
  createDataForCerts(
    "AWS Certified Developer – Associate (DVA-C01)",
    <AWSDVA style={{height: 100}}/>,
    "2022-06-17",
    "2025-12-13",
    "https://www.credly.com/badges/610618a2-e827-48a0-9a9a-b80f7bc7cbcb"
  ),
  createDataForCerts(
    "HashiCorp Certified: Terraform Associate (HTCA002)",
    <HTCAO002 style={{height: 100}}/>,
    "2022-07-16",
    "2024-07-16",
    "https://www.credly.com/badges/67e029c5-743c-4a93-9ef7-7fa78641d4a3"
  ),
  createDataForCerts(
    "AWS Certified DevOps Engineer – Professional (DOP-C01)",
    <AWSDOP style={{height: 100, width: 100}}/>,
    "2022-12-13",
    "2025-12-13",
    "https://www.credly.com/badges/d808da6c-93f2-4fe3-84ec-e7932cb121ed/public_url"
  ),
  createDataForCerts(
    "AWS Certified SysOps Administrator – Associate (SOA-C02)",
    <AWSSOA style={{height: 100, width: 100}}/>,
    "2022-10-14",
    "2025-10-14",
    "https://www.credly.com/badges/f929e2d3-42f6-473d-9e1a-766a0f8b8185'
  )
]
function Credentials(){
  
  return(
    <div style={{marginTop: 10, marginBottom: 10}}>      
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway", padding: 10}}>
          <b>Certifications</b>
        </Typography>
        <Grid 
          container
          style={{display: 'flex', flexDirection: 'row', flexWrap: 'stretch', justifyContent: 'space-around', alignItems: 'stretch'}}
        >
          {certs.map(cert => (
            <Grid item xs={12} lg={6} padding={1}>
              <Card sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: 1 }}>
                <div style={{marginLeft: 30}}>
                  {cert.icon}
                </div>
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
                      onClick={() => {
                        gaEvent(GA_CATEGORY_BUTTON_CLICK, `Certification Link: ${cert.title}`);
                        window.open(cert.credentialLinkl)
                      }}
                    >
                      Show credentials
                    </Button>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Credentials;
