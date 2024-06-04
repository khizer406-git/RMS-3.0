import Button from '@mui/material/Button';

interface Prop {
  onClick: () => void;
  text: string;
}

const CustomButton = ({ onClick, text }: Prop) => {
  return (
    <Button onClick={onClick} variant="outlined" color="primary" fullWidth sx={{ padding: '10px', borderRadius: '8px' }} >
      {text}
    </Button>
  );
};

export default CustomButton;
