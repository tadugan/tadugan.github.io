import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ConditionalMenu from '../ConditionalMenu/ConditionalMenu';

function AppBarNav() {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tim Dugan - Software Engineer
            </Typography>
            <ConditionalMenu />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
export default AppBarNav;