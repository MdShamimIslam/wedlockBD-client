import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/logo/err.jpg";

const ErrorElement = () => {
  return (
    <div className="flex justify-center items-center mt-8 text-center">
      <div className="w-1/3">
        <img src={errorImg} alt="" />
        <Link className="text-blue-600" to={"/"}>
        <button className="py-2 w-40 h-16 px-6  text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">
        Back to Home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
