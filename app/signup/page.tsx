'use client'
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputTextField from "@/components/TextField/TextField";
import { Box, Container } from '@mui/material';
import { SignUpFormValues as FormValues } from "@/formValues";
import {Typography } from "@mui/material";
import CustomButton from "@/components/Button/Button";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormValues>();

  const formValues = watch();

  const onSubmit = (data: FormValues) => {

  };

  return (
    <Box className="min-h-screen flex items-center justify-center">
      <Container className="border border-gray-300 shadow-xl rounded-lg p-8" maxWidth={"sm"}>
        <Typography className="text-center" variant="h4">Register</Typography>
        <Typography className="text-center" variant="h6">please enter your credential below to continue</Typography>
        <InputTextField<FormValues>
          label="First Name"
          name="firstName"
          register={register} 
          error={errors?.firstName} 
          value={formValues.firstName}
        />
        <InputTextField<FormValues> 
          label="Last Name"
          name="lastName"
          register={register}
          error={errors?.lastName}
          value={formValues.lastName}
        />
        <InputTextField<FormValues> 
          label="Phone Number"
          name="phoneNumber"
          register={register}
          error={errors?.phoneNumber}
          value={formValues.phoneNumber}
        />
        <InputTextField<FormValues> 
          label="Email"
          name="email"
          register={register}
          error={errors?.email}
          value={formValues.email}
        />
        <InputTextField<FormValues> 
          label="Password"
          name="password"
          register={register}
          error={errors?.password}
          value={formValues.password}
        />
        <InputTextField<FormValues> 
          label="confirmPassword"
          name="confirmPassword"
          register={register}
          error={errors?.confirmPassword}
          value={formValues.confirmPassword}
        />
        <Box className='my-4'>
          <CustomButton />
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;