import Button from '@mui/material/Button';

interface Prop {
  onClick?: () => void;
  text: string;
  width: string;
}

const CustomButton = ({ onClick, text, width }: Prop) => {
  return (
    <Button onClick={onClick} variant="outlined" color="primary" fullWidth sx={{ padding: '10px', borderRadius: '8px',width:width }} >
      {text}
    </Button>
  );
};

export default CustomButton;
