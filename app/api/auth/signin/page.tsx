"use client";
import React, { useState } from "react";
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

const SignIn = () => {
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
