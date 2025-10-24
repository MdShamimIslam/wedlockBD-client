import Welcome from './Welcome';
import EnhancedStats from './EnhancedStats';
import AdditionalStats from './AdditionalStats';
import EnhancedCharts from './EnhancedCharts';
import DailyActivityAndSuccessStories from './DailyActivityAndSuccessStories';
import { Helmet } from 'react-helmet-async';

const AdminOverview = () => {

  return (
    <>
    <Helmet>
        <title>Admin Dashboard | WedlockBD</title>
    </Helmet>
    <div className="space-y-8 w-full lg:max-w-[1500px] mx-auto mt-4">
      <Welcome/>
      <EnhancedStats/>
      <AdditionalStats/>
      <EnhancedCharts/>
      <DailyActivityAndSuccessStories/>
    </div>
    </>
    
  );
};

export default AdminOverview;