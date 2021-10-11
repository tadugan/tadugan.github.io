import React, { useEffect } from "react";
import { Button, Chip, Grid, Typography } from '@mui/material';
import picture from '../../images/TimDuganPic.jpeg';
import './About.css';
import { AlternateEmail, Build, GitHub } from '@mui/icons-material';
import { useHistory } from 'react-router';

const skillArray = [
    'JavaScript',
    'React',
    'React Redux',
    'Redux Saga',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'SQL',
    'Axios',
    'Ajax',
    'C#',
    '.NET',
    'Entity Framework Core',
    'Material UI',
    'JEST',
    'HTML',
    'CSS',
    'JQuery',
    'Passport.js',
    'REST API',
    'And more!'
]

function About() {

  const history = useHistory();

  const pushHistory = (destination) => {
      history.push(destination);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-body">
        <Grid
            container 
            spacing={3} 
            direction="column" 
            justifyContent="center" 
            alignItems="center"
        >
            <Grid item xs={6}>
                <img className="about-picture" src={picture} alt="Tim Dugan" />
            </Grid>
            <Grid 
                item 
                container 
                spacing={2} 
                direction="column"
                justifyContent="center"
                alignItems="center"
                xs={6} 
                className="about-description"
            >
                  <Grid item xs={12}>
                      <Typography variant="h2" component="h2">Tim Dugan</Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <Typography variant="h4" component="h3">Full Stack Software Engineer</Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <Typography variant="h5" component="h4">Create - Refine - Collaborate</Typography>
                  </Grid>
            </Grid>     
            <Grid 
                item 
                container 
                spacing={4} 
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                xs={12} 
                className="about-biography"
            >
                      <Grid item xs={12} sm={12} md={3}>
                          <p className="about-biography-text">I am a Minneapolis-based Software Engineer, with a passion for creating and helping others through technology. With nearly a decade of Customer Service experience, I understand firsthand how well developed applications and websites can improve productivity and quality of life. I also understand that there are still countless areas of society that would benefit from quality, user-friendly applications. I am excited to be a part of the next generation of software developers.</p>
                      </Grid>
                      <Grid item xs={12} sm={12} md={3}>
                          <p className="about-biography-text">I take a people-first approach to my work. Software development is collaborative by nature, so it's important to build a network of strong relationships with other tech-minded individuals. Even in my independent projects I rely on the knowledge and experience of others to help me produce the best possible product. When it comes to client work, people-first means understanding the client's needs and vision for the project. I believe it is important to understand the desired destination before beginning the journey.</p>
                      </Grid>
            </Grid>
            <Grid 
                item 
                container 
                direction="column" 
                justifyContent="center" 
                alignItems="center"
            >
                <Grid item>
                    <div className="about-skills-header">
                        <Typography variant="h4" component="h3">Core Skills</Typography>
                    </div>
                </Grid>
                <div className="about-skills">
                    <Grid
                        item
                        container
                        spacing={1}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {skillArray.map((skill, index) => {
                            return (
                                <Grid item key={index}>
                                    <Chip label={skill} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </Grid>
            <Grid 
                item
                container
                spacing={2} 
                direction="row"
                justifyContent="center"
                alignItems="center"
                xs={12} 
                className="about-button-container"
            >
                <Grid item xs={12} sm={12} md={4}>
                  <Button className="about-button" onClick={() => pushHistory('/portfolio')} variant="contained" endIcon={<Build />}>
                      My Project Gallery
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <a className="about-github-link" target="_blank" href="https://github.com/tadugan" rel="noopener noreferrer">
                    <Button className="about-button" variant="contained" endIcon={<GitHub />}>
                        Checkout my Github
                    </Button>
                  </a>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Button className="about-button" onClick={() => pushHistory('/contact')} variant="contained" endIcon={<AlternateEmail />}>
                      Contact Me
                  </Button>
                </Grid>

            </Grid>
        </Grid>
    </div>
  );
}

export default About;