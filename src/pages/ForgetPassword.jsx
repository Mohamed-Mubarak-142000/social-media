import React, { useEffect, useState } from "react";
import imageReset from "../assets/reset.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "../common/TextField";
import Loading from "../common/Loading";
import { useSelector } from "react-redux";
const ForgetPassword = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    user.token && navigate("/");
  }, [user.token]);

  const handleForgetPassword = () => {};

  return (
    <section className="bg-primary rounded-md">
      <div className="lg:grid lg:min-h-[80vh] lg:grid-cols-12">
        <aside className="relative hidden md:block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="image-login"
            src={imageReset}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link className="block text-blue-600" to="/">
              <span className="sr-only">Home</span>
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-blue capitalize sm:text-3xl md:text-4xl">
              Reset password to Social media
            </h1>

            <p className="mt-4 leading-relaxed text-textColor opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form
              onSubmit={handleSubmit(handleForgetPassword)}
              className="mt-8 grid grid-cols-12 gap-6"
            >
              {/***email */}
              <div className="col-span-12 sm:col-span-12">
                <TextField
                  name="email"
                  placeholder="email@example.com"
                  label="Email Address"
                  type="email"
                  register={register("email", {
                    required: "Email Address is required",
                  })}
                  styles="w-full text-textColor  "
                  labelStyles="ml-2 text-textColor"
                  error={errors.email ? errors.email.message : ""}
                />
              </div>

              <div>
                {errorMessage?.message && (
                  <span
                    className={`text-sm mt-2 ${
                      errorMessage?.status === "failed"
                        ? "text-[#f64949fe] "
                        : "text-[#2ba150fe]"
                    }`}
                  >
                    {errorMessage.message}
                  </span>
                )}
              </div>

              <div className="col-span-12 sm:flex sm:items-center sm:gap-4">
                {isSubmit ? (
                  <Loading />
                ) : (
                  <button className="inline-block shrink-0 capitalize rounded-md bg-blue px-12 py-3 text-sm font-medium text-white transition">
                    Submit
                  </button>
                )}

                <p className="mt-4 text-sm text-textParag sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="text-blue font-bold underline">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ForgetPassword;
