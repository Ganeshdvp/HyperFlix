import { Header } from "./Header";
import { FirstContainer } from "./FirstContainer";
import { SecondContainer } from "./SecondContainer";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import useArrivingTv from '../hooks/useArrivingTv';
import useTvTrending from '../hooks/useTvTrending';
import {Footer} from './Footer';
import { useEffect } from "react";



export const Home = () => {

  useNowPlaying();
  usePopular();
  useTopRated();
  useUpComing();
  useArrivingTv();
  useTvTrending();

  // Online status of users
 useEffect(()=>{
  const onLine = ()=>{
    console.log("ur online dude");
  }
  const offLine = ()=>{
    console.log("ur offline dude");
  }

  window.addEventListener("online", onLine);
  window.addEventListener("offline", offLine);

  return ()=>{
    window.removeEventListener("online", onLine);
    window.removeEventListener("offline", offLine);
  }
 },[])

  return (
    <>
      <Header/>
      <FirstContainer/>
      <SecondContainer/>
      <Footer/>
    </>
  );
};
