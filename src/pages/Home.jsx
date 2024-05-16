import React from "react";
import CreatePost from "../components/CreatePost";
import PostsList from "../components/PostsList";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <CreatePost user={user} />
      <PostsList />
    </>
  );
};

export default Home;
