import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addUpcomingMovies} from "../utils/movieSlice"


const useUpcomingMovie = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movie.upcomingMovies);

    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=> {
        !upcomingMovies && getUpComingMovies();
    },[])

}

export default useUpcomingMovie;