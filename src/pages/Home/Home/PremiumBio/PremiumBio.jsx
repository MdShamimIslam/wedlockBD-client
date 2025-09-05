import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import BiodataCard from "../../../Biodatas/BiodataCard";
import Heading from "../../../../component/common/Heading";

const PremiumBio = () => {
  const axiosPublic = useAxiosPublic();

  // get biodatas
  const { data: biodatas = [] } = useQuery({
    queryKey: ["premiumBiodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/limit-biodatas");
      return res?.data;
    },
  });


  return (
      <section className="my-16 md:my-20 lg:my-28">
        <div className="px-4 sm:px-6 lg:px-8">
          <Heading
            title="Premium Profiles"
            desc="Explore our premium profiles for a special selection of verified and trusted individuals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biodatas.map((biodata) => (
              <BiodataCard key={biodata._id} biodata={biodata} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default PremiumBio;
