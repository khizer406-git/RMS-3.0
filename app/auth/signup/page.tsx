'use client'
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputTextField from "@/components/TextField/TextField";
import { Box, Container } from '@mui/material';
import { SignUpFormValues as FormValues } from "@/formValues";
import { Typography } from "@mui/material";
import CustomButton from "@/components/Button/Button";
import { Validator } from "@/FormValidator/FormValidator";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AUTH_ENDPOINTS } from "@/utils/constants/APIEndPoints";
import { showToast } from "@/utils/showtoast/showtoast";
import { ToastSeverity } from "@/utils/enums";
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


  const router = useRouter();
  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(
        AUTH_ENDPOINTS.SIGNUP, 
        data, 
        {
            headers: {
                'Content-Type': 'application/json'
            },
        }
      );
      showToast('User Created Successfully',ToastSeverity.SUCCESS)
    } catch (error) {
      showToast('User not created successfully',ToastSeverity.ERROR)
      console.log(error);
    }
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
            validator={Validator<FormValues>({ label: 'first name', getValues, getValueKey: 'firstName', type: 'text', required: true })}
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
            validator={Validator<FormValues>({ label: 'last name', getValues, getValueKey: 'lastName', type: 'text' })}
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
          <InputTextField<FormValues>
            required={true}
            label="Password"
            name="password"
            register={register}
            error={errors?.password}
            value={formValues.password}
            type="password"
            validator={Validator<FormValues>({ label: 'password', getValues, getValueKey: 'password', type: 'password' })}
            setValue={setValue}
          />
          <InputTextField<FormValues>
            required={true}
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors?.confirmPassword}
            value={formValues.confirmPassword}
            type="password"
            validator={Validator<FormValues>({ label: 'password', getValues, getValueKey: 'confirmPassword', type: 'password' })}
            setValue={setValue}
          />
        </Box>
        <Box className='my-4'>
          <CustomButton text={'Sign Up'} onClick={handleSubmit(onSubmit)} />
        </Box>
        <Typography onClick={() => { router.push('/auth/signin') }} className="text-end w-full cursor-pointer text-blue-700" variant="caption">Already have an account click here</Typography>
      </Container>
    </Box>
  );
};

export default SignUp;