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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import SSM from './Projects/SSM'
import HAL from './Projects/HAL'
import ThreeDAnimations from './Projects/3DAnimations'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VR3D from './Projects/VR3D'
import TCPIP from './Projects/TCPIP'
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import { create } from '@mui/material/styles/createTransitions';

function createDataForProjects(title, description, chip, setShowDialog, start){
  return {title, description, chip, setShowDialog, start}
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

function Projects(){
  const theme = useTheme();

  const [showPPT, setShowPPT] = useState(false)
  const [showSSM, setShowSSM] = useState(false)
  const [showHAL, setShowHAL] = useState(false)
  const [show3D, setShow3D] = useState(false)
  const [showVR3D, setShowVR3D] = useState(false)
  const [showTCPIP, setShowTCPIP] = useState(false)

  const closePPT = () => {setShowPPT(false)}
  const closeSSM = () => {setShowSSM(false);};
  const closeHAL = () => {setShowHAL(false);};
  const close3D = () => {setShow3D(false)}
  const closeVR3D = () => {setShowVR3D(false)}
  const closeTCPIP = () => {setShowTCPIP(false)}

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sideProjects = [
    createDataForProjects(
      "Private Tutor+",
      "A web application for private tutors to manage their businese. The application is built with ReactJS, AWS Serverless (S3 + API Gateway + Lambda), Amplify, and MySQL.",
      ["4 Developers", "Developing"],
      setShowPPT,
      true
    ),
    createDataForProjects(
      "Signal Sticker Maker",
      "An online application for making sticker for the Signal app, reached over 5000 users since it launces. Available on iOS, Android, and Web.",
      ["2 Developers", "Released"],
      setShowSSM,
      true
    )
  ]

  const schoolProjects = [
    createDataForProjects(
      'H.A.L. 3000: The School Survival',
      "A 3D game for learing programming. Player will learn and use programming logics to solve problems, dedicated for teenagers or children with or without programming experience.",
      ["Individual"],
      setShowHAL,
      true
    ),
    createDataForProjects(
      '3D animations with Blender and AutoCAD 3DS MAX',
      "School assignments related to 3D animation, it involves 3D modelling, lighting, animation, and so on.",
      ["Individual"],
      setShowVR3D,
      false,
    ),
    createDataForProjects(
      "VR application for 3D object manipulations using Unity",
      "A VR application created by Unity3D and deepmotion, user can use their hands to manipulate 3D object, like scalling, rotation, and transformation.",
      ["Group"],
      setShowVR3D,
      false
    ),
    createDataForProjects(
      "Web game for learning TCP/IP concepts",
      "School assignment for making web game. The game visualize some TCP/IP concepts into games and interact with players.",
      ["Group"],
      setShowTCPIP,
      false
      ),
  ];

  const Project = (props) => {
    const {project} = props;
    console.log(project)
    return(
      <>{
        project.map((project, index) => {
          console.log(project.chip.length)
          return(
            <Card style={{margin: 20}}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={10} >
                    <Stack
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      direction="row" 
                      spacing={2}
                    >
                      {project.start && 
                        <Rating
                          value={1}
                          max={1}
                        />
                      }
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          textAlign: 'left', 
                          fontWeight: 'bold',
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        {project.title}
                        {project.chip.length > 0 && 
                          <>
                            {project.chip.map((chip, index) => {
                              return(
                                <Chip 
                                  label={chip} 
                                  variant="outlined" 
                                  style={{marginLeft: 15}}
                                />
                              )
                            })}
                          </>
                        }
                      </Typography>
                    </Stack>
                    <Typography variant="body1" component="div" sx={{textAlign: 'left', marginTop: 1}}>
                      {project.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button
                      style={{height: "100%"}}
                      onClick={() => {project.setShowDialog(true)}}
                      endIcon={<ArrowForwardIosIcon/>}
                    >
                      Details
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )
        })
      }</>
    )
  }

  return(
    <>
      <SSM open={showSSM} onClose={closeSSM}/>
      <HAL open={showHAL} onClose={closeHAL}/>
      <ThreeDAnimations open={show3D} onClose={close3D}/>
      <VR3D open={showVR3D} onClose={closeVR3D}/>
      <TCPIP open={showTCPIP} onClose={closeTCPIP}/>
      <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
        Side Projects / School Projects
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Side Projects" />
          <Tab label="School Projects" />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChange}
      >
        <TabPanel value={value} index={0}>
          <Project project={sideProjects}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Project project={schoolProjects}/>
        </TabPanel>  
      </SwipeableViews>
    </>
  )
}

export default Projects;