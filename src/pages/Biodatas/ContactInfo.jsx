import { Crown, Mail, Phone } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useBio from "../../hooks/useBio";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ContactInfo = ({biodata_id, contact_email, contact_number, requested, matchingStory}) => {
  const axiosSecure = useAxiosSecure();
  const {bio} = useBio();
  const { user } = useAuth();

  const handlePayment = async (biodataId) => {
    if(!bio?.biodata_id) {
      return toast.error('Create your biodata before add to contact request');
    }

    if (contact_email === user?.email) {
      return toast.error('You cannot add your own biodata to contact request');
    }

    const result = await Swal.fire({
      title: "Send Contact Request?",
      html: `
        <p>To send a contact request, you need to pay:</p>
        <p class="mt-2 text-lg font-semibold text-blue-600">Amount: $1</p>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed to pay!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if (!result.isConfirmed) return; 

    try {
      const res = await axiosSecure.post(`/contact-request/${biodataId}`);
     
      if (!res?.data?.session?.url) {
        throw new Error("Payment URL not found!");
      }

      window.location.href = res.data.session.url;
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || "Payment failed!";
      toast.error(errorMsg);
    }
  };

  
  return (
    <div className="p-6 border-t border-gray-200">
    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
    {(requested || bio?.premium_status) ? (
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Premium Feature
        </h3>
        
        <p className="text-gray-600 mb-6">
          {matchingStory
            ? matchingStory.story_type === "married"
              ? "This biodata is part of a verified married success story. Contact information is restricted."
              : "This biodata is part of a verified engaged success story. Contact information is restricted."
            : "Contact information is only available to premium members. Upgrade your account or request contact information."}
        </p>
        
        {!matchingStory && (
          <button
            onClick={() => handlePayment(biodata_id)}
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300"
          >
            Request Contact Info
          </button>
        )}
    </div>

    )}
  </div>
  )
}

export default ContactInfo;