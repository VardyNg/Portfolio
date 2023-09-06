import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import SSMIcon from '../Images/SSM/App_Icon.png';
import {
  AppStoreButton,
  PlayStoreButton,
  WebButton,
} from './Projects/SSM/index.js';

function createDataForIcon(path, alt) {
  return {path, alt}
}
function createDataForProjects(icon, title, description, chip, link, start, url, customComponent){
  return {icon, title, description, chip, link, start, url, customComponent}
}

function Projects(){
  const navigate = useNavigate()

  const sideProjects = [
    createDataForProjects(
      createDataForIcon(SSMIcon, "Signal Sticker Maker icon"),
      "SignalStickerMaker.com",
      "A Web/Mobile app for making sticker for the Signal app, served over 16,000 users world wide and created over 25,000 stickers.",
      ["2 Developers", "Released"],
      "signal-sticker-maker",
      3,
      'https://signalstickermaker.com',
      <Stack direction='row' spacing={1}>
        <AppStoreButton height={40}/>
        <PlayStoreButton height={40}/>
        <WebButton height={40}/>
      </Stack>
    ),
  ]

  const Project = (props) => {
    const {projects} = props;
    console.log(projects)
    return(
      <>{
        projects.map((project, index) => {
          console.log(project.chip.length)
          const titleIsLink = project.url ? true : false
          const displayIcon = project.icon ? true : false
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
                          fontWeight: 'bold',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {displayIcon && 
                          <img
                            src={project.icon.path}
                            alt={project.icon.alt}
                            style={{
                              width: 50,
                              height: 50,
                              marginLeft: -10,
                              marginRight: 2,
                            }}
                          />
                        }
                        {titleIsLink ? 
                          <Link
                            underline="hover"
                            onClick={(e) => {
                              window.open(project.url, '_blank')
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                            }}
                          >
                            {project.title}
                            <LinkIcon />
                          </Link>
                        : project.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body1" component="div" sx={{textAlign: 'left', marginTop: 1}}>
                      {project.description}
                    </Typography>
                    {project.customComponent}
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
