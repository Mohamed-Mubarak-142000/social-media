import { BsThreeDots } from "react-icons/bs";
import React, { useState } from "react";
import profileImage from "../assets/profile.png";
import { getFormatDate } from "../utils/getFormaterDate";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineReplay } from "react-icons/md";
import OneComment from "./OneComment";
import { postComments } from "../assets/data";
import Loading from "../common/Loading";

const OnePost = ({ post }) => {
  const [more, setMore] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showReplay, setShowReplay] = useState(0);
  const [showComments, setShowComments] = useState(0);
  const [replayComments, setReplayComments] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getAllComments = async () => {
    setReplayComments(0);
    setComments(postComments);
    setIsLoading(false);
  };

  return (
    <section className="bg-primary my-3 rounded-md p-2">
      {/**header post */}
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

      {/** body post**/}
      <div className="text-sm my-3 text-textParag">
        {more ? post?.description : post?.description?.slice(0, 100)}
        <button
          onClick={() => setMore(!more)}
          className="text-blue outline-none "
        >
          {more
            ? "...less more"
            : post?.description.length > 100 && "...more than"}
        </button>
      </div>

      {/**image post**/}
      {post?.image && (
        <div className="h-[350px] w-full">
          <img src={post?.image} alt="image-post" className="w-full h-full" />
        </div>
      )}

      <div className="flex items-center justify-around my-2 py-2">
        {/** like**/}
        <button className="flex items-center gap-1 capitalize outline-none ">
          {post?.likes?.includes(user?._id) ? (
            <BiSolidLike size={22} color="blue" />
          ) : (
            <BiLike size={22} color="gray" />
          )}
          <span className="text-textParag">{post?.likes?.length} likes</span>
        </button>
        {/**comments**/}
        <button
          onClick={() => {
            setShowComments(showComments === post?._id ? null : post?._id);
            getAllComments(post?._id);
          }}
          className="flex items-center gap-1 capitalize outline-none "
        >
          <FaRegCommentDots className="text-textColor" />
          <span className="text-textParag">
            {post?.comments?.length == 0
              ? "comments"
              : post?.comments?.length + " comment"}
          </span>
        </button>
        {/***replay post*/}
        <button className="flex items-center gap-1 capitalize outline-none ">
          <MdOutlineReplay className="text-textColor" />
          <span className="text-textParag">
            {post?.comments?.length == 0
              ? "replay"
              : post?.comments?.length + " replay"}
          </span>
        </button>
      </div>

      {showComments === post?._id && (
        <div className="">
          <OneComment
            user={user}
            post={post?._id}
            getAllComments={() => getAllComments(post?._id)}
          />

          <div>
            {isLoading ? (
              <Loading />
            ) : comments?.length > 0 ? (
              <div className="rounded-md flex flex-col gap-3 w-[90%] mx-auto my-2">
                {comments?.map((comment) => {
                  return (
                    <div key={comment?._id} className="flex items-start gap-2">
                      {/***image person */}
                      <div className="w-10 h-10 rounded-full">
                        <img
                          className="rounded-full h-full w-full"
                          src={comment?.userId?.profileUrl ?? profileImage}
                          alt="image-person"
                        />
                      </div>

                      <div className="flex flex-col gap-1 p-1 rounded bg-secondary border border-secondary w-full">
                        <div className="flex items-center justify-between ">
                          <span className="text-textParag text-sm">
                            {comment?.userId?.firstName}
                            {comment?.userId?.lastName}
                          </span>

                          <span className="text-xs text-textParag">
                            {getFormatDate(new Date(comment?.createdAt))}
                          </span>
                        </div>
                        <p className="text-textColor text-sm">
                          {comment?.comment}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <span className="text-secondary text-center text-md my-2">
                no comment , be first comment
              </span>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default OnePost;
