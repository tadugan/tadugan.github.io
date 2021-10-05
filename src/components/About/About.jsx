import { Grid } from '@mui/material';
import picture from '/Users/Tim/Desktop/Prime Academy/Tier IV/react-portfolio/src/TimDuganPic.jpeg';
import './About.css';

function About() {
  return (
    <div className="about-body">
        <Grid
            container 
            spacing={1} 
            direction="column" 
            justifyContent="center" 
            alignItems="center"
        >
            <Grid item xs={6}>
                <img className="about-picture" src={picture} alt="Tim Dugan" />
            </Grid>    
        </Grid>
    </div>
  );
}

export default About;