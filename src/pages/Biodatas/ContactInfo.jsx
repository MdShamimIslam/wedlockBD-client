import { Crown, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ContactInfo = ({bio = {}, contact_email, contact_number}) => {
  
  return (
    <div className="p-6 border-t border-gray-200">
    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
    {bio?.premium_status ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-primary-500" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-gray-800">{contact_number}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-primary-500" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-800">{contact_email}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-gray-200 p-8 rounded-xl text-center">
        <Crown className="h-16 w-16 text-pink-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Feature</h3>
        <p className="text-gray-600 mb-6">
          Contact information is only available to premium members. Upgrade your account or request contact information.
        </p>
        <Link to={`${bio.biodata_id ? `/contact-request` : '/nodata'}`}>
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300">
                Request Contact Info
            </button>
        </Link>
      </div>
    )}
  </div>
  )
}

export default ContactInfo;