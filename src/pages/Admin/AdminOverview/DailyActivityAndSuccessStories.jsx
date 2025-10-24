import { MapPin } from 'lucide-react';
import { XAxis,  YAxis,  CartesianGrid,  Tooltip,  ResponsiveContainer, LineChart, Line } from 'recharts';
import UseAdminStats from '../../../hooks/useAdminStats';


const DailyActivityAndSuccessStories = () => {
  const adminStats = UseAdminStats();
  const {topMatches=[], dailyActivityData=[]} = adminStats || {};

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daily Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Activity Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="requestsSent" stroke="#3B82F6" strokeWidth={3} dot={{ r: 6 }} />
              <Line type="monotone" dataKey="premiumPurchases" stroke="#10B981" strokeWidth={3} dot={{ r: 6 }} />
              <Line type="monotone" dataKey="profileViews" stroke="#F59E0B" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Requests Sent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Premium Purchases</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Profile Views</span>
            </div>
          </div>
        </div>

        {/* Recent Success Stories */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Success Stories</h3>
          <div className="space-y-4">
            {topMatches.map((match, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100 hover:shadow-md transition-all duration-200"
              >
                {/* Couple Image */}
                <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-pink-200 shadow-sm">
                  <img
                    src={match.img || "/placeholder-couple.jpg"}
                    alt={match.couple}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">{match.couple}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        match.status === "married"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {match.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {match.location}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">{match.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default DailyActivityAndSuccessStories;