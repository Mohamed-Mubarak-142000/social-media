const BodyPost = ({ more, post, setMore }) => {
  return (
    <>
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
    </>
  );
};

export default BodyPost;
