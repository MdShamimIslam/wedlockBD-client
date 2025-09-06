import { CheckCircle } from "lucide-react";
import { faqCategories, secCl } from "../../utils/options";
import Heading from "../../component/common/Heading";

const ContactFAQ = () => {
  return (
    <div className={secCl}>
      <Heading
        title="Frequently Asked Questions"
        desc="Find quick answers to common questions about our matrimony platform and services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {faqCategories.map((category, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-primary-200 transition-all duration-300">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
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
        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full md:text-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
          View All FAQs
        </button>
      </div>
    </div>
  )
}

export default ContactFAQ;