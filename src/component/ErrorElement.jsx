import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";
import errorImg from "../assets/logo/err.jpg";

const ErrorElement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-center p-6">
      
      <div className="w-72 mb-6">
        <img src={errorImg} alt="Error" className="rounded-2xl shadow-xl" />
      </div>

      <div className="flex items-center space-x-2 text-red-600 mb-4">
        <AlertTriangle className="w-6 h-6" />
        <h1 className="text-2xl md:text-3xl font-bold">404 - Page Not Found</h1>
      </div>

      <p className="text-gray-600 max-w-md mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/">
        <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorElement;
