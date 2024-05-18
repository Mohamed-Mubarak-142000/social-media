import React, { useState } from "react";
import { getFormatDate } from "../utils/getFormaterDate";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineReplay } from "react-icons/md";
import OneComment from "./OneComment";
import { postComments } from "../assets/data";
import Loading from "../common/Loading";
import HeaderPost from "./HeaderPost";
import BodyPost from "./BodyPost";
import AllComments from "./AllComments";
import ReactionsPost from "./ReactionsPost";

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
      <HeaderPost post={post} />

      {/** body post**/}
      <BodyPost more={more} post={post} setMore={setMore} />

      {/***Footer post */}
      <ReactionsPost
        post={post}
        getAllComments={() => getAllComments(post?._id)}
        setShowComments={setShowComments}
        showComments={showComments}
        user={user}
      />

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
              <AllComments
                comments={comments}
                setReplayComments={setReplayComments}
                replayComments={replayComments}
                user={user}
              />
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
