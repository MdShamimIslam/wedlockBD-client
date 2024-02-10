import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import BiodataCard from "../../../Biodatas/BiodataCard";
import AOS from "aos";
import "aos/dist/aos.css";

const PremiumBio = () => {
  const axiosPublic = useAxiosPublic();

  // get biodatas
  const { data: biodatas = [] } = useQuery({
    queryKey: ["premiumBiodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/limit-biodatas");
      return res.data;
    },
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="lg:w-9/12 md:w-10/12 w-full mx-auto" data-aos="flip-left" data-aos-duration="2000">
      <h3 className="text-blue-600 lg:text-4xl md:3xl text-2xl font-semibold text-center">
        We have numerous premium members.Among them, only six members have been
        highlighted.
      </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 md:mt-10 mb-16">
        {biodatas?.map((biodata) => (
          <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>
        ))}
      </div>
    </div>
  );
};

export default PremiumBio;
