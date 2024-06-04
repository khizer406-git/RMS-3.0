{/*
    Table of Contents 
    SignUpFormValues
    SignIn FormValues
*/}



export type SignUpFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
};

export type SignInFormValues = {
    email: string;
    password: string;
    rememberMe: boolean;
};