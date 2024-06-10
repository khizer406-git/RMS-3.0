'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputTextField from "@/components/TextField/TextField";
import { Box, Container } from '@mui/material';
import { SignInFormValues as FormValues } from "@/formValues";
import { Typography } from "@mui/material";
import CustomButton from "@/components/Button/Button";
import { Validator } from "@/FormValidator/FormValidator";
import CheckBoxInput from "@/components/CheckBoxInput/CheckBoxInput";
import axios from "axios";
type OTPFormValue = {
    otp: string
}

type resetPasswordForm = {
    email: string
}

interface Prop {
    toggleForgetForm: () => void
    toggleResetForm: () => void
}
const OtpForm = ({ toggleForgetForm, toggleResetForm }: Prop) => {

    const [otpFormEnable, setOtpFormEnable] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        watch,
        reset,
        formState: { errors: errorReset },
    } = useForm<resetPasswordForm>();

    const {
        register: register2,
        handleSubmit: handleSubmit2,
        setValue: setValue2,
        getValues: getValuesOtp,
        watch: watch2,
        reset: reset2,
        formState: { errors: errorOtp },
    } = useForm<OTPFormValue>();

    const resetFields = () => {
        setOtpFormEnable(false);
        reset();
        reset2();
        toggleForgetForm()
    }

    const resetPasswordForm = watch();
    const OTPFormValue = watch2();


    const onSubmitEmail = async (data: resetPasswordForm) => {
        try {
            const response = await axios.post('/api/resetEmail', { email: data.email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response)
            if (response.status === 201) {
                console.log(response.data)
                setOtpFormEnable(true)
            } else {
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    };

    const onSubmitOtp = async (data: OTPFormValue) => {
        try {
            const response = await axios.post('/api/verifyOtp', { otp: data.otp, email: resetPasswordForm.email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response)
            if (response.status === 201) {
                console.log(response.data)
                toggleResetForm();
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
                    <InputTextField<resetPasswordForm>
                        required={true}
                        label="Email"
                        name="email"
                        register={register}
                        error={errorReset?.email}
                        value={resetPasswordForm.email}
                        type="email"
                        validator={Validator<resetPasswordForm>({ label: 'email', getValues, getValueKey: 'email', type: 'email' })}
                        setValue={setValue}
                    />
                    <Box className='my-4'>
                        <CustomButton text={'Generate OTP'} onClick={handleSubmit(onSubmitEmail)} />
                    </Box>
                    {otpFormEnable && <>
                        <InputTextField<OTPFormValue>
                            disabled={false}
                            required={true}
                            label="OTP"
                            name="otp"
                            register={register2}
                            error={errorOtp?.otp}
                            value={OTPFormValue.otp}
                            type="number"
                            validator={Validator<OTPFormValue>({ label: 'OTP', getValues: getValuesOtp, getValueKey: 'otp', type: 'text' })}
                            setValue={setValue2}
                        />
                        <Box className='my-4'>
                            <CustomButton text={'Submit OTP'} onClick={handleSubmit2(onSubmitOtp)} />
                        </Box>
                    </>}
                </Box>
                <Box className="w-full flex items-center justify-center">
                    <Typography onClick={resetFields} className="text-center w-full cursor-pointer text-blue-700" variant="caption">Back to Login</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default OtpForm;