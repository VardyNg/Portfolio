import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Judge_Login from '../../../Images/TV/Judge_Login.png'
import Judge_Panel from '../../../Images/TV/Judge_Panel.png'
import Judge_Scoring from '../../../Images/TV/Judge_Scoring.png'
import Judge_Records from '../../../Images/TV/Judge_Records.png'
import Judge_Overview from '../../../Images/TV/Judge_Overview.png'
import Scoring_Result from '../../../Images/TV/Scoring_Result.png'
import Score_By_Judge from '../../../Images/TV/Score_By_Judge.png'
import Operation_Promote from '../../../Images/TV/Operation_Promote.png'
import Scoring_Sheet from '../../../Images/TV/Scoring_Sheet.png'
import Admin_Invitation_Code from '../../../Images/TV/Admin_Invitation_Code.png'
import Admin_Register from '../../../Images/TV/Admin_Register.png'
import Admin_Management from '../../../Images/TV/Admin_Management.png'
import Judge_Management from '../../../Images/TV/Judge_Management.png'
import Judge_Management_2 from '../../../Images/TV/Judge_Management_2.png'
import Competition_Management from '../../../Images/TV/Competition_Management.png'
import Competition_Management_Stream from '../../../Images/TV/Competition_Management_Stream.png'
import Competition_Management_Rounds from '../../../Images/TV/Competition_Management_Rounds.png'
import Competition_Management_Admin from '../../../Images/TV/Competition_Management_Admin.png'
import Entries_Management from '../../../Images/TV/Entries_Management.png'
import Entries_Details from '../../../Images/TV/Entries_Details.png'
import Judge_Panels from '../../../Images/TV/Judge_Panels.png'
import Entries_Panels from '../../../Images/TV/Entries_Panels.png'
import Juding_Progress from '../../../Images/TV/Juding_Progress.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
       
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function Judging(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="body1">
          Judges are invited to score the entries by using <b>a one-time account</b> and <b>password</b>.
        </Typography>
        <img src={Judge_Login} alt="Judge Login" style={{width: '100%'}}/>
        <Typography variant="body1">
          Judges can only access to the <b>asigned competition rounds</b>, as shown in the panel.
        </Typography>
        <img src={Judge_Panel} alt="Judge Panel" style={{width: '100%'}}/>
        <Typography variant="body1">
          Judges can view the <b>entires details</b> on the top panel, and <b>give scores or comment</b> on the bottom panel.
        </Typography>
        <img src={Judge_Scoring} alt="Judge Scoring" style={{width: '100%'}}/>
        <Typography variant="body1">
          Judges can also do adjustment in the "Scoring Records" dialog
        </Typography>
        <img src={Judge_Records} alt="Judge Records" style={{width: '100%'}}/>
        <Typography variant="body1">
          An overview is shown so that judges can do a final checking.
        </Typography>
        <img src={Judge_Overview} alt="Judge Records" style={{width: '100%'}}/>
      </Stack>
    </>
  )
}

function ScoreAnalysis(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="body1">
          Admins can find the <b>instant judging results</b> of the competition rounds, and also the <b>statistical analysis</b> of the scores.
        </Typography>
        <img src={Scoring_Result} alt="Scoring result" style={{width: '100%'}}/>
        <Typography variant="body1">
          Entries can be <b>promoted</b> to the next round.
        </Typography>
        <img src={Operation_Promote} alt="Promotion" style={{width: '100%'}}/>
        <Typography variant="body1">
          Admins can get the <b>statistical performance</b> of each single <b>entry</b> and <b>judge</b>.
        </Typography>
        <img src={Score_By_Judge} alt="Judge Panel" style={{width: '100%'}}/>
      </Stack>
    </>
  )
}

function ScoringSetup(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="body1">
          Admins can <b>setup or edit</b> the scoring sheet by the provided interface, and the result will be reflected to the judges' view.
        </Typography>
        <Typography variant="body1">
          There can be <b>any combination</b> of <b>textfields</b> and <b>numeric slider</b> in the scoring sheets. A <b>weight</b> is assigned to each row so that the <b>final score</b> can be calculated.
        </Typography>
        <img src={Scoring_Sheet} alt="Scoring result" style={{width: '100%'}}/>
      </Stack>
    </>
  )
}

