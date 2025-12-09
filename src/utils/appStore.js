import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from './moviesSlice';
import tvSeriesSlice from './tvSeriesSlice';
import searchMovieSlice from './searchMovieSlice';
import langConfigSlice from './langConfigSlice';
import videosSlice from './videosSlice';

const appStore = configureStore({
    reducer: {
        user: userSlice,
        nowPlaying : moviesSlice,
        tvSeries: tvSeriesSlice,
        searchMovies: searchMovieSlice,
        language : langConfigSlice,
        videos : videosSlice,
    }
})

export default appStore;