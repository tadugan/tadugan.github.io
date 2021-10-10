import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ConditionalMenu from '../ConditionalMenu/ConditionalMenu';
import ConditionalTitle from '../ConditionalTitle/ConditionalTitle';

function AppBarNav() {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ConditionalTitle />
            <ConditionalMenu />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
export default AppBarNav;