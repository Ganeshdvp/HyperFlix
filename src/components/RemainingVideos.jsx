import { useDispatch, useSelector } from "react-redux";
import {addVideoPlayerKey} from '../utils/videosSlice';

export const RemainingVideos = () => {

  const remainingVideos = useSelector(store=> store.videos?.remainingVideosState)
  const dispatch = useDispatch()

  const handleClickRemainingVideos = (remainingVideoKey)=>{
    dispatch(addVideoPlayerKey(remainingVideoKey))
  }
  
  return (
    <div className="bg-black w-screen lg:w-4/12 h-full overflow-y-scroll no-scrollbar p-4 text-amber-100 md:pt-20 lg:pt-25">
      {remainingVideos?.map((item) => {
        return (
          <div 
          key={item.id} 
          className="flex items-center justify-start gap-x-4 mb-4 hover:bg-gray-800 active:bg-gray-800 cursor-pointer"
          onClick={()=> handleClickRemainingVideos(item.key)}
          >
            <img
              src={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
              alt="thumbnails"
              className="rounded-2xl w-5/12 h-35 object-cover hover:scale-105"
            />
            <div className="flex flex-col w-7/12">
              <p className="font-bold text-md">{item.name}</p>
            <p className="text-sm">{item.size}p</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
