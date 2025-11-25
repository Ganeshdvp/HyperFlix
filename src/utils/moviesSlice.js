import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMoviesState: null,
        trailerVideo:null,
        popularMoviesState:null,
        topRatedMoviesState:null,
        upComingMoviesState:null,
    },
    reducers:{
        NowPlayingCategory: (state,action)=>{
            state.nowPlayingMoviesState = action.payload;
        },
        TrailerVideoPlaying : (state,action)=>{
            state.trailerVideo = action.payload;
        },
        PopularCategory : (state,action)=>{
            state.popularMoviesState = action.payload;
        },
        TopRatedCategory : (state,action)=>{
            state.topRatedMoviesState = action.payload;
        },
        UpComingCategory : (state,action)=>{
            state.upComingMoviesState = action.payload;
        },
        ResetMovies : ()=>{
            return null;
        }
    }
})


export const {NowPlayingCategory, TrailerVideoPlaying, PopularCategory, TopRatedCategory, UpComingCategory, ResetMovies} = moviesSlice.actions;
export default moviesSlice.reducer;