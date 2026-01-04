import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        inputSearch : [],
        gptResult: []

    },
    reducers: {
        toggleGptSeachView: (state,action) => {
            state.showGptSearch = !state.showGptSearch; 
        },
        addGptSearchMovie : (state,action) => {
            const {inputSearch, gptResult} = action.payload;
            state.inputSearch = inputSearch;
            state.gptResult = gptResult;
            
        }
    },
});

export const { toggleGptSeachView, addGptSearchMovie } = gptSlice.actions;
export default gptSlice.reducer;