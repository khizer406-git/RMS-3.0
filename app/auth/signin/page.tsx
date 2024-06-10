"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputTextField from "@/components/TextField/TextField";
import { Box, Container } from "@mui/material";
import { ChangePasswordForm as FormValues } from "@/formValues";
import { Typography } from "@mui/material";
import CustomButton from "@/components/Button/Button";
import { Validator } from "@/FormValidator/FormValidator";
import CheckBoxInput from "@/components/CheckBoxInput/CheckBoxInput";
import axios from "axios";
import SignInForm from "./SignInForm";
import ResetPasswordForm from "./resetPasswordForm";
import OtpForm from "./OtpForm";
// import { headers } from "next/headers";
const SignIn = () => {

  useEffect(()=>{
    const fetchData = async() =>{
      try {
        // const response = await fetch('/api/whoami',{
        //   method: "GET",
        //   headers: headers(),
        // });
        const response2 = await fetch('/api/whoami');
        // console.log(response,'abc')
        console.log(response2,'abc')  
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
    
  },[])
  const [forgetFormEnable, setForgetFormEnable] = useState(false);
  const [enableResetForm, setEnableResetForm] = useState(false);

  const toggleForgetForm = () => {
    setForgetFormEnable(!forgetFormEnable);
  };

  const toggleResetForm = () => {
    setEnableResetForm(!enableResetForm);
  };

  return forgetFormEnable ? (
    enableResetForm ? (
      <ResetPasswordForm toggleForgetForm={toggleForgetForm} />
    ) : (
      <OtpForm
        toggleResetForm={toggleResetForm}
        toggleForgetForm={toggleForgetForm}
      />
    )
  ) : (
    <SignInForm toggleForgetForm={toggleForgetForm} />
  );
};

export default SignIn;



// https://tdy-admin-panel-git-staging-khizer406skysys-projects.vercel.app/auth/signin

// https://tdy-git-sqa-cr2-sky-sys.vercel.app/?callbackUrl=https%3A%2F%2Ftdy-git-sqa-cr2-sky-sys.vercel.app%2Fproperties