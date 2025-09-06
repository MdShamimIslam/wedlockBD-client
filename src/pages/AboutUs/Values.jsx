import Heading from "../../component/common/Heading";
import { secCl, values } from "../../utils/options";

const Values = () => {
  return (
    <div className={`${secCl} px-4 sm:px-6 lg:px-8`}>
      <Heading
        title="Our Core Values"
        desc="The principles that guide us in helping you find your perfect match and build lasting relationships"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary-200 transition-all duration-300 h-full">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Values