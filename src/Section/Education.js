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
    description: `...`,
  },
  {
    label: 'Hong Kong Community College, Hong Kong PolyU',
    degree: 'Associate in Information Technology',
    description: `...`,
  },
  {
    label: 'Cheung Chek Che Secondary School',
    degree: 'Hong Kong Diploma of Secondary Education',
    description: `...`,
  },
];

function Education(){
  return(
    <>
      <div style={{alignContent: "left"}}>
        <Typography variant="h4">
          <b>Education Background</b>
        </Typography>
      </div>
      <Stepper orientation="vertical"> 
        {steps.map((step, index) => (
          <Step key={step.label} active={true} >
            <StepLabel
            >
              <Typography variant="h5">
                <b>{step.label}</b>
              </Typography>
              <Typography variant="h6">
                {step.degree}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </>
  )
}

export default Education;