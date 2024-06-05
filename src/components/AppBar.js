import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const GradientBox = styled(Box)({
  height: 40,
  width: 40,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', // Customize the gradient as needed
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 16,
});

const AppBarComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <GradientBox />
          API Integration with React and Material-UI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;




