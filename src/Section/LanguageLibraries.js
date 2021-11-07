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

const skills = [
  {
    skill: "Programming Language",
    items: [
      {name: "C#", icon: Csharp_Logo},
      {name: "C++", icon: CPlusPlus},
      {name: "HTML, CSS, JavaScript", icon: HCJ},
      {name: "Swift", icon: Swift},
      {name: "PHP", icon: php},
      {name: "Python", icon: python},
      {name: "Java", icon: Java_Icon},
    ]
  },
  {
    skill: "Databases",
    items: [
      {name: "MySQL", icon: MySQL},
      {name: "SQLite", icon: SQL_Lite},
    ]
  },
  {
    skill: "Libraries",
    items: [
      {name: "React Native", icon: React_Native_icon},
      {name: "React JS", icon: ReactJS},
      {name: "Node JS", icon: NodeJS},
    ]
  },
  {
    skill: "Tools", 
    items: [
      {name: "Xcode", icon: Xcode_icon},
      {name: "Android Studio", icon: Android_Studio_Icon},
      {name: "Unity3D", icon: Unity3D},
      {name: "AWS", icon: aws},
      {name: "Google Cloud Platform", icon: GCP}
    ]
  },
  {
    skill: "Operation Systems",
    items: [
      {name: "MacOS", icon: Apple},
      {name: "Windows", icon: Windows},
      {name: "Ubuntu", icon: ubuntu},
    ]
  }
  
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
        <FormGroup>
          <FormControlLabel 
            control={
              <Switch 
                onChange={handleChange}
              />
            } 
            label="Text mode" 
          />
        </FormGroup>
      </Typography>
      <ul>
        {skills.map((skill) => {
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
