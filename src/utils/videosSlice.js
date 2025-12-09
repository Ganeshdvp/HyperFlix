import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name:"videosPage",
    initialState:{
        videoPlayerState:'',
        remainingVideosState:[],
        videoPlayerKeyState:"",
        recommandedVideosState:[],
    },
    reducers:{
        addvideo: (state,action)=>{
            state.videoPlayerState = action.payload;
        },
        addRemainingVideos :(state,action)=>{
            state.remainingVideosState = action.payload;
        },
        addVideoPlayerKey:(state, action)=>{
            state.videoPlayerKeyState = action.payload;
        },
        clearAddVideoPlayerKey:(state)=>{
            state.videoPlayerKeyState = "";
        },
        addRecommandedVideos :(state,action)=>{
            state.recommandedVideosState = action.payload;
        },
        clearState:()=>{
            return {
                videoPlayerState:'',
        remainingVideosState:[],
        videoPlayerKeyState:"",
        recommandedVideosState:[],
            }
        }
    }
})
export const {addvideo, addRemainingVideos, addVideoPlayerKey,clearAddVideoPlayerKey, addRecommandedVideos, clearState} = videosSlice.actions;
export default videosSlice.reducer;