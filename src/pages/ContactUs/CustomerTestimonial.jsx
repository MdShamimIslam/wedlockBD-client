import { Star } from "lucide-react";
import { testimonials } from "../../utils/options";

const CustomerTestimonial = () => {
  return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="bg-accent-50 inline-block px-4 py-2 rounded-full mb-6">
          <span className="text-accent-600 font-semibold">Testimonials</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">What Our Members Say</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Real feedback from our satisfied members about our customer service and support
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-gray-600 leading-relaxed italic">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default CustomerTestimonial;