
import { useSelector } from "react-redux";


export const VideoPlayer = () => {
  
  const videoKey = useSelector(store=> store.videos?.videoPlayerState);
   const remainingVideoKey = useSelector(store=> store.videos?.videoPlayerKeyState);

   const activeVideoKey = remainingVideoKey || videoKey;

  return (
    <div className="bg-black w-full h-screen lg:w-8/12 lg:h-full lg:pt-25">
      <iframe
      className="w-full h-full"
        src={`https://www.youtube.com/embed/${activeVideoKey}?si=xaT724_WM5g3FmmH?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
