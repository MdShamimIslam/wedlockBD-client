import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

import { emptyPieData } from "../../../utils/options";

const PieChartCom = ({pieData=[]}) => {
  const COLORS = ["#f87171", "#34d399", "#facc15"];
  const hasPieData = pieData?.some((d) => d.value > 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Engagement Breakdown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={hasPieData ? pieData : emptyPieData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              label
            >
              {(hasPieData ? pieData : emptyPieData).map((_entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {!hasPieData && (
          <p className="text-gray-500 italic text-center mt-2">No engagement data yet</p>
        )}
      </div>
  )
}

export default PieChartCom;