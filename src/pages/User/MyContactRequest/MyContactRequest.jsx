import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import THead from "./THead";
import TRow from "./TRow";
import EmptyState from "../../../component/EmptyState";
import { Mail } from "lucide-react";
import TPagination from "../../../component/common/TPagination";
import usePagination from "../../../hooks/usePagination";
import { Helmet } from "react-helmet-async";

const MyContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  
  const { data: requestData = [] } = useQuery({
    queryKey: ["requestBiodata", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get( `/contact-request?email=${user?.email}`);
      return res.data;
    }
  });

  const { currentData, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage, totalPages, totalEntries } = usePagination(requestData, 10);

  if (requestData?.length === 0) {
    return (
      <EmptyState
      icon={Mail}
      title="You haven’t sent any contact requests yet"
      description="Once you send a request to someone, it will appear here in your list."
      linkText="Browse Profiles"
      path="/biodatas"
    />
    );
  }

  return (
    <>
    <Helmet>
        <title>My Contact Request | WedlockBD</title>
    </Helmet>

    <div className="overflow-hidden w-full lg:max-w-[1500px] mx-auto mt-4">
        <div className="overflow-x-auto">
          <table className="bg-white min-w-full">
              <THead/>
              <tbody className="whitespace-nowrap divide-y divide-gray-200">
              { currentData?.map((request) => <TRow key={request._id} request={request} /> )}
              </tbody>
          </table>
        </div>
        <TPagination {...{currentPage, totalPages, totalEntries, rowsPerPage, setCurrentPage, setRowsPerPage}} />
    </div>
    </>
   
  )
}

export default MyContactRequest;
