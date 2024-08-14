// components/Header.tsx
'use client'
import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, }}>
      <Toolbar>
        {/* Logo or Brand Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Restaurent Management System
        </Typography>
        
        {/* Navigation Buttons */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        
        {/* User Profile Icon */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleMenuOpen}
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        
        {/* Mobile Menu */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        {/* Menu for User Profile */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
