import { Header } from "./Header";
import { FirstContainer } from "./FirstContainer";
import { SecondContainer } from "./SecondContainer";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import useArrivingTv from "../hooks/useArrivingTv";
import useTvTrending from "../hooks/useTvTrending";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchMovies } from "./SearchMovies";
import { clearState } from '../utils/videosSlice';

export const Home = () => {
  
  const data = useSelector((store) => store.searchMovies.toggleSearchState);
  const dispatch = useDispatch();
  

  useNowPlaying();
  usePopular();
  useTopRated();
  useUpComing();
  useArrivingTv();
  useTvTrending();

  // Online status of users
  useEffect(() => {
    const onLine = () => {
      console.log("ur online dude");
    };
    const offLine = () => {
      console.log("ur offline dude");
    };

    window.addEventListener("online", onLine);
    window.addEventListener("offline", offLine);

    return () => {
      window.removeEventListener("online", onLine);
      window.removeEventListener("offline", offLine);
    };
  },[]);

  useEffect(()=>{
    dispatch(clearState())
  },[])

  return (
    <>
      {data ? <SearchMovies /> : (
        <>
          <Header />
          <FirstContainer />
          <SecondContainer />
          <Footer />
        </>
      )}
    </>
  );
};
