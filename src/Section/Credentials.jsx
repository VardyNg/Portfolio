import LinkIcon from '@mui/icons-material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { useState } from 'react';
import { GA_CATEGORY_BUTTON_CLICK } from '../constants';
import { gaEvent } from "../functions";
import { ReactComponent as AWSDOP } from '../Images/Certs/AWS-DOP.svg';
import { ReactComponent as AWSDVA } from '../Images/Certs/AWS-DVA.svg';
import { ReactComponent as AWSSAA } from '../Images/Certs/AWS-SAA.svg';
import { ReactComponent as AWSSOA } from '../Images/Certs/AWS-SOA.svg';
import { ReactComponent as AZ204 } from '../Images/Certs/AZ-204.svg';
import { ReactComponent as HTCAO002 } from '../Images/Certs/HTCAO002.svg';
import { ReactComponent as K8SCKA } from '../Images/Certs/K8S-CKA.svg';

function createDataForCerts(title, icon, issueDate, expirationDate, credentialLinkl, types, issuer){
  return {title, icon, issueDate, expirationDate, credentialLinkl, types, issuer}
}

const tabs = [
  { value: 'all', 
    label: 'Overview',
    issuers: [
      "Amazon Web Service",
      "HashiCorp",
      "Microsoft Azure"
    ]
  },
  { value: 'csp', 
    label: 'Cloud Service Provider',
    issuers: [
      "Amazon Web Service",
      "Microsoft Azure"
    ]
  },
  { value: 'iac', 
    label: 'IaC',
    issuers: [
      "HashiCorp"
    ]
  },
]

const certs = [
  createDataForCerts(
    "AWS Certified Solutions Architect – Associate (SAA-C02)",
    <AWSSAA style={{height: 100}}/>,
    "2022-04-03",
    "2025-04-03",
    "https://www.credly.com/badges/7794c6a8-5d2d-487d-992a-7beb697ce65e",
    ["all", "csp"],
    "Amazon Web Service"
  ),
  createDataForCerts(
    "AWS Certified Developer – Associate (DVA-C01)",
    <AWSDVA style={{height: 100}}/>,
    "2022-06-17",
    "2025-12-13",
    "https://www.credly.com/badges/610618a2-e827-48a0-9a9a-b80f7bc7cbcb",
    ["all", "csp"],
    "Amazon Web Service"
  ),
  createDataForCerts(
    "HashiCorp Certified: Terraform Associate (HTCA002)",
    <HTCAO002 style={{height: 100}}/>,
    "2022-07-16",
    "2024-07-16",
    "https://www.credly.com/badges/67e029c5-743c-4a93-9ef7-7fa78641d4a3",
    ["all", "iac"],
    "HashiCorp"
  ),
  createDataForCerts(
    "Kubernetes Certified Administrator (CKA)",
    <K8SCKA style={{height: 100}}/>,
    "2023-03-16",
    "2026-03-16",
    "https://www.credly.com/badges/67e029c5-743c-4a93-9ef7-7fa78641d4a3"
  ),
  createDataForCerts(
    "AWS Certified SysOps Administrator – Associate (SOA-C02)",
    <AWSSOA style={{height: 100, width: 100}}/>,
    "2022-10-14",
    "2025-12-13",
    "https://www.credly.com/badges/f929e2d3-42f6-473d-9e1a-766a0f8b8185",
    ["all", "csp"],
    "Amazon Web Service"
  ),
  createDataForCerts(
    "AWS Certified DevOps Engineer – Professional (DOP-C01)",
    <AWSDOP style={{height: 100, width: 100}}/>,
    "2022-12-13",
    "2025-12-13",
    "https://www.credly.com/badges/d808da6c-93f2-4fe3-84ec-e7932cb121ed/public_url",
    ["all", "csp"],
    "Amazon Web Service"
  ),
  createDataForCerts(
    "Microsoft Certified: Azure Developer Associate",
    <AZ204 style={{height: 100, width: 100}}/>,
    "2023-2-10",
    "2024-2-10",
    "https://www.credly.com/badges/1554db9d-2081-41cd-b832-a103b5d311a2/public_url",
    ["all", "csp"],
    "Microsoft Azure"
  ),
]

function CredentialsGroup(props){
  console.log(props)
  
  return (
    <div 
      hidden={props.value !== props.index}
      style={{
        marginLeft: 10,
        marginRight: 10
      }}
    >
      {props.issuers
        .map(issuer => {
          return (
            <> 
              <Typography variant='overline' color="text.secondary">
                {issuer}
              </Typography>
              <hr style={{width: '30%', marginTop: -5}}/>
              <Grid 
                key={issuer}
                container
                style={{
                  display: 'flex', 
                  flexDirection: 'row', 
                  flexWrap: 'stretch', 
                  justifyContent: 'space-around', 
                  alignItems: 'stretch', 
                  backgroundColor: ''
                }}
              >
                {certs
                  .filter(cert => cert.issuer === issuer)
                  .filter(cert => cert.types.includes(props.type))
                  .map(cert => (
                    <Grid item xs={12} lg={6} padding={1} key={cert} style={{backgroundColor: ''}}>
                      <Card sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: 0.5, height: 125, backgroundColor: ''}}>
                        <div style={{marginLeft: 10}}>
                          {cert.icon}
                        </div>
                        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '', width: '100%', marginBottom: -2}}>
                          <CardContent >
                            <Typography component="div" variant="h7">
                              {cert.title}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                              Validity: {moment(cert.issueDate).format("MMM YY")}
                              {cert.expirationDate !== null && <> - {moment(cert.expirationDate).format("MMM YY")}</>}
                            </Typography>
                            <Button
                              startIcon={<LinkIcon/>}
                              size="small"
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
                  )
                )}
              </Grid>
            </>
          )
        })
      }
    </div>
    )
  }
function Credentials(){
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return(
    <div style={{marginTop: 10, marginBottom: 10}}>      
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway", padding: 10}}>
          <b>Professional Qualifications</b>
        </Typography>
        <Tabs 
          value={tabValue} 
          onChange={handleChangeTab} 
          >
          {tabs.map((tab) => {
            return (
              <Tab label={tab.label} key={tab} />
            )
          })}
        </Tabs>
        {tabs.map((tab, index) => {
          return (
            <CredentialsGroup 
              type={tab.value} 
              value={tabValue} 
              index={index} 
              key={tab.value}
              issuers={tab.issuers}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Credentials;
