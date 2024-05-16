import React from "react";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="bg-primary w-full rounded-md p-2">
      <div className="flex items-center gap-3 ">
        <div className="h-14 w-14 border rounded-full ">
          <img
            src={user?.profileUrl}
            alt="image-profile"
            className="rounded-full h-14 w-14"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="start a post"
            className="bg-primary border w-full h-12 rounded-xl px-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
