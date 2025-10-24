import { DollarSign, Star, Users, UserCircle } from "lucide-react";
import UseAdminStats from "../../../hooks/useAdminStats";

const EnhancedStats = () => {
  const adminStats = UseAdminStats();
  const { totalUsers, totalBiodata, totalProUsers, totalRevenue} = adminStats || {};

  const stats = [
    {
      title: "Total Biodata",
      value: totalBiodata,
      icon: Users,
      fromColor: "from-pink-500",
      toColor: "to-rose-600",
      accentColor: "text-pink-100",
    },
    {
      title: "Total Users",
      value: totalUsers,
      icon: UserCircle,
      fromColor: "from-blue-500",
      toColor: "to-blue-600",
      accentColor: "text-blue-100",
    },
    {
      title: "Premium Users",
      value: totalProUsers,
      icon: Star,
      fromColor: "from-yellow-500",
      toColor: "to-orange-600",
      accentColor: "text-yellow-100",
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue}`,
      icon: DollarSign,
      fromColor: "from-green-500",
      toColor: "to-emerald-600",
      accentColor: "text-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => {
          const { title, value, icon: Icon, fromColor, toColor, accentColor } = item;
          return (
            <div
          key={index}
          className={`bg-gradient-to-br ${fromColor} ${toColor} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`${accentColor} text-sm font-medium`}>{title}</p>
              <p className="text-3xl font-bold">{value}</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
          )
      })}
    </div>
  )
}

export default EnhancedStats;