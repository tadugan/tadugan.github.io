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

    const openLink = (url) => {
        window.open(url);
    }

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
                <Typography variant="body2" color="text.secondary" className="project-card-description">
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
                            <Button size="small" onClick={() => openLink(project.video_url)} className="project-card-button">Video Demo</Button>
                        </Grid>}
                    {project.code_url &&
                        <Grid item>
                            <Button size="small" onClick={() => openLink(project.code_url)} className="project-card-button">View Code</Button>
                        </Grid>}
                    {project.deployment_url &&
                        <Grid item>
                            <Button size="small" onClick={() => openLink(project.deployment_url)} className="project-card-button">View Deployed App</Button>
                        </Grid>}
                </Grid>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;