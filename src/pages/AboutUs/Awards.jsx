import { awards } from "../../utils/options";

const Awards = () => {

  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white bg-opacity-20 inline-block px-4 py-2 rounded-full mb-6">
              <span className="text-white font-semibold">Recognition</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Awards & Recognition</h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by industry leaders and customers alike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-opacity-20 transition-all duration-300">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{award.title}</h3>
                  <p className="text-white opacity-80 text-sm">{award.organization}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Awards