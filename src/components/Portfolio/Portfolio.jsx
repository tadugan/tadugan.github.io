import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio-body">
          <Grid
            container
            spacing={0}
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
              spacing={0}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                  <ProjectCard />
              </Grid>
            </Grid>
          </Grid>
        </div>
    );
  }
  
  export default Portfolio;