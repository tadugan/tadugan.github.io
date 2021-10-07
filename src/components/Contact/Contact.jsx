import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import './Contact.css';

function Contact() {
    return (
      <div className="contact-body">
          <Grid
            container
            spacing={2} 
            direction="column" 
            justifyContent="center" 
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" component="h2">
                  Contact Me
              </Typography>
            </Grid>
            <Grid item>
              <p>If you are looking add some fresh talent to your development team, feel free to connect with me.</p>
            </Grid>
            <Grid item>
              <Button className="contact-button" variant="outlined" startIcon={<Email />}>
                timdugandeveloper@gmail.com
              </Button>
            </Grid>
            <Grid item>
              <a className="contact-link" target="_blank" href="https://github.com/tadugan" rel="noopener noreferrer">
                <Button className="contact-button" variant="outlined" startIcon={<GitHub />}>
                    Checkout my Github
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a className="contact-link" target="_blank" href="https://www.linkedin.com/in/tim-dugan-engineer/" rel="noopener noreferrer">
                <Button className="contact-button" variant="outlined" startIcon={<LinkedIn />}>
                    Connect on LinkedIn
                </Button>
              </a>
            </Grid>
          </Grid>
      </div>
    );
  }
  
export default Contact;