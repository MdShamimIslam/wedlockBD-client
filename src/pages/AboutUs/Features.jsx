import Heading from "../../component/common/Heading";
import { features, secCl } from "../../utils/options";

const Features = () => {
  return (
    <div className={secCl}>
      <Heading
        title="Why WedlockBD is Different?"
        desc=" We provide the best matrimony experience with our unique features, dedicated service, and commitment to your happiness."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <IconComponent className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className=" text-lg md:text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Features