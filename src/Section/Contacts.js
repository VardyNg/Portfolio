import { GoMarkGithub} from "react-icons/go";
import { FaLinkedin } from 'react-icons/fa'
import { 
  BsStackOverflow,
  BsMedium
} from 'react-icons/bs'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { withStyles } from "@mui/styles";
import { gaEvent } from "../functions";
import { GA_CATEGORY_BUTTON_CLICK } from '../constants';
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const contactEmail = "vardy@vardyng.com"

function Contacts(){
  
  return(
    <div>
      <IconButton
        onClick={() => {
          gaEvent(GA_CATEGORY_BUTTON_CLICK, "github profile")
          window.open("https://github.com/VardyNg", '_blank').focus()
        }
        }
        color="white"
        size="large"
      >
        <GoMarkGithub/>
      </IconButton>
      <IconButton
        onClick={() => {
          gaEvent(GA_CATEGORY_BUTTON_CLICK, "stackoverflow profile")
          window.open("https://stackoverflow.com/users/15603575/vardy", '_blank').focus()
        }}
        color="white"
        size="large"
      >
        <BsStackOverflow/>
      </IconButton>
      <IconButton
        onClick={() => {
          gaEvent(GA_CATEGORY_BUTTON_CLICK, "medium profile")
          window.open("https://medium.com/@vardyng", '_blank').focus()
        }}
        color="white"
        size="large"
      >
        <BsMedium/>
      </IconButton>
      <IconButton
        onClick={() => {
          gaEvent(GA_CATEGORY_BUTTON_CLICK, "linkedin profile")
          window.open("https://www.linkedin.com/in/nghoiwa/", "_blank").focus()
        }}
        color="white"
        size="large"
      >
        <FaLinkedin/>
      </IconButton>
      <Button
        onClick={() => {
          gaEvent(GA_CATEGORY_BUTTON_CLICK, "email")
          window.open("mailto:"+contactEmail, "_blank").focus()
        }}
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