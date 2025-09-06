import { teamMembers } from "../../utils/options"

const Team = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="bg-accent-50 inline-block px-4 py-2 rounded-full mb-6">
          <span className="text-accent-600 font-semibold">Our Team</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Meet Our Experts</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Dedicated professionals working tirelessly to help you find your perfect life partner
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-20 to-transparent"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Team