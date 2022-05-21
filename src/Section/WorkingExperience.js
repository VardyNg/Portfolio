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
import { useNavigate } from 'react-router-dom';
function createDataForWorkingExperience(startTime, endTime, label, position, description){
  return {startTime, endTime, label, position, description};
}
const steps = [
  createDataForWorkingExperience(
    moment("2022-05-01"),
    null,
    "eCloudvalley Digital Technology Co., Ltd",
    "Cloud Engineer",
    [],
  ),
  createDataForWorkingExperience(
    moment("2022-01-01"),
    moment("2022-04-01").endOf('month'),
    "Armitage Technologies Limited",
    "Mobile Developer",
    [
      "Develop hybrid application using ReactJS",
      "Develop CICD workflow to deploy product",
      "Suggested and assisted the migration of using GitLab"
    ],
  ),
  createDataForWorkingExperience(
    moment("2021-09-01"),
    moment("2021-12-01").endOf('month'),
    'Banclogix System Co. Limited, KVB Global',
    'Software Development Internship (Part Time mode)',
    [
      "Develop software to maintain systems using ReactJS and Docker",
      "System support for the crypto currency ETD",
    ],
  ),
  createDataForWorkingExperience(
    moment("2021-06-01"),
    moment("2021-09-01").endOf('month'),
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
            durationString += step.startTime.format('MMM YYYY') + "- Present"
          else{
            durationString += step.startTime.format('MMM YYYY') + " - " + step.endTime.format('MMM YYYY')
            durationString += " "
            durationString += "(" + (step.endTime.diff(step.startTime, 'month') + 1) + " months)"
          }
          return(
            <TimelineItem style={{marginBottom: 15}} key={index}>
              <TimelineContent >
                <Typography variant="h6" sx={{textAlign: 'left', fontWeight: '' }}>
                  {durationString}
                  
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