import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from './moviesSlice';
import tvSeriesSlice from './tvSeriesSlice';
import searchMovieSlice from './searchMovieSlice';


const appStore = configureStore({
    reducer: {
        user: userSlice,
        nowPlaying : moviesSlice,
        tvSeries: tvSeriesSlice,
        searchMovies: searchMovieSlice,
    }
})

export default appStore;