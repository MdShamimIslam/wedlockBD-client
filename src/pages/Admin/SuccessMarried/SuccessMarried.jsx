import { Helmet } from 'react-helmet-async';
import useSuccessStory from '../../../hooks/useSuccessStory';
import usePagination from '../../../hooks/usePagination';
import EmptyState from '../../../component/EmptyState';
import { BookOpenText } from 'lucide-react';
import TPagination from '../../../component/common/TPagination';
import { tHeadAdminSuccessStories } from '../../../utils/options';
import TableHead from '../../../component/common/TableHead';
import TRow from './TRow';

const SuccessMarried = () => {
    const [stories] = useSuccessStory();

    const { currentData, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage, totalPages, totalEntries } = usePagination(stories, 10);

    if (!stories?.length) {
      return (
        <EmptyState
          icon={BookOpenText}
          title="No Stories Found"
          description="Once stories are submitted, they’ll appear here for review."
          linkText="Go to Dashboard Overview"
          path="/dashboard/admin-overview"
        />
      );
    }

    return (
        <div>
        <Helmet>
          <title> Success Stories | WedlockBD</title>
        </Helmet>
        <div className="overflow-hidden w-full lg:max-w-[1500px] mx-auto mt-4">
        <div className="overflow-x-auto">
          <table className="bg-white min-w-full">
              <TableHead headOptions={tHeadAdminSuccessStories} />
              <tbody className="whitespace-nowrap divide-y divide-gray-200">
                { currentData?.map((story) => <TRow key={story._id} {...{story}} /> )}
              </tbody>
          </table>
        </div>
        <TPagination {...{currentPage, totalPages, totalEntries, rowsPerPage, setCurrentPage, setRowsPerPage}} />
    </div>
      </div>
    );
};

export default SuccessMarried;