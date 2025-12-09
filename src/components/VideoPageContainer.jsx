import { useEffect } from 'react';
import {VideoPlayer} from './VideoPlayer';
import {RemainingVideos} from './RemainingVideos';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_OPTIONS } from '../utils/constants';
import { addRemainingVideos, addvideo} from '../utils/videosSlice';
import { useDispatch } from 'react-redux';
import {Header} from './Header';
import {RecommandedVideos} from './RecommandedVideos';
import {Footer} from './Footer';


export const VideoPageContainer = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  
  // fetching video key
  const fetchingVideo = async ()=>{
    try{
      const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
    dispatch(addRemainingVideos(data.data?.results))
    dispatch(addvideo(data.data?.results[0]?.key))
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    if(id){
      window.scrollTo({top:0, behavior:'smooth'})
      fetchingVideo();
    }
    else{
      return;
    }
  },[id])
  
  
  return (
    <>
    <Header/>
    <div className='bg-black flex flex-col lg:flex-row w-screen h-screen pt-20 lg:pt-0'>
      <VideoPlayer key={id}/>
      <RemainingVideos/>
    </div>
    <RecommandedVideos id={id}/>
    <Footer/>
    </>
  )
}
