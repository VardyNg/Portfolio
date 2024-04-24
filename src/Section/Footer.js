import { Typography, Link } from "@mui/material"
import { withStyles } from "@mui/styles";
import moment from "moment";
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function Footer(props){
  // Get and store time stamp variable in constant 
  const LAST_UPDATE_TIME_STAMP = process.env.REACT_APP_LAST_UPDATE_TIME_STAMP;
  
  // format time stamp
  const lastUpdateDate = moment.unix(LAST_UPDATE_TIME_STAMP).format("YYYY-MM-DD");
  
  const GITHUB_REPO_URL="https://github.com/VardyNg/Portfolio";

  return(
    <div style={{padding: 10}}>
      <WhiteTextTypography variant="subtitle1" component="div" style={{fontColor: 'white'}}>
        Created by Vardy Ng, 2021 - {moment().year()}. All right reserved.
      </WhiteTextTypography>
      <WhiteTextTypography variant="subtitle1" component="div" style={{fontColor: 'white'}}>
        ReactJS | AWS S3 static hosting | Deployed and Open-source on <a href={GITHUB_REPO_URL} target="_blank"><u>GitHub</u></a>
      </WhiteTextTypography>
      <WhiteTextTypography variant="subtitle2" component="div" style={{fontColor: 'white'}}>
        Last updated: {lastUpdateDate}
      </WhiteTextTypography>
    </div>
  )
}

export default Footer