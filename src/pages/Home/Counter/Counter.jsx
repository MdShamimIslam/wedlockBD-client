import { Users, UserRound, UserRoundCheck, HeartHandshake } from "lucide-react";
import Heading from '../../../component/common/Heading';
import useUserStats from "../../../hooks/useUserStats";

const Counter = () => {
 const userStats = useUserStats();

  const stats = [
    {
      icon: Users,
      label: "Total Biodatas",
      value: userStats.totalBiodatas,
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: UserRound,
      label: "Male Members",
      value: userStats.maleBiodatas,
      color: "text-yellow-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: UserRoundCheck,
      label: "Female Members",
      value: userStats.femaleBiodatas,
      color: "text-purple-500",
      bgColor: "bg-green-50"

    },
    {
      icon: HeartHandshake,
      label: "Successful Marriages",
      value: userStats.successStories,
      color: "text-rose-500",
      bgColor: "bg-orange-50"
    }
  ];
  
  return (
    <section id="success-counter" className="my-16 md:my-20 lg:my-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <Heading
          title="Our Success in Numbers"
          desc="We are proud of our achievements and the positive impact we have made on the lives of our members."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const {icon, color, value, label, bgColor} = stat || {};
            const IconComponent = icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 ${color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2"> {value}+</div>
                <div className="text-gray-600 font-medium">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counter;