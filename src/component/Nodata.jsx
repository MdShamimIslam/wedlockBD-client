import { Link } from "react-router-dom";
import { UserPlus, AlertCircle} from "lucide-react";

const Nodata = () => {
  return (
    <div className="flex justify-center items-center my-20 px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl p-10 text-center border border-purple-100">
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-4 rounded-full">
            <AlertCircle className="h-12 w-12 text-purple-600" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-3">
          No Biodata Found!
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          Before requesting contact information, you need to create your own
          biodata. Click the button below to add your profile and continue your
          journey.
        </p>
          <div className="flex justify-center">
            <Link to="/add-biodata">
              <button className="flex items-center justify-center gap-2 w-full md:w-auto py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 to-blue-600 text-white font-semibold shadow-lg hover:from-pink-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <UserPlus className="h-5 w-5" />
                Create My Biodata
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Nodata;
