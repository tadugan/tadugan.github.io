import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ConditionalMenu from '../ConditionalMenu/ConditionalMenu';
import ConditionalTitle from '../ConditionalTitle/ConditionalTitle';
import { Grid } from '@mui/material';

function AppBarNav() {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container 
              spacing={0} 
              direction="row" 
              justifyContent="space-between" 
              alignItems="center"
            >
              <Grid item>
                <ConditionalTitle />
              </Grid>
              <Grid item>
                <ConditionalMenu />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
export default AppBarNav;