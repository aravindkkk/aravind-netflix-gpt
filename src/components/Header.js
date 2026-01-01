import React from 'react'
import { Logo } from "../utils/constants"
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
        
      }).catch((error) => {
        navigate("/errorPage")
      });
  }

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