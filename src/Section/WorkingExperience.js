import ArticleIcon from '@mui/icons-material/Article';
import WebIcon from '@mui/icons-material/Web';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
function createDataForWorkingExperience(startTime, endTime, label, position, department, description, url){
  return {startTime, endTime, label, position, department, description, url};
}
const steps = [
  createDataForWorkingExperience(
    moment("2022-05-01"),
    null,
    "eCloudValley",
    "Cloud Engineer",
    "in Solution Architect - Development team",
    [
      "Participated in serverless app development on AWS for a US based theme park company to handle 10K+ requests per day, written automation tests to ensure code reliability and quality, defined and developed tools for the team to facilitate CICD thus reduce deploy time by 80%, gathered requirements and revisions with clients.",
      "Developed backend applications for a global supply-chain client using NestJS and ORM, integrated with Azure resources like Azure AD and Monitor, deployed as docker container on ACR and AKS.",
      "Participated in cloud infrastructure designs and provisions using Terraform on AWS and Azure."
    ],
    "https://www.ecloudvalley.com/"
  ),
  createDataForWorkingExperience(
    moment("2022-01-01"),
    moment("2022-04-01").endOf('month'),
    "Armitage",
    "Mobile Developer",
    "Project BU",
    [
      "Participated in frontend application development using ReactJS, communicate with client to revise the systems, optimized application to reduce loading time by 30%.",
      "Implemented automated pipelines for Continuous Delivery using GitLab-CI."
    ],
    "https://www.armitage.com.hk/"
  ),
  createDataForWorkingExperience(
    moment("2021-09-01"),
    moment("2021-12-01").endOf('month'),
    'Banclogix, KVB Global',
    'Software Development Internship (Part Time mode)',
    'Blockchain Team',
    [
      "Setup and installed over 500 docker based systems.",
      "Developed and optimized scripts for maintaining network machines.",
    ],
    "https://www.banclogix.com/"
  ),
  createDataForWorkingExperience(
    moment("2021-06-01"),
    moment("2021-09-01").endOf('month'),
    'Crossover International',
    'Software Developer Internship (Full Time mode)',
    "IT",
    [
      "Designed and developed applications using ReactJS, ExpressJS, and MySQL.",
      "Setup and maintained Linux server."
    ],
    null
  )
];

function WorkingExperience(){
  const navigate =  useNavigate()
  return(
    <div style={{marginTop: 20}}>      
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
          Working Experiences
        </Typography>
      </div>
      <Timeline position="left" style={{marginLeft: 25}}>
        {steps.map((step, index) => {
          let durationString = ""
          if(index === 0)
            durationString += step.startTime.format('MMM YYYY') + " - Present"
          else{
            durationString += step.startTime.format('MMM YYYY') + " - " + step.endTime.format('MMM YYYY')
            durationString += " "
            durationString += "(" + (step.endTime.diff(step.startTime, 'month') + 1) + " months)"
          }
          return(
            <TimelineItem style={{marginBottom: 0}} key={index}>
              <TimelineContent >
                <Typography variant="h6" sx={{textAlign: 'left', fontWeight: '' }}>
                  {durationString}
                </Typography>
                <Typography variant="h5" sx={{textAlign: 'left', fontWeight: 'bold'}}>
                  {step.url ? 
                    <Link href={step.url} color="inherit" target="_blank">
                      {step.label}
                    </Link> 
                    : step.label
                  }
                </Typography>
                <Typography variant="subtitle1" sx={{textAlign: 'left', fontWeight: '' }}>
                  {step.position}, {step.department}
                </Typography>
                <div style={{marginLeft: -10}}>
                  <ul>
                    {step.description.map((description, i) => {
                      return(
                        <li key={i}>
                          <Typography sx={{ textAlign: 'left' }} >
                            {description}
                          </Typography>
                        </li>
                      )
                    })}
                  </ul>           
                </div>
                {step.label === "Crossover Int. Company Limited" && 
                <>
                  <ButtonGroup
                    variant="outlined"
                    size="small"
                    fullWidth
                  >  
                    <Button
                      style={{width: "50%"}}
                      onClick={() => { navigate("projects/techvision")}}
                      startIcon={<ArticleIcon/>}
                    >
                      Doc
                    </Button>
                    <Button
                      style={{width: "50%"}}
                      startIcon={<WebIcon/>}
                      onClick={() => { 
                        console.log("wdawda")
                        navigate("projects/tv-checker")
                      }}
                    >
                      View website
                    </Button>
                  </ButtonGroup>
                </>}           
              </TimelineContent>
              <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }}/>
              <TimelineSeparator style={{marginTop: 40}} >
                <TimelineDot/>
                <TimelineConnector />
              </TimelineSeparator>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  )
}

export default WorkingExperience;
