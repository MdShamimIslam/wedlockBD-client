import { Link } from "react-router-dom";

const BiodataCard = ({ biodata }) => {
  const {
    _id,
    biodata_id,
    biodata_type,
    profile_image,
    permanent_division_name,
    age,
    occupation,
  } = biodata;

  return (
    <div>
      <div className="rounded-lg border shadow-sm w-full max-w-md mx-auto">
        <div className="px-6 py-4 flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-medium text-center">{occupation}</h2>
            <p className="text-sm rounded-lg text-center p-2 bg-gray-700 text-white">
              Age : {age}
            </p>
          </div>
          <div className="">
            <img
              className="rounded-lg h-[350px]  bg-gray-600 object-cover w-full "
              src={profile_image}
            />
          </div>
          <p>Permanent Division Name : {permanent_division_name}</p>
          <p>Biodata Type : {biodata_type}</p>
          <p>
            Biodata Id :{" "}
            <span className="text-purple-700 font-bold">{biodata_id}</span>
          </p>
        </div>
        
          <div className="flex items-center  p-6">
          <Link className="w-full" to={`/biodata-details/${_id}`}>
            <button className="bg-gray-900 text-white px-6 py-2 w-full rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
              View Profile
            </button>
            </Link>
          </div>
       
      </div>
    </div>
  );
};

export default BiodataCard;
