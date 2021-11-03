import react, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import SSM from './Projects/SSM'
import HAL from './Projects/HAL'
import ThreeDAnimations from './Projects/3DAnimations'

const projects = [
  {
    title: 'Signal Sticker Maker',
    description: `...`,
  },
  {
    title: 'H.A.L. 3000: The School Survival',
    description: `...`,
  },
  {
    title: '3D animations with Blender and AutoCAD 3DS MAX',
    description: `...`,
  }
  
];

function Dialogs(props){

}

function Projects(){
  const [showSSM, setShowSSM] = useState(false)
  const [showHAL, setShowHAL] = useState(false)
  const [show3D, setShow3D] = useState(false)
  const closeSSM = () => {setShowSSM(false);};
  const closeHAL = () => {setShowHAL(false);};
  const close3D = () => {setShow3D(false)}

  return(
    <>
      <SSM open={showSSM} onClose={closeSSM}/>
      <HAL open={showHAL} onClose={closeHAL}/>
      <ThreeDAnimations open={show3D} onClose={close3D}/>
      
      <Typography variant="h4" sx={{ textAlign: 'left' }} style={{fontFamily: "Raleway"}}>
        <b>Projects / Previous Works</b>
      </Typography>
      <div >
        {projects.map((project, index) => {
          return(
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={8} >
                    <div style={{backgroundColor: 'lightblue'}}>
                      <Typography variant="h5">
                        {project.title}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
              <Button
                onClick={() => {
                  if(project.title === "Signal Sticker Maker") setShowSSM(true)
                  else if(project.title === "H.A.L. 3000: The School Survival") setShowHAL(true)
                  else if(project.title === "3D animations with Blender and AutoCAD 3DS MAX") setShow3D(true)
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