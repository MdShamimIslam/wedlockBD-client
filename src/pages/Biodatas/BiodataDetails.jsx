import { useLoaderData } from 'react-router-dom';
import { Heart, Lock} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import useBio from '../../hooks/useBio';
import useBiodatas from '../../hooks/useBiodatas';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import SimilarProfiles from './SimilarProfiles';
import ContactInfo from './ContactInfo';
import BasicInfo from './BasicInfo';

const BiodataDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure(); 
  const biodata = useLoaderData();
  const {biodatas}= useBiodatas();
  const [bio] = useBio();

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
  } = biodata;

  const handleAddToFavorite = () => {
    if(bio.biodata_id){
      const bioInfo = {
        ...biodata,
        email: user?.email,
      };

      axiosSecure.post("/favorites", bioInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully Added!!");
        }
        if (res.data.insertedId === null) {
          toast.error("Already added!!");
        }
      });
    }else{
      toast.error('Create your biodata before add to favorites')
    }
    
  };

  const similarProfiles = biodatas?.filter( (profile) => profile.biodata_type === biodata_type && profile._id !== biodata._id );

  const handlePayment = async (biodataId) => {
    try {
      const res = await axiosSecure.post(`/checkout-session/${biodataId}`);
      
      if (!res?.data?.session?.url) {
        throw new Error("Payment URL not found!");
      }

      window.location.href = res.data.session.url;
      
    } catch (err) {
      toast.error(err.message || "Payment failed!");
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
            <div className=" rounded-2xl shadow-lg overflow-hidden">
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToFavorite}
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Add to Favorites</span>
                  </button> 
                  
                  {/* TODO */}
                  {!bio?.premium_status && (
                      <button
                        onClick={() => handlePayment(bio.biodata_id)}
                        className="flex-1 bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Lock className="h-5 w-5" />
                        <span>Request Contact</span>
                      </button>
                  )}
                </div>
              </div>
                <BasicInfo {...{ race, permanent_division_name, present_division_name, occupation, height, weight, date_of_birth,fathers_name, mothers_name}}/>
                <ContactInfo {...{bio, contact_email, contact_number}} />
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