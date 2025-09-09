import { Calendar, Eye, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SimilarProfiles = ({profile}) => {
    const {_id, name, profile_image, age, present_division_name, occupation} = profile || {};
  return (
    <Link
    to={`/biodata-details/${_id}`}
    className="block bg-white rounded-xl p-4 hover:bg-gray-200 transition-colors duration-200"
  >
    <div className="flex items-center space-x-4">
      <img
        src={profile_image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{age}</span>
          <span className="mx-2">•</span>
          <MapPin className="h-3 w-3 mr-1" />
          <span>{present_division_name}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{occupation}</p>
      </div>
      <Eye className="h-5 w-5 text-primary-500" />
    </div>
  </Link>
  )
}

export default SimilarProfiles;