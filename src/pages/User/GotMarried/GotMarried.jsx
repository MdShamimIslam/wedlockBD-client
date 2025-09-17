import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure"; 
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const GotMarried = () => {
  const { register, reset, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    const { selfNumber, partnerNumber, marriage_date, img, ratings, message } = data;
    const storyInfo = {
      selfNumber,
      partnerNumber,
      img,
      marriage_date,
      ratings: parseInt(ratings),
      message,
      post_date: new Date(),
    };

    axiosSecure.post('/success-stories', storyInfo)
      .then(res => {
        if (res.data.insertedId) {
          reset();
          toast.success('Your married story was created successfully!');
        }
      });
  };

  const inputClasses = "border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none";

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
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Biodata Number</label>
              <input {...register("selfNumber")} required placeholder="Enter your number" className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Partner Biodata Number</label>
              <input {...register("partnerNumber")} required placeholder="Enter partner number" className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ratings</label>
              <input {...register("ratings")} required type="number" min="1" max="5" placeholder="1-5" className={inputClasses} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your/Couple Image Link</label>
              <input {...register("img")} required placeholder="Enter image URL" className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Marriage Date</label>
              <input {...register("marriage_date")} required type="date" className={inputClasses} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Success Story Message</label>
            <textarea {...register("message")} required placeholder="Type your success story"
              className={`${inputClasses} text-sm h-36`}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-indigo-600 text-white w-full px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GotMarried;