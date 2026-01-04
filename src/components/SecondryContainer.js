import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export const SecondryContainer = () => {
  const movies         = useSelector(store => store.movie?.nowPlayingMovies);
  const popularMovies  = useSelector(store => store.movie?.popularMovies);
  const upcomingMovies = useSelector(store => store.movie?.upcomingMovies);
  return ( movies && (
      <div className='mt-10 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Top Rated"} movies={upcomingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      </div>
  )
    
  )
}
