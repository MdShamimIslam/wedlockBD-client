import PieChartCom from "./PieChartCom";
import RecentActivity from "./RecentActivity";

const Analytics = ({pieData=[], latestProfileView, latestRequest}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <RecentActivity {...{latestProfileView, latestRequest}}/>
      <PieChartCom {...{pieData}}/>
    </div>
  );
};

export default Analytics;
