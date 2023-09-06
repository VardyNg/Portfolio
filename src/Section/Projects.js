import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function createDataForProjects(title, description, chip, link, start){
  return {title, description, chip, link, start}
}

function Projects(){
  const navigate = useNavigate()

  const sideProjects = [
    createDataForProjects(
      "Signal Sticker Maker",
      "A Web/Mobile app for making sticker for the Signal app, reached over 10,000 users world wide and created over 25,000 stickers",
      ["2 Developers", "Released"],
      "signal-sticker-maker",
      3
    ),
    createDataForProjects(
      "Private Tutor+",
      "A web application for private tutors to manage their business. The application is built with ReactJS, AWS Serverless (S3 + API Gateway + Lambda), Amplify, and MySQL.",
      ["4 Developers", "Archived"],
      "private-tutor-plus",
      3
    ),
  ]

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
        Projects
      </Typography>
      <Project projects={sideProjects}/>
    </div>
  )
}

export default Projects;
