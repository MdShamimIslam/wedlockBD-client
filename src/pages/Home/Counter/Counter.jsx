import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const Counter = () => {
    const axiosPublic = useAxiosPublic();

  // get user stats biodatas
  const { data: stats = {} } = useQuery({
    queryKey: ["userStats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user-stats");
      return res.data;
    },
  });
    return (
        <div className='mt-16 mb-24 text-center w-full flex justify-center  '>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="w-[300px]   border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-xl text-center text-blue-700">
              Total Biodata
            </h6>
            <p className="text-4xl font-bold">{stats?.totalBiodata}</p>
          </div>
        </div>
        <div className="w-[300px]  border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-xl text-center text-blue-700">
              Female Biodata
            </h6>
            <p className="md:text-4xl text-3xl font-bold">{stats?.femaleBiodata}</p>
          </div>
        </div>
        <div className="w-[300px]   border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-xl text-center text-blue-700">
              Male Biodata
            </h6>
            <p className="text-4xl font-bold">{stats?.maleBiodata}</p>
          </div>
        </div>
        <div className="w-[300px]   border/10 p-4 md:p-5 rounded shadow-lg">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h6 className="font-bold text-xl text-center text-blue-700">
              Total Success Marriage
            </h6>
            <p className="text-4xl font-bold">{stats?.totalMarriageBiodata}</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Counter;