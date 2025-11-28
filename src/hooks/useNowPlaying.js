import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NowPlayingCategory } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';



const useNowPlaying = () => {
  
  const dispatch = useDispatch();

  // NowPlaying all movies fetching
  const NowPlayingData = async ()=>{
    try{
      const data = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=1`, API_OPTIONS);
      dispatch(NowPlayingCategory(data.data.results));
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    NowPlayingData();
  },[]);

 
  return NowPlayingData();
}

export default useNowPlaying;
