import { Mail, MapPin, Phone, Users } from "lucide-react";
import { officeLocations, secCl } from "../../utils/options";
import Heading from "../../components/common/Heading";

const ContactOfficeLocation = () => {
  return (
    
    <div className={secCl}>
      <Heading
        title="Visit Our Offices"
        desc="Find our offices in major cities across Bangladesh to serve you better"
      />

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
        {officeLocations.map((office, index) => (
          <div key={index} className="bg-slate-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">{office.city} Office</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <span className="text-gray-600">{office.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{office.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{office.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">Manager: {office.manager}</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink-500 to-blue-500 w-full mt-6 bg-pink-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold">
              Get Directions
            </button>
          </div>
        ))}
      </div>
    </div>

  )
}

export default ContactOfficeLocation;