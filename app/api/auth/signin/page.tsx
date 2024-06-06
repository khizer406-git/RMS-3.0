'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputTextField from "@/components/TextField/TextField";
import { Box, Container } from '@mui/material';
import { ChangePasswordForm as FormValues } from "@/formValues";
import { Typography } from "@mui/material";
import CustomButton from "@/components/Button/Button";
import { Validator } from "@/FormValidator/FormValidator";
import CheckBoxInput from "@/components/CheckBoxInput/CheckBoxInput";
import axios from "axios";



const SignIn = () => {


    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        watch,
        formState: { errors },
    } = useForm<FormValues>();


    const formValues = watch();


    const onSubmit = async (data: FormValues) => {
        try {
            const response = await axios.post('/api/updatePassword', { password: data.password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response)
            if (response.status === 201) {
                console.log(response.data)
            } else {
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    };



    return (
        <Box className="min-h-screen flex items-center justify-center">
            <Container className="border border-gray-300 shadow-xl rounded-lg p-8" maxWidth={"sm"}>
                <Typography className="text-center" variant="h4">Forget your password ?</Typography>
                <Typography className="text-center my-6" variant="body1">Please enter your  email to recover your password</Typography>
                <Box className='grid grid-cols-1 gap-2'>

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
                        validator={Validator<FormValues>({ label: 'password', getValues, getValueKey: 'password', type: 'password' })}
                        setValue={setValue}
                    />

                    <Box className='my-4'>
                        <CustomButton text={'Change Password'} onClick={handleSubmit(onSubmit)} />
                    </Box>

                </Box>
                {/* <Box className="w-full flex items-center justify-center">
                    <Typography className="text-center w-full cursor-pointer text-blue-700" variant="caption">Back to Login</Typography>
                </Box> */}
            </Container>
        </Box>
    );
};

export default SignIn;