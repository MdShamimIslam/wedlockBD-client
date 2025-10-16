import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TableHead from "../../../component/common/TableHead";
import { tHeadAdminApprovedPremium } from "../../../utils/options";
import EmptyState from "../../../component/EmptyState";
import { Crown } from "lucide-react";
import TPagination from "../../../component/common/TPagination";
import usePagination from "../../../hooks/usePagination";
import TRow from "./TRow";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ApprovedPremium = () => {
    const axiosSecure = useAxiosSecure();

    const { data: premiumCollectionData = [], refetch } = useQuery({
      queryKey: ["premium-collection-data"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/premium-bio`);
        return res.data;
      },
    });

    const { currentData, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage, totalPages, totalEntries } = usePagination(premiumCollectionData, 10);
  
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
          title: "Do you want to make this profile Premium?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Yes, make premium",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#2563eb", 
          cancelButtonColor: "#6b7280",
        });
    
        if (!result.isConfirmed) return;

        const res = await axiosSecure.patch(`/premium-bio/${biodataId}`);
    
        if (res.data?.success) {
          refetch();
          toast.success(res.data?.message || "Premium approved successfully!");
        } 
        else if (res.data?.modifiedCount > 0 || res.data?.result3?.modifiedCount > 0) {
          refetch();
          toast.success("Premium approved successfully!");
        } 
        else if (res.data?.message) {
          toast.warning(res.data.message);
        } 
        else {
          toast.error("No changes were made. Try again!");
        }
      } 
      catch (error) {
        toast.error(error.response?.data?.error || "Something went wrong while updating premium status!");
      }
    };
    
    const handlePremiumInfoDelete = (_id,name) => {
      Swal.fire({
        title: "Are you sure?",
        text: `You want to delete ${name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/premium-bio/${_id}`).then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully",
                icon: "success",
              });
            }
          });
      
        }
      });
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
