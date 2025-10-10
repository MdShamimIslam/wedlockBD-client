import { Calendar } from "lucide-react";
import useAuth from "../../../hooks/useAuth";

const Welcome = () => {
  const { user } = useAuth();
    const { displayName, photoURL } = user || {};

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back, {displayName}!</h1>
            <p className="text-indigo-100 text-lg">Here&apos;s what&apos;s happening with your matrimony platform today</p>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-indigo-100">Today&apos;s Date</p>
              <p className="text-xl font-semibold">{new Date().toLocaleDateString()}</p>
            </div>
            <Calendar className="w-12 h-12 text-indigo-200" />
          </div>

          <img
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md"
            src={photoURL}
            alt="admin-profile"
          />
        </div>
      </div>
  )
}

export default Welcome;