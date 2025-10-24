import { Award, Clock, Inbox, Target } from "lucide-react";
import UseAdminStats from "../../../hooks/useAdminStats";

const AdditionalStats = () => {
  const adminStats = UseAdminStats();
  const { totalSuccessStory, totalRequest, totalPending } = adminStats || {};


  const stats = [
    { title: "Success Stories", value: totalSuccessStory, Icon: Award, iconColor: "text-purple-500" },
    { title: "Pending Approvals", value: totalPending, Icon: Clock, iconColor: "text-orange-500" },
    { title: "Total Request", value: totalRequest, Icon: Inbox, iconColor: "text-blue-500" },
    { title: "Conversion Rate", value: "4.2%", Icon: Target, iconColor: "text-green-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const { title, value, Icon, iconColor } = stat;
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{title}</p>
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                </div>
                <Icon className={`w-8 h-8 ${iconColor}`} />
              </div>
            </div>
          )
        })}
    </div>
  );
};

export default AdditionalStats;