function Management(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="h5">
          Staffs Management (Only accessible to the Super Admin)
        </Typography>
        <Divider/>
        <Typography variant="body1">
          New admins can be added by the Super Admin, it can be created by providing the email address and password, or generate and use an <b>invitation code</b>.
        </Typography>
        <img src={Admin_Invitation_Code} alt="Scoring result" style={{width: '100%'}}/>
        <img src={Admin_Register} alt="Scoring result" style={{width: '100%'}}/>
        <Typography variant="body1">
          Super Admin can manage the admins, by changing email, password, <b>suspend</b> or <b>delete</b> accounts.
        </Typography>
        <img src={Admin_Management} alt="Scoring result" style={{width: '100%'}}/>
        <Typography variant="h5">
          Judges Management (Accessible to all Admins)
        </Typography>
        <Divider/>
        <Typography variant="body1">
          New judges can be added via the form, and a set of username and password are generated for their access. 
          Additionally, the account can be entered in batch by uploading a <b>CSV</b> file.
        </Typography>
        <img src={Judge_Management} alt="Judge Management" style={{width: '100%'}}/>
        <Typography variant="body1">
          The account detail can be updated, it can also be <b>suspended</b> or <b>deleted</b>.
        </Typography>
        <img src={Judge_Management_2} alt="Judge Management" style={{width: '100%'}}/>
      </Stack>
    </>
  )
}
function CompetitionMangement(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="h5">
          Competition Hireachy
        </Typography>
        <Divider/>
        <Typography variant="body1">
          Competitions composed with multiple <b>sessions</b> (e.g. 2022, 2021, 2020...), each sessios composed with different <b>streams</b> (Primary School, Secondary School ...) 
          ,each stream has multiple <b>rounds</b> (e.g. Round 1, Round 2, Round 3...), each round composed with multiple <b>entries</b> (the partipants).
        </Typography>
        <Typography variant="body1">
          In the system, <b>all of the above cateogries are customizable!</b>.
        </Typography>
        <img src={Competition_Management} alt="competition Management" style={{width: '100%'}}/>
        <img src={Competition_Management_Stream} alt="competition Stream" style={{width: '100%'}}/>
        <img src={Competition_Management_Rounds} alt="competition Rounds" style={{width: '100%'}}/>
        <Typography variant="h5">
          Judging Management
        </Typography>
        <Divider/>
        <Typography variant="body1">
          Judges are assigned to panel, and panels are asigned to groups of entires. 
        </Typography>
        <img src={Judge_Panels} alt="Judge Panels" style={{width: '100%'}}/>
        <img src={Entries_Panels} alt="Entries Panels" style={{width: '100%'}}/>
        <Typography variant="body1">
          <b>Judging period</b> can be set so that scoring can only be accessed during the period.
        </Typography>
        <Typography variant="body1">
          A table of <b>progress</b> is shown so that a overview of progress can be checked.
        </Typography>
        <img src={Juding_Progress} alt="Judge Progress" style={{width: '100%'}}/>
        <Typography variant="h5">
          Entries Management
        </Typography>
        <Divider/>
        <Typography variant="body1">
          The entries can be added one by one or using batch input by uploading a <b>CSV file</b>.
        </Typography>
        <img src={Entries_Management} alt="Entries Management" style={{width: '100%'}}/>
        <Typography variant="body1">
          The detail can also be updated, a preview of the entry can be shown so that its layout can be checked.
        </Typography>
        <img src={Entries_Details}  alt="Entries Details" style={{width: '100%'}}/>
        <Divider/>
        <Typography variant="h5">
          Admin Management
        </Typography>
        <Typography variant="body1">
          Admins can be asigned as <b>Leader</b>, who can manage the competition access rights.
        </Typography>
        <img src={Competition_Management_Admin} alt="competition Management" style={{width: '100%'}}/>
      </Stack>
    </>
  )
}
function Features(props){
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <>
      <Stack spacing={2}>
        <Typography variant="h4">
          Features 
        </Typography>
        <Divider/>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Judging" />
            <Tab label="Scores analysis" />
            <Tab label="Scoring Setup" />
            <Tab label="Competition Management" />
            <Tab label="User Management" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Judging/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ScoreAnalysis/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ScoringSetup/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CompetitionMangement/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Management/>
        </TabPanel>
      </Stack>
    </>
  )
}

export default Features