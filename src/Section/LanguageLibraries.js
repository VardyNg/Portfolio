import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import MySQL from '../Images/MySQL.png';
import Xcode_icon from '../Images/Xcode_icon.png';
import { ReactComponent as MySQLIcon } from '../Images/PPT/mysql.svg';
import { ReactComponent as GCPIcon } from '../Images/GCPIcon.svg';
import { ReactComponent as JavaIcon } from '../Images/JavaIcon.svg';
import { ReactComponent as SwiftIcon } from '../Images/SwiftIcon.svg';
import { ReactComponent as CSharpIcon } from '../Images/CSharpIcon.svg';
import { ReactComponent as CPlusPlusIcon } from '../Images/CPlusPlusIcon.svg';
import { ReactComponent as PythonIcon } from '../Images/PythonIcon.svg';
import { ReactComponent as ReactNativeIcon } from '../Images/ReactNativeIcon.svg';
import { ReactComponent as ReactJSIcon } from '../Images/ReactJSIcon.svg';
import { ReactComponent as AWSIcon } from '../Images/AWSIcon.svg';
import { ReactComponent as HTML5Icon } from '../Images/HTML5Icon.svg';
import { ReactComponent as CSSIcon } from '../Images/CSSIcon.svg';
import { ReactComponent as JSIcon } from '../Images/JSIcon.svg';
import { ReactComponent as NodeJsIcon } from '../Images/NodeJsIcon.svg';
import { ReactComponent as Unity3DIcon } from '../Images/Unity3D.svg';
import { ReactComponent as AppleIcon } from '../Images/AppleLogo.svg';
import { ReactComponent as CentOSIcon } from '../Images/centos.svg';
import { ReactComponent as DynamoDBIcon } from '../Images/dynamodb.svg';
import { ReactComponent as GitIcon } from '../Images/git.svg';
import { ReactComponent as GitHubIcon } from '../Images/github.svg';
import { ReactComponent as GitLabIcon } from '../Images/gitlab.svg';
import { ReactComponent as JenkinsIcon } from '../Images/jenkins.svg';
import { ReactComponent as MongoDBIcon } from '../Images/mongodb.svg';
import { ReactComponent as ServerlessIcon } from '../Images/PPT/serverless-framework.svg';
import { ReactComponent as TerraformIcon } from '../Images/PPT/terraform.svg';
import { ReactComponent as SonarqubeIcon } from '../Images/sonarqube.svg';
import { ReactComponent as SQLIcon } from '../Images/SQLIcon.svg';
import { ReactComponent as SVNIcon } from '../Images/svn.svg';
import { ReactComponent as UbuntuLogo } from '../Images/UbuntuLogo.svg';
import { ReactComponent as WindowsLogo } from '../Images/WindowsLogo.svg';
import { ReactComponent as AndoirStudioIcon} from '../Images/Android_Studio_Icon.svg'

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
      createDataForItem("Swift",SwiftIcon, true),
      createDataForItem("Python",PythonIcon, true),
      createDataForItem("C#",CSharpIcon, true),
      createDataForItem("C++",CPlusPlusIcon, true),
      createDataForItem("SQL",SQLIcon, true),
      createDataForItem("Java",JavaIcon, true),
      createDataForItem("JavaScript", JSIcon, true),
      createDataForItem("HTML", HTML5Icon, true),
      createDataForItem("CSS", CSSIcon, true),
    ]),
    createDataForSkill("Libraries",
    [
      createDataForItem("React Native",ReactNativeIcon, true),
      createDataForItem("React JS",ReactJSIcon, true),
      createDataForItem("Node JS",NodeJsIcon, true),
    ]),
    createDataForSkill("IDEs", 
    [
      createDataForItem("Xcode",Xcode_icon, false),
      createDataForItem("Android Studio",AndoirStudioIcon, true),
      createDataForItem("Unity3D",Unity3DIcon, true),
    ]),
    createDataForSkill("Cloud Services",
    [
      createDataForItem("Amazon Web Service",AWSIcon, true),
      createDataForItem("Google Cloud Platform",GCPIcon, true)
    ]),
    createDataForSkill("DBMS",
    [
      createDataForItem("MySQL",MySQLIcon, true),
      createDataForItem("DynamoDB",DynamoDBIcon, true),
      createDataForItem("MongoDB",MongoDBIcon, true),
    ]),
    createDataForSkill("Operation Systems",
    [
      createDataForItem("MacOS", AppleIcon, true),
      createDataForItem("Windows", WindowsLogo, true),
      createDataForItem("Ubuntu", UbuntuLogo, true),
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
  
  const SkillContent = (props) => {
    const {skill} = props
    return(
      // <li>
        <div 
          style={{
            width: '100%', 
            display: 'flex',
            minHeight: '70px',
          }}
          >
          <Typography variant="body1" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 0}}>
            {skill.skill}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'wrap',
                margin: textMode ? '0px' : '10px',
                spacing: 2,
              }}  
            >
              {skill.items.map((item, index) => {
                if(textMode){
                  var comma = index !== skill.items.length - 1 ? "," : ""
                  return(
                    <Typography style={{marginLeft: 7}}> 
                      {item.name}{comma}
                    </Typography>
                  )
                }else{
                  if(item.svg) return(<item.icon style={{height: 40, width: 40, marginRight: 10 }}/>)
                  else return( <img src={item.icon} className={classes.icons}/> )
                }
              })}
            </div>
          </Typography>  
        </div>
      // </li>
    )
  }
  return(
    <div style={{marginTop: 20}}>      
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
      <Grid 
        container 
        spaicng={2}
        style={{ 
          width: '100%',
          padding: 20,
          display: 'flex',
          // flex: 1,
          alignItems: 'strech',
          justifyContent: 'flex-start',
          // backgroundColor: 'blue',
          // flexDirection: 'row'
        }}
      >
        {/* <div
        > */}
          {Array.from(Array(skills.length).keys()).map((item, index) => {
            const temp = 1 // skills.length / 8
            const countInRow = 4
            return(
              <Grid 
                item 
                xs={12} 
                md={12/countInRow * 2} 
                lg={12/countInRow} 
                style={{
                  // backgroundColor:  '#'+(Math.random()*0xFFFFFF<<0).toString(16), 
                  height: '100',
                  // display: 'table-row'
                }}
              >
                {skills.slice(temp * index, temp * index + temp).map((skill, index) => {return(<SkillContent key={index} skill={skill}/>)})}
              </Grid>    
            )
          })}

        {/* </div> */}
      </Grid>
    </div>
  )
}
      
        {/* <img src={Java_Icon} className={classes.icons}/> */}
export default LanguageLibraries;
