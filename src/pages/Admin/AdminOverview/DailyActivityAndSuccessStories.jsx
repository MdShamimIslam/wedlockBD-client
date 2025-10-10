import { MapPin } from 'lucide-react';
import { XAxis,  YAxis,  CartesianGrid,  Tooltip,  ResponsiveContainer, LineChart, Line } from 'recharts';


const DailyActivityAndSuccessStories = () => {
    const dailyActivityData = [
        { day: 'Mon', logins: 450, messages: 1200, profileViews: 2800 },
        { day: 'Tue', logins: 520, messages: 1350, profileViews: 3100 },
        { day: 'Wed', logins: 480, messages: 1180, profileViews: 2900 },
        { day: 'Thu', logins: 600, messages: 1450, profileViews: 3400 },
        { day: 'Fri', logins: 720, messages: 1680, profileViews: 3800 },
        { day: 'Sat', logins: 850, messages: 1920, profileViews: 4200 },
        { day: 'Sun', logins: 680, messages: 1580, profileViews: 3600 }
      ];

    const topMatches = [
        { id: 1, couple: 'Ahmed & Fatima', date: '2024-01-15', location: 'Dhaka', status: 'married' },
        { id: 2, couple: 'Karim & Ayesha', date: '2024-01-10', location: 'Chittagong', status: 'engaged' },
        { id: 3, couple: 'Rashid & Salma', date: '2024-01-05', location: 'Sylhet', status: 'married' },
        { id: 4, couple: 'Hassan & Nadia', date: '2024-01-02', location: 'Rajshahi', status: 'engaged' }
      ];
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
              <Line type="monotone" dataKey="logins" stroke="#3B82F6" strokeWidth={3} dot={{ r: 6 }} />
              <Line type="monotone" dataKey="messages" stroke="#10B981" strokeWidth={3} dot={{ r: 6 }} />
              <Line type="monotone" dataKey="profileViews" stroke="#F59E0B" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Logins</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Messages</span>
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
            {topMatches.map((match) => (
              <div key={match.id} className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{match.couple}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    match.status === 'married' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {match.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {match.location}
                </p>
                <p className="text-xs text-gray-500 mt-1">{match.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default DailyActivityAndSuccessStories;