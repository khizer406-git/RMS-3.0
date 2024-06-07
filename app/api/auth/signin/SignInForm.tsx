'use client'
import React from "react";
import { useForm } from "react-hook-form";
import InputTextField from "@/components/TextField/TextField";
import { Box, Container } from '@mui/material';
import { SignInFormValues as FormValues } from "@/formValues";
import { Typography } from "@mui/material";
import CustomButton from "@/components/Button/Button";
import { Validator } from "@/FormValidator/FormValidator";
import CheckBoxInput from "@/components/CheckBoxInput/CheckBoxInput";
import { useRouter } from "next/navigation";
interface Prop {
    toggleForgetForm: () => void;
}
const SignInForm = ({ toggleForgetForm }: Prop) => {

    const router = useRouter();
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
                <Typography className="text-center" variant="h4">Sign In</Typography>
                <Typography className="text-center" variant="h6">Please enter your credential below to continue</Typography>
                <Box className='grid grid-cols-1 gap-2'>
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

                </Box>
                <Box className="w-full flex items-center justify-between">
                    <InputTextField<FormValues>
                        label="Remember me"
                        name="rememberMe"
                        register={register}
                        error={errors?.rememberMe}
                        value={formValues.rememberMe}
                        type="checkbox"
                        validator={Validator<FormValues>({ label: 'Remember Me', getValues, getValueKey: 'rememberMe', type: 'checkbox' })}
                        setValue={setValue}
                    />
                    <Typography onClick={toggleForgetForm} className="text-end cursor-pointer text-blue-700" variant="caption">Forget your password ?</Typography>
                </Box>
                <Box className='my-4'>
                    <CustomButton text={'Sign In'} onClick={handleSubmit(onSubmit)} />
                </Box>
                <Typography onClick={() => { router.push('/api/auth/signup') }} className="text-end w-full cursor-pointer text-blue-700" variant="caption">If you don't have an account click here</Typography>
            </Container>
        </Box>
    );
};

export default SignInForm;