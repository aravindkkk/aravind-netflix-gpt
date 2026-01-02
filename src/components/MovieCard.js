import React from 'react'
import { IMG_CARD_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt="Movie Card" src={IMG_CARD_URL + posterPath } />
    </div>
  )
}

export default MovieCard