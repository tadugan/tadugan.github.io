import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ProjectCard.css';
import { Grid } from "@mui/material";

function ProjectCard( {project} ) {
    return (
        <Card className="project-card-content">
            <CardMedia
                component="img"
                height="200"
                image={project.image_url}
                alt={project.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    {project.video_url &&
                        <Grid item>
                            <a href={project.video_url} target="_blank" rel="noopener noreferrer" className="project-card-button">
                                <Button size="small">Video Demo</Button>
                            </a>
                        </Grid>}
                    {project.code_url &&
                        <Grid item>
                            <a href={project.code_url} target="_blank" rel="noopener noreferrer" className="project-card-button">
                                <Button size="small">View Code</Button>
                            </a>
                        </Grid>}
                    {project.deployment_url &&
                        <Grid item>
                            <a href={project.deployment_url} target="_blank" rel="noopener noreferrer" className="project-card-button">
                                <Button size="small">View Deployed App</Button>
                            </a>
                        </Grid>}
                </Grid>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;