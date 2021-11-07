import { Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function Footer(props){
  return(
    <>
      <WhiteTextTypography variant="subtitle2" component="div" style={{margin: 20, fontColor: 'white'}}>
        Created by Ng Hoi Wa, 2021. All right reserved | Created by using React JS and hosted on AWS
      </WhiteTextTypography>
    </>
  )
}

export default Footer