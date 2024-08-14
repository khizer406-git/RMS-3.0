import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import DishCard from '../DishCard/DishCard';

const DashboardMenuCard = () => {
  return (
    <Box 
        p={2}
      sx={{ 
        backgroundColor: 'background.paper', 
        borderRadius: 2, 
        boxShadow: 3,
        
      }}
      width={'100%'}
    >
      <Typography variant="h6" component="h2" gutterBottom align="left">
        Popular Dishes
      </Typography>
      <Box 
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" // Responsive grid
            gap={2} 
      >
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />

                <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />        <DishCard />
        <DishCard />
        <DishCard />        <DishCard />
        <DishCard />
        <DishCard />        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </Box>
    </Box>
  );
};

export default DashboardMenuCard;
