import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import './Portfolio.css';

const projectArray = [
  {
    name: 'Boardgame Achievement Tracker',
    description: 'Videogame Achievements are a popular component of Videogaming. Adding extra objectives and challenges encourage players to try new play styles and increase the replayability of videogames. This application takes that same idea and applies it to Board Games and Tabletop Games.',
    image_url: 'https://image.shutterstock.com/image-photo/single-ear-corn-isolated-on-260nw-793795156.jpg',
    video_url: 'https://www.youtube.com/',
    code_url: 'https://github.com/tadugan',
    deployment_url: 'https://id.heroku.com/login'
  }
]

function Portfolio() {
    return (
        <div className="portfolio-body">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" component="h2">Project Gallery</Typography>
            </Grid>
            <Grid
              item
              container
              spacing={3}
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