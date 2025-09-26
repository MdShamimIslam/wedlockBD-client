import { Helmet } from "react-helmet-async";
import { Eye, Heart, MessageCircle, Star } from "lucide-react";
import UseOverviewOfNormalUser from "../../../hooks/useOverviewOfNormalUser";
import QuickStats from "./QuickStats";
import Welcome from "./Welcome";
import RecentActivity from "./RecentActivity";
import Suggestions from "./Suggestions";
import Analytics from "./Analytics";

const OverView = () => {
  const overviewOfNormalUser = UseOverviewOfNormalUser();
  const { profileView=[], favorite=[], request=[], matches=[] } = overviewOfNormalUser || {};

  const latestProfileView =profileView.length > 0 ? [...profileView].sort( (a, b) => new Date(b.visitedAt) - new Date(a.visitedAt) )[0] : null;
  const latestRequest = request.length > 0 ? [...request].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0] : null;

  const pieData = [
    { name: "Favorites", value: favorite?.length || 0 },
    { name: "Requests", value: request?.length || 0 },
    { name: "Matches", value: matches?.length || 0 },
  ];
  
  const stats =[
    { title: "Profile Views", value: profileView?.length || 0, icon: Eye, color: "text-blue-500" },
    { title: "Favorites", value: favorite?.length || 0, icon: Heart, color: "text-red-500" },
    { title: "Requests", value: request?.length || 0, icon: MessageCircle, color: "text-green-500" },
    { title: "Matches", value: matches?.length || 0, icon: Star, color: "text-yellow-500" },
  ]

  return (
    <>
      <Helmet>
        <title>User Dashboard | WedlockBD</title>
      </Helmet>
      <div className="space-y-10 w-full lg:max-w-7xl mx-auto mt-8">
        <Welcome/>
        <QuickStats {...{stats}} />
        <Analytics {...{pieData}} />
        <RecentActivity {...{latestProfileView, latestRequest}}/>
        <Suggestions/>
      </div>
    </>
  );
};

export default OverView;
