import { Calendar } from "lucide-react";
import useAuth from "../../../hooks/useAuth";

const Welcome = () => {
  const { user } = useAuth();
  const { displayName, photoURL } = user || {};

  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-6 md:p-8 text-white shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome Back{displayName ? `, ${displayName}` : ""}!
          </h1>
          <p className="text-indigo-100 text-base md:text-lg">
            Here&apos;s what&apos;s happening with your matrimony platform today.
          </p>
        </div>

        <div className="flex items-center gap-3 md:gap-4 bg-white/10 rounded-xl px-4 py-3 shadow-md">
          <Calendar className="w-6 h-6 md:w-8 md:h-8 text-indigo-200" />
          <div className="text-left">
            <p className="text-sm text-indigo-100">Today&apos;s Date</p>
            <p className="text-lg md:text-xl font-semibold">{today}</p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <img
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md"
            src={photoURL || "/default-avatar.png"}
            alt="admin-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
