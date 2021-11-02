import react, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import SSM from './Projects/SSM'
import HAL from './Projects/HAL'
const projects = [
  {
    title: 'Signal Sticker Maker',
    description: `...`,
  },
  {
    title: 'H.A.L. 3000: The School Survival',
    description: `...`,
  },
  
];

function Projects(){
  const [showSSM, setShowSSM] = useState(false)
  const [showHAL, setShowHAL] = useState(false)
  const closeSSM = () => {setShowSSM(false);};
  const closeHAL = () => {setShowHAL(false);};

  return(
    <>
      <SSM open={showSSM} onClose={closeSSM}/>
      <HAL open={showHAL} onClose={closeHAL}/>
      <div style={{alignContent: "left"}}>
        <Typography variant="h4">
          <b>Projects</b>
        </Typography>
      </div>
      <div >
        {projects.map((project, index) => {
          return(
            <Card>
              <CardContent>
                <Typography variant="h4">
                  {project.title}
                </Typography>
              </CardContent>
              <Button
                onClick={() => {
                  if(project.title === "Signal Sticker Maker") setShowSSM(true)
                  else if(project.title === "H.A.L. 3000: The School Survival") setShowHAL(true)
                }}
              >
                Details
              </Button>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default Projects;