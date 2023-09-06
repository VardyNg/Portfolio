
import Grid from '@mui/material/Grid';
import { ReactComponent as AWSDOP } from '../Images/Certs/AWS-DOP.svg';
import { ReactComponent as AWSDVA } from '../Images/Certs/AWS-DVA.svg';
import { ReactComponent as AWSSAA } from '../Images/Certs/AWS-SAA.svg';
import { ReactComponent as AWSSOA } from '../Images/Certs/AWS-SOA.svg';
import { ReactComponent as AZ204 } from '../Images/Certs/AZ-204.svg';
import { ReactComponent as HTCAO002 } from '../Images/Certs/HTCAO002.svg';
import { ReactComponent as K8SCKAD } from '../Images/Certs/K8S-CKAD.svg';
import { ReactComponent as K8SCKA } from '../Images/Certs/K8S-CKA.svg';

const certIconStyle = {
  height: 65, 
  width: 65
}
function CertsList(){
  return(
  <Grid 
    container 
    xs={12} 
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: '10px',
      spacing: 2
    }}  
  >
    <K8SCKAD  style={certIconStyle} />
    <K8SCKA   style={certIconStyle} />
    <AWSDOP   style={certIconStyle} />
    <AWSDVA   style={certIconStyle} />
    <AWSSAA   style={certIconStyle} />
    <AWSSOA   style={certIconStyle} />
    <AZ204    style={certIconStyle} />
    <HTCAO002 style={certIconStyle} />
  </Grid>
  )
}

export default CertsList