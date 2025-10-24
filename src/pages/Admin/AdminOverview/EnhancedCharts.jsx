import {  Bar,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  ResponsiveContainer, PieChart as RechartsPieChart, Cell,  Pie, BarChart } from 'recharts';
import UseAdminStats from "../../../hooks/useAdminStats";


const EnhancedCharts = () => {
  const adminStats = UseAdminStats();
  const { ageGroupData=[], genderData=[] } = adminStats || {};
  const genderBio = genderData?.filter(item => item.name === "Male" || item.name === "Female");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        {/* User Demographics Pie Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">User Demographics</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RechartsPieChart>
              <Pie
                data={genderBio}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
              >
                {genderBio?.map((entry, index) => (
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
            {genderBio?.map((item, index) => (
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
  )
}

export default EnhancedCharts;