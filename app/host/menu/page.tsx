import React from 'react'
import { Box, Typography } from '@mui/material'
import CustomButton from '@/components/Button/Button'
import FoodCategoryCard from '@/components/FoodCategroryBox/FoodCategoryBox'
const menu = () => {
  return (
    <Box>
    <Typography variant='h5'>Menu</Typography>
    <Box>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant='h6'>Categories</Typography>
          <CustomButton width='200px' text='Add New Category' />
        </Box>
        <FoodCategoryCard/>
    </Box>
    </Box>
  )
}

export default menu