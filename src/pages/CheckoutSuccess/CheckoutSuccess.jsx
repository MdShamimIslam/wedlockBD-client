import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="flex items-center justify-center my-12 md:my-16 lg:my-20 p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 text-center animate-fadeIn">
        <div className="mx-auto w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-green-100 mb-6 relative">
          <svg
            className="w-12 h-12 text-green-600 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.28 15.28a1 1 0 011.44 0l6-6a1 1 0 10-1.44-1.44L11 12.56 8.72 10.28a1 1 0 00-1.44 1.44l3 3z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 my-4">
          Thank you for completing your payment. Your transaction has been processed successfully.
        </p>

        <div className="mb-6">
          <span className="text-4xl animate-pulse">🎉</span>
        </div>

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white  rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
