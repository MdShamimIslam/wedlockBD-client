import useLast7DaysViews from "../../../hooks/useLast7DaysViews";
import LineChart from "./LineChart";
import PieChartCom from "./PieChartCom";

const Analytics = ({pieData=[]}) => {
  const { data: lineData = [] } = useLast7DaysViews();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <LineChart {...{lineData}} />
      <PieChartCom {...{pieData}}/>
    </div>
  );
};

export default Analytics;
