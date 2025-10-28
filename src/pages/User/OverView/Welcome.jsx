import useAuth from "../../../hooks/useAuth";

const Welcome = () => {
    const { user } = useAuth();
    const { displayName, photoURL } = user || {};
    
  return (
    <div className="bg-gradient-to-r from-[#5b285c] to-[#131729] rounded-3xl p-8 text-white flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              Welcome back, {displayName || "Anonymous"}!
            </h2>
            <p className="text-purple-100 md:text-lg">
              Manage your profile and find your perfect match
            </p>
          </div>
          <img
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md"
            src={photoURL}
            alt="profile"
          />
        </div>
  )
}

export default Welcome;