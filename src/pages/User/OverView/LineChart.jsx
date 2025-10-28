

const LineChart = () => {

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
    <h3 className="text-lg font-bold mb-3 text-gray-800">Achievements</h3>
    <div className="flex flex-wrap gap-3">
      <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full text-sm font-medium shadow-md">🏆 100 Profile Views</span>
      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-medium shadow-md">💬 First Request Sent</span>
      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md">⭐ Verified Profile</span>
    </div>
  </div>
  
  
  )
}

export default LineChart;