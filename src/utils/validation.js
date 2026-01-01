export const signUpValidation = (email, password) =>{
    // const isNameValid     = /^[a-zA-Z\s]+$/.test(name);
     const isEmailValid    =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
     const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
     //if(!isNameValid) return "Enter the Valid name"
     if(!isEmailValid) return "Email Id is not valid";
     if(!isPasswordValid) return "Password is not valid";
     return null;

    }


