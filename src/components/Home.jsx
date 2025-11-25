import { Header } from "./Header";
import { FirstContainer } from "./FirstContainer";
import { SecondContainer } from "./SecondContainer";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import useArrivingTv from '../hooks/useArrivingTv';
import useTvTrending from '../hooks/useTvTrending';




export const Home = () => {

  useNowPlaying();
  usePopular();
  useTopRated();
  useUpComing();
  useArrivingTv();
  useTvTrending();


  return (
    <>
      <Header/>
      <FirstContainer/>
      <SecondContainer/>
    </>
  );
};
