import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Heading from "../../../components/common/Heading";
import { secCl } from "../../../utils/options";
import HomeBiodataCard from "./HomeBiodataCard";
import Loading from "../../../components/Loading";

const PremiumBio = () => {
  const axiosPublic = useAxiosPublic();

  // get biodatas
  const { data: biodatas = [] } = useQuery({
    queryKey: ["premiumBiodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas/byLimit");
      return res?.data;
    },
  });


  return (
    <div className={secCl}>
          <Heading
            title="Premium Profiles"
            desc="Explore our premium profiles for a special selection of verified and trusted individuals."
          />

          {biodatas.length === 0 && <Loading />}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biodatas.map((biodata) => (
              <HomeBiodataCard key={biodata._id} biodata={biodata} />
            ))}
          </div>
        </div>
  );
};

export default PremiumBio;
