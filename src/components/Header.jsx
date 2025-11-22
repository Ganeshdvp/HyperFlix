import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="absolute z-10 flex items-center justify-between w-full mx-auto p-2 px-10 sm:px-32">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
          className="w-44"
        />
        <div className="flex items-center space-x-8">
          <div className="relative inline-block">
            <select className="appearance-none border rounded-sm pl-4 pr-8 py-2 text-sm border-white bg-black text-white focus:outline-none cursor-pointer hover:border-amber-700">
              <option className="cursor-pointer">English</option>
              <option className="cursor-pointer">Telugu</option>
              <option className="cursor-pointer">Hindi</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
              &#9662;
            </span>
          </div>
          
          <Link to='/login'><button className="bg-amber-700 text-white px-6 py-2 rounded-sm text-sm font-medium cursor-pointer">
            Sign In
          </button></Link>
        </div>
      </div>
    </>
  );
};
