import React, { useEffect } from "react";
import imageRegister from "../assets/registerImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "../common/TextField";
import { useSelector } from "react-redux";
const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    user.token && navigate("/login");
  }, [user.token]);

  const handleRegister = () => {};

  return (
    <section className="bg-primary rounded-md">
      <div className="lg:grid lg:min-h-[80vh] lg:grid-cols-12">
        <aside className="relative hidden md:block h-16 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="image-login"
            src={imageRegister}
            className="absolute inset-0 rounded-l-md h-full w-full object-cover"
          />
        </aside>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link className="block text-blue-600" to="/">
              <span className="sr-only">Home</span>
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-blue capitalize sm:text-3xl md:text-4xl">
              sign up Social media
            </h1>

            <p className="mt-4 leading-relaxed text-textColor opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form
              onSubmit={handleSubmit(handleRegister)}
              className="mt-8 grid grid-cols-12 gap-6"
            >
              <div className="col-span-6 sm:col-span-6">
                <TextField
                  name="firstname"
                  placeholder="First Name"
                  label="First Name"
                  type="text"
                  register={register("firstname", {
                    required: "First Name is required",
                  })}
                  styles="w-full text-textColor"
                  labelStyles="ml-2 text-textColor"
                  error={errors.firstname ? errors.firstname.message : ""}
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <TextField
                  name="lastname"
                  placeholder="Last Name"
                  label="Last Name"
                  type="text"
                  register={register("lastname", {
                    required: "Last Name is required",
                  })}
                  styles="w-full text-textColor"
                  labelStyles="ml-2 text-textColor"
                  error={errors.lastname ? errors.lastname.message : ""}
                />
              </div>
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
              <div className="col-span-6 sm:col-span-6">
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
              <div className="col-span-6 sm:col-span-6">
                <TextField
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                  styles="w-full text-textColor  "
                  labelStyles="ml-2 text-textColor capitalize"
                  register={register("cPassword", {
                    validate: (value) => {
                      const { password } = getValues();

                      if (password != value) {
                        return "Passwords do no match";
                      }
                    },
                  })}
                  error={
                    errors.cPassword && errors.cPassword.type === "validate"
                      ? errors.cPassword?.message
                      : ""
                  }
                />
              </div>

              <div className="col-span-12 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 capitalize rounded-md bg-blue px-12 py-3 text-sm font-medium text-white transition">
                  sign up
                </button>

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

export default Register;
