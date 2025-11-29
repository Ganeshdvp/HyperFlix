import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from './moviesSlice';
import tvSeriesSlice from './tvSeriesSlice';
import gptSearchSlice from './gptSearchSlice';


const appStore = configureStore({
    reducer: {
        user: userSlice,
        nowPlaying : moviesSlice,
        tvSeries: tvSeriesSlice,
        gptSearch: gptSearchSlice,
    }
})

export default appStore;