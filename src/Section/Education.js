import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const steps = [
  {
    yearsRange: "Sep 2019 - Dec 2021",
    label: 'The Hong Kong Polytechnic University',
    degree: 'Bsc(Hons) Internet and Multimedia Technologies',
    cGPA: "2.77",
    description: [
      "Computer Game Development",
      "Programming and Database",
      "Integrated Circuit (IC)",
      "Web and Mobile Application Development",
      "VR technology, 3D Animation and Modelling",
      "Internet Technology"
    ]
    
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
  },
  {
    yearsRange: "Sep 2011 - Jun 2017",
    label: 'Cheung Chek Che Secondary School',
    degree: '2017 Hong Kong Diploma of Secondary Education (HKDSE)',
    cGPA: "NA",
    description: [
      "Level 5 in Information and Communication Technology (ICT) ",
      "Level 4 in Mathematics ",
      "Level 4 in Liberal Studies (LS)",
      "Level 4 in History"
    ],
  },
];

const showGPA = false
function Education(){
  return(
    <>
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway", padding: 10}}>
          <b>Education Background</b>
        </Typography>
      </div>
      <Stepper orientation="vertical"> 
        {steps.map((step, index) => {
          let cGPAText = ""
          if(step.cGPA !== "NA" && showGPA){
            cGPAText = ", cGPA: "+step.cGPA
          }
          return(
            <Step key={step.label} active={true} >
              <StepLabel>
                <Typography variant="h6" sx={{fontWeight: '' }}>
                  {step.yearsRange}
                </Typography>
                <Typography variant="h5" sx={{fontWeight: 'bold' }}>
                  {step.label}
                </Typography>
                <Typography variant="h6" sx={{fontWeight: '' }}>
                  {step.degree} {cGPAText}
                </Typography>
              </StepLabel>
              <StepContent>
                <ul>
                  {step.description.map((description, index) => {
                    return(
                      <li>
                        <Typography sx={{ textAlign: 'left' }} >
                          {description}
                        </Typography>
                      </li>
                    )
                  })}
                </ul>
              </StepContent>
            </Step>
          )
        })}
      </Stepper>
    </>
  )
}

export default Education;