import { Briefcase, Calendar, Flag, MapPin, Ruler, Scale, User } from "lucide-react";

const BasicInfo = ({age, race, permanent_division_name, present_division_name, occupation, height, weight, date_of_birth,fathers_name, mothers_name}) => {
  return (
    <div className="p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6">Basic & Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-primary-500" />
            <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-semibold text-gray-800">{age} years</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary-500" />
            <div>
            <p className="text-sm text-gray-500"> Permanent Division</p>
            <p className="font-semibold text-gray-800">{permanent_division_name}</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary-500" />
            <div>
            <p className="text-sm text-gray-500"> Present Division</p>
            <p className="font-semibold text-gray-800">{present_division_name}</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <Briefcase className="h-5 w-5 text-primary-500" />
            <div>
            <p className="text-sm text-gray-500">Occupation</p>
            <p className="font-semibold text-gray-800">{occupation}</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <Ruler className="h-5 w-5 text-primary-500" />
            <div>
            <p className="text-sm text-gray-500">Height</p>
            <p className="font-semibold text-gray-800">{height}</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <Scale className="h-5 w-5 text-primary-500" />
            <div>
            <p className="text-sm text-gray-500">Weight</p>
            <p className="font-semibold text-gray-800">{weight}</p>
            </div>
        </div>
        {/* date of birth */}
        <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-primary-500" />
            <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-semibold text-gray-800">{date_of_birth}</p>
            </div>
        </div>
        {/* father name */}
        <div className="flex items-center space-x-3">
            <User className="h-5 w-5 text-primary-500" />
            <div>
                <p className="text-sm text-gray-500">Father&apos;s Name</p>
                <p className="font-semibold text-gray-800">{fathers_name}</p>
            </div>
        </div>
        {/* mother name */}
        <div className="flex items-center space-x-3">
            <User className="h-5 w-5 text-primary-500" />
            <div>
                <p className="text-sm text-gray-500">Mother&apos;s Name</p>
                <p className="font-semibold text-gray-800">{mothers_name}</p>
            </div>
        </div>
        {/* race */}
        <div className="flex items-center space-x-3">
            <Flag  className="h-5 w-5 text-primary-500" />
            <div>
                <p className="text-sm text-gray-500">Race</p>
                <p className="font-semibold text-gray-800">{race}</p>
                </div>
                </div>
        </div>
  </div>
  )
}

export default BasicInfo;