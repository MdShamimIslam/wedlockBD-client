import Heading from "../../components/common/Heading"
import { secCl, teamMembers } from "../../utils/options"

const Team = () => {

  return (
    <div className={secCl}>
      <Heading
        title="Meet Our Experts"
        desc=" Dedicated professionals working tirelessly to help you find your perfect life partner"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"  
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-20 to-transparent"></div> */}
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
  )
}

export default Team