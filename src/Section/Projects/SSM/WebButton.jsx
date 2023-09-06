import LinkIcon from '@mui/icons-material/Link';
import Button from '@mui/material/Button';

function WebButton(props) {
  return(
    <Button
      variant="outlined"
      onClick={() => {window.open("https://signalstickermaker.com", "_blank").focus()}}
      startIcon={<LinkIcon/>}
      style={{height: props.height}}
    >
      Visit the website
    </Button>
  )
}

export default WebButton;