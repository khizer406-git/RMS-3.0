import { UseFormGetValues, FieldValues } from "react-hook-form";

const ConfirmPasswordValidator = (
  password: string,
  passwordType: string,
  getValues: any
) => {
  if (passwordType === "password") return true;
  else
    return password === getValues().passwordType
      ? true
      : "Passwords do not match";
};

// Password Type means password or confirmPassword
const PasswordValidator = (
  password: string,
  passwordType: string,
  getValues: any
) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password)
    ? ConfirmPasswordValidator(password, passwordType, getValues)
    : "Password must be at least 8 characters long and contain uppercase letters, lowercase letters, and numbers";
};

const EmailValidator = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? true : "Invalid Email";
};

export interface FormValidatorProps<T extends FieldValues> {
  label: string;
  type: string;
  getValues: UseFormGetValues<T>;
  getValueKey: string;
  required?: boolean
}

export const Validator = <T extends FieldValues>({
  label,
  getValueKey,
  getValues,
  type,
  required = false,
}: FormValidatorProps<T>): ((value: any) => string | boolean) => {

  // console.log(label,getValueKey,type,'awdj')
  return (value: any) => {
    if (required && !value.trim()) return `${label} is required`;
    if (type === "email") return EmailValidator(value);
    if (type === "password")
      return PasswordValidator(value, getValueKey, getValues);
    if (type === "checkbox")
      return value ? true : 'checkbox is required';
    return true;
  };
};
