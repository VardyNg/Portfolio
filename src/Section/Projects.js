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
import Chip from '@mui/material/Chip';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VR3D from './Projects/VR3D'

const projects = [
  {
    chip: ["Side Projects", "Group"],
    title: 'Signal Sticker Maker',
    description: "An online application for making sticker for the Signal app, reached over 5000 users since it launces. Available on iOS, Android, and Web",
  },
  {
    chip: ["Final Year Project", "Individual"],
    title: 'H.A.L. 3000: The School Survival',
    description: "A 3D game for learing programming. Player will learn and use programming logics to solve problems, dedicated for teenagers or children with or without programming experience.",
  },
  {
    chip: ["School Projects", "Individual"],
    title: '3D animations with Blender and AutoCAD 3DS MAX',
    description: "School assignments related to 3D animation, it involves 3D modelling, lighting, animation, and so on.",
  },
  {
    chip: ["School Projects", "Group"],
    title: "Web game for learning TCP/IP concepts",
    description: "School assignment for making web game. The game visualize some TCP/IP concepts into games and interact with players."
  },
  {
    chip: ["School Projects", "Group"],
    title: "VR application for 3D object manipulations using Unity",
    description: "A VR application created by Unity3D and deepmotion, user can use their hands to manipulate 3D object, like scalling, rotation, and transformation."
  }
  
  
];

function Dialogs(props){

}

function Projects(){
  const [showSSM, setShowSSM] = useState(false)
  const [showHAL, setShowHAL] = useState(false)
  const [show3D, setShow3D] = useState(false)
  const [showVR3D, setShowVR3D] = useState(false)

  const closeSSM = () => {setShowSSM(false);};
  const closeHAL = () => {setShowHAL(false);};
  const close3D = () => {setShow3D(false)}
  const closeVR3D = () => {setShowVR3D(false)}

  return(
    <>
      <SSM open={showSSM} onClose={closeSSM}/>
      <HAL open={showHAL} onClose={closeHAL}/>
      <ThreeDAnimations open={show3D} onClose={close3D}/>
      <VR3D open={showVR3D} onClose={closeVR3D}/>
      
      <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
        Projects / Previous Works
      </Typography>
      <div >
        {projects.map((project, index) => {
          return(
            <Card style={{margin: 20}}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={10} >
                    <Typography variant="h6" sx={{ textAlign: 'left', fontWeight: 'bold'}}>
                      {project.title}
                      {project.chip.map((chip, index) => {
                        return(
                          <Chip label={chip} variant="outlined" style={{marginLeft: 10}}/>
                        )
                      })}
                    </Typography>
                    <Typography variant="body1" component="div" sx={{textAlign: 'left'}}>
                      {project.description}
                    </Typography>
                    
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button
                      style={{height: "100%"}}
                      onClick={() => {
                        if(project.title === "Signal Sticker Maker") setShowSSM(true)
                        else if(project.title === "H.A.L. 3000: The School Survival") setShowHAL(true)
                        else if(project.title === "3D animations with Blender and AutoCAD 3DS MAX") setShow3D(true)
                        else if(project.title === "VR application for 3D object manipulations using Unity") setShowVR3D(true)
                      }}
                      endIcon={<ArrowForwardIosIcon/>}
                    >
                      Details
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default Projects;