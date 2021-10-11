import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import './Contact.css';

function Contact() {

    const openLink = (url) => {
        window.open(url);
    }

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
                <Button component="a" href="mailto:timdugandeveloper@gmail.com" className="contact-button" variant="outlined" startIcon={<Email />}>
                  timdugandeveloper@gmail.com
                </Button>
            </Grid>
            <Grid item>
                <Button 
                  className="contact-button" 
                  onClick={() => openLink("https://github.com/tadugan")}
                  variant="outlined" 
                  startIcon={<GitHub />}
                >
                  Checkout my Github
                </Button>
            </Grid>
            <Grid item>
                <Button 
                  className="contact-button" 
                  onClick={() => openLink("https://www.linkedin.com/in/tim-dugan-engineer/")}
                  variant="outlined" 
                  startIcon={<LinkedIn />}
                >
                    Connect on LinkedIn
                </Button>
            </Grid>
          </Grid>
      </div>
    );
  }
  
export default Contact;