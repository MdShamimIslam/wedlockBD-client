import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TableHead from "../../../components/common/TableHead";
import { tHeadAdminApprovedPremium } from "../../../utils/options";
import EmptyState from "../../../components/EmptyState";
import { Crown } from "lucide-react";
import TPagination from "../../../components/common/TPagination";
import usePagination from "../../../hooks/usePagination";
import TRow from "./TRow";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";

const ApprovedPremium = () => {
    const axiosSecure = useAxiosSecure();

    const { data: premiumCollectionData = [], refetch, isLoading } = useQuery({
      queryKey: ["premium-collection-data"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/premium-bio`);
        return res.data;
      },
    });

    const { currentData, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage, totalPages, totalEntries } = usePagination(premiumCollectionData, 10);
  
    if (isLoading) {
      return (
        <div className='mt-72 lg:mt-96'>
          <Loading/>
        </div>
      )
    }

    if (premiumCollectionData?.length === 0) {
      return (
        <EmptyState
          icon={Crown}
          title="No Premium Requests"
          description="No premium requests available right now."
          linkText="Go to Dashboard Overview"
          path="/dashboard/admin-overview"
        />
      );
    }
    
   
    const handlePremiumInfoEdit = async (biodataId) => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You are about to make this profile Premium.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#2563eb",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, make Premium",
          cancelButtonText: "Cancel",
        });
    
        if (!result.isConfirmed) return;
    
        const res = await axiosSecure.patch(`/premium-bio/${biodataId}`);
    
        if (res.data?.success) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: res.data?.message || "Profile upgraded to Premium!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            title: "No changes made",
            text: res.data?.message || "This profile might already be Premium.",
            icon: "info",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.error || "Something went wrong while updating premium status.",
          icon: "error",
        });
      }
    };
    
    const handlePremiumInfoDelete = async (_id,name) => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: `You want to delete ${name}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
  
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/premium-bio/${_id}`);
          
          if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Deleted Successfully",
                  icon: "success",
                });
              }
        
        }
      }catch(error){
        Swal.fire({
          title: "Error!",
          text: error.response?.data?.error || "Something went wrong!",
          icon: "error",
          confirmButtonText: "OK",
        })
      }
    
    }

  return (
    <div>
      <Helmet>
        <title> Approved Premium | WedlockBD</title>
      </Helmet>
      <div className="overflow-hidden w-full lg:max-w-[1500px] mx-auto mt-4">
        <div className="overflow-x-auto">
          <table className="bg-white min-w-full">
              <TableHead headOptions={tHeadAdminApprovedPremium} />
              <tbody className="whitespace-nowrap divide-y divide-gray-200">
              { currentData?.map((premiumInfo) => <TRow key={premiumInfo._id} {...{premiumInfo, handlePremiumInfoEdit, handlePremiumInfoDelete}} /> )}
              </tbody>
          </table>
        </div>
        <TPagination {...{currentPage, totalPages, totalEntries, rowsPerPage, setCurrentPage, setRowsPerPage}} />
    </div>
    </div>
  );
};

export default ApprovedPremium;
