import { useSelector } from "react-redux";
import { BgVideoPlayer } from "./BgVideoPlayer";
import { FaPlay } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";


export const FirstContainer = () => {

  const movies = useSelector(
    (store) => store.nowPlaying?.nowPlayingMoviesState
  );
  
  if (!movies || movies.length ===0 ) return;

    const {id, original_title, overview, release_date } = movies[0];


  return (
    <>
      <div className="flex flex-col pl-20 absolute pt-82 bg-linear-to-r from-black w-screen aspect-video shadow-2xl z-20">
        <h1 className="text-5xl font-bold mb-4 text-white">{original_title}</h1>
        <p className="text-md text-start w-4/12 mb-1 text-gray-300">{overview.length > 250 ? overview.slice(0,250)+ " more..." : overview}</p>
        <p className="text-md mb-8 text-gray-200">Released on :- {release_date}</p>
        <div className="flex space-x-4">
          <button className=" bg-white text-black p-3 rounded-sm px-6 font-semibold text-sm hover:scale-105 hover:text-white hover:bg-black flex items-center cursor-pointer">
            <FaPlay />Play
          </button>
          <button className="bg-[rgba(168,168,168,0.19)]  text-white p-3 rounded-sm px-6 font-semibold text-sm hover:bg-[rgba(168,168,168,0.6)] flex items-center cursor-pointer">
            <HiOutlineInformationCircle className="text-xl mr-1"/>
            Check info
          </button>
        </div>
      </div>

      <BgVideoPlayer id={id}/>
    </>
  );
};
