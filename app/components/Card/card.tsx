import React from 'react';
import { Box, Typography, IconButton, SvgIcon } from '@mui/material';
import { CustomIcon } from '../CustomIcon/customIcon';
import { AiOutlineDollarCircle } from "react-icons/ai";
// SVG Icon as a separate component


interface Props{
    title: string,
    subtitle: string,
    value: string,
    icon: string,
}

const Card = ({title,subtitle,value,icon}:Props) => {

    const returnSelectedIcon = (icon:string) => {
        switch (icon) {
            case 'Dollar':
                return <AiOutlineDollarCircle size={30}/>
        
            default:
                break;
        }
    }


  return (
    <Box
      sx={{
        borderColor: 'divider',
        borderRadius: 8 ,
        backgroundColor: 'background.paper',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
        <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant="h6">{title}</Typography>   
                <Box
                    sx={{
                    width: 45,
                    height: 45,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    borderRadius: '50%',
                    }}
                >
                    {returnSelectedIcon(icon)}
                </Box>
        </Box>
      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Box>
          <Typography variant="h6" component="h4" color="textPrimary">
            {value}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {subtitle}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'textSecondary' }}>
          <Typography variant="body2">0.43%</Typography>
          <SvgIcon width="10" color='primary' height="11" viewBox="0 0 10 11">
            <path d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z" />
          </SvgIcon>
        </Box>
      </Box>    
    </Box>
  );
};

export default Card;
