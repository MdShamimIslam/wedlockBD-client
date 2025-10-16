import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import TPagination from "../../../component/common/TPagination";
import EmptyState from "../../../component/EmptyState";
import usePagination from "../../../hooks/usePagination";
import TableHead from "../../../component/common/TableHead";
import { Users } from "lucide-react";
import { tHeadAdminMangeUser } from "../../../utils/options";
import TRow from "./TRow";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const { currentData, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage, totalPages, totalEntries } = usePagination(users, 10);
  
  if (users?.length === 0) {
    return (
      <EmptyState
        icon={Users}
        title="No Users Found"
        description="No users available to manage right now."
        linkText="Go to Dashboard Overview"
        path="/dashboard/admin-overview"
      />
    );
  }

  
  
  const handleMakeAdmin = async (_id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to grant admin privileges to this user.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#593994",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make Admin",
        cancelButtonText: "Cancel",
        background: "#fff",
        color: "#111827",
      });
  
      if (result.isConfirmed) {
        const res = await axiosSecure.put(`/users/${_id}`, { role: "admin" });
  
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: "User is now an Admin.",
            icon: "success",
            confirmButtonColor: "#2563eb",
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            title: "No changes made",
            text: "This user might already be an Admin.",
            icon: "info",
            confirmButtonColor: "#2563eb",
          });
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while making this user an Admin.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  const handleDeleteUser = (_id,name) => {
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
          axiosSecure.delete(`/users/${_id}`).then((data) => {
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
  };
 

  return (
    <div>
      <Helmet>
        <title> Manage Users | WedlockBD</title>
      </Helmet>

      <div className="overflow-hidden w-full lg:max-w-[1500px] mx-auto mt-4">
        <div className="overflow-x-auto">
          <table className="bg-white min-w-full">
              <TableHead headOptions={tHeadAdminMangeUser} />
              <tbody className="whitespace-nowrap divide-y divide-gray-200">
              { currentData?.map((user) => <TRow key={user._id} {...{user, handleMakeAdmin, handleDeleteUser}} /> )}
              </tbody>
          </table>
        </div>
        <TPagination {...{currentPage, totalPages, totalEntries, rowsPerPage, setCurrentPage, setRowsPerPage}} />
      </div>
    </div>
  );
};

export default ManageUsers;
