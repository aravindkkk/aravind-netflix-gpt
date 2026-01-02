import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie  from "../hooks/usePopularMovie";
import MainContainer from './MainContainer';
import { SecondryContainer } from './SecondryContainer';
import useUpcomingMovie from '../hooks/useUpcomingMovie';

export const Browse = () => {
        useNowPlayingMovies();
        usePopularMovie();
        useUpcomingMovie();
  return (
    <div>
    <Header/>
    <MainContainer />
    <SecondryContainer />
    </div>
  )
}
