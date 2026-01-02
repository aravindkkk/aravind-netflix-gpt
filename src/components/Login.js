import React, { useRef, useState } from 'react'
import Header from './Header'
import { B_Logo } from '../utils/constants'
import {signUpValidation} from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const disPatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const name      = useRef(null);
    const email     = useRef(null);
    const password  = useRef(null);

    const validateSignInForm = () => {
            const message = signUpValidation(email.current.value,password.current.value);
            setErrorMsg(message);
            if(message) return;
            
            if(!isSignIn){
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                   // Signed up 
                  const user = userCredential.user;
                  updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/ogw/AF2bZyi8Sqsdn3bYZq21RrOIJyCau8Dfv_3kAfdFHAZrjz2SEos=s32-c-mo"
                    }).then(() => {
                      const { uid, email, displayName, photoURL } = auth.currentUser; 
                      disPatch(
                        addUser({
                            uid: uid, email: email,
                            displayName: displayName,
                            photoURL : photoURL
                        })
                    );   
                    }).catch((error) => {
                        setErrorMsg(error.message)
                     });
                 
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage)
                });

            }else{
                signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed in 
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage)
                });


            }
    }

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
        <Header/>
    <div className='absolute'>
        <img src={B_Logo} alt='B_Logo' />
    </div>
    <form onSubmit={(e) => e.preventDefault() } className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" :"Sign Up"}</h1>
        {!isSignIn && (
         <input type="text" ref={name} placeholder="Full Name" className="p-2 m-2 w-full bg-gray-700" />
        )}
         <input type="text" ref={email} placeholder="Email Address" className="p-2 m-2 w-full bg-gray-700" />
         <input type="password" ref={password} placeholder="Password" className="p-2 m-2 w-full bg-gray-700" />
         <p className='text-red-500'>{errorMsg}</p>
         <button className='p-4 my-4 bg-red-700 w-full rounded-lg' 
                onClick={validateSignInForm}
         >{isSignIn ? "Sign In" : "Sign Up"}</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In " }</p>
    </form>
    </div>
    
  )
}

export default Login