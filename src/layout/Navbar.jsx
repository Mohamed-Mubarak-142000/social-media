import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { MdNightlight } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { getUserName } from "../utils/getUserName";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/slices/themeSlice";
import { useLocation } from "react-router-dom";
import { RiWechatFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { IoHomeSharp } from "react-icons/io5";

const Navbar = () => {
  const { theme } = useSelector((state) => state.theme);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const loacte = useLocation();

  //theme color
  const handleTheme = () => {
    const themeStatus = theme === "light" ? "dark" : "light";
    dispatch(setTheme(themeStatus));
  };

  //handle search
  const handleSearch = () => {};

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[60px] shadow-sm bg-primary">
      <nav className="h-full flex items-center justify-between gap-5 mx-5 md:mx-32 xl:mx-48">
        {/**logo */}
        <div className=" text-sm md:text-xl p-1 rounded text-textColor flex items-center opacity-80 ">
          <span className="text-blue font-medium capitalize ">dar</span>dasha
          <RiWechatFill color="blue" size={25} />
        </div>

        {/**search box */}
        <div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search about..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" text-textColor outline-none bg-secondary shadow-sm py-1  md:py-2 px-1 w-[200px] md:w-[300px] capitalize rounded-xl focus:border focus:border-blue"
            />
          </form>
        </div>

        {/**others navbar */}
        <div className="flex items-center gap-5 md:gap-10">
          <div className="relative">
            <IoHomeSharp className="text-blue" size={20} />
            <span className="w-5 h-5 rounded-full bg-red text-white flex items-center justify-center text-sm absolute top-[-10px] right-[-10px] ">
              1
            </span>
          </div>

          <div className="relative">
            <FaUserFriends className="text-blue" size={22} />
            <span className="w-5 h-5 rounded-full bg-red text-white flex items-center justify-center text-sm absolute top-[-10px] right-[-10px] ">
              1
            </span>
          </div>

          <div className="relative">
            <SiWechat className="text-blue" size={22} />
            <span className="w-5 h-5 rounded-full bg-red text-white flex items-center justify-center text-sm absolute top-[-10px] right-[-10px] ">
              2
            </span>
          </div>

          <div className="relative">
            <IoNotifications className="text-blue" size={22} />
            <span className="w-5 h-5 rounded-full bg-red text-white flex items-center justify-center text-sm absolute top-[-10px] right-[-10px] ">
              4
            </span>
          </div>

          <button onClick={handleTheme}>
            {theme === "light" ? (
              <MdNightlight color="gold" size={25} />
            ) : (
              <MdOutlineNightlight color="gray" size={25} />
            )}
          </button>

          {/***info poper */}
          <div>
            <div className="bg-blue h-10 w-10 flex items-center justify-center rounded-full">
              {getUserName("mohamed mubarak")}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
