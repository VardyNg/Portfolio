import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { ReactComponent as HKCCLogo } from '../Images/PolyU_HKCC.svg';
import { ReactComponent as PolyULogo } from '../Images/PolyU.svg';
import { ReactComponent as CCCSSLogo } from '../Images/CCCSS.svg';
import IconButton from '@mui/material/IconButton';

const iconSize = 40;
const steps = [
  {
    yearsRange: "Sep 2019 - Dec 2021",
    label: 'The Hong Kong Polytechnic University',
    degree: 'BSc(Hons) Internet and Multimedia Technologies',
    cGPA: "2.86",
    description: [
      "Computer Game Development",
      "Programming and Database",
      "Integrated Circuit (IC)",
      "Web and Mobile Application Development",
      "VR technology, 3D Animation and Modelling",
      "Internet Technology"
    ],
    icon: <PolyULogo style={{ height: iconSize, width: iconSize }}/>,
    url: "https://www.polyu.edu.hk/en/"
  },
  {
    yearsRange: "Sep 2017 - Jun 2019",
    label: 'Hong Kong Community College, Hong Kong PolyU',
    degree: 'Associate in Information Technology',
    cGPA: "3.36",
    description: [
      "Basic Programming",
      "Database",
      "Mathematics",
      "Networking",
      "Mobile App Design and Development"
    ],
    icon: <HKCCLogo style={{ height: iconSize, width: iconSize }}/>,
    url: "https://www.hkcc-polyu.edu.hk/en/home/index.html"
  },
  {
    yearsRange: "Sep 2011 - Jun 2017",
    label: 'Cheung Chek Chee Secondary School',
    degree: '2017 Hong Kong Diploma of Secondary Education (HKDSE)',
    cGPA: "",
    description: [
      "Level 5 in Information and Communication Technology (ICT) ",
      "Level 4 in Mathematics ",
      "Level 4 in Liberal Studies (LS)",
      "Level 4 in History"
    ],
    icon: <CCCSSLogo style={{ height: iconSize, width: iconSize }}/>,
    url: "https://www.cccss.edu.hk"
  },
];

function Education(){

  return(
    <div style={{marginTop: 20}}>      
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway", padding: 10}}>
          <b>Education Background</b>
        </Typography>
      </div>
      <Timeline position="left" style={{backgroundColor: ''}}>
        {steps.map((step, index) => {
          return(
            <TimelineItem key={index}>
              <TimelineContent >
                <Typography variant="h6" sx={{textAlign: 'left', fontWeight: '' }}>
                  {step.yearsRange}
                </Typography>
                <Typography variant="h5" sx={{textAlign: 'left', fontWeight: 'bold' }}>
                  {step.label}
                </Typography>
                <Typography variant="h6" sx={{textAlign: 'left', fontWeight: '' }}>
                  {step.degree}
                  {step.cGPA !== "" && ", cGPA: " + step.cGPA}
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
              </TimelineContent>
              <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }}/>
              <TimelineSeparator>
                <TimelineDot
                  style={{ backgroundColor: '#FFFFFF'}}
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
                <TimelineConnector />
              </TimelineSeparator>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  )
}

export default Education;