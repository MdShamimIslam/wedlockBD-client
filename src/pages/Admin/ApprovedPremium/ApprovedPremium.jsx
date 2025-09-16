import React from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import ApprovedPremiumTable from "./ApprovedPremiumTable";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ApprovedPremium = () => {
    const axiosSecure = useAxiosSecure();
    const { loading } = useAuth();
    // get premium biodatas by user email
    const { data: premiumData = [], refetch } = useQuery({
      queryKey: ["premiumData"],
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/premium-bio`
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

     // make premium to user bio
     const handleMakePremium =(email)=>{
        axiosSecure.patch(`/biodatas/premium/${email}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.result3.modifiedCount > 0){
                refetch();
                toast.success('Premium approved now!!')
            }
        })
    }

//   request bio delete
const handlePremiumInfoDelete =(_id,name)=>{
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
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
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
                       Make Premium
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
                {premiumData?.map((premium) => (
                  <ApprovedPremiumTable
                    key={premium._id}
                    premium={premium}
                    handleMakePremium={handleMakePremium}
                    handlePremiumInfoDelete={handlePremiumInfoDelete}
                  ></ApprovedPremiumTable>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedPremium;
