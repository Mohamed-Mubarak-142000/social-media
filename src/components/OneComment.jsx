import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../common/TextField";
import profileImage from "../assets/profile.png";
import Loading from "../common/Loading";
import CustomButton from "../common/CustomButton";
import { BsSendFill } from "react-icons/bs";

const OneComment = ({ user, post, getAllComments, replayAt }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const createComment = async (data) => {};

  return (
    <div className="">
      <form onSubmit={handleSubmit(createComment)}>
        <div className="flex items-center gap-2">
          <div className="w-14 h-12 rounded-full border border-secondary">
            <img
              src={user?.profileUrl ?? profileImage}
              alt="image-profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <TextField
            name="comment"
            placeholder={replayAt ? `Replay @${replayAt}` : "Comment this post"}
            register={register("comment", {
              required: "Comment can not be empty",
            })}
            styles="w-full  "
            error={errors.comment ? errors.comment.message : ""}
          />
          {errorMsg.message && (
            <spane
              role="alert"
              className={`text-sm mt-2 ${
                errorMsg.status === "failed" ? "text-red " : "text-blue"
              }`}
            >
              {errorMsg.message}
            </spane>
          )}
          {loading ? (
            <Loading />
          ) : (
            <CustomButton
              containerStyles={
                "h-10 w-12 text-white m-0 rounded-full capitalize flex items-center justify-center bg-blue"
              }
              type={"submit"}
              iconRight={<BsSendFill />}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default OneComment;
