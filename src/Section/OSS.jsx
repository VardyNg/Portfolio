import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Repository } from 'react-github-embed';

function createDataForRepo(username, repository) {
  return { username, repository };
}

const repos = [
  createDataForRepo('binwiederhier', 'ntfy'),
  createDataForRepo('xtekky', 'chatgpt-clone'),
  createDataForRepo('VardyNg', 'hkid-utils-js'),
  createDataForRepo('VardyNg', 'K8S-On-Cloud'),
]
function OSS() {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }} style={{fontFamily: "Raleway", padding: 10}}>
        Open-Source Projects
      </Typography>
      <Grid container padding={1}>
        <Grid item xs={12} style={{display: 'flex', alignItems: 'start'}}>
          <Typography variant="body" style={{marginLeft: 10, marginTop: -10, marginBottom: 10}}>
            I work on Open-Source project from time to time, here are some of those I have contributed to or created:
          </Typography>
        </Grid>
        <Grid 
          item 
          container 
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
          spacing={2}
        >
          {repos.map((repo) => 
            <Grid item>
              <Repository
                username={repo.username}
                repository={repo.repository}
                theme="light"
                showStarCount={true}
                showForkCount={true}
                showLanguage={true}
                showDescription={true}
                showType={true}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  )  
}

export default OSS;