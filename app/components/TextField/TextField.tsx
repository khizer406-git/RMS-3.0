import React from 'react';
import { FieldValues, UseFormSetValue, UseFormRegister, Path, FieldError, UseFormGetValues } from 'react-hook-form';
import { FormValidatorProps } from '@/FormValidator/FormValidator';
import { useState } from 'react';
import { TextField, IconButton, InputAdornment, FormControlLabel, Radio, RadioGroup, Checkbox } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
interface Props<T extends FieldValues> {
  label: string;
  name: keyof T // Change to string as keyof FormValues may not be applicable here
  register: UseFormRegister<T>; // Use any type for now, or replace with the specific FormValues type
  error?: FieldError;
  value: T[keyof T]
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  validator: (props: FormValidatorProps<T>) => boolean | string;
  type: string;
  required?: boolean;
  setValue: any;
  options?: { label: string, value: any }[]; // For radio buttons
  disabled?: boolean
}


const InputTextField = <T extends FieldValues>({ disabled = false, options = [], label, name, register, error, type, value, onChange, validator, required = false, setValue }: Props<T>) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  if (type === 'radio') {
    return (
      <RadioGroup
        {...register(name as Path<T>, { ...(required && { required: `${label} is required` }), ...(validator && { validate: validator }) })}
        value={value}
        onChange={(e) => {
          setValue(name, e.target.value);
          onChange && onChange(e);
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    );
  }

  if (type === 'checkbox') {
    return (
      <FormControlLabel
        control={
          <Checkbox
            {...register(name as Path<T>, { ...(required && { required: `${label} is required` }), ...(validator && { validate: validator }) })}
            checked={!!value}
            required={required}
            onChange={(e) => {
              setValue(name, e.target.checked);
              onChange && onChange(e);
            }}
            disabled={disabled}
          />
        }
        label={<span style={{ display: 'flex', gap: '2px', whiteSpace: 'nowrap' }}>{label}</span>}
      />
    );
  }

  return (<TextField
    {...register(name as Path<T>, { ...(required && { required: `${label} is required` }), ...(validator && { validate: validator }) })}
    disabled={disabled}
    label={label}
    variant="outlined"
    fullWidth
    margin="normal"
    error={!!error}
    helperText={error?.message}
    placeholder=''
    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { onChange && onChange(e); setValue(name, e.target.value) }}
    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
    value={value}
    InputProps={type === 'password' ?
      {
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
      } : {}}
  />)
}

export default InputTextField;
