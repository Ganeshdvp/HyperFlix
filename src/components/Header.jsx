import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

export const Header = () => {
  const data = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out  successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="absolute z-10 flex items-center justify-between w-full mx-auto p-2 px-10 sm:px-32">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
          className="w-44"
        />
        {data === null ? (
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
              <img
                src={data?.photoURL}
                alt="user-avatar"
                className="w-12 h-12"
              />
              <span className="text-black font-medium mr-4">
                Hello, {data?.fullName.length > 10 ? data?.fullName.slice(0,10)+"..." : data?.fullName}
              </span>
            </div>
            <button
              className="bg-orange-800 text-white p-2 rounded-sm cursor-pointer hover:bg-orange-700 font-semibold text-sm"
              onClick={handleClick}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};
