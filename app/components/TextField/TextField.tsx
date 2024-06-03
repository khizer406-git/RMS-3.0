import React from 'react';
import { TextField } from '@mui/material';
import { FieldValues, UseFormRegister,Path,FieldError,UseFormGetValues } from 'react-hook-form';
import { FormValidatorProps } from '@/FormValidator/FormValidator';

interface Props<T extends FieldValues> {
  label: string;
  name: keyof T // Change to string as keyof FormValues may not be applicable here
  register: UseFormRegister<T>; // Use any type for now, or replace with the specific FormValues type
  error?: FieldError;
  value: T[keyof T]
  onChange?: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  validator: (props: FormValidatorProps<T>) => boolean | string; 
  type: string;
  required ?: boolean;
}


const InputTextField = <T extends FieldValues>({ label, name, register, error,type, value,onChange,validator,required=false }: Props<T>) => (
  <TextField
    {...register(name as Path<T>, { ...(required && {required: `${label} is required`}), ...(validator && {validate: validator})  })}
    label={label}
    variant="outlined"
    fullWidth
    margin="normal"
    error={!!error}
    helperText={error?.message }
    placeholder=''
    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange && onChange(e)}
    type={type}   
  />
);

export default InputTextField;
