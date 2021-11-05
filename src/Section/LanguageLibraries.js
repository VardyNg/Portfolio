import { makeStyles } from '@material-ui/core/styles';
import Csharp_Logo from '../Images/Csharp_Logo.png'
import CPlusPlus from '../Images/CPlusPlus.png'
import HCJ from '../Images/HCJ.png'
import Swift from '../Images/swift.png'
import MySQL from '../Images/MySQL.png'
import php from '../Images/php.png'
import Java_Icon from '../Images/Java_Icon.png'
import python from '../Images/python.png'
const useStyles = makeStyles((theme) => ({
  icons: {
    height: 40,
    margin: 5
  }
}))

function LanguageLibraries(props){
  const classes = useStyles()

  return(
    <>
      <img src={Csharp_Logo} className={classes.icons}/>
      <img src={CPlusPlus} className={classes.icons}/>
      <img src={HCJ} className={classes.icons}/>
      <img src={Swift} className={classes.icons}/>
      <img src={MySQL} className={classes.icons}/>
      <img src={php} className={classes.icons}/>
      <img src={Java_Icon} className={classes.icons}/>
      <img src={python} className={classes.icons}/>
    </>
  )
}

export default LanguageLibraries;
