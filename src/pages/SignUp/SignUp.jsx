import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();
  const [errorMess,setErrorMess] = useState('');

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErrorMess('')
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("signUp user", user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              image: data.photoURL,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                toast.success("Sign Up Successfully!");
                navigate(from, { replace: true });
              }
            });
          })
          .catch((error) => {
            setErrorMess(error.message);
            console.log(error.message);
          });
      })
      .catch((error) => {
        setErrorMess(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userInfo = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            status:false
          };
          axiosPublic.post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Sign Up Successfully!");
              navigate(from, { replace: true });
            }
            else{
                toast.success("Sign Up Successfully!");
                navigate(from, { replace: true });
            }
          });
       
      })
      .catch((error) => {
        setErrorMess(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up | WedlockBD</title>
        </Helmet>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl border dark:bg-gray-900 dark:text-gray-100 font-sans">
            <h1 className="text-2xl font-bold text-center">Sign Up Now</h1>
            <p className="text-red-600">{errorMess}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-400">
                  Name
                </label>
                <input
                  required
                  type="text"
                  {...register("name")}
                  id="username"
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-md border border-black/10 bg-slate dark:border-gray-700 dark:bg-gray-900 dark:text-gray focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-400">
                  PhotoURL
                </label>
                <input
                  required
                  type="text"
                  {...register("photoURL")}
                  id="password"
                  placeholder="photoURL"
                  className="w-full px-4 py-3 rounded-md border border-black/10 bg-slate-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-400">
                  Email
                </label>
                <input
                  required
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  id="username"
                  className="w-full px-4 py-3 rounded-md border border-black/10 bg-slate dark:border-gray-700 dark:bg-gray-900 dark:text-gray focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-400">
                  Password
                </label>
                <input
                  required
                  {...register("password", {
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    minLength: 6,
                    maxLength: 15,
                  })}
                  type="password"
                  placeholder="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-md border border-black/10 bg-slate-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">At least 6 characters</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">Minimum 15 characters</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    At least one uppercase,lowercase,special character,number
                  </span>
                )}
              </div>

              <button className="block w-full p-3 text-center bg-black text-white rounded-sm dark:text-gray-900 dark:bg-violet-400">
                Sign Up
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px bg-slate-300 sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm text-gray-600">
                Login with social accounts
              </p>
              <div className="flex-1 h-px bg-slate-300 sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
              onClick={handleGoogleSignIn}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current hover:text-purple-600"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                rel="noopener noreferrer"
                className="underline dark:text-gray-100 text-orange-600"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
     
    </div>
  );
};

export default SignUp;
