import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { ResetMovies } from "../utils/moviesSlice";
import { ResetTvSeries } from "../utils/tvSeriesSlice";
import {toggleSearch} from '../utils/searchMovieSlice';
import { IoMdLogOut } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export const Header = () => {
  const data = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out  successful.
        dispatch(removeUser());
        dispatch(ResetMovies());
        dispatch(ResetTvSeries());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // // it is observer
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           fullName: displayName,
  //           email: email,
  //           photoURL: photoURL,
  //         })
  //       );
  //       navigate("/home");
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       navigate('/')
  //     }
  //   });

  //   return ()=> unsubscribe();
  // }, []);

  return (
    <>
      <div className="absolute z-30 flex items-center justify-between w-full mx-auto p-2 pt-8 px-10 sm:px-32 bg-linear-to-b from-black">
        <Link to={"/"}>
          {/* <img src={LOGO_URL} alt="netflix-logo" className="w-44" /> */}
          <h1 className="w-44 text-red-600 font-bold italic text-3xl">HyperFlix</h1>
        </Link>
        {data.uid === "" ? (
          <div className="flex items-center space-x-8">
            <div className="relative inline-block">
              <select className="appearance-none border rounded-sm pl-4 pr-8 py-2 text-sm border-white bg-black text-white focus:outline-none cursor-pointer hover:border-amber-600">
                <option className="cursor-pointer">English</option>
                <option className="cursor-pointer">Telugu</option>
                <option className="cursor-pointer">Hindi</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                &#9662;
              </span>
            </div>

            <Link to="/login">
              <button className="bg-amber-700 text-white px-6 py-2 rounded-sm text-sm font-medium cursor-pointer hover:bg-orange-600 ">
                Sign In
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-end">
            <div className="flex items-center mx-2">
              <button
              onClick={()=> dispatch(toggleSearch(true))}
                className="text-white text-sm opacity-50 flex items-center mr-8 p-2 rounded-2xl cursor-pointer
  transition-all duration-200
  active:border-2 active:border-amber-500
  active:shadow-[0_0_20px_5px_#f59e0b]"
              >
                <IoSearch className="text-lg opacity-70 mr-1" />
                Search movies
              </button>
              <img
                src={data?.photoURL}
                alt="user-avatar"
                className="w-10 h-10 rounded-4xl mr-2"
              />
              <span className="text-white font-medium mr-4">
                Hello,{" "}
                {data?.fullName.length > 10
                  ? data?.fullName.slice(0, 10) + "..."
                  : data?.fullName}
              </span>
            </div>
            <button
              className="flex items-center bg-orange-800 text-white p-2 rounded-sm cursor-pointer hover:bg-orange-700 font-semibold text-sm"
              onClick={handleClick}
            >
              <IoMdLogOut className="text-xl mr-1" /> Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};
