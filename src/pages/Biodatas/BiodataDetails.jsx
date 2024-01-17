import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import GenderBio from "./GenderBio";

const BiodataDetails = () => {
  const biodata = useLoaderData();
  const {
    age,
    biodata_id,
    biodata_type,
    contact_email,
    contact_number,
    date_of_birth,
    expected_partner_age,
    expected_partner_height,
    expected_partner_weight,
    fathers_name,
    height,
    mothers_name,
    name,
    occupation,
    permanent_division_name,
    premium_status,
    present_division_name,
    profile_image,
    race,
    weight,
  } = biodata;

  const axiosPublic = useAxiosPublic();

    // get gender by biodatas 
    const {data:biodatas=[]} = useQuery({
        queryKey:['biodatas'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/gender-biodatas');
            const genderData = res.data?.filter(filterData=>filterData.biodata_type === biodata_type );
            return genderData;
        }
    })

  return (
    <div>
      <Helmet>
        <title>Details Biodata | WedlockBD</title>
      </Helmet>

      <div className="flex justify-between my-12 gap-12">
      <div className="max-w-[650px]  md:w-[650px] p-6 shadow-lg  space-y-4 rounded-lg ">
        <div>
          <img
            alt="Profile Image"
            className="w-[650px] h-[650px] object-cover  rounded-lg "
            src={profile_image}
          />
          <div className="grid gap-2 md:grid-cols-2 mt-4">
            <p className="text-gray-500 dark:text-gray-400">Name : {name}</p>
            <p className=" text-gray-500 dark:text-gray-400">
              Date of Birth : {date_of_birth}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Occupation : {occupation}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">Age : {age}</p>
            <p className=" text-gray-500 dark:text-gray-400">
              Height : {height}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Weight : {weight}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">Race : {race}</p>
            <p className=" text-gray-500 dark:text-gray-400">
              Biodata Id : {biodata_id}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Gender : {biodata_type}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Permanent Division : {permanent_division_name}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Present Division : {present_division_name}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Father's name : {fathers_name}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Mother's name : {mothers_name}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Expected Partner Height : {expected_partner_height}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Expected Partner Weight : {expected_partner_weight}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Expected Partner Age : {expected_partner_age}
            </p>

            {premium_status ? (
              <p className="text-gray-500"> Number : {contact_number}</p>
            ) : (
              ""
            )}

            {premium_status ? (
              <p className="text-gray-500"> Email : {contact_email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-4 mt-8">
            <button className=" w-full rounded-lg h-14 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
              <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Add To Favourite
            </button>

            <button className=" rounded-lg w-full  h-14 text-white bg-sky-950 overflow-hidden relative z-10 group hover:text-sky-900 duration-700">
              Request Contact
              <span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 w-32 h-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
              <span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 w-28 h-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
              <span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 w-24 h-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
              <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 w-20 h-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
              <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] w-16 h-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-4">
          {
            biodatas?.map(bio=><GenderBio key={bio._id} bio={bio}></GenderBio>)
          }
        </div>
      </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
