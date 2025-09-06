import { Send } from "lucide-react";
import { supportOptions } from "../../utils/options";
import { useState } from "react";

const ContactFormSupport = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '', priority: 'normal' });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        priority: 'normal'
      });
    };


  return (
     <div className="my-16 md:my-24 lg:my-32 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Send us a Message</h3>
            <p className="text-gray-600">Fill out the form below and we will get back to you as soon as possible</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-3">
                  Priority Level
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                >
                  <option value="low">Low Priority</option>
                  <option value="normal">Normal Priority</option>
                  <option value="high">High Priority</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="profile">Profile Issues</option>
                <option value="matching">Matching Problems</option>
                <option value="premium">Premium Services</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                placeholder="Tell us how we can help you..."
              />
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-600">
                Subscribe to our newsletter for matrimony tips and success stories
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Other Ways to Get Help</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Choose the support option that works best for you. Our team is always ready to assist with personalized care.
            </p>
          </div>

          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className={`bg-gradient-to-r ${option.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">{option.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {option.features.map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className={`bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 md:font-semibold`}>
                      {option.action}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ContactFormSupport;