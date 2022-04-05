import Box from '@mui/material/Box';
import ArticleIcon from '@mui/icons-material/Article';
import WebIcon from '@mui/icons-material/Web';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Divider from '@mui/material/Divider'
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
function createDataForWorkingExperience(yearsRange, label, position, description){
  return {yearsRange, label, position, description};
}
const steps = [
  createDataForWorkingExperience(
    "Jan 2022 - Present",
    "Armitage Technologies Limited",
    "Mobile Developer",
    [
      "Develop hybrid application using ReactJS",
      "Develop CICD workflow to deploy product",
      "Suggested and assisted the migration of using GitLab"
    ],
  ),
  createDataForWorkingExperience(
    "Sep 2021 - Dec 2021 (4 months)",
    'Banclogix System Co. Limited, KVB Global',
    'Software Development Internship (Part Time mode)',
    [
      "Develop software to maintain systems using ReactJS and Docker",
      "System support for the crypto currency ETD",
    ],
  ),
  createDataForWorkingExperience(
  "Jun 2021 - Sep 2021 (4 months)",
  'Crossover Int. Company Limited',
  'Software Developer Internship (Full Time mode)',
    [
      "Designed and developed a CRUD application to support competitions scoring using ReactJS",
      "Maintained and developed APIs using NodeJS, backed with MySQL Database",
      "Setup and maintained remote servers",
      "Implement CI/CD workflow to automate deployment",
      "Consulted with end users to develop and revised the system",
      "Rated “Exceed Expectation” by the supervisorr"
    ],
  ),
  createDataForWorkingExperience(
    "Jun 2020 - Jun 2021 (1 year)",
    'IT & Math Private Tutor',
    'Self-Employed (Part time)',
    [
      "Private tutored 8 students from IB International and DSE discipline individually ",
      "Concentrated in senior secondary student, IT and Mathematic coaching",
      "Designed teaching materials and assessments ",
    ],
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
          return(
            <TimelineItem style={{marginBottom: 15}} key={index}>
              <TimelineContent >
                <Typography variant="h6" sx={{textAlign: 'left', fontWeight: '' }}>
                  {step.yearsRange}
                </Typography>
                <Typography variant="h5" sx={{textAlign: 'left', fontWeight: 'bold' }}>
                  {step.label}
                </Typography>
                <Typography variant="h6" sx={{textAlign: 'left', fontWeight: '' }}>
                  {step.position} {" "}
                </Typography>       
                <ul>
                  {step.description.map((description, index) => {
                    return(
                      <li key={index}>
                        <Typography sx={{ textAlign: 'left' }} >
                          {description}
                        </Typography>
                      </li>
                    )
                  })}
                </ul>           
                {step.label === "Crossover Int. Company Limited" && 
                <>
                  <ButtonGroup
                    variant="outlined"
                    size="large"
                    fullWidth
                    >
                    
                    <Button
                      onClick={() => { navigate("projects/techvision")}}
                      startIcon={<ArticleIcon/>}
                    >
                      Doc
                    </Button>
                    <Button
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
              <TimelineSeparator>
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