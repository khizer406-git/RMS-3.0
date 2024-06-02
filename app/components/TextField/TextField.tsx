import React from 'react';
import { TextField } from '@mui/material';
import { FieldValues, UseFormRegister,Path,FieldError } from 'react-hook-form';
import { SignUpFormValues } from '@/formValues';

interface Props<T extends FieldValues> {
  label: string;
  name: keyof T // Change to string as keyof FormValues may not be applicable here
  register: UseFormRegister<T>; // Use any type for now, or replace with the specific FormValues type
  error?: FieldError;
  value: T[keyof T]
  onChange?: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputTextField = <T extends FieldValues>({ label, name, register, error, value,onChange }: Props<T>) => (
  <TextField
    {...register(name as Path<T>, { required: `${label} is required` })}
    label={label}
    variant="outlined"
    fullWidth
    margin="normal"
    error={!!error}
    helperText={error?.message }
    placeholder=''
    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange && onChange(e)}
  />
);

export default InputTextField;
