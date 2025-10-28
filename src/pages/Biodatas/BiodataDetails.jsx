import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CheckCircle, Heart, Lock} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import useBiodatas from '../../hooks/useBiodatas';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import SimilarProfiles from './SimilarProfiles';
import ContactInfo from './ContactInfo';
import BasicInfo from './BasicInfo';
import useCheckContactRequestStatus from '../../hooks/useCheckContactRequestStatus';
import useBio from '../../hooks/useBio';
import Swal from "sweetalert2";
import useSuccessStory from '../../hooks/useSuccessStory';

const BiodataDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure(); 
  const biodata = useLoaderData();
  const {biodatas}= useBiodatas();
  const requested = useCheckContactRequestStatus(biodata?.biodata_id);
  const {bio} = useBio();
  const [stories] = useSuccessStory();

  const matchingStory = stories?.find((story) => story.selfBiodataId === biodata?.biodata_id || story.partnerBiodataId === biodata?.biodata_id);

  const {
    biodata_id,
    biodata_type,
    contact_email,
    contact_number,
    date_of_birth,
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
  } = biodata || {};

  useEffect(() => {
    if (!user?.email || !contact_email) return;

    const addProfileView = async () => {
      try {
        await axiosSecure.post("/profile-views", {
          profileOwnerEmail: contact_email,
          visitorEmail: user.email,
          visitorName: user.displayName,
        });
      } catch (err) {
        console.error(err);
      }
    };

    addProfileView();
  }, [user, contact_email, axiosSecure]);


  const handleAddToFavorite = async () => {
    if(!bio?.biodata_id) {
     return toast.error('Create your biodata before add to favorites');
    }

    if (contact_email === user?.email) {
      return toast.error('You cannot add your own biodata to favorites');
    }

    try {
      const bioInfo = { ...biodata, email: user?.email };

      const res = await axiosSecure.post("/favorites", bioInfo);

      if (res.data.insertedId) {
        toast.success("Successfully Added.");
      }
      if (res.data.insertedId === null) {
        toast.error("Already added.");
      }
    
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const similarProfiles = biodatas?.filter( (profile) => profile.biodata_type === biodata_type && profile._id !== biodata._id );

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
    <>
      <Helmet>
        <title>Biodata Details | WedlockBD</title>
      </Helmet>

      <div className="my-12 md:my-20 p-3 lg:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className=" rounded-2xl  border overflow-hidden">
              {/* image */}
              <div className="relative">
                <img
                  src={profile_image}
                  alt={name}
                  className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{name}</h1>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      biodata_type === 'Male' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-pink-500 text-white'
                    }`}>
                      {biodata_type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      biodata_type === 'Male' 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      ID: {biodata_id}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-b border-gray-200">
                {matchingStory?.story_type ? <div className="bg-gradient-to-r from-pink-600 to-blue-500 text-white py-4 px-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-white" />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {matchingStory?.story_type === "married" && "Married 🎉"}
                          {matchingStory?.story_type === "engaged" && "Engaged 💍"}
                        </h3>
                        <p className="text-sm text-pink-100">
                          {matchingStory?.story_type === "married" &&
                            "This biodata is part of a verified married success story."}
                          {matchingStory?.story_type === "engaged" &&
                            "This biodata is part of a verified engaged success story."}
                        </p>
                      </div>
                    </div>
                    <span className="bg-white/20 text-sm font-medium py-1 px-3 rounded-full">
                      {matchingStory?.story_type === "married" && "Married"}
                      {matchingStory?.story_type === "engaged" && "Engaged"}
                    </span>
                  </div> :   <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={handleAddToFavorite}
                          className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                        >
                          <Heart className="h-5 w-5" />
                          <span>Add to Favorites</span>
                        </button> 
                        
                      {((!requested && !bio?.premium_status) && !requested) && <button
                          onClick={() => handlePayment(biodata_id)}
                          className="flex-1 bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <Lock className="h-5 w-5" />
                          <span>Request Contact</span>
                        </button>
                      }
                    </div>
                }
              </div>
                <BasicInfo {...{ race, permanent_division_name, present_division_name, occupation, height, weight, date_of_birth,fathers_name, mothers_name}}/>
                <ContactInfo {...{ biodata_id, contact_email, contact_number, requested, matchingStory}} />
            </div>
          </div>
          {/* similar profiles */}
          <div className="lg:col-span-1">
            <div className="bg-slate-100 rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6">
                Similar {biodata_type} Profiles
              </h2>
              
              <div className="space-y-4 h-[800px] overflow-y-auto pr-2">
                {similarProfiles?.map((profile) => (
                  <SimilarProfiles key={profile._id} profile={profile}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiodataDetails;