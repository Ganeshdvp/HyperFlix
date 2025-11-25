import { createSlice } from "@reduxjs/toolkit";


const tvSeriesSlice = createSlice({
    name: "tv series",
    initialState:{
        arrivingTvSeriesState:null,
        trendingTvState:null,
    },
    reducers:{
        ArrivingTodayCategory : (state,action)=>{
            state.arrivingTvSeriesState = action.payload;
        },
        TrendingTvCategory : (state,action)=>{
            state.trendingTvState = action.payload;
        },
        ResetTvSeries : ()=>{
            return null;
        }
    }
})

export const {ArrivingTodayCategory, TrendingTvCategory, ResetTvSeries} = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;