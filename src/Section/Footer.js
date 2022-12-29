import { Typography } from "@mui/material"
import { withStyles } from "@mui/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function Footer(props){
  return(
    <div style={{padding: 10}}>
      <WhiteTextTypography variant="subtitle1" component="div" style={{fontColor: 'white'}}>
        Created by Ng Hoi Wa, 2022. All right reserved.
      </WhiteTextTypography>
      <WhiteTextTypography variant="subtitle2" component="div" style={{fontColor: 'white'}}>
        written by ReactJS | hosted on AWS S3 static hosting | deployed using AWS CodePipeline | sourced on GitHub
      </WhiteTextTypography>
    </div>
  )
}

export default Footer