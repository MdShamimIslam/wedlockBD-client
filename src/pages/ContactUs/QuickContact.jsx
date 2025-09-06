import { contactInfo } from "../../utils/options";

const QuickContact = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-primary-50 inline-block px-4 py-2 rounded-full mb-6">
              <span className="text-primary-600 font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the contact method that works best for you. Our team is always ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`${info.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{info.title}</h3>
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
      </section>
  )
}

export default QuickContact;