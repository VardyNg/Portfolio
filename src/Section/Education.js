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
    label: 'The Hong Kong Polytechnic University',
    degree: 'Bsc(Hons) Internet and Multimedia Technologies',
    cGPA: "2.77",
    description: [
      "Computer game development",
      "Programming and Database",
      "Integrated Circuit (IC)",
      "Web and mobile application development",
      "VR technology, 3D animation and modelling",
      "Internet Technology"
    ]
    
  },
  {
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
    label: 'Cheung Chek Che Secondary School',
    degree: 'Hong Kong Diploma of Secondary Education',
    cGPA: "NA",
    description: [],
  },
];

function Education(){
  return(
    <>
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway"}}>
          <b>Education Background</b>
        </Typography>
      </div>
      <Stepper orientation="vertical"> 
        {steps.map((step, index) => {
          let cGPAText = ""
          if(step.cGPA !== "NA"){
            cGPAText = ", cGPA: "+step.cGPA
          }
          return(
            <Step key={step.label} active={true} >
              <StepLabel>
                <Typography variant="h5">
                  <b>{step.label}</b>
                </Typography>
                <Typography variant="h6">
                  {step.degree} {cGPAText}
                </Typography>
              </StepLabel>
              <StepContent>
                <ul>
                  {step.description.map((description, index) => {
                    return(
                      <li>
                        <Typography>{description}</Typography>
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