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
    label: 'Banclogix System co. limited, KVB Group',
    degree: 'Software Development Internship (Part Time)',
    description: `...`,
  },
  {
    label: 'Crossover Internation Company Limited',
    degree: 'Software Developer Internship (Full Time)',
    description: `...`,
  },
  {
    label: 'Private Tutor',
    degree: 'Self-Employed',
    description: `...`,
  },
];

function WorkingExperience(){
  return(
    <>
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway"}}>
          <b>Working Experience</b>
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

export default WorkingExperience;