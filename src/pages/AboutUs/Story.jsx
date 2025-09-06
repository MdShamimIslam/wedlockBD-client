import { Heart, Star } from "lucide-react"

const Story = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-primary-50 inline-block px-4 py-2 rounded-full mb-6">
                <span className="text-primary-600 font-semibold">Our Journey</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SoulMate was founded with a simple yet powerful vision: to help people find their perfect life partner in a safe, secure, and culturally respectful environment. We understand that marriage is not just the union of two individuals, but the coming together of two families, two hearts, and two dreams.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our platform combines traditional Bengali marriage values with cutting-edge technology to create meaningful connections. We believe that every person deserves to find their soulmate, and we are here to make that journey as smooth, joyful, and successful as possible.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 50,000 active members and 3,450+ successful marriages, we have become Bangladesh is most trusted matrimony platform. Our commitment to quality, safety, and genuine connections sets us apart in the industry.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-lg">Rated 4.9/5 by our members</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-500 mb-2">50K+</div>
                  <div className="text-gray-600">Happy Members</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-secondary-500 mb-2">3.4K+</div>
                  <div className="text-gray-600">Successful Marriages</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy Couple"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold text-primary-500 mb-2">5+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-secondary-500 to-accent-500 text-white p-6 rounded-2xl shadow-xl">
                  <Heart className="h-8 w-8 mb-2" />
                  <div className="font-semibold">Trusted Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Story