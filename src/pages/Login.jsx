import React, { useEffect } from "react";
import imageLogin from "../assets/loginImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "../common/TextField";
import { useSelector } from "react-redux";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = () => {};

  useEffect(() => {
    user.token && navigate("/");
  }, [user.token]);

  return (
    <section className="bg-primary rounded-md">
      <div className="lg:grid md:min-h-[80vh] lg:grid-cols-12">
        <aside className="relative hidden md:block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="image-login"
            src={imageLogin}
            className="absolute inset-0 rounded-r-md h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link className="block text-blue-600" to="/">
              <span className="sr-only">Home</span>
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-blue capitalize sm:text-3xl md:text-4xl">
              login to Social media
            </h1>

            <p className="mt-4 leading-relaxed text-textColor opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form
              onSubmit={handleSubmit(handleLogin)}
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

              <div className="col-span-12 sm:col-span-12">
                <TextField
                  name="password"
                  placeholder="password"
                  label="password"
                  type="password"
                  register={register("password", {
                    required: "password is required",
                  })}
                  styles="w-full text-textColor  "
                  labelStyles="ml-2 text-textColor capitalize"
                  error={errors.password ? errors.password.message : ""}
                />
              </div>

              <Link
                to="/forget-password"
                className="w-full col-span-12 sm:col-span-12 text-end text-blue pr-3"
              >
                Forget Password?
              </Link>

              <div className="col-span-12 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 capitalize rounded-md bg-blue px-12 py-3 text-sm font-medium text-white transition">
                  login
                </button>

                <p className="mt-4 text-sm text-textParag sm:mt-0">
                  creating an account,
                  <Link
                    to="/register"
                    className="text-blue font-bold underline capitalize"
                  >
                    sign up
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
