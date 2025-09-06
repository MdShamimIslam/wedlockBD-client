import { stats } from "../../utils/options";

const Stats = () => {
  return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="bg-accent-50 inline-block px-4 py-2 rounded-full mb-6">
          <span className="text-accent-600 font-semibold">Our Impact</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Numbers That Speak</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our success is measured by the happiness we have brought to thousands of families
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="h-10 w-10 text-primary-500" />
              </div>
              <div className="text-5xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default Stats;