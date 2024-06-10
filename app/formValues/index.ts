{/*
    Table of Contents 
    SignUp FormValues Sign Up page
    SignIn FormValues Sign in page
    Change Password Form SIgn in page

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

export type ChangePasswordForm = {
    password: string
    confirmPassword: string
}