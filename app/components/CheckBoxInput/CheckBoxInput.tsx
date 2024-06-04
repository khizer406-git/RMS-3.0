import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { FieldValues, UseFormSetValue, UseFormRegister, Path, FieldError, UseFormGetValues } from 'react-hook-form';
import { FormValidatorProps } from '@/FormValidator/FormValidator';

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
}


const CheckBoxInput = <T extends FieldValues>({ label, name, register, error, value, onChange, validator, required = false, setValue }: Props<T>) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={value}
                    onChange={onChange}
                    name="rememberMe"
                    color="primary"
                />
            }
            label="Remember Me"
        />
    );
}

export default CheckBoxInput;
