import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FieldValues, UseFormRegister,Path,FieldError,UseFormGetValues } from 'react-hook-form';
import { FormValidatorProps } from '@/FormValidator/FormValidator';

interface Props<T extends FieldValues> {
  label: string;
  register: UseFormRegister<T>;
  name: keyof T;
  error?: FieldError;
  value: T[keyof T]
  validator: (props: FormValidatorProps<T>) => boolean | string;
}

const PasswordInput = <T extends FieldValues>({ label, register, name, error,value,validator }: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...register(name as Path<T>, { required: `${label} is required`,validate: validator})}
      label={label}
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error?.message}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              size='small'
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;