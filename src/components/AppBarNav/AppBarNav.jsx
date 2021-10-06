import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

function AppBarNav() {

    const history = useHistory();

    const pushHistory = (destination) => {
        history.push(destination);
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tim Dugan - Software Engineer
            </Typography>
            <Button color="inherit" onClick={() => pushHistory('/about')} >About</Button>
            <Button color="inherit" onClick={() => pushHistory('/portfolio')} >Portfolio</Button>
            <Button color="inherit" onClick={() => pushHistory('/contact')} >Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
export default AppBarNav;