'use client'
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputTextField from "@/components/TextField/TextField";
import { Box, Container } from '@mui/material';
import { SignUpFormValues as FormValues } from "@/formValues";
import Typography from "@mui/material";

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

  const onSubmit = (data: FormValues) => {};

  return (
    <Box className="min-h-screen flex items-center justify-center">
      <Container maxWidth={"sm"}>
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
      </Container>
    </Box>
  );
};

export default SignUp;
