import React from "react";
import useBio from "../../../hooks/useBio";
import Swal from "sweetalert2";

const ViewBio = () => {
  const [bio] = useBio();
  const {
    age,
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
    present_division_name,
    profile_image,
    race,
    weight,
    biodata_id,
  } = bio;

  // request biodata for premium
  const handleBioPremium = () => {
    Swal.fire({
      title: "Are you sure to make your biodata premium",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Wait for Admin Approved Now!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "biodata premium");
      }
    });
  };

  return (
    <div>
      <div className="max-w-[950px]  md:w-[950px] p-6 mx-auto shadow-lg  space-y-4 rounded-lg ">
        <div>
          <img
            alt="Profile Image"
            className="w-[950px] h-[450px] object-cover  rounded-lg "
            src={profile_image}
          />
          <div className="grid gap-x-16 gap-y-2 md:grid-cols-2 mt-4">
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
            <p className="text-gray-500"> Number : {contact_number}</p>
            <p className="text-gray-500"> Email : {contact_email}</p>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleBioPremium}
              className="text-lg font-semibold w-full rounded-lg h-14 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
            >
              <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Make biodata to premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBio;
