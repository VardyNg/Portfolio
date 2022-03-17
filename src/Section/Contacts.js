import { GoMarkGithub} from "react-icons/go";
import { FaLinkedin } from 'react-icons/fa'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { withStyles } from "@mui/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const contactEmail = "vardyng1999@gmail.com"

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
      <Button
        onClick={() => window.open("mailto:"+contactEmail, "_blank").focus()}
      >
        <WhiteTextTypography
          variant="body"
          color="white"
          sx={{fontSize: 20}}
        >
          {contactEmail}
        </WhiteTextTypography>
      </Button>
      
    </div>
  )
}

export default Contacts