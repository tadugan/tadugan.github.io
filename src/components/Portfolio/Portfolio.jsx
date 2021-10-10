import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import './Portfolio.css';
import bgatImage from '../../images/AchievementTrackerScreenshot.png';
import stemtellingImage from '../../images/STEMtellingScreenshot.png';
import portfolioImage from '../../images/PortfolioScreenshot.png';

const projectArray = [
  {
    name: 'Boardgame Achievement Tracker',
    description: 'Videogame Achievements are a popular component of Videogaming. Adding extra objectives and challenges encourage players to try new play styles and increase the replayability of videogames. This application takes that same idea and applies it to Board Games and Tabletop Games.',
    image_url: bgatImage,
    video_url: 'https://vimeo.com/590710799',
    code_url: 'https://github.com/tadugan/board-game-achievement-tracker',
    deployment_url: ''
  },
  {
    name: 'STEMtelling',
    description: 'STEMtelling is a Full Stack, high school classroom learning application. STEMtelling shows students the relevance of STEM in their lives and helps them share stories called “STEMtells” that connect their STEM interests with their unique backgrounds.',
    image_url: stemtellingImage,
    video_url: 'https://vimeo.com/628303224',
    code_url: 'https://github.com/tadugan/stemtelling',
    deployment_url: ''
  },
  {
    name: 'Portfolio Website',
    description: 'This website was built in React, using Material UI and CSS for layout and styling.',
    image_url: portfolioImage,
    video_url: '',
    code_url: 'https://github.com/tadugan/portfolio-website',
    deployment_url: ''
  }
]

function Portfolio() {
    return (
        <div className="portfolio-body">
          <Grid
            container
            spacing={5}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item className="portfolio-header">
              <Typography variant="h3" component="h2">Project Gallery</Typography>
            </Grid>
            <Grid
              item
              container
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {projectArray.map((project, index) => {
                return (
                  <Grid item key={index}>
                    <ProjectCard project={project}/>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </div>
    );
  }
  
  export default Portfolio;