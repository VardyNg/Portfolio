import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { ReactComponent as EIELogo } from '../Images/PolyU-EIE.svg';
import { ReactComponent as PolyULogo } from '../Images/PolyU.svg';
import { ReactComponent as HKCCLogo } from '../Images/PolyU_HKCC.svg';
const iconSize = 35;
const steps = [
  {
    yearsRange: "2019 - 2021",
    institute: 'Department of Electronic and Information Engineering',
    degree: 'BSc(Hons) Internet and Multimedia Technologies',
    cGPA: "2.86",
    description: [
      "Web and Mobile Application Development",
      "Internet Technology",
      "Programming and Database",
      "Computer Game Development",
      "VR technology, 3D Animation and Modelling",
    ],
    icon: <EIELogo style={{ height: iconSize, width: iconSize }}/>,
    url: "https://www.polyu.edu.hk/en/eie/"
  },
  {
    yearsRange: "2017 - 2019",
    institute: 'Hong Kong Community College',
    degree: 'Associate in Information Technology',
    cGPA: "3.36",
    description: [
      "Mobile App Design and Development",
      "Basic Programming and Database",
      "Networking",
      "Mathematics",
    ],
    icon: <HKCCLogo style={{ height: iconSize, width: iconSize }}/>,
    url: "https://www.hkcc-polyu.edu.hk/en/home/index.html"
  }
];

const InstitutesIcon = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
}));

function DetailedInstitutes(){

  return <>
    <Timeline position="left" style={{backgroundColor: '', marginLeft: -50}}>
      {steps.map((step, index) => {
        return(
          <TimelineItem key={index}>
            <TimelineContent >
              <Typography variant="subtitle1" sx={{textAlign: 'left', fontWeight: '', marginBottom: -1}}>
                {step.yearsRange}
              </Typography>
              <Typography variant="h6" sx={{textAlign: 'left', fontWeight: 'bold', marginBottom: -1 }}>
                {step.degree}
              </Typography>       
              <Typography variant="subtitle1" sx={{textAlign: 'left', fontWeight: '' }}>
                {step.institute}
              </Typography>
              <div style={{marginLeft: -10}}>
                <ul>
                  {step.description.map((description, i) => {
                    return(
                      <li key={i}>
                        <Typography sx={{ textAlign: 'left' }} >
                          - {description}
                        </Typography>
                      </li>
                    )
                  })}
                </ul>                      
              </div>
            </TimelineContent>
            <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }}/>
            <TimelineSeparator>
              <InstitutesIcon>
                <TimelineDot
                  style={{
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => {
                      window.open(step.url, "_blank");
                    }}
                  >
                    {step.icon}
                  </IconButton>
                </TimelineDot>
              </InstitutesIcon>
            </TimelineSeparator>
          </TimelineItem>
        )
      })}
    </Timeline>
  </>
}
function Education(){
  return(
    <div style={{marginTop: 20}}>      
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway", padding: 10}}>
          <b>Education</b>
        </Typography>
      </div>
      <Timeline position="left">
        <TimelineItem>
          <TimelineContent>
            <Typography variant="h6" sx={{textAlign: 'left', fontWeight: '' }}>
              2017 - 2021
            </Typography>
            <Typography variant="h5" sx={{textAlign: 'left', fontWeight: 'bold' }}>
              The Hong Kong Polytechnic University
            </Typography>
            <DetailedInstitutes/>
          </TimelineContent>
          <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }}/>
          <TimelineSeparator>
            <TimelineDot
              style={{ backgroundColor: '#FFFFFF'}}
            >
              <IconButton
                size="small"
                onClick={() => {
                  window.open("https://www.polyu.edu.hk/en/", "_blank");
                }}
              >
                <PolyULogo style={{ height: iconSize * 1.2, width: iconSize * 1.2}}/>
              </IconButton>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
        </TimelineItem>
      </Timeline>
      
    </div>
  )
}

export default Education;