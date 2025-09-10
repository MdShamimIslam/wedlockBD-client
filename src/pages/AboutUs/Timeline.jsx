import Heading from "../../component/common/Heading"
import useUserStats from "../../hooks/useUserStats";
import { secCl } from "../../utils/options";

const Timeline = () => {
  const userStats = useUserStats();

  const milestones = [
    {
      year: "2021",
      title: "WedlockBD Founded",
      description: "Started with a vision to revolutionize matrimony in Bangladesh"
    },
    {
      year: "2022",
      title: `${userStats.totalBiodatas} Members`,
      description: "Reached our first major milestone with verified profiles"
    },
    {
      year: "2023",
      title:`${userStats.successStories} Marriages`,
      description: "Celebrated our first thousand successful marriages"
    },
    {
      year: "2024",
      title: "Mobile App Launch",
      description: "Launched mobile applications for iOS and Android"
    },
    {
      year: "2025",
      title: "AI Matching",
      description: "Introduced AI-powered compatibility matching system"
    }
  ];

  return (
    <div className={secCl}>
      <Heading
        title="Milestones & Achievement"
        desc="A timeline of our growth and the milestones we have achieved in serving the matrimony community"
      />

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full
         bg-gradient-to-b from-pink-500 to-blue-500 rounded-full
         "></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300 ">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary-500 mb-2">{milestone.year}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              
              <div 
              className="relative z-10 flex items-center justify-center md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full 
              border-4 border-slate-300 shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline