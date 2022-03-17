import { Typography } from "@mui/material"
import { withStyles } from "@mui/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function Footer(props){
  return(
    <>
      <WhiteTextTypography variant="subtitle2" component="div" style={{margin: 20, fontColor: 'white'}}>
        Created by Ng Hoi Wa, 2022. All right reserved | Created by using ReactJS, hosted on AWS, with Cloudflare.
      </WhiteTextTypography>
    </>
  )
}

export default Footer