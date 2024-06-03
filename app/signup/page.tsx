'use client'
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputTextField from "@/components/TextField/TextField";
import { Box, Container } from '@mui/material';
import { SignUpFormValues as FormValues } from "@/formValues";
import {Typography } from "@mui/material";
import CustomButton from "@/components/Button/Button";
import PasswordInput from "@/components/Passwordinput/Passwordinput";
import { Button } from "@mui/material";
import { Validator } from "@/FormValidator/FormValidator";
import {TextField} from "@mui/material";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
    watch,
  } = useForm<FormValues>();

  const formValues = watch();
  

  const onSubmit = (data: FormValues) => {
    console.log(data)
  };

  return (
    <Box className="min-h-screen flex items-center justify-center">
      <Container className="border border-gray-300 shadow-xl rounded-lg p-8" maxWidth={"sm"}>
        <Typography className="text-center" variant="h4">Register</Typography>
        <Typography className="text-center" variant="h6">Please enter your credential below to continue</Typography>
        <Box className='grid grid-cols-1 md:grid-cols-2 gap-2'>

        
          <InputTextField<FormValues>
            required={true}
            label="First Name"
            name="firstName"
            register={register} 
            error={errors?.firstName} 
            value={formValues.firstName}
            type="text"
            validator={Validator<FormValues>({ label: 'first name',getValues, getValueKey: 'firstName', type: 'text',required: true })}
            setValue={setValue}
          />
          <InputTextField<FormValues> 
            required={true}
            label="Last Name"
            name="lastName"
            register={register}
            error={errors?.lastName}
            value={formValues.lastName}
            type="text"
            validator={Validator<FormValues>({ label: 'last name',getValues, getValueKey: 'lastName', type: 'text' })}
            setValue={setValue}
          />
          <InputTextField<FormValues> 
            required={true}
            label="Phone Number"
            name="phoneNumber"
            register={register}
            error={errors?.phoneNumber}
            value={formValues.phoneNumber}
            type="tel"
            validator={Validator<FormValues>({ label: 'phone number', getValues, getValueKey: 'phoneNumber', type: 'tel' })}
            setValue={setValue}
          />
          <InputTextField<FormValues> 
            required={true}
            label="Email"
            name="email"
            register={register}
            error={errors?.email}
            value={formValues.email}
            type="email"
            validator={Validator<FormValues>({ label: 'email', getValues, getValueKey: 'email', type: 'email' })}
            setValue={setValue}
          />
          <PasswordInput<FormValues> 
          
            label="Password"
            name="password"
            register={register}
            error={errors?.password}
            value={formValues.password}
            validator={Validator<FormValues>({ label: 'password', getValues, getValueKey: 'password', type: 'password' })}
          />
          <PasswordInput<FormValues> 
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors?.confirmPassword}
            value={formValues.confirmPassword}
            validator={Validator<FormValues>({ label: 'password', getValues, getValueKey: 'password', type: 'password' })}
          />
        </Box>
        <Box className='my-4'>
          <CustomButton onClick={handleSubmit(onSubmit)}/>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;