import { MapPin, Briefcase, Eye, Crown, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { calculateAge } from "../../../utils/functions";

const HomeBiodataCard = ({ biodata = {} }) => {
  const { _id, biodata_id, biodata_type, profile_image, permanent_division_name, date_of_birth , occupation, name } = biodata || {};

  const actualAge = calculateAge(date_of_birth);

  return (
    <div className="bg-slate-100 rounded-2xl shadow-md overflow-hidden card-hover group">
      <div className="relative">
        <img
          src={profile_image}
          alt={`Profile ${_id}`}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute top-3 right-2 bg-pink-600 text-white px-2 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow">
          <Crown className="h-3 w-3" />
          <span className="text-xs">Premium</span>
        </div>
    
        <div className="absolute top-3 left-2 bg-blue-600 text-white px-2 py-[1px] rounded-full text-sm font-semibold shadow">
         <span className="text-xs">ID: {biodata_id}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{name || "Unknown"}</h2>
            <span
              className={`inline-flex items-center mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                biodata_type === "Male"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-pink-100 text-pink-800"
              }`}
            >
              <User className="h-4 w-4 mr-1" />
              {biodata_type}
            </span>
            <span
              className={`inline-flex items-center ml-3 mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                biodata_type === "Male"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-pink-100 text-pink-800"
              }`}
            >
              <Calendar className="h-4 w-4 mr-1" />
              {actualAge} yrs
            </span> 
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 my-6">
          <div className="flex items-center text-gray-600">
            <Briefcase className="h-4 w-4 mr-2 text-pink-500" />
            <span>{occupation || "Not Specified"}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
            <span>{permanent_division_name || "Unknown"}</span>
          </div>
        </div>

        <Link
          to={`/biodata-details/${_id}`}
          className="w-full bg-gradient-to-r from-pink-500 to-blue-900 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <Eye className="h-4 w-4 group-hover:scale-110 transition-transform" />
          <span>View Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeBiodataCard;
