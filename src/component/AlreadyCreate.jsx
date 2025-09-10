import wowImg from "../assets/logo/wow.jpg";
import { Link } from "react-router-dom";

const AlreadyCreate = () => {
  return (
    <div className="flex items-center justify-center my-12 md:my-16 lg:my-20 p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-xl w-full p-8 text-center animate-fadeIn">
        <div className="flex justify-center mb-6">
          <img
            src={wowImg}
            alt="Already Created"
            className="w-32 h-32 rounded-full border-4 border-purple-300 object-cover shadow-md"
          />
        </div>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
          Hey, Your Profile Already Exists!
        </h2>

        <p className="text-gray-600 mb-6 text-base md:text-lg px-2">
          You don’t need to create a new profile. Now you can explore and connect with your favorite matches.
        </p>

        <Link
          to="/biodatas"
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white  rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition duration-300"
        >
          Find Matches
        </Link>

        <p className="text-gray-400 text-sm mt-4">
          Need help? Contact our support team.
        </p>
      </div>
    </div>
  );
};

export default AlreadyCreate;
