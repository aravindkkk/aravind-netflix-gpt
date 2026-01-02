import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import { SecondryContainer } from './SecondryContainer';

export const Browse = () => {
        useNowPlayingMovies();
  return (
    <div>
    <Header/>
    <MainContainer />
    <SecondryContainer />
    </div>
  )
}
