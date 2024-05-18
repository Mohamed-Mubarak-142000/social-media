import React from "react";
import OneComment from "./OneComment";
import { getFormatDate } from "../utils/getFormaterDate";
import { BiLike, BiSolidLike } from "react-icons/bi";
import profileImage from "../assets/profile.png";

const AllComments = ({ comments, setReplayComments, replayComments, user }) => {
  return (
    <div className="rounded-md flex flex-col gap-5 w-[90%] mx-auto my-2">
      {comments?.map((comment) => {
        return (
          <div key={comment?._id} className="flex items-start gap-2 ">
            {/***image person */}
            <div className="w-10 h-10 rounded-full">
              <img
                className="rounded-full h-full w-full"
                src={comment?.userId?.profileUrl ?? profileImage}
                alt="image-person"
              />
            </div>

            <div className="flex flex-col w-full">
              <div className=" shadow-md flex flex-col gap-1 p-1 rounded bg-secondary border border-secondary w-full">
                <div className="flex items-center justify-between ">
                  <span className="text-textParag text-sm">
                    {comment?.userId?.firstName}
                    {comment?.userId?.lastName}
                  </span>

                  <span className="text-xs text-textParag">
                    {getFormatDate(new Date(comment?.createdAt))}
                  </span>
                </div>
                <p className="text-textColor text-sm mb-5">
                  {comment?.comment}
                </p>

                <div className="bg-secondary rounded-md left-0 w-[50%] capitalize flex items-center justify-around text-sm text-textParag">
                  <span className="flex items-center">
                    {comment?.likes?.includes(user?._id) ? (
                      <BiSolidLike size={22} color="blue" />
                    ) : (
                      <BiLike size={22} color="gray" />
                    )}{" "}
                    {comment?.likes?.length} likes
                  </span>

                  <span
                    className="text-blue cursor-pointer"
                    onClick={() => setReplayComments(comment?._id)}
                  >
                    replay
                  </span>
                </div>
              </div>
              {/***replay comment */}
              <div className="w-[90%] mx-auto">
                {replayComments === comment?._id && (
                  <OneComment
                    user={user}
                    post={comment?._id}
                    getAllComments={() => getAllComments(post?._id)}
                    replayAt={comment?.from}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllComments;
