import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure"; 
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useBio from "../../../hooks/useBio";
import Nodata from "../../../component/common/Nodata";
import { Crown } from "lucide-react";

const GotMarried = () => {
  const { register, reset, handleSubmit, formState: { isSubmitting } } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {bio = {}} = useBio();
  
  const {contact_number} = bio;

  const onSubmit = async (data) => {
    const { selfNumber, partnerNumber, marriage_date, img, ratings, message } = data;

    try {
      const formData = new FormData();
      formData.append("image", img[0]);
      const img_host_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
      const imgRes = await axiosPublic.post(img_host_url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (imgRes.data.success) {
        const storyInfo = {
          selfNumber,
          partnerNumber,
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
      toast.error(error.message || "Something went wrong!");
    }
    
  };

  if (!bio || !bio._id) {
    return <Nodata Icon={Crown} />;
  }

  const inputClasses = "border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="mt-8 p-4 lg:p-0">
      <Helmet>
        <title>Got Married | WedlockBD</title>
      </Helmet>
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8">Share Your Success Story</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className={labelClasses}>Your Contact Number</label>
              <input value={contact_number || ""} readOnly {...register("selfNumber")} type="number" required placeholder="Enter your number" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Partner Contact Number</label>
              <input {...register("partnerNumber")} type="number" required placeholder="Enter partner number" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>Ratings</label>
              <input {...register("ratings")} required type="number" min="1" max="5" placeholder="1-5" className={inputClasses} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <textarea {...register("message")} required placeholder="Type your success story"
              className={`${inputClasses} text-sm h-36`}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 w-full md:w-2/5 lg:w-1/5 bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GotMarried;