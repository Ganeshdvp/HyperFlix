import axios from "axios";
import { API_OPTIONS, IMG_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecommandedVideos } from "../utils/videosSlice";
import lang from "../utils/langConstants";
import { useNavigate } from "react-router-dom";
import { clearAddVideoPlayerKey } from "../utils/videosSlice";

export const RecommandedVideos = ({ id }) => {
  const language = useSelector((store) => store.language?.languageState);
  const dispatch = useDispatch();
  const allRecommandedVideos = useSelector(
    (store) => store.videos?.recommandedVideosState
  );
  const navigate = useNavigate();

  const fetchingRecommanded = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      API_OPTIONS
    );
    dispatch(addRecommandedVideos(data.data.results));
  };

  useEffect(() => {
    if (id) {
      fetchingRecommanded();
    } else {
      return;
    }
  }, [id]);

  const handleClickRecommanded = (recommandedKey) => {
    dispatch(clearAddVideoPlayerKey());
    navigate(`/home/v/${recommandedKey}`);
  };

  return (
    <div className="bg-black p-4 pt-30 pb-40 w-full">
      <h2 className="text-white text-2xl font-bold pl-6">
        {lang[language].recommandationMovies}
      </h2>
      {
        allRecommandedVideos.filter(i=>i.poster_path).length === 0 ? (
          <div className="w-full flex justify-center">
            <span className="text-white pt-16">No Recommanded movies</span>
          </div>
        ) : (
          <div className="flex flex-wrap px-15 pt-8 gap-x-8 gap-y-10 justify-start">
        {allRecommandedVideos
          ?.filter((i) => i.poster_path)
          .map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={IMG_URL + item.poster_path}
                  alt="recommanded-poster"
                  className="rounded-xl w-50 h-65 object-cover hover:scale-105 cursor-pointer active:scale-105"
                  onClick={() => handleClickRecommanded(item.id)}
                />
              </div>
            );
          })}
      </div>
        )
      }
    </div>
  );
};
