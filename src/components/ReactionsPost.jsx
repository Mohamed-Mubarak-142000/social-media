import React from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";

const ReactionsPost = ({
  post,
  getAllComments,
  setShowComments,
  showComments,
  user,
}) => {
  return (
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
  );
};

export default ReactionsPost;
