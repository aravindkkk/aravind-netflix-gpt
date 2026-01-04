import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie  from "../hooks/usePopularMovie";
import MainContainer from './MainContainer';
import { SecondryContainer } from './SecondryContainer';
import GptSearchPage from "./GptSearchPage";
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import { useSelector } from 'react-redux';

export const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovie();
    useUpcomingMovie();

  return (
    <div>
    <Header/>
    {showGptSearch?<GptSearchPage />:<><MainContainer /><SecondryContainer /></>}
    </div>
  )
}
