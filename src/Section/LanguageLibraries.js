import { makeStyles } from '@material-ui/core/styles';
import Csharp_Logo from '../Images/Csharp_Logo.png'
import CPlusPlus from '../Images/CPlusPlus.png'
import HCJ from '../Images/HCJ.png'
import Swift from '../Images/swift.png'
import MySQL from '../Images/MySQL.png'
import php from '../Images/php.png'
import Java_Icon from '../Images/Java_Icon.png'
import python from '../Images/python.png'
import SQL_Lite from '../Images/SQL_Lite.png'
import Typography from '@mui/material/Typography'
import Android_Studio_Icon from '../Images/Android_Studio_Icon.png';
import React_Native_icon from '../Images/React_Native_icon.png';
import Unity3D from '../Images/Unity3D.png';
import Xcode_icon from '../Images/Xcode_icon.png'
import aws from '../Images/aws.png';
import NodeJS from '../Images/NodeJS.png';
import Grid from '@material-ui/core/grid'
import GCP from '../Images/GCP.png'
import Windows from '../Images/Windows.png'
import Apple from '../Images/Apple.jpeg'
import ubuntu from '../Images/ubuntu.png'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import react, {useState} from 'react';
import ReactJS from '../Images/ReactJS.png'

const useStyles = makeStyles((theme) => ({
  icons: {
    height: 40,
    margin: 5
  }
}))

function createDataForSkill(skill, items){
  return {skill, items}
}

function createDataForItem(name, icon){
  return {name, icon}
}

const skills = [
  
    createDataForSkill("Programming Languages",
    [
      createDataForItem("C#",Csharp_Logo),
      createDataForItem("C++",CPlusPlus),
      createDataForItem("HTML, CSS, JavaScript",HCJ),
      createDataForItem("Swift",Swift),
      createDataForItem("PHP",php),
      createDataForItem("Python",python),
      createDataForItem("Java",Java_Icon),
    ]),
    createDataForSkill("Databases",
    [
      createDataForItem("MySQL",MySQL),
      createDataForItem("SQLite",SQL_Lite),
      createDataForItem("DynamoDB",null),
    ]),
    createDataForSkill("Libraries",
    [
      createDataForItem("React Native",React_Native_icon),
      createDataForItem("React JS",ReactJS),
      createDataForItem("Node JS",NodeJS),
    ]),
    createDataForSkill("IDEs", 
    [
      createDataForItem("Xcode",Xcode_icon),
      createDataForItem("Android Studio",Android_Studio_Icon),
      createDataForItem("Unity3D",Unity3D),
    ]),
    createDataForSkill("Operation Systems",
    [
      createDataForItem("MacOS", Apple),
      createDataForItem("Windows", Windows),
      createDataForItem("Ubuntu", ubuntu),
    ]),
    createDataForSkill("Cloud Services",
    [
      createDataForItem("Amazon Web Service",aws),
      createDataForItem("Google Cloud Platform",GCP)
    ]),
    createDataForSkill("Source Controls",
    [
      createDataForItem("Git",null),
      createDataForItem("GitHub",null),
      createDataForItem("GitLab",null),
      createDataForItem("SVN",null),
    ]),
    createDataForSkill("IaC",
    [
      createDataForItem("Terraform",null),
      createDataForItem("Serverless framework",null),
    ]),
]

function LanguageLibraries(props){
  const classes = useStyles()
  const [textMode, setTextMode] = useState(false)

  const handleChange = (event) => {
    setTextMode(event.target.checked)
  }
  
  return(
    <>
    
      <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
        Skills
        <FormControlLabel 
          style={{
            marginLeft: 10
          }}
          control={
            <Switch 
              onChange={handleChange}
            />
          } 
          label="Text mode" 
        />
      </Typography>

      <ul>
        {skills.map((skill) => {
          console.log(skill)
          return(
            <li>
              <Typography variant="body1" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 0}}>
                {skill.skill}
              </Typography>  
              <div style={{float:'left'}}>
                {skill.items.map((item, index) => {
                  
                  if(textMode){
                    var comma = ","
                    if(index === skill.items.length - 1){
                      comma = ""
                    }
                    return(
                        <> {item.name}{comma}</>
                    )
                  }else{
                    return(
                      <img src={item.icon} className={classes.icons}/>
                    )
                  }
                })}
              </div>
              <br></br><br></br><br></br>
            </li>
          )
        })}
      </ul>
    </>
  )
}
      
        {/* <img src={Java_Icon} className={classes.icons}/> */}
export default LanguageLibraries;
