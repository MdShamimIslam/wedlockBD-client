import { Heart } from "lucide-react"

const CallToAction = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-10"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-8">
        <Heart className="h-16 w-16 text-primary-400 animate-pulse" />
      </div>
      <h2 className="text-5xl font-bold text-white mb-6">Ready to Find Your Soulmate?</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
        Join thousands of happy couples who found their perfect match through SoulMate. Your love story starts here.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Create Your Profile
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Browse Profiles
        </button>
      </div>
    </div>
  </section>
  )
}

export default CallToAction