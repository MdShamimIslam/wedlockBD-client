import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const AddBiodata = () => {
  const { user } = useAuth();
  const { register, reset, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Image upload to imgbb
      const formData = new FormData();
      formData.append("image", data.profile_image[0]);
      const img_host_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
      const imgRes = await axiosSecure.post(img_host_url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (imgRes.data.success) {
        const bioInfo = {
          ...data,
          profile_image: imgRes.data.data.url,
          contact_email: user.email,
          age: parseInt(data.age),
          expected_partner_age: parseInt(data.expected_partner_age),
          expected_partner_weight: parseInt(data.expected_partner_weight),
          weight: parseInt(data.weight),
          premium_status: false,
        };

        const res = await axiosSecure.post("/biodatas", bioInfo);
        if (res.data.insertedId) {
          toast.success("Biodata Created Successfully!");
          reset();
          navigate("/biodatas");
        }
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-12 md:my-16">
      <Helmet>
        <title>Add Biodata | WedlockBD</title>
      </Helmet>
      <div className="max-w-4xl mx-auto bg-slate-50 shadow-lg rounded-2xl p-8 md:p-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6">
          Add Your Biodata
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name, Email, Number */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              {...register("name")}
              required
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 w-full"
            />
            <input
              {...register("contact_email")}
              value={user?.email || ""}
              readOnly
              type="email"
              className="border rounded-lg px-3 py-2 bg-gray-100 w-full"
            />
            <input
              {...register("contact_number")}
              required
              type="text"
              placeholder="Mobile Number"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>

          {/* Profile Image and DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register("profile_image")}
              required
              type="file"
              accept="image/*"
              className="border rounded-lg px-3 py-2 w-full"
            />
            <input
              {...register("date_of_birth")}
              required
              type="date"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>

          {/* Gender, Height, Weight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              {...register("biodata_type")}
              required
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              {...register("height")}
              required
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="">Select Height</option>
              {[...Array(12)].map((_, i) => (
                <option key={i}>{5 + "'" + (i + 1) + '"'}</option>
              ))}
            </select>
            <select
              {...register("weight")}
              required
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="">Select Weight (kg)</option>
              {[...Array(80)].map((_, i) => (
                <option key={i}>{40 + i}</option>
              ))}
            </select>
          </div>

          {/* Occupation, Parents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              {...register("occupation")}
              required
              placeholder="Occupation"
              className="border rounded-lg px-3 py-2 w-full"
            />
            <input
              {...register("fathers_name")}
              required
              placeholder="Father's Name"
              className="border rounded-lg px-3 py-2 w-full"
            />
            <input
              {...register("mothers_name")}
              required
              placeholder="Mother's Name"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>

          {/* Divisions and Race */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select {...register("permanent_division_name")} required className="border rounded-lg px-3 py-2 w-full">
              <option value="">Permanent Division</option>
              {["Dhaka","Barisal","Chittagong","Khulna","Mymensingh","Rajshahi","Rangpur","Sylhet"].map(d => <option key={d}>{d}</option>)}
            </select>
            <select {...register("present_division_name")} required className="border rounded-lg px-3 py-2 w-full">
              <option value="">Present Division</option>
              {["Dhaka","Barisal","Chittagong","Khulna","Mymensingh","Rajshahi","Rangpur","Sylhet"].map(d => <option key={d}>{d}</option>)}
            </select>
            <select {...register("race")} required className="border rounded-lg px-3 py-2 w-full">
              <option value="">Race</option>
              <option>Bangladeshi</option>
            </select>
          </div>

          {/* Partner Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              {...register("expected_partner_age")}
              required
              type="number"
              placeholder="Partner Age"
              className="border rounded-lg px-3 py-2 w-full"
            />
            <select
              {...register("expected_partner_height")}
              required
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="">Partner Height</option>
              {[...Array(12)].map((_, i) => (
                <option key={i}>{5 + "'" + (i + 1) + '"'}</option>
              ))}
            </select>
             <select
              {...register("expected_partner_weight")}
              required
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="">Partner Weight (kg)</option>
              {[...Array(80)].map((_, i) => (
                <option key={i}>{40 + i}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            {loading ? "Submitting..." : "Add Biodata"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBiodata;
