'use client';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const FoodImage = "https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.webp?b=1&s=170667a&w=0&k=20&c=UJcA-IR5iua10_r7ca41tk1c3F7fZkkjoL2_HCaEwMA=";

const DishCard = () => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
      <CardMedia>
        <Image 
          src={FoodImage} 
          height={200} 
          width={345} 
          alt='Food Image' 
          style={{ objectFit: 'cover' }} // Ensures the image covers the area
        />
      </CardMedia>
      <CardContent>
        <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h6' component='div' gutterBottom>
          Chicken Paratha
        </Typography>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}  >
            <Typography variant='body2' color='text.secondary'>
            $50
            </Typography>
            <Typography variant='body2' color='green' >
            In Stock
            </Typography>
        </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DishCard;
