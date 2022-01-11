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
    yearsRange: "Sep 2021 - Dec 2021",
    label: 'Banclogix System Co. Limited, KVB Group',
    degree: 'Software Development Internship (Part Time mode)',
    description: [
      "Develop software for system installation and maintenance in data centres",
      "System support for the crypto currency ETD",
    ],
  },
  {
    yearsRange: "Jun 2021 - Sep 2021",
    label: 'Crossover Int. Company Limited',
    degree: 'Software Developer Internship (Full Time mode)',
    description: [
      "Designed and developed an online CRUD application to support competitions scoring, maintain and develop APIs",
      "Consulted with end users to develop and revised the system.",
      "Setup and maintained remote server to support company operations.",
      "Proof-of-concept activity",
      "Implement automation, CI/CD, DevOps development.",
      "Rated “Exceed Expectation” in performance by the supervisor."

    ],
  },
  {
    yearsRange: "Jun 2020 - Jun 2021",
    label: 'Private Tutor',
    degree: 'Self-Employed',
    description: [
      "Private tutored 8 students from IB (International and DSE discipline individually. ",
      "Concentrated in senior secondary student, IT and Mathematic coaching.",
      "Designed teaching materials and assessments. ",

    ],
  },
];

function WorkingExperience(){
  return(
    <>
      <div style={{alignContent: "left"}}>
        <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
          Working Experiences
        </Typography>
      </div>
      <Stepper orientation="vertical"> 
        {steps.map((step, index) => (
          <Step key={step.label} active={true} >
            <StepLabel
            >
              <Typography variant="h6">
                {step.yearsRange}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold'}}>
                {step.label}
              </Typography>
              <Typography variant="h6">
                {step.degree}
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
        ))}
      </Stepper>
    </>
  )
}

export default WorkingExperience;