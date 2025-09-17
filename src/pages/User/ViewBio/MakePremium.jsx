const MakePremium = () => {
  return (
        <div className="bg-gradient-to-r from-[#131729] to-[#5b285c] rounded-3xl p-8 text-center shadow-2xl  relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl translate-x-12 translate-y-12"></div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 drop-shadow-lg"> Unlock Premium Features </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">  Make your profile premium to get exclusive perks and stand out to more members. </p>
            <button className="bg-gradient-to-r from-[#810284] to-[#131729] text-white font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                Make Premium
            </button>
        </div>
  )
}

export default MakePremium;