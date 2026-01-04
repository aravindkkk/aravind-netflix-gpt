import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { B_Logo } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>

    <div className='absolute -z-10'>
        <img src={B_Logo} alt='B_Logo' />
    </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearchPage