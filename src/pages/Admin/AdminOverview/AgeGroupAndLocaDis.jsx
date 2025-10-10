import {  Bar,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  ResponsiveContainer, BarChart } from 'recharts';

const AgeGroupAndLocaDis = () => {
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
  )
}

export default AgeGroupAndLocaDis;