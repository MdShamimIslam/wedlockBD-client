import { Helmet } from "react-helmet-async";
import useBio from "../../../hooks/useBio";
import {
  Mail,
  Phone,
  User,
  MapPin,
  Download,
  Share2,
  FileText,
  Heart,
  Calendar,
  Scale,
  Briefcase,
  Users,
} from "lucide-react";
import { useState } from "react";

const ViewBiodata = () => {
  const [biodata] = useBio();
  const [isCopied, setIsCopied] = useState(false);

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

  // 📌 Age Calculation
  const calculateAge = (dob) => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const diff = Date.now() - birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  // 📌 Print / Download
  const handlePrint = () => {
    window.print();
  };

  // 📌 Share link
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>My Biodata | WedlockBD</title>
      </Helmet>

      <div className="space-y-10 w-full lg:max-w-7xl mx-auto mt-8">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#5b285c] to-[#131729] rounded-3xl p-8 md:p-10 text-white shadow-2xl overflow-hidden border border-purple-200">
          {/* gradient overlays */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-white opacity-10 rounded-full blur-2xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-xl -mb-14 -ml-14"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* profile */}
            <div className="relative">
              <img
                src={profile_image}
                alt={name}
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-3 -right-2 bg-white text-pink-600 rounded-full p-2 shadow-lg">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
            </div>

            {/* info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow mb-2">
                {name || "N/A"}
              </h2>
              <p className="text-pink-100 font-medium mb-4">
                Biodata ID:{" "}
                <span className="font-semibold">{biodata_id || "N/A"}</span> •{" "}
                {biodata_type || "N/A"}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm flex items-center shadow">
                  <Calendar className="w-4 h-4 mr-2" />{" "}
                  {calculateAge(date_of_birth)} Years
                </span>
                <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm flex items-center shadow">
                  <Scale className="w-4 h-4 mr-2" /> {height || "N/A"} cm
                </span>
                <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm flex items-center shadow">
                  <Briefcase className="w-4 h-4 mr-2" /> {occupation || "N/A"}
                </span>
              </div>
            </div>

            {/* actions */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <button
                onClick={handlePrint}
                className="bg-gradient-to-r from-[#810284] to-[#131729] px-5 py-3 rounded-xl flex items-center gap-2 
                font-medium shadow-lg transition-all"
              >
                <Download className="w-5 h-5" /> Download
              </button>
              <button
                onClick={handleShare}
                className="bg-gradient-to-r from-[#131729] to-[#810284] px-5 py-3 rounded-xl flex items-center gap-2 
                font-medium shadow-lg transition-all"
              >
                <Share2 className="w-5 h-5" /> {isCopied ? "Copied!" : "Share"}
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 transition-all">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center gap-2">
                <User className="text-purple-500" /> Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                <Info label="Full Name" value={name} />
                <Info label="Date of Birth" value={date_of_birth} />
                <Info label="Occupation" value={occupation} />
                <Info label="Race" value={race} />
                <Info label="Height" value={`${height || "N/A"} cm`} />
                <Info label="Weight" value={`${weight || "N/A"} kg`} />
              </div>
            </div>

            {/* Family Info */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 transition-all">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center gap-2">
                <Users className="text-blue-500" /> Family Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                <Info label="Father's Name" value={fathers_name} />
                <Info label="Mother's Name" value={mothers_name} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Location */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 transition-all">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center gap-2">
                <MapPin className="text-green-500" /> Location
              </h3>
              <div className="space-y-5 text-gray-700">
                <Info label="Present Division" value={present_division_name} />
                <Info label="Permanent Division" value={permanent_division_name} />
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 transition-all">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/20 rounded-xl">
                  <Mail className="w-5 h-5" />
                  <span>{contact_email || "N/A"}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/20 rounded-xl">
                  <Phone className="w-5 h-5" />
                  <span>{contact_number || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hide buttons in print */}
      <style>{`
        @media print {
          button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

const Info = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="font-medium">{value || "N/A"}</span>
  </div>
);

export default ViewBiodata;
