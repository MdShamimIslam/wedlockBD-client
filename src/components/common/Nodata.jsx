import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Nodata = ({Icon}) => {
    return (
        <div className="text-center py-16">
            <Icon className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600">Your biodata is not available.</h3>
            <p className="text-gray-500 text-sm md:text-base">Please add your biodata to continue.</p>
           
            <Link to="/dashboard/add-biodata" className="flex items-center justify-center mt-6">
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-blue-600
                 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                    <span>Continue</span>
                    <ArrowRight/>
                </button>
            </Link>
           
        </div>
    );
}

export default Nodata;