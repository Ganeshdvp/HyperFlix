import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";

export const SecondContainer = () => {
  const data = useSelector((store) => store);

  return (
    <>
      <div className="bg-black">
        {/* Now playing */}
        <div className="z-20 w-screen h-full relative -top-50 mb-4 ml-6">
          <h2
            className="text-white
         text-2xl font-bold px-4 mb-2"
          >
            Now Playing
          </h2>
          <div className="flex gap-4 px-4 h-75 p-4 w-screen overflow-hidden">
            {data?.nowPlaying?.nowPlayingMoviesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-48 h-60 object-cover rounded-lg hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Popular */}
        <div className="z-20 w-screen h-full relative -top-50 mb-4 ml-6">
          <h2
            className="text-white
         text-2xl font-bold px-4 mb-2"
          >
            Popular
          </h2>
          <div className="flex gap-4 px-4 h-75 p-4 w-screen overflow-hidden">
            {data?.nowPlaying?.popularMoviesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-48 h-60 object-cover rounded-lg hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Top rated */}
        <div className="z-20 w-screen h-full relative -top-50 mb-4 ml-6">
          <h2
            className="text-white
         text-2xl font-bold px-4 mb-2"
          >
            Top Rated
          </h2>
          <div className="flex gap-4 px-4 h-75 p-4 w-screen overflow-hidden">
            {data?.nowPlaying?.topRatedMoviesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-48 h-60 object-cover rounded-lg hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Up coming */}
        <div className="z-20 w-screen h-full relative -top-50 mb-4 ml-6">
          <h2
            className="text-white
         text-2xl font-bold px-4 mb-2"
          >
            Up Coming
          </h2>
          <div className="flex gap-4 px-4 h-75 p-4 w-screen overflow-hidden">
            {data?.nowPlaying?.upComingMoviesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-48 h-60 object-cover rounded-lg hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>

         {/* Arriving Today */}
        <div className="z-20 w-screen h-full relative -top-50 mb-4 ml-6">
          <h2
            className="text-white
         text-2xl font-bold px-4 mb-2"
          >
           TV series <span className="text-[10px] text-white relative -top-0.5 font-light font-sans border-2 border-amber-800 rounded-2xl p-1 px-2">Arriving today</span>
          </h2>
          <div className="flex gap-4 px-4 h-75 p-4 w-screen overflow-hidden">
            {data?.tvSeries?.arrivingTvSeriesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-48 h-60 object-cover rounded-lg hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Trending TV */}
        <div className="z-20 w-screen h-full relative -top-50 mb-4 ml-6">
          <h2
            className="text-white
         text-2xl font-bold px-4 mb-2"
          >
           Trending <span className="text-[10px] text-white relative -top-0.5 font-light font-sans border-2 border-amber-800 rounded-2xl p-1 px-2">TV</span>
          </h2>
          <div className="flex gap-4 px-4 h-75 p-4 w-screen overflow-hidden">
            {data?.tvSeries?.trendingTvState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-48 h-60 object-cover rounded-lg hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>


        
      </div>
    </>
  );
};
