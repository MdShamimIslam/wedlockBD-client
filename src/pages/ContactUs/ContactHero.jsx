import { MessageCircle } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce-slow"></div>
    <div className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-bounce-slow" style={{animationDelay: '2s'}}></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-8">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6">
          <MessageCircle className="h-16 w-16 text-white animate-pulse" />
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
        Contact Us
      </h1>
      <p className="text-xl md:text-3xl text-white opacity-90 max-w-4xl mx-auto leading-relaxed mb-12">
        We are here to help you find your perfect match. Get in touch with our friendly support team
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Start Live Chat
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Call Us Now
        </button>
      </div>
    </div>
  </section>
  )
}

export default ContactHero;