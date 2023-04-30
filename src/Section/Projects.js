import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function createDataForProjects(title, description, chip, link, start){
  return {title, description, chip, link, start}
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
  const navigate = useNavigate()

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sideProjects = [
    createDataForProjects(
      "Signal Sticker Maker",
      "An online application for making sticker for the Signal app, reached over 7000 users since it launces. Available on iOS, Android, and Web.",
      ["2 Developers", "Released"],
      "signal-sticker-maker",
      3
    ),
    createDataForProjects(
      "Private Tutor+",
      "A web application for private tutors to manage their business. The application is built with ReactJS, AWS Serverless (S3 + API Gateway + Lambda), Amplify, and MySQL.",
      ["4 Developers", "Developing"],
      "private-tutor-plus",
      3
    ),
  ]

  const schoolProjects = [
    createDataForProjects(
      'H.A.L. 3000: The School Survival',
      "A 3D game for learning programming. Player will learn and use programming logics to solve problems, dedicated for teenagers or children with or without programming experience.",
      ["Individual"],
      "hal-3000",
      1
    ),
    createDataForProjects(
      '3D animations with Blender and AutoCAD 3DS MAX',
      "School assignments related to 3D animation, it involves 3D modelling, lighting, animation, and so on.",
      ["Individual"],
      "3d-animations",
      0,
    ),
    createDataForProjects(
      "VR application for 3D object manipulations using Unity",
      "A VR application created by Unity3D and DeepMotion, user can use their hands to manipulate 3D object, like scaling, rotation, and transformation.",
      ["Group"],
      "3D-vr-game",
      0
    ),
    createDataForProjects(
      "Web game for learning TCP/IP concepts",
      "School assignment for making web game. The game visualize some TCP/IP concepts into games and interact with players.",
      ["Group"],
      "tcp-ip-game",
      0
      ),
  ];

  const Project = (props) => {
    const {projects} = props;
    console.log(projects)
    return(
      <>{
        projects.map((project, index) => {
          console.log(project.chip.length)
          return(
            <Card style={{margin: 20}} key={index}>
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
                      <div>
                        {
                          Array.from(Array(project.start).keys()).map((item, i) => (
                            <Rating
                              key={i}
                              value={1}
                              max={1}
                            />
                          ))
                        }
                      </div>
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
                      </Typography>
                      {project.chip.length > 0 && 
                        <>
                          {project.chip.map((chip, i) => {
                            return(
                              <Chip 
                                key={i}
                                label={chip} 
                                variant="outlined" 
                                style={{marginLeft: 15}}
                              />
                            )
                          })}
                        </>
                      }
                    </Stack>
                    <Typography variant="body1" component="div" sx={{textAlign: 'left', marginTop: 1}}>
                      {project.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button
                      style={{height: "100%"}}
                      onClick={() => {
                        navigate("/projects/" + project.link)
                      }}
                      startIcon={<ArticleIcon/>}
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
    <div style={{marginTop: 20}}>      
      {/* <Routes>
        <Route path="projects" element={<ReportRoute/>}/>
      </Routes> */}
      <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
        Side Projects / School Projects
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Side Projects" />
          <Tab label="School Projects" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Project projects={sideProjects}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Project projects={schoolProjects}/>
      </TabPanel>  
    </div>
  )
}

export default Projects;
