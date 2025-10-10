import { CheckCircle, XCircle } from "lucide-react";

const RecentActivitiesandPendingApprovals = () => {
    const recentActivities = [
        { id: 1, user: 'Sarah Ahmed', action: 'Profile verified', time: '2 mins ago', type: 'success', avatar: 'SA' },
        { id: 2, user: 'Mohammad Ali', action: 'Premium subscription purchased', time: '15 mins ago', type: 'premium', avatar: 'MA' },
        { id: 3, user: 'Fatima Khan', action: 'New match found', time: '1 hour ago', type: 'match', avatar: 'FK' },
        { id: 4, user: 'Ahmed Hassan', action: 'Profile updated', time: '2 hours ago', type: 'update', avatar: 'AH' },
        { id: 5, user: 'Ayesha Rahman', action: 'Message sent', time: '3 hours ago', type: 'message', avatar: 'AR' },
        { id: 6, user: 'Karim Uddin', action: 'Photo uploaded', time: '4 hours ago', type: 'photo', avatar: 'KU' },
        { id: 7, user: 'Rashida Begum', action: 'Interest expressed', time: '5 hours ago', type: 'interest', avatar: 'RB' }
      ];
    
      const pendingApprovals = [
        { id: 1, name: 'Nasir Ahmed', type: 'Profile Photo', submitted: '2 hours ago', status: 'pending' },
        { id: 2, name: 'Salma Khatun', type: 'Profile Verification', submitted: '4 hours ago', status: 'pending' },
        { id: 3, name: 'Rafiq Islam', type: 'Document Upload', submitted: '6 hours ago', status: 'pending' },
        { id: 4, name: 'Marium Akter', type: 'Profile Update', submitted: '8 hours ago', status: 'pending' }
      ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Enhanced Recent Activities */}
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
              {activity.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{activity.user}</p>
              <p className="text-sm text-gray-600">{activity.action}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500">{activity.time}</span>
              <div className={`w-2 h-2 rounded-full mt-1 ml-auto ${
                activity.type === 'success' ? 'bg-green-500' :
                activity.type === 'premium' ? 'bg-yellow-500' :
                activity.type === 'match' ? 'bg-pink-500' :
                activity.type === 'message' ? 'bg-blue-500' : 'bg-gray-400'
              }`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Pending Approvals */}
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {pendingApprovals.length} pending
        </span>
      </div>
      <div className="space-y-4">
        {pendingApprovals.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.type}</p>
              <p className="text-xs text-gray-500 mt-1">Submitted {item.submitted}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                <CheckCircle className="w-4 h-4" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <XCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default RecentActivitiesandPendingApprovals;