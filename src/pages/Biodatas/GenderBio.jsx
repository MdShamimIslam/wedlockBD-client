import React from "react";
import { Link } from "react-router-dom";

const GenderBio = ({bio}) => {
    const {_id,
        name,
        profile_image,
        age,
        height,weight,
        occupation,} = bio;
  return (
    <div>
      <div className="p-8 shadow-2xl w-full  font-sans rounded-xl space-y-4  flex flex-col justify-center items-center">
        <div className="relative w-[120px] h-[120px]">
          <img
            src={profile_image}
            alt="portrait"
            className="w-full h-full object-cover rounded-full bg-black/30"
          />
          
        </div>
        <div className="text-center space-y-1">
          <h1 className="text-2xl text-gray-700">{name}</h1>
          <p className="text-gray-400 text-sm">{occupation}</p>
        </div>
        <div className="flex justify-between w-full py-2">
          <div className="text-center space-y-1">
            <p className="text-gray-500">Height</p>
            <p className="text-xl font-mono text-gray-700">{height}</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-gray-500">Age</p>
            <p className="text-xl font-mono text-gray-700">{age}</p>
          </div>
          <div className="text-center space-y-1 ">
            <p className="text-gray-500">Weight</p>
            <p className="text-xl font-mono text-gray-700">{weight}</p>
          </div>
        </div>
        <Link className="" to={`/biodata-details/${_id}`}>
          <div className="flex items-center  p-6">
            <button className="bg-gray-900 text-white px-6 py-2 w-full rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
              View Profile
            </button>
          </div>
        </Link>
        
        
      </div>
    </div>
  );
};

export default GenderBio;
