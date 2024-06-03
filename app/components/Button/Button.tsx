import Button from '@mui/material/Button';

interface Prop {
    onClick: () => void
}

const CustomButton = ({onClick}:Prop) => {
  return (
    <Button onClick={onClick} variant="outlined" color="primary" fullWidth sx={{padding:'10px',borderRadius:'8px'}} >
      Sign Up
    </Button>
  );
};

export default CustomButton;
