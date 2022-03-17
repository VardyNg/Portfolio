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
import { ReactComponent as ServerlessIcon } from '../Images/PPT/serverless-framework.svg'
import { ReactComponent as TerraformIcon } from '../Images/PPT/terraform.svg'
import { ReactComponent as SQLIcon } from '../Images/sql.svg'
import { ReactComponent as DynamoDBIcon } from '../Images/dynamodb.svg'
import { ReactComponent as MongoDBIcon } from '../Images/mongodb.svg'
import { ReactComponent as CentOSIcon } from '../Images/centos.svg'
import { ReactComponent as GitIcon } from '../Images/git.svg'
import { ReactComponent as GitHubIcon } from '../Images/github.svg'
import { ReactComponent as GitLabIcon } from '../Images/gitlab.svg'
import { ReactComponent as SVNIcon } from '../Images/svn.svg'
import { ReactComponent as JenkinsIcon } from '../Images/jenkins.svg'
import { ReactComponent as SonarqubeIcon } from '../Images/sonarqube.svg'

const useStyles = makeStyles((theme) => ({
  icons: {
    height: 40,
    margin: 5,
  }
}))

function createDataForSkill(skill, items){
  return {skill, items}
}

function createDataForItem(name, icon, svg){
  return {name, icon, svg}
}

const skills = [
  
    createDataForSkill("Programming / Languages",
    [
      createDataForItem("C#",Csharp_Logo, false),
      createDataForItem("C++",CPlusPlus, false),
      createDataForItem("HTML, CSS, JavaScript",HCJ, false),
      createDataForItem("Swift",Swift, false),
      // createDataForItem("PHP",php),
      createDataForItem("Python",python, false),
      createDataForItem("Java",Java_Icon, false),
      createDataForItem("SQL",SQLIcon, true),
    ]),
    createDataForSkill("Libraries",
    [
      createDataForItem("React Native",React_Native_icon, false),
      createDataForItem("React JS",ReactJS, false),
      createDataForItem("Node JS",NodeJS, false),
    ]),
    createDataForSkill("IDEs", 
    [
      createDataForItem("Xcode",Xcode_icon, false),
      createDataForItem("Android Studio",Android_Studio_Icon, false),
      createDataForItem("Unity3D",Unity3D, false),
    ]),
    createDataForSkill("Cloud Services",
    [
      createDataForItem("Amazon Web Service",aws, false),
      createDataForItem("Google Cloud Platform",GCP, false)
    ]),
    createDataForSkill("DBMS",
    [
      createDataForItem("MySQL",MySQL, false),
      createDataForItem("SQLite",SQL_Lite, false),
      createDataForItem("DynamoDB",DynamoDBIcon, true),
      createDataForItem("MongoDB",MongoDBIcon, true),
    ]),
    createDataForSkill("Operation Systems",
    [
      createDataForItem("MacOS", Apple, false),
      createDataForItem("Windows", Windows, false),
      createDataForItem("Ubuntu", ubuntu, false),
      createDataForItem("CentOS", CentOSIcon, true),
    ]),

    createDataForSkill("DevOps",
    [
      createDataForItem("Git",GitIcon, true),
      createDataForItem("GitHub",GitHubIcon, true),
      createDataForItem("GitLab",GitLabIcon, true),
      createDataForItem("SVN",SVNIcon, true),
      createDataForItem("Jenkins",JenkinsIcon, true),
      createDataForItem("SonarQube",SonarqubeIcon, true),

    ]),
    createDataForSkill("IaC",
    [
      createDataForItem("Terraform",TerraformIcon, true),
      createDataForItem("Serverless framework",ServerlessIcon, true),
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
                    if(item.svg){
                      return(
                        <item.icon style={{height: 50, width: 50, marginRight: 10 }}/>
                      )
                    }else{
                      return(
                        <img src={item.icon} className={classes.icons}/>
                      )
                    }
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
