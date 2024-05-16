import React from "react";
import { useSelector } from "react-redux";
import { FaImage } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { RiArticleFill } from "react-icons/ri";
import profileImage from "../assets/profile.png";
const CreatePost = ({ user }) => {
  return (
    <div className="bg-primary w-full rounded-md p-2">
      <div className="flex items-center gap-3 ">
        <div className="h-14 w-16 border rounded-full ">
          <img
            src={user?.profileUrl ?? profileImage}
            alt="image-profile"
            className="rounded-full h-full w-full object-fill"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="start a post"
            className="bg-primary border border-textParag outline-none text-textColor w-full h-12 rounded-3xl px-3 "
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-around mt-3 py-2">
        <div className="flex items-center gap-1 text-textColor hover:bg-secondary hover:cursor-pointer px-3 py-2 rounded">
          <span>
            <FaImage />
          </span>
          <span>Media</span>
        </div>

        <div className="flex items-center gap-1 text-textColor hover:bg-secondary hover:cursor-pointer px-3 py-2 rounded">
          <span>
            <CgCalendarDates />
          </span>

          <span>Event</span>
        </div>

        <div className="flex items-center gap-1 text-textColor hover:bg-secondary hover:cursor-pointer px-3 py-2 rounded">
          <span>
            <RiArticleFill />
          </span>

          <span>Write artical</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
