import { Download, RefreshCw } from "lucide-react";
import {  Bar,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  ResponsiveContainer, PieChart as RechartsPieChart, Cell, Line, Area, ComposedChart, Pie } from 'recharts';


const EnhancedCharts = () => {
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

  return (
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
  )
}

export default EnhancedCharts;