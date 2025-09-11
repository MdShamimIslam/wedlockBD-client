import { useEffect, useState } from "react";
import { Users, UserRound, UserRoundCheck, HeartHandshake } from "lucide-react";
import Heading from '../../../component/common/Heading';
import useUserStats from "../../../hooks/useUserStats";
import { secCl } from "../../../utils/options";

// Hook to animate counter
const useCountUp = (target = 0, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!target) {
      setCount(0);
      return;
    }

    let start = 0;
    const frames = Math.round(duration / 30); // total steps
    const increment = target / frames;

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count;
};


// Child component for each stat card
const CounterCard = ({ icon: Icon, color, bgColor, value, label }) => {
  const animatedValue = useCountUp(value);

  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
      <div className="text-4xl font-bold text-gray-800 mb-2">{animatedValue}+</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

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
    <div className={secCl}>
      <Heading
        title="Our Success in Numbers"
        desc="We are proud of our achievements and the positive impact we have made on the lives of our members."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <CounterCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
