import { Helmet } from "react-helmet-async";
import { Eye, Heart, MessageCircle, Star } from "lucide-react";
import UseOverviewOfNormalUser from "../../../hooks/useOverviewOfNormalUser";
import QuickStats from "./QuickStats";
import Welcome from "./Welcome";
import Suggestions from "./Suggestions";
import Analytics from "./Analytics";
import WeeklyRequestsChart from "./WeeklyRequestsChart";

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

  const stats = [
    {
      title: "Profile Views",
      value: profileView?.length || 0,
      icon: Eye,
      fromColor: "from-pink-500",
      viaColor: "via-fuchsia-500",
      toColor: "to-purple-600",
      accentColor: "text-pink-100",
    },
    {
      title: "Favorites",
      value: favorite?.length || 0,
      icon: Heart,
      fromColor: "from-purple-500",
      viaColor: "via-indigo-500",
      toColor: "to-blue-600",
      accentColor: "text-indigo-100",
    },
    {
      title: "Requests",
      value: request?.length || 0,
      icon: MessageCircle,
      fromColor: "from-emerald-500",
      viaColor: "via-green-500",
      toColor: "to-teal-600",
      accentColor: "text-green-100",
    },
    {
      title: "Matches",
      value: matches?.length || 0,
      icon: Star,
      fromColor: "from-amber-400",
      viaColor: "via-orange-500",
      toColor: "to-rose-500",
      accentColor: "text-yellow-100",
    },
  ];


  return (
    <>
      <Helmet>
        <title>Overview | WedlockBD</title>
      </Helmet>
      <div className="space-y-4 md:space-y-8 w-full lg:max-w-[1500px] mx-auto mt-4">
        <Welcome/>
        <QuickStats {...{stats}} />
        <WeeklyRequestsChart/>
        <Analytics {...{pieData, latestProfileView, latestRequest}} />
        <Suggestions/>
      </div>
    </>
  );
};

export default OverView;
