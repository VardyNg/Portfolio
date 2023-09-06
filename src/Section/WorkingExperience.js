import LinkIcon from '@mui/icons-material/Link';
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
    moment("2023-07-01").endOf('month'),
    "eCloudValley",
    "Cloud Engineer",
    "in Solution Architect - Development team",
    [
      "Participated in serverless development on AWS for a US based company to handle 10K+ requests daily.",
      "Defined and developed CI/CD tools for the team to reduce deploy time by 80%, created automation tests to ensure code quality, gathered requirements and revisions with clients.",
      "Developed backend applications for a global supply-chain client using NestJS and ORM, integrated with Azure resources, deployed as Docker container on K8S.",
      "Participated in cloud infrastructure designs and provisions using Terraform.",
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
    'Software Development Internship',
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
    'Software Developer Internship',
    "IT",
    [
      "Designed and developed applications using ReactJS, ExpressJS, and MySQL for a scoring system",
      "Consulted with clients to gather requirements and revisions.",
      "Setup and maintained Linux server to host the services.",
      "Implemented automated pipelines for Continuous Delivery using GitHub Actions"
    ],
    null
  )
];

function WorkingExperience(){

  return(
    <div style={{marginTop: 20}}>      
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
          Working Experiences
        </Typography>
      </div>
      <div>
        <Typography variant="h5">
          Open to work in Toronto, ON 🇨🇦
        </Typography>
      </div>
      <div style={{alignContent: "left"}}>
        <Typography variant="body">
          Please checkout my full experience on my <Link href="https://www.linkedin.com/in/vardyng" target="_blank">LinkedIn</Link>
        </Typography>
      </div>
      <Timeline position="left" style={{marginLeft: 25}}>
        {steps.map((step, index) => {
          let durationString = ""
          if(step.endTime === null)
            durationString += step.startTime.format('MMM YYYY') + " - Present"
          else{
            durationString += step.startTime.format('MMM YYYY') + " - " + step.endTime.format('MMM YYYY')
          }
          return(
            <TimelineItem style={{marginBottom: 0}} key={index}>
              <TimelineContent >
                <Typography variant="h6" sx={{textAlign: 'left', fontWeight: '' }}>
                  {durationString}
                </Typography>
                <Typography variant="h5" sx={{textAlign: 'left', fontWeight: 'bold' }}>
                  {step.position}
                </Typography>
                <Typography variant="h6" sx={{textAlign: 'left', fontWeight: 'bold'}}>
                  {step.url ? 
                    <Link 
                      href={step.url}
                      color="inherit"
                      target="_blank"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      {step.label}
                      <LinkIcon style={{marginLeft: 5}}/>
                    </Link> 
                    : step.label
                  }
                </Typography>
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
