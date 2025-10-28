import { ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { emptyLineData } from "../../../utils/options";


const LineChart = ({lineData = []}) => {
    const hasLineData = lineData.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Profile Views (Last 7 days)</h3>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <ComposedChart
                data={hasLineData ? lineData : emptyLineData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="views" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
        {!hasLineData &&  <p className="text-gray-500 italic text-center mt-2">No profile view data yet</p>}
  </div>
  )
}

export default LineChart;