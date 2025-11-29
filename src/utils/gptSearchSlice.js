import { createSlice } from "@reduxjs/toolkit";



const gptSearchSlice = createSlice({
    name:"gptSearch",
    initialState:{
        toggleGptState:false,
    },
    reducers:{
        toggleGpt:(state,action) =>{
            state.toggleGptState = action.payload;
        }
    }
})


export const {toggleGpt} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
