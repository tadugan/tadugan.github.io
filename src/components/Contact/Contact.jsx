import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import './Contact.css';

function Contact() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
              <div className="contact-text">
                <p>If you are looking add some fresh talent to your development team, or you just want to chat about tech, please reach out!</p>
                <p>Location: Minneapolis, MN</p>
                <p>Open to Remote Positions: Yes</p>
              </div>
            </Grid>
            <Grid item>
              <a className="footer-link" href="mailto:timdugandeveloper@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button className="contact-button" variant="outlined" startIcon={<Email />}>
                  timdugandeveloper@gmail.com
                </Button>
              </a>
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