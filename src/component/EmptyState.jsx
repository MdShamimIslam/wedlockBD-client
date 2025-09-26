import { Link } from "react-router-dom";

const EmptyState = ({  icon: Icon, title, description, linkText, path }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-2xl shadow-inner">
       {Icon && (
        <div className="p-4 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 mb-6">
          <Icon className="w-12 h-12 text-pink-500" />
        </div>
      )}
      <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-center max-w-sm mb-6">
          {description}
        </p>
      )}
      {linkText && (
        <Link
          to={path}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-lg shadow hover:from-pink-600 hover:to-blue-600 transition"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};


export default EmptyState;
