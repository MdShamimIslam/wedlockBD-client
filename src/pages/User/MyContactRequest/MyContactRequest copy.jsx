import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import RequestDataTable from "./RequestDataTable";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useBio from "../../../hooks/useBio";


const MyContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  // get biodatas by user email
  const { data: requestData = [], refetch } = useQuery({
    queryKey: ["requestBiodata", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contact-request?email=${user?.email}`
      );

      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center my-80">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
      </div>
    );
  }

//   request bio delete
const handleRequestInfoDelete =(_id,name)=>{
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

const [bio] = useBio();

  return (
    <div className="">
      <Helmet>
        <title> My Contact Request| WedlockBD</title>
      </Helmet>
        <div className='container mx-auto px-4 sm:px-8'>
          {
            bio && bio?.biodata_id ?<div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                      Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Biodata Id
  
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       Contact Email
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                      Contact Number
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                         Status
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Delete
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                  {requestData?.map((requestInfo) => (
                    <RequestDataTable
                      key={requestInfo._id}
                      requestInfo={requestInfo}
                      handleRequestInfoDelete={handleRequestInfoDelete}
                    ></RequestDataTable>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
            : 
            <div className="flex justify-center my-80">
              <h3 className="font-bold text-4xl">
              You have not sent any requests yet !!
              </h3>
            </div>
          }
        
      </div>
    </div>
  );
};

export default MyContactRequest;
