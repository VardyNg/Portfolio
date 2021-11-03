import { GoMarkGithub} from "react-icons/go";
import { FaLinkedin } from 'react-icons/fa'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function Contacts(){
  return(
    <div>
      <IconButton
        onClick={() => window.open("https://github.com/VardyNg", '_blank').focus()}
        color="white"
        size="large"
      >
        <GoMarkGithub/>
      </IconButton>
      <IconButton
        onClick={() => window.open("https://www.linkedin.com/in/nghoiwa/", "_blank").focus()}
        color="white"
        size="large"
      >
        <FaLinkedin/>
      </IconButton>
      <WhiteTextTypography
        variant="body"
        color="white"
        sx={{fontSize: 20}}
      >
        wadee@wadeenghoiwa.com
      </WhiteTextTypography>
      
    </div>
  )
}

export default Contacts