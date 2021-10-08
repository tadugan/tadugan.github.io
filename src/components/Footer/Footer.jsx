import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import './Footer.css';

function Footer() {

    return (
      <footer className="footer-content">
        <Grid
            container
            spacing={2} 
            direction="column" 
            justifyContent="center" 
            alignItems="center"
        >
            <Grid 
                item
                container
                spacing={3} 
                direction="row" 
                justifyContent="center" 
                alignItems="center"
            >
                <Grid item>
                    <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/tim-dugan-engineer/" rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                </Grid>
                <Grid item>
                    <a className="footer-link" target="_blank" href="https://github.com/tadugan" rel="noopener noreferrer">
                        <GitHub />
                    </a>
                </Grid>
                <Grid item>
                    <a className="footer-link" href="mailto:timdugandeveloper@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Email />
                    </a>
                </Grid>
            </Grid>
            <Grid item>&copy; Tim Dugan 2021</Grid>
        </Grid>
      </footer>
    );
  }
  
export default Footer;