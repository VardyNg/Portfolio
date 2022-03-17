import Typograhpy from '@mui/material/Tab'

function Title(props){
  console.log(props.title)
  return(
    <Typograhpy
      variant="h4"
    >
      {props.title}123
    </Typograhpy>
  )
}

export default Title