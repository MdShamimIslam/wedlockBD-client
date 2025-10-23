import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { countries, divisions } from "../../../utils/options";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useBio from "../../../hooks/useBio";
import { Edit } from "lucide-react";
import Nodata from "../../../components/common/Nodata";
import SpinnerSVG from "../../../components/common/SpinnerSVG";

const EditBiodata = () => {
  const { user } = useAuth();
  const { register, handleSubmit, setValue, formState: { isSubmitting } } = useForm();
  const axiosSecure = useAxiosSecure(true);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {bio = {}, refetch} = useBio();

  useEffect(() => {
    if (bio && bio._id) {
      Object.keys(bio).forEach((key) => {
        setValue(key, bio[key]);
      });
    }
  }, [bio, setValue]);

  const onSubmit = async (data) => {

    try {
      let imageUrl = bio?.profile_image;
      
      if (data.profile_image && data.profile_image[0] instanceof File) {
        const formData = new FormData();
        formData.append("image", data.profile_image[0]);

        const img_host_url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_KEY
        }`;

        const imgRes = await axiosPublic.post(img_host_url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (imgRes.data.success) {
          imageUrl = imgRes.data.data.url;
        }
      }

      const bioInfo = {
        ...data,
        profile_image: imageUrl,
        contact_email: user?.email,
        expected_partner_age: parseInt(data.expected_partner_age),
        expected_partner_weight: parseInt(data.expected_partner_weight),
        weight: parseInt(data.weight),
      };

      axiosSecure
        .put(`/biodatas?email=${user?.email}`, bioInfo)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success("Profile Updated Successfully!!");
            navigate("/dashboard/view-biodata");
          }
        })
        .catch(() => toast.error("Update failed!"))

    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  if (!bio || !bio._id) {
    return <Nodata Icon={Edit} />;
  }

  const inputClasses = "border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="mt-4 p-4 lg:p-0 lg:max-w-[1500px] mx-auto">
      <Helmet>
        <title>Edit Biodata | WedlockBD</title>
      </Helmet>
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6">
          Edit Your Biodata
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Full Name */}
            <div>
              <label className={labelClasses}>Full Name</label>
              <input
                {...register("name")}
                required
                type="text"
                placeholder="Enter Your Full Name"
                className={inputClasses}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClasses}>Email</label>
              <input
                {...register("contact_email")}
                readOnly
                type="email"
                className={inputClasses}
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className={labelClasses}>Mobile Number</label>
              <input
                {...register("contact_number")}
                required
                type="number"
                placeholder="Enter Your Mobile Number"
                className={inputClasses}
              />
            </div>

            {/* Profile Image */}
            <div>
              <label className={labelClasses}>Profile Image</label>
              <input
                {...register("profile_image")}
                type="file"
                accept="image/*"
                className={inputClasses}
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className={labelClasses}>Date of Birth</label>
              <input
                {...register("date_of_birth")}
                required
                type="date"
                className={inputClasses}
              />
            </div>

            {/* Gender */}
            <div>
              <label className={labelClasses}>Biodata type</label>
              <select {...register("biodata_type")} required className={inputClasses}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Height */}
            <div>
              <label className={labelClasses}>Height</label>
              <select {...register("height")} required className={inputClasses}>
                <option value="">Select Height</option>
                {Array.from({ length: (7 - 4 + 1) * 12 }, (_, i) => {
                  const feet = 4 + Math.floor(i / 12);
                  const inches = i % 12;
                  return (
                    <option key={i} value={`${feet}'${inches}"`}>
                      {feet}&apos;{inches}&quot;
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Weight */}
            <div>
              <label className={labelClasses}>Weight (kg)</label>
              <select {...register("weight")} required className={inputClasses}>
                <option value="">Select Weight</option>
                {[...Array(80)].map((_, i) => (
                  <option key={i}>{40 + i}</option>
                ))}
              </select>
            </div>

            {/* Occupation */}
            <div>
              <label className={labelClasses}>Occupation</label>
              <input
                {...register("occupation")}
                required
                placeholder="Occupation"
                className={inputClasses}
              />
            </div>

            {/* Father's Name */}
            <div>
              <label className={labelClasses}>Father&apos;s Name</label>
              <input
                {...register("fathers_name")}
                required
                placeholder="Father's Name"
                className={inputClasses}
              />
            </div>

            {/* Mother's Name */}
            <div>
              <label className={labelClasses}>Mother&apos;s Name</label>
              <input
                {...register("mothers_name")}
                required
                placeholder="Mother's Name"
                className={inputClasses}
              />
            </div>

            {/* Permanent Division */}
            <div>
              <label className={labelClasses}>Permanent Division</label>
              <select {...register("permanent_division_name")} required className={inputClasses}>
                <option value="">Select Permanent Division</option>
                {divisions?.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Present Division */}
            <div>
              <label className={labelClasses}>Present Division</label>
              <select {...register("present_division_name")} required className={inputClasses}>
                <option value="">Select Present Division</option>
                {divisions?.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Race */}
            <div>
              <label className={labelClasses}>Race</label>
              <select {...register("race")} required className={inputClasses}>
                <option value="">Select Race</option>
                {countries.map((country, i) => (
                  <option key={i} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Expected Partner Age */}
            <div>
              <label className={labelClasses}>Expected Partner Age</label>
              <input
                {...register("expected_partner_age")}
                required
                type="number"
                placeholder="Enter Partner Age"
                className={inputClasses}
              />
            </div>

            {/* Expected Partner Height */}
            <div>
              <label className={labelClasses}>Expected Partner Height</label>
              <select {...register("expected_partner_height")} required className={inputClasses}>
                <option value="">Select Partner Height</option>
                {Array.from({ length: (7 - 4 + 1) * 12 }, (_, i) => {
                  const feet = 4 + Math.floor(i / 12);
                  const inches = i % 12;
                  return (
                    <option key={i} value={`${feet}'${inches}"`}>
                      {feet}&apos;{inches}&quot;
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Expected Partner Weight */}
            <div>
              <label className={labelClasses}>Expected Partner Weight (kg)</label>
              <select {...register("expected_partner_weight")} required className={inputClasses}>
                <option value="">Select Partner Weight</option>
                {[...Array(80)].map((_, i) => (
                  <option key={i}>{40 + i}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 w-full md:w-2/5 lg:w-1/5 bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              {isSubmitting && <SpinnerSVG/>}
               {isSubmitting ? "Updating..." : "Update Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBiodata;
