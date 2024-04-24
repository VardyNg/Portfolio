import { Typography } from "@mui/material"
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
  
  return(
    <div style={{padding: 10}}>
      <WhiteTextTypography variant="subtitle1" component="div" style={{fontColor: 'white'}}>
        Created by Vardy Ng, 2021 - {moment().year()}. All right reserved.
      </WhiteTextTypography>
      <WhiteTextTypography variant="subtitle2" component="div" style={{fontColor: 'white'}}>
        written by ReactJS / hosted on AWS S3 static hosting / deployed using Jenkins / sourced on GitHub
      </WhiteTextTypography>
      <WhiteTextTypography variant="subtitle2" component="div" style={{fontColor: 'white'}}>
        Last updated: {lastUpdateDate}
      </WhiteTextTypography>
    </div>
  )
}

export default Footer