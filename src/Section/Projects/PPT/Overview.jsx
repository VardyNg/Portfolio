import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

function Overview(props){
  return(
    <>
      <Stack spacing={2}>
        <Typography variant="h4">
          Overview  
        </Typography>
        <Divider/>
        <Typography variant="h5">
          Development
        </Typography>
        <div>
          <Typography variant="body1">
            <b>Private Tutor Plus</b> is an online application for tutors to manage their business, for example, the class schedule, students, and payments.
          </Typography>
          <Typography variant="body1">
            The application is developed since the beginning of 2022 in a group of 4 developers lead by me.
          </Typography>
          <Typography variant="body1">
            The application is expected to be released for the first UAT in mid-2022, it can be accessed by the following link: <a href="https://privatetutor.plus/">https://privatetutor.plus</a>. <b>Disclaimer: It is still under development.</b>
          </Typography>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Divider variant="middle" width="50%"/>
        </div>
        <Typography variant="h5">
          Idea
        </Typography>
        <div>
          <Typography variant="body1">
            The idea of <b>Private Tutor Plus</b> comes with a family member who works as a full time private tutor with over 20 students. The overwhelming students make the management of student's progress, lesson schedule, payments, and other matters difficult.
          </Typography>
          <Typography variant="body1">
            In additional, in the market, there are few application dedicated for the private tutors to manage their business, while most of the applications are targeted to the tutoring companies.
          </Typography>
          <Typography variant="body1">
            Therefore, I proposed Private Tutor Plus as a solution to solve the problem of managing the tutoring business, with the help of 3 other developers, who are also friend of mine, to develop the application.
          </Typography>
        </div>
      </Stack>
    </>
  )
}

export default Overview