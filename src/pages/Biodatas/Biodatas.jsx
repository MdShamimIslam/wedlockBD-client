import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BiodataCard from "./BiodataCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);

  // get biodatas
  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      setLoading(false);
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

  return (
    <div>
      <Helmet>
        <title>Biodatas | WedlockBD</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-16">
        {biodatas?.map((biodata) => (
          <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
