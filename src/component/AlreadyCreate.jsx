import React from "react";
import wowImg from "../assets/logo/wow.jpg";

const AlreadyCreate = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-36 text-center">
      <div className="w-1/3">
        <img src={wowImg} alt="" />
        <h2 className="text-4xl font-bold mb-3 text-purple-500">
          Hey, Your Profile Already Created
        </h2>
        <p>
          So you don't need to create a new profile.Now you can find your
          favorite people if you want.
        </p>
      </div>
    </div>
  );
};

export default AlreadyCreate;
