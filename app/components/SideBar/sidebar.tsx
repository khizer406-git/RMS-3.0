// components/Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, Box } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, TableRestaurant, TableRestaurantTwoTone, Settings, Menu as MenuIcon, TableBar } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Sidebar: React.FC = () => {
  const [width, setWidth] = useState(innerWidth / 5);
  const handleResize = () => {
    setWidth(window.innerWidth / 5);
  };

  const router = useRouter();
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Menu', icon: <InfoIcon />, path: '/menu' },
    { text: 'Table', icon: <TableBar />, path: '/table' },
    { text: 'Pending Table', icon: <TableRestaurantTwoTone />, path: '/table/pending' },
    { text: 'Approved Table', icon: <TableRestaurant />, path: '/table/approved' },
    { text: 'Settings', icon: <Settings />, path: '/settings' },
  ];

  return (
    <Box>
      <IconButton
        color="inherit"
        edge="start"
        sx={{
          display: { xs: 'block', lg: 'none' },
          position: 'absolute',
          left: 16,
          top: 16,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: width,
            boxSizing: 'border-box',
          },
          display: { xs: 'block', lg: 'none' },
          bgcolor: 'background.paper', // Add background color
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              selected={pathname === item.path}
              onClick={() => router.push(item.path)}
              sx={{
                '&.Mui-selected': {
                  bgcolor: 'primary.main', // Change background on selection
                  color: 'white',
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
                transition: 'background-color 0.3s ease', // Smooth transition
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Box
        sx={{
          width: width,
          flexShrink: 0,
          display: { xs: 'none', lg: 'block' },
          bgcolor: 'background.paper',
          height: '100vh',
          position: 'sticky', 
          top: 0, // Align with top of viewport
          left: 0,
          boxShadow: 3, // Add shadow for separation
          borderRight: `1px solid ${theme => theme.palette.divider}`,
          cursor: 'pointer',
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              selected={pathname === item.path}
              onClick={() => router.push(item.path)}
              sx={{
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
                transition: 'background-color 0.3s ease',
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Box>
  );
};

export default Sidebar;
