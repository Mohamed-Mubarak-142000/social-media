import React, { useState } from "react";
import { posts } from "../assets/data";
import OnePost from "./OnePost";

const PostsList = () => {
  const [listPost, setListPost] = useState(posts);

  console.log(listPost);

  return (
    <div className="">
      {listPost?.map((post) => {
        return <OnePost post={post} key={post._id} />;
      })}
    </div>
  );
};

export default PostsList;
