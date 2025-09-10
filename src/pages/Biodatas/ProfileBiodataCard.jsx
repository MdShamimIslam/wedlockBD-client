import { Briefcase, Calendar, Eye, MapPin } from "lucide-react";
import {Link} from "react-router-dom";

const ProfileBiodataCard = ({biodata = {}}) => {
    const { _id, name, profile_image, biodata_id, biodata_type, age, present_division_name, occupation } = biodata || {};

    return (
        <div key={_id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group">
            <div className="relative">
                <img
                    src={profile_image}
                    alt={name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h3>
                    <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{age}</span>
                    </div>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                        <span>{present_division_name}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-2 text-primary-500" />
                        <span>{occupation}</span>
                    </div>
                </div>
                <div className="flex justify-between mb-6">
                    <div 
                        className={`${ biodata_type === "Male" ? "bg-blue-100 text-blue-800" : "bg-pink-100 text-pink-800"} 
                            px-2 py-1 rounded-full text-sm font-semibold`
                        }
                    >
                        ID: {biodata_id}
                    </div>
                    <div className="">
                        <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                biodata_type === "Male"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-pink-100 text-pink-800"
                            }`}
                        >
                            {biodata_type}
                        </span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Link
                        to={`/biodata-details/${_id}`}
                        className="flex-1 bg-gradient-to-r from-pink-500 to-blue-500 text-white py-2 px-3 rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <Eye className="h-4 w-4" />
                        <span >View Profile</span>
                    </Link>
                </div>
               
            </div>
        </div>
    )
}

export default ProfileBiodataCard;