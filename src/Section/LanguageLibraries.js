import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { ReactComponent as AWSIcon } from '../Images/AWSIcon.svg';
import { ReactComponent as AzureIcon } from '../Images/azure.svg';
import { ReactComponent as CloudFormationIcon } from '../Images/cloudformation.svg';
import { ReactComponent as CSSIcon } from '../Images/CSSIcon.svg';
import { ReactComponent as DockerIcon } from '../Images/docker.svg';
import { ReactComponent as DynamoDBIcon } from '../Images/dynamodb.svg';
import { ReactComponent as GitHubActionIcon } from '../Images/github-action.svg';
import { ReactComponent as GitLabIcon } from '../Images/gitlab.svg';
import { ReactComponent as HTML5Icon } from '../Images/HTML5Icon.svg';
import { ReactComponent as JenkinsIcon } from '../Images/jenkins.svg';
import { ReactComponent as JSIcon } from '../Images/JSIcon.svg';
import { ReactComponent as K8SIcon } from '../Images/k8s.svg';
import { ReactComponent as NodeJsIcon } from '../Images/NodeJsIcon.svg';
import { ReactComponent as MySQLIcon } from '../Images/PPT/mysql.svg';
import { ReactComponent as ServerlessIcon } from '../Images/PPT/serverless-framework.svg';
import { ReactComponent as TerraformIcon } from '../Images/PPT/terraform.svg';
import { ReactComponent as PythonIcon } from '../Images/PythonIcon.svg';
import { ReactComponent as ReactJSIcon } from '../Images/ReactJSIcon.svg';
import { ReactComponent as ReactNativeIcon } from '../Images/ReactNativeIcon.svg';
import { ReactComponent as ShellIcon } from '../Images/shell.svg';
import { ReactComponent as SonarqubeIcon } from '../Images/sonarqube.svg';
import { ReactComponent as SQLIcon } from '../Images/SQLIcon.svg';
import { ReactComponent as SwiftIcon } from '../Images/SwiftIcon.svg';
import Xcode_icon from '../Images/Xcode_icon.png';
const ICONSIZE = 30;

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
  
    createDataForSkill("Programming / Language",
    [
      createDataForItem("JavaScript", JSIcon, true),
      createDataForItem("Swift",SwiftIcon, true),
      createDataForItem("Python",PythonIcon, true),
      // createDataForItem("C#",CSharpIcon, true),
      // createDataForItem("C++",CPlusPlusIcon, true),
      createDataForItem("SQL",SQLIcon, true),
      createDataForItem("Linux Shell Script", ShellIcon, true),
      // createDataForItem("Java",JavaIcon, true),
      createDataForItem("HTML", HTML5Icon, true),
      createDataForItem("CSS", CSSIcon, true),
    ]),
    createDataForSkill("Library",
    [
      createDataForItem("React Native",ReactNativeIcon, true),
      createDataForItem("React JS",ReactJSIcon, true),
      createDataForItem("Node JS",NodeJsIcon, true),
    ]),
    createDataForSkill("IDE", 
    [
      createDataForItem("Xcode",Xcode_icon, false),
      // createDataForItem("Unity3D",Unity3DIcon, true),
    ]),
    createDataForSkill("Cloud Service Provider",
    [
      createDataForItem("Amazon Web Service",AWSIcon, true),
      createDataForItem("Microsoft Azure",AzureIcon, true)
    ]),
    createDataForSkill("IaC",
    [
      createDataForItem("Terraform",TerraformIcon, true),
      createDataForItem("Serverless framework",ServerlessIcon, true),
      createDataForItem("AWS CloudFormation", CloudFormationIcon, true),
    ]),
    createDataForSkill("DBMS",
    [
      createDataForItem("MySQL",MySQLIcon, true),
      createDataForItem("DynamoDB",DynamoDBIcon, true),
      // createDataForItem("MongoDB",MongoDBIcon, true),
    ]),
    createDataForSkill("Container Technology", [
      createDataForItem("Docker",DockerIcon, true),
      createDataForItem("Kubernetes",K8SIcon, true),

    ]),
    createDataForSkill("DevOps",
    [
      createDataForItem("Jenkins",JenkinsIcon, true),
      createDataForItem("GitHub Actions",GitHubActionIcon, true),
      createDataForItem("GitLab",GitLabIcon, true),
      createDataForItem("SonarQube",SonarqubeIcon, true),
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
                  if(item.svg) return(<item.icon style={{height: ICONSIZE, width: ICONSIZE, marginRight: ICONSIZE/3, marginTop: ICONSIZE/3}}/>)
                  else return( <img src={item.icon} className={classes.icons} style={{height: ICONSIZE, width: ICONSIZE, marginRight: ICONSIZE/3, marginTop: ICONSIZE/3}}/> )
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
