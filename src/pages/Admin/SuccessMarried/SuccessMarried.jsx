import { Helmet } from 'react-helmet-async';
import useSuccessStory from '../../../hooks/useSuccessStory';
import usePagination from '../../../hooks/usePagination';
import EmptyState from '../../../components/EmptyState';
import { BookOpenText } from 'lucide-react';
import TPagination from '../../../components/common/TPagination';
import { tHeadAdminSuccessStories } from '../../../utils/options';
import TableHead from '../../../components/common/TableHead';
import TRow from './TRow';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SuccessMarried = () => {
    const [stories, refetch] = useSuccessStory();
    const axiosSecure = useAxiosSecure();

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

    const handleDeleteStory = async (_id) => {
      try {
        const result =  await Swal.fire({
          title: "Are you sure?",
          text: `You want to delete`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
  
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/success-stories/${_id}`);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully",
                icon: "success",
              });
            }
          
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
        })
      }
     
     
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
                { currentData?.map((story) => <TRow key={story._id} {...{story, handleDeleteStory}} /> )}
              </tbody>
          </table>
        </div>
        <TPagination {...{currentPage, totalPages, totalEntries, rowsPerPage, setCurrentPage, setRowsPerPage}} />
    </div>
      </div>
    );
};

export default SuccessMarried;