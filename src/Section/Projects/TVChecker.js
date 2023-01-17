import { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Typograhy from '@mui/material/Typography'
import moment from 'moment'
import isReachable from 'is-reachable'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonGroup } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import WebIcon from '@mui/icons-material/Web';
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga4';
let siteURL = "https://www.aismartscore.com"

function TVChecker(props){
  console.log("TVChecker")
  const [title, setStitle] = useState("Checking server status")
  const [show, setShow] = useState(true)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const [serverAlive, setServerAlive] = useState(false)
  const [durationSinceLeft, setDurationSinceLeft] = useState(0)
  const [redirected, setRedirected] = useState(false)
  const theme = useTheme();
  let navigate = useNavigate()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  useEffect(() => {
    checkServerStatus()
    setDurationSinceLeft(
      Math.round(moment(new Date()).diff("2021-09-15", 'months', true))
    )
  },[])

  const checkServerStatus = async () => {
    setCheckingStatus(true)
    let result = await isReachable(siteURL)
    setTimeout(function (){
      setServerAlive(result)
      setCheckingStatus(false)
    }, 1000); 
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  const directToSite = () => {
    openInNewTab(siteURL)
  }
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      directToSite()
      setRedirected(true)
      return null
    }else{
      return (
        <span>
          {' '} {seconds}
        </span>
      );
    }
  };

  return(
    <Dialog
      open={show}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
      onClose={async() => {setShow(false); 
        await new Promise(r => setTimeout(() => r(), 200));
        navigate("/")}}
    >
      <DialogTitle style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Typograhy
          variant="h4"
        >
          {title}
        </Typograhy>
        <div style={{marginLeft: 20}}>
          {checkingStatus ? <CircularProgress/> : 
          <>
            {serverAlive ?
              <CheckCircleOutlineIcon style={{color: "green"}}/>
              :
              <CancelIcon style={{color: "red"}}/>
            }
          </>}
        </div>
      </DialogTitle>
      <DialogContent>
        <Typograhy
          variant="h6"
        >
          Why it is needed to check the server status?
        </Typograhy>
        <Typograhy
          variant="subtitle1"
        >
          It has been {durationSinceLeft} months since I left the company of Crossover International. 
        </Typograhy>
        <Typograhy
          variant="subtitle1"
        >
          The system is wrapped up and I am not sure its status, you can also view the documentation instead, in case of failure.
        </Typograhy>
        <br/>
        <ButtonGroup
          fullWidth
          size="large"
        >
          <Button
            startIcon={<WebIcon/>}
            disabled={!serverAlive || checkingStatus}
            onClick={directToSite}
          >
            {checkingStatus ? <CircularProgress/> : 
            <>
              {serverAlive ?
                <>
                  {redirected ? <>
                    Visite website
                  </>: <>
                    Visite website in ... 
                    <Countdown date={Date.now() + 3000} renderer={renderer} />  
                  </>}
                </>:
                <>Server unreachable</>
              }
            </>
            }
          </Button>
          <Button
            startIcon={<ArticleIcon/>}
            onClick={() => { navigate("projects/techvision")}}
o          >
            
            View documentation
          </Button>
        </ButtonGroup>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={async() => {
            setShow(false); 
            await new Promise(r => setTimeout(() => r(), 200));
            navigate("/")}
          } 
          fullWidth
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TVChecker