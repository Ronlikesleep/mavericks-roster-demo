import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Box, Avatar, Typography,CssBaseline } from '@mui/material';

// A navigator for Miami Heat

const Nav = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: '#8B0000', height: '7rem', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-left', alignItems: 'center', height: '100%', width: '100%', paddingLeft: '15px' }}>
          <Link to="/Roster">
          <Avatar
            src="https://cdn.nba.com/teams/static/heat/imgs/global/team-logos-svg/MIA-mh.svg"
            alt="Miami HEAT MH Logo"
            title="Miami HEAT"
            sx={{ mr: 1, width: { xs: '3rem', sm: '3.9rem', md: '6rem' }, height: { xs: '3rem', sm: '3.9rem', md: '6rem' } }}
          />
          </Link>
          <Typography variant="h4" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
            Miami HEAT 
          </Typography>
        </Box>
      </AppBar>
    </>
  );
};

export default Nav;
