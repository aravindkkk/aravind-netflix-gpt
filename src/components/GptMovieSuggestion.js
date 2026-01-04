import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const { inputSearch = [], gptResult = [] } = useSelector((store) => store.gpt);
  return (
    <div>
      {inputSearch.map((movieName, index) =>(
         <MovieList 
         key={movieName} 
         title={movieName} 
         movies={gptResult[index]} />
      )
        )}
      
    </div>
  )
}

export default GptMovieSuggestion