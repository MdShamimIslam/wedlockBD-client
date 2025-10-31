import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure"; 
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useBio from "../../../hooks/useBio";
import Nodata from "../../../components/common/Nodata";
import { Crown } from "lucide-react";
import SpinnerSVG from "../../../components/common/SpinnerSVG";
import Loading from "../../../components/Loading";

const GotMarried = () => {
  const { register, reset, handleSubmit, formState: { isSubmitting } } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {bio = {}, isLoading} = useBio();
  
  const {biodata_id} = bio;

  const onSubmit = async (data) => {
    const { selfBiodataId, partnerBiodataId, marriage_date, story_type, img, ratings, message } = data;

    try {
      const formData = new FormData();
      formData.append("image", img[0]);
      const img_host_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
      const imgRes = await axiosPublic.post(img_host_url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (imgRes?.data?.success) {
        const storyInfo = {
          selfBiodataId : parseInt(selfBiodataId),
          partnerBiodataId : parseInt(partnerBiodataId),
          story_type,
          img: imgRes.data.data.url,
          marriage_date,
          ratings: parseInt(ratings),
          message,
          post_date: new Date(),
        };

        const res = await axiosSecure.post('/success-stories', storyInfo);
        if (res.data.insertedId) {
          toast.success('Your married story was created successfully!');
          reset();
        }
      }

    } catch (error) {
      toast.error("You have already added a success story");
    }
    
  };

  if (isLoading) {
    return (
      <div className='mt-72 lg:mt-96'>
        <Loading/>
      </div>
    )
  }

  if (!bio || !bio._id) {
    return <Nodata Icon={Crown} />;
  }

  const inputClasses = "border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="mt-4 lg:max-w-[1500px] mx-auto">
      <Helmet>
        <title>Got Married | WedlockBD</title>
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 lg:p-12 rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8">Share Your Success Story</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className={labelClasses}>Your Biodata ID</label>
              <input value={biodata_id || ""} readOnly {...register("selfBiodataId")} type="number" required placeholder="Enter your number" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Partner Biodata ID</label>
              <input {...register("partnerBiodataId")} type="number" required placeholder="Enter Partner Biodata ID" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Ratings</label> 
              <input {...register("ratings")} required type="number"  min="1" max="5" placeholder="1-5" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Story Type</label>
              <select
              {...register("story_type")}
              required
              className={inputClasses}
            >
              <option value="">Select Story Type</option>
              <option value="married">Married</option>
              <option value="Female">engaged</option>
            </select>
            </div>
            <div>
              <label className={labelClasses}>Your/Couple Image</label>
              <input 
                {...register("img")} 
                required 
                type="file"
                accept="image/*"
                className={inputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Marriage Date</label>
              <input {...register("marriage_date")} required type="date" className={inputClasses} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Success Message</label>
            <textarea {...register("message")} required placeholder="Type success message here... "
              className={`${inputClasses} text-sm h-36`}
            />
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 md:mt-5 w-full md:w-2/5 lg:w-1/5 bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform flex justify-center items-center gap-2"
            >
              { isSubmitting && <SpinnerSVG/> }
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default GotMarried;