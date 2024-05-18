import React from "react";
import { useSelector } from "react-redux";
import imageBg from "../assets/bg.png";
import ButtomLeftSidebar from "../components/ButtomLeftSidebar";
const LeftSidebar = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="hidden lg:w-[300px] xl:flex xl:flex-col xl:gap-5 ">
      <div className=" h-[400px] bg-primary rounded-lg text-textColor p-2">
        LeftSidebar
      </div>
      <div className=" h-[400px] sticky top-16 bg-primary rounded-lg text-textColor">
        {/***image background and image profile */}
        <div className="relative">
          <div className="rounded-lg w-full h-[70px]">
            <img
              src={user?.bgProfileUrl ?? imageBg}
              className="rounded-t-lg w-full h-full"
              alt="image-bg"
            />
          </div>
          {/**************************** */}
          <div className="w-16 h-16 rounded-full border-2 border-white absolute left-[40%] bottom-[-50%]">
            <img
              src={user?.profileUrl ?? imageBg}
              alt="image-profile"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>

        {/******************************/}
        <ButtomLeftSidebar />
      </div>
    </div>
  );
};

export default LeftSidebar;
