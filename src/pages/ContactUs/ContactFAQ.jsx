import { CheckCircle } from "lucide-react";
import { faqCategories } from "../../utils/options";

const ContactFAQ = () => {
  return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="bg-accent-50 inline-block px-4 py-2 rounded-full mb-6">
          <span className="text-accent-600 font-semibold">FAQ</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Find quick answers to common questions about our matrimony platform and services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {faqCategories.map((category, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-primary-200 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
            <ul className="space-y-3">
              {category.questions.map((question, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
          View All FAQs
        </button>
      </div>
    </div>
  </section>
  )
}

export default ContactFAQ;