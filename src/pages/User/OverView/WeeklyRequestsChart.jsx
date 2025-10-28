import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import useLast7DaysViews from "../../../hooks/useLast7DaysViews";

const WeeklyRequestsChart = () => {
  const { data } = useLast7DaysViews();
  const { favorites = [], requests = [], views=[] } = data || {};

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const chartData = days.map((day) => ({
    day,
    requests: requests.find((r) => r.day === day)?.count || 0,
    favorites: favorites.find((f) => f.day === day)?.count || 0,
    views: views.find((f) => f.day === day)?.count || 0,
  }));

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-2xl shadow-sm border p-6 transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Weekly Requests, Favorites & Views</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" tick={{ fill: "#4b5563" }} />
            <YAxis tick={{ fill: "#4b5563" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            />
            <Legend />
            <Bar dataKey="requests" name="Requests" fill="#b3447b" barSize={25} radius={[6, 6, 0, 0]} />
            <Bar dataKey="favorites" name="Favorites" fill="#3b82f6" barSize={25} radius={[6, 6, 0, 0]} />
            <Bar dataKey="views" name="Views" fill="#408f77" barSize={25} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyRequestsChart;
