import React, { useEffect } from 'react'
import { Logo } from "../utils/constants"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';



const Header = () => {

  const disPatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignout = () => {
  signOut(auth).then(() => {

      }).catch((error) => {
        navigate("/errorPage")
      });
  }
  useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, (user) => {
              if (user) {
                const { uid, email, displayName, photoURL } = user;
                disPatch(
                  addUser({
                    uid: uid, 
                    email: email, 
                    displayName: 
                    displayName,
                    photoURL : photoURL
                  })
                )
                navigate("/browse");
              } else {
                disPatch(removeUser());
                navigate("/")
              }
            });

            // unSuscribe for component unmount
            return () => unSuscribe();
  
      }, [disPatch,navigate])

  return (
    <div className='flex absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
        <img src={Logo} className='w-44' alt='logo' />
        { user && (
          <div className='flex p-2'>
            <p className='flex font-bold text-red-600 justify-between'>{user?.displayName}</p>
            <button className='flex font-bold text-white' onClick={handleSignout}> - (Signout)</button>
          </div>
        )}
    </div>
  )
}

export default Header