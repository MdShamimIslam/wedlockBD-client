import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { CheckCircle, Eye, Heart, MessageCircle, Star } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const OverView = () => {
  const { user } = useAuth();
  const { displayName, photoURL } = user || {};

  // Fake analytics data
  const lineData = [
    { day: "Mon", views: 100 },
    { day: "Tue", views: 350 },
    { day: "Wed", views: 500 },
    { day: "Thu", views: 400 },
    { day: "Fri", views: 650 },
    { day: "Sat", views: 700 },
    { day: "Sun", views: 500 },
  ];

  const pieData = [
    { name: "Favorites", value: 20 },
    { name: "Requests", value: 30 },
    { name: "Matches", value: 45 },
  ];
  const COLORS = ["#f87171", "#34d399", "#facc15"];

  return (
    <>
      <Helmet>
        <title>User Dashboard | WedlockBD</title>
      </Helmet>
      <div className="space-y-10 w-full lg:max-w-7xl mx-auto mt-8">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-[#5b285c] to-[#131729] rounded-3xl p-8 text-white flex items-center justify-between shadow-xl">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              Welcome back, {displayName || "Anonymous"}!
            </h2>
            <p className="text-purple-100 md:text-lg">
              Manage your profile and find your perfect match
            </p>
          </div>
          <img
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md"
            src={photoURL}
            alt="profile"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Profile Views", value: 1234, icon: Eye, color: "text-blue-500" },
            { title: "Favorites", value: 20, icon: Heart, color: "text-red-500" },
            { title: "Requests", value: 30, icon: MessageCircle, color: "text-green-500" },
            { title: "Matches", value: 45, icon: Star, color: "text-yellow-500" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md border transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-800">{item.value}</p>
                </div>
                <item.icon className={`h-6 w-6 md:h-8 md:w-8 ${item.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Line Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Profile Views (Last 7 days)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#6366f1"
                  strokeWidth={3}
                  dot={{ r: 6, fill: "#6366f1" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Engagement Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  dataKey="value"
                  label
                >
                  {pieData.map((_entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-xl">
              <div className="bg-blue-100 p-2 rounded-full">
                <Eye className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  Profile viewed by Fatima Khan
                </p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-xl">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  Contact request approved
                </p>
                <p className="text-gray-500 text-sm">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="bg-gradient-to-r from-[#131729] to-[#5b285c] text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Tips for You</h3>
          <ul className="space-y-2 md:text-lg">
            <li>✅ Complete your profile to get better matches</li>
            <li>💌 Send at least 3 contact requests this week</li>
            <li>⭐ Mark favorites to shortlist your choices</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OverView;
