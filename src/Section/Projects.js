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
  return(
    <>
      <div style={{alignContent: "left"}}>
        <Typography variant="h4">
          <b>Projects</b>
        </Typography>
      </div>
      <div >
        {projects.map((projects, index) => {
          return(
            <Card>
              <CardContent>
                <Typography variant="h4">
                  {projects.title}
                </Typography>
              </CardContent>
              <Button>
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