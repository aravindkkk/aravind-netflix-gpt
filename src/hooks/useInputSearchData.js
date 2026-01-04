import { useDispatch } from "react-redux";
import { addGptSearchMovie } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";


const useInputSearchData = () => {
  
  const dispatch = useDispatch();
  const movieSearchData = async (searchText) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ searchText +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
  const fetchSearchData = async (searchText) => {
      const searchInput = searchText.split(" ");
      const getPromiseResult = searchInput.map((movie)=>movieSearchData(movie));
      const movieResult = await Promise.all(getPromiseResult);
      dispatch(addGptSearchMovie({inputSearch:searchInput, gptResult:movieResult}));

  };

  return { fetchSearchData };
};

export default useInputSearchData;
