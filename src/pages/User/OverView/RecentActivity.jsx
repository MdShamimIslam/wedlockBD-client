import { CheckCircle, Eye } from "lucide-react";
import { timeAgo } from "../../../utils/functions";

const RecentActivity = ({ latestProfileView, latestRequest }) => {
  
  const activities = [
    latestProfileView && {
      type: "Profile View",
      name: latestProfileView.visitorName,
      icon: Eye,
      gradient: "from-slate-800 to-blue-600",
      time: timeAgo(latestProfileView.visitedAt),
    },
    latestRequest && {
      type: "Contact Request",
      name: latestRequest.selfName,
      icon: CheckCircle,
      gradient: "from-green-900 to-emerald-500",
      time: timeAgo(latestRequest.createdAt),
    },
  ].filter(Boolean);

  return (
    <div className="space-y-8 bg-white rounded-2xl shadow-sm border p-6">
      <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
      {activities.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${act.gradient} rounded-3xl p-6 shadow-lg transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white ">
                     <span className="font-semibold">{act.name}</span>  {act.type === "Profile View" ? "viewed your profile" : "sent you a contact request"}
                    </p>
                    <p className="text-white/80 text-sm mt-1">{act.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 italic text-center py-8">No recent activity</p>
      )}
    </div>
  );
};

export default RecentActivity;
