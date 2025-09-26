import { CheckCircle, Eye } from "lucide-react";
import { timeAgo } from "../../../utils/functions";

const RecentActivity = ({ latestProfileView, latestRequest }) => {
  const hasProfileView = !!latestProfileView;
  const hasContactRequest = !!latestRequest;


  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Recent Activity
      </h3>
      <div className="grid grid-col-1 md:grid-cols-2 gap-4">
        {/* Profile View */}
        <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-xl">
          <div className="bg-blue-100 p-2 rounded-full">
            <Eye className="h-5 w-5 text-blue-600" />
          </div>
          {hasProfileView ? (
            <div className="pl-8">
              <p className="text-gray-800">
               <strong>{latestProfileView.visitorName}</strong>  viewed your profile
              </p>
              <p className="text-gray-500 text-sm">
                {timeAgo(latestProfileView.visitedAt)}
              </p>
            </div>
          ) : (
            <p className="pl-8 text-gray-500 italic">No profile views yet</p>
          )}
        </div>

        {/* Contact Request */}
        <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-xl">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>

          {hasContactRequest ? (
            <div className="pl-8">
              <p className="text-gray-800">  <strong>{latestRequest.selfName}</strong> sent you a contact request </p>
              <p className="text-gray-500 text-sm">
                {timeAgo(latestRequest.createdAt)}
              </p>
            </div>
          ) : (
            <p className="pl-8 text-gray-500 italic">
              No contact requests yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
