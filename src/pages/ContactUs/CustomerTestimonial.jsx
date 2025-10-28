import { Star } from "lucide-react";
import { secCl, testimonials } from "../../utils/options";
import Heading from "../../components/common/Heading";

const CustomerTestimonial = () => {
  return (
    <div className={secCl}>
      <Heading
        title="What Our Members Say"
        desc="Real feedback from our satisfied members about our customer service and supportt"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12  lg:w-16 lg:h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="md:text-lg font-semibold text-gray-800">{testimonial.name}</h4>
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
  )
}

export default CustomerTestimonial;