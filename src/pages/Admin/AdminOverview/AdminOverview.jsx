
import { Users, Heart, TrendingUp, Calendar, Activity, DollarSign, Clock, CheckCircle, XCircle, Target, MapPin,  Download, RefreshCw, Star, Award } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  LineChart,
  Line,
  Area,
  ComposedChart,
  Pie
} from 'recharts';

const AdminOverview = () => {
  // Enhanced sample data for charts
  const monthlyData = [
    { month: 'Jan', registrations: 120, matches: 45, premium: 25, revenue: 24750, success: 8 },
    { month: 'Feb', registrations: 150, matches: 62, premium: 35, revenue: 34650, success: 12 },
    { month: 'Mar', registrations: 180, matches: 78, premium: 42, revenue: 41580, success: 15 },
    { month: 'Apr', registrations: 220, matches: 95, premium: 58, revenue: 57420, success: 18 },
    { month: 'May', registrations: 280, matches: 125, premium: 72, revenue: 71280, success: 22 },
    { month: 'Jun', registrations: 320, matches: 145, premium: 85, revenue: 84150, success: 28 }
  ];

  const genderData = [
    { name: 'Male', value: 1250, color: '#3B82F6', percentage: 50.4 },
    { name: 'Female', value: 1180, color: '#EC4899', percentage: 47.6 },
    { name: 'Other', value: 45, color: '#10B981', percentage: 2.0 }
  ];

  const ageGroupData = [
    { age: '18-25', count: 450, male: 230, female: 220 },
    { age: '26-30', count: 680, male: 340, female: 340 },
    { age: '31-35', count: 520, male: 260, female: 260 },
    { age: '36-40', count: 280, male: 150, female: 130 },
    { age: '40+', count: 145, male: 80, female: 65 }
  ];

  const locationData = [
    { division: 'Dhaka', users: 850, matches: 320 },
    { division: 'Chittagong', users: 420, matches: 180 },
    { division: 'Sylhet', users: 380, matches: 165 },
    { division: 'Rajshahi', users: 290, matches: 125 },
    { division: 'Khulna', users: 260, matches: 110 },
    { division: 'Barisal', users: 180, matches: 75 },
    { division: 'Rangpur', users: 95, matches: 40 }
  ];

  const dailyActivityData = [
    { day: 'Mon', logins: 450, messages: 1200, profileViews: 2800 },
    { day: 'Tue', logins: 520, messages: 1350, profileViews: 3100 },
    { day: 'Wed', logins: 480, messages: 1180, profileViews: 2900 },
    { day: 'Thu', logins: 600, messages: 1450, profileViews: 3400 },
    { day: 'Fri', logins: 720, messages: 1680, profileViews: 3800 },
    { day: 'Sat', logins: 850, messages: 1920, profileViews: 4200 },
    { day: 'Sun', logins: 680, messages: 1580, profileViews: 3600 }
  ];

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

  const topMatches = [
    { id: 1, couple: 'Ahmed & Fatima', date: '2024-01-15', location: 'Dhaka', status: 'married' },
    { id: 2, couple: 'Karim & Ayesha', date: '2024-01-10', location: 'Chittagong', status: 'engaged' },
    { id: 3, couple: 'Rashid & Salma', date: '2024-01-05', location: 'Sylhet', status: 'married' },
    { id: 4, couple: 'Hassan & Nadia', date: '2024-01-02', location: 'Rajshahi', status: 'engaged' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back, Admin!</h1>
            <p className="text-indigo-100 text-lg">Here&apos;s what&apos;s happening with your matrimony platform today</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-indigo-100">Today&apos;s Date</p>
              <p className="text-xl font-semibold">{new Date().toLocaleDateString()}</p>
            </div>
            <Calendar className="w-12 h-12 text-indigo-200" />
          </div>
        </div>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Users</p>
              <p className="text-3xl font-bold">2,475</p>
              <p className="text-blue-100 text-sm flex items-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4" />
                +12% from last month
              </p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-100 text-sm font-medium">Active Matches</p>
              <p className="text-3xl font-bold">1,248</p>
              <p className="text-pink-100 text-sm flex items-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4" />
                +8% from last month
              </p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm font-medium">Premium Users</p>
              <p className="text-3xl font-bold">425</p>
              <p className="text-yellow-100 text-sm flex items-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4" />
                +25% from last month
              </p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Monthly Revenue</p>
              <p className="text-3xl font-bold">৳84,150</p>
              <p className="text-green-100 text-sm flex items-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4" />
                +18% from last month
              </p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Stories</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <Award className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Daily Active Users</p>
              <p className="text-2xl font-bold text-gray-900">1,847</p>
            </div>
            <Activity className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">17.2%</p>
            </div>
            <Target className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue & Growth Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue & Growth Trends</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Download className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis yAxisId="left" stroke="#6b7280" />
              <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.1} />
              <Bar yAxisId="right" dataKey="registrations" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="premium" stroke="#F59E0B" strokeWidth={3} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* User Demographics Pie Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">User Demographics</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RechartsPieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [`${value} users`, name]}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            {genderData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
                <p className="text-xs text-gray-500">{item.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Age Groups and Location Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Age Groups with Gender Split */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Age Distribution by Gender</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageGroupData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="age" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="male" stackId="a" fill="#3B82F6" radius={[0, 0, 0, 0]} />
              <Bar dataKey="female" stackId="a" fill="#EC4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Male</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Female</span>
            </div>
          </div>
        </div>

        {/* Location Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Users by Division</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={locationData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="division" type="category" stroke="#6b7280" width={80} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="users" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Daily Activity and Recent Success Stories */}
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

      {/* Recent Activities and Pending Approvals */}
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
    </div>
  );
};

export default AdminOverview;