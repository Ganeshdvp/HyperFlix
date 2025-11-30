import { createSlice } from "@reduxjs/toolkit";



const searchMovieSlice = createSlice({
    name:"searchMovie",
    initialState:{
        toggleSearchState:false,
        searchResultMovies:[],
    },
    reducers:{
        toggleSearch:(state,action) =>{
            state.toggleSearchState = action.payload;
        },
        searchResultMovie:(state,action)=>{
            state.searchResultMovies = action.payload;
        },
        resetSearchMovies:()=>{
            return {
                toggleSearchState:false,
                searchResultMovies: []
            }
        }
    }
})


export const {toggleSearch, searchResultMovie, resetSearchMovies} = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
