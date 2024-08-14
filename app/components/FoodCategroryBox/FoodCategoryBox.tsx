import React from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const FoodCategoryCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 200,
        borderRadius: '12px',
        boxShadow: 3,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <IconButton
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            mb: 1,
            borderRadius: '50%',
            p: 1,
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          <HomeIcon />
        </IconButton>
        <Typography variant='h6' component='div'>
          All
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          116
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FoodCategoryCard;
