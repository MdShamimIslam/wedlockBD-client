import { milestones } from "../../utils/options"

const Timeline = () => {

  return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="bg-primary-50 inline-block px-4 py-2 rounded-full mb-6">
          <span className="text-primary-600 font-semibold">Our Journey</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Milestones & Achievements</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A timeline of our growth and the milestones we have achieved in serving the matrimony community
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-primary-500 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Timeline