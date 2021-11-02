import { GoMarkGithub} from "react-icons/go";
import { FaLinkedin } from 'react-icons/fa'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function Contacts(){
  return(
    <div>
      <IconButton
        onClick={() => window.open("https://github.com/VardyNg", '_blank').focus()}
      >
        <GoMarkGithub/>
      </IconButton>
      <IconButton
        onClick={() => window.open("https://www.linkedin.com/in/nghoiwa/", "_blank").focus()}
      >
        <FaLinkedin/>
      </IconButton>
        wadee@wadeenghoiwa.com
      
    </div>
  )
}

export default Contacts