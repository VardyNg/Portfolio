import React from 'react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack'
import { ReactComponent as DynamoDBIcon } from '../../../Images/PPT/aws-dynamodb.svg';
import { ReactComponent as MySQLIcon } from '../../../Images/PPT/mysql.svg';
import { ReactComponent as DatabaseArchIcon } from '../../../Images/PPT/database-arch.svg';
function DynamoDB(props){
  return(
    <Stack direction="row" spacing={2} display="flex" alignItems="center">
      <DynamoDBIcon style={{height: 50, width: 50}}/>
      <Typography
        variant='body1'
      >
        While most of the data are stored in MySQL databases, <b>DynamoDB</b> is also used for storing data that are not relational, e.g. User Login History, preference, etc.
      </Typography>
    </Stack>
  )
}

function MySQL(props){
  return(
    <>
      <Stack direction="row" spacing={2}>
        <MySQLIcon style={{height: 75, width: 75}}/>
        <div>
          <Typography
            variant='body1'
          >
            Most of the data are stored in MySQL databases, as the data is tend to relational.
          </Typography>
          <Typography
            variant='body1'
          >
            The MySQL Databases are hosted in both AWS EC2 Instances and On-Perm servers. 
            With the help of <b>MySQL Replications</b>, data are replicated in the Slave servers while the Master server is used for writing and reading data.
          </Typography>
          <Typography
            variant='body1'
          >
            In additional, by making use of <b>ProxySQL</b>, the Slave servers are also responsible for reading data, or writing data in case of a failover on the Master, all servers are fully ultilized.
          </Typography>
          <Typography
            variant='body1'
          >
            With this architecture, it is confident that the data are safe and can be recovered in case of a failover.
          </Typography>
        </div>
      </Stack>
      <DatabaseArchIcon/>
    </>
  )
}
function Database(props){
  
  return(
    <Stack spacing={2}>
      <Typography
        variant="h4"
      >
        Database
      </Typography>
      <Divider/>
      <DynamoDB/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Divider width="50%" variant="middle"/>
      </div>
      <MySQL/>
    </Stack>
  )
}

export default Database