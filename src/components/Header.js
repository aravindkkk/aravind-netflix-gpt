import React from 'react'

import { Logo } from "../utils/constants"


const Header = () => {
  return (
    <div className='absolute px-8 z-10'>
        <img src={Logo} className='w-44' alt='logo' />
    </div>
  )
}

export default Header