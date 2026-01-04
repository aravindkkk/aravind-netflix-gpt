import React, { useRef } from 'react';
import language from "../utils/langConstants";
import { useSelector } from 'react-redux'
import useInputSearchData from '../hooks/useInputSearchData';

const GptSearchBar =  () => {
  const { fetchSearchData } = useInputSearchData();
  const langKey = useSelector(store=>store.config.lang);
  const searchText = useRef(null);
  
  const handleGptSearchForm = () => {
     fetchSearchData(searchText.current.value); // ✅ normal function

   }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form onSubmit={(e) => e.preventDefault() } className='w-1/2 bg-black grid grid-cols-12'>
      <input type='text' ref={searchText} className='p-4 m-4 col-span-9' placeholder={language[langKey].gptPlaceHolder} />
      <button className='col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg' onClick={handleGptSearchForm}>
        {language[langKey].search}
      </button>
      </form>

    </div>
  )
}

export default GptSearchBar