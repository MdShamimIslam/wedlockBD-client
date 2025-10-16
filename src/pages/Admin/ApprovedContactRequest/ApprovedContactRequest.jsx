import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import EmptyState from "../../../component/EmptyState";
import usePagination from "../../../hooks/usePagination";
import TableHead from "../../../component/common/TableHead";
import TPagination from "../../../component/common/TPagination";
import TRow from "./TRow";
import { tHeadAdminApprovedContactRequest } from "../../../utils/options";
import { CheckCircle } from "lucide-react";

const ApprovedContactRequest = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allContactRequest = [], refetch } = useQuery({
      queryKey: ["all-contact-request"],
      queryFn: async () => {
        const res = await axiosSecure.get( `/contact-request/all` );
        return res.data;
      },
    });


  const { currentData, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage, totalPages, totalEntries } = usePagination(allContactRequest, 10);
  
  if (allContactRequest?.length === 0) {
    return (
      <EmptyState
        icon={CheckCircle}
        title="No Contact Requests"
        description="No contact requests pending for approval right now."
        linkText="Go to Dashboard Overview"
        path="/dashboard/admin-overview"
      />
    );
  }
  
  
  const handleApprovedRequest = async (_id) => {
    try {
      const confirm = await Swal.fire({
        title: "Approve Contact Request?",
        text: "Once approved, this user will be able to contact the biodata owner.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#2563eb",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve",
        cancelButtonText: "Cancel",
      });
  
      if (confirm.isConfirmed) {
        const res = await axiosSecure.patch(`/contact-request/${_id}`);
  
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Approved!",
            text: "The contact request has been successfully approved.",
            icon: "success",
            timer: 1800,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            title: "No Changes!",
            text: "This request was already approved or could not be updated.",
            icon: "info",
            timer: 1800,
            showConfirmButton: false,
          });
        }
      }
    } catch (error) {
      console.error("Approval Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while approving the contact request.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  

  const handleDeleteRequest =(_id,name)=>{
    Swal.fire({
        title: "Are you sure?",
        text: `You want to delete requester ${name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/contact-request/${_id}`).then((data) => {
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
        <title>Approved Contact Request | WedlockBD</title>
      </Helmet>
    
      <div className="overflow-hidden w-full lg:max-w-[1500px] mx-auto mt-4">
        <div className="overflow-x-auto">
          <table className="bg-white min-w-full">
              <TableHead headOptions={tHeadAdminApprovedContactRequest} />
              <tbody className="whitespace-nowrap divide-y divide-gray-200">
              { currentData?.map((requestData) => <TRow key={requestData._id} {...{requestData, handleApprovedRequest, handleDeleteRequest}} /> )}
              </tbody>
          </table>
        </div>
        <TPagination {...{currentPage, totalPages, totalEntries, rowsPerPage, setCurrentPage, setRowsPerPage}} />
      </div>
    </div>
  );
};

export default ApprovedContactRequest;
