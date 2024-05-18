import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { getFormatDate } from "../utils/getFormaterDate";
import profileImage from "../assets/profile.png";

const HeaderPost = ({ post }) => {
  return (
    <div className="flex items-center justify-between">
      {/**info person */}
      <div className="flex items-center gap-2">
        {/***image person */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg">
          <img
            src={post?.userId?.profileUrl ?? profileImage}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/***info person */}
        <div className="flex flex-col">
          <span className="text-textColor capitalize">
            {post?.userId?.firstName} {post?.userId?.lastName}
          </span>
          <span className="text-textParag text-xs">
            {getFormatDate(new Date(post?.createdAt))}
          </span>
        </div>
      </div>

      <div className="text-textColor">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default HeaderPost;
