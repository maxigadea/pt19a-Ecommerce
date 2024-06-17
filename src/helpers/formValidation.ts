import { LoginErrorsProps, LoginProps, RegisterErrorProps, RegisterProps } from "@/types";

export function validateFormLogin(dataUser: LoginProps) {
    let errors: LoginErrorsProps = {
    }

    if(!dataUser.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(dataUser.email)) {
        errors.email = "Email is not valid"
    } else if (!dataUser.password) {
        errors.password = "Password is required"
    }
    return errors;
};

export function validateFormRegister(dataUser: RegisterProps) {
    let errors: RegisterErrorProps = {
    }

    if(!dataUser.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(dataUser.email)) {
        errors.email = "Email is not valid"
    } else if (!dataUser.password) {
        errors.password = "Password is required"
    } else if (!dataUser.address) {
        errors.address = "Address is required"
    } else if (!dataUser.name) {
        errors.name = "Name is required"
    } else if (!dataUser.phone){
        errors.phone = "Phone is required"
    }


    return errors;
};