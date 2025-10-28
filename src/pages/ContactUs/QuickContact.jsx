import Heading from "../../components/common/Heading";
import { contactInfo } from "../../utils/options";

const QuickContact = () => {
  return (
    <div className={`my-8 md:my-12 lg:my-16 px-4 sm:px-6 lg:px-8`}>
          <Heading
            title="Multiple Ways to Reach Us"
            desc="Choose the contact method that works best for you. Our team is always ready to assist."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`${info.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium text-center">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm text-center">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default QuickContact;