import React from 'react'
import useGetMovie from "../hooks/useGetMovie"
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
    useGetMovie(movieId);
    const movieTarilerKey = useSelector(store => store.movie?.trailerVideo)
    if(!movieTarilerKey) return;
    
  return (
    <div className='w-screen'>
    <iframe 
    className='w-screen aspect-video'
    src={"https://www.youtube.com/embed/"+ movieTarilerKey?.key + "?&autoplay=1&mute=1"}
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground