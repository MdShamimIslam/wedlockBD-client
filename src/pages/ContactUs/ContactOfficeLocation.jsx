import { Mail, MapPin, Phone, Users } from "lucide-react";
import { officeLocations } from "../../utils/options";

const ContactOfficeLocation = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="bg-primary-100 inline-block px-4 py-2 rounded-full mb-6">
          <span className="text-primary-700 font-semibold">Our Locations</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Visit Our Offices</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We have offices in major cities across Bangladesh to serve you better
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {officeLocations.map((office, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{office.city} Office</h3>
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

            <button className="w-full mt-6 bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold">
              Get Directions
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ContactOfficeLocation;