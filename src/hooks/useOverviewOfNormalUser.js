import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const UseOverviewOfNormalUser = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const { data: overviewOfNormalUser = {} } = useQuery({
          queryKey: ["overviewOfNormalUser"],
          queryFn: async () => {
              const res = await axiosSecure.get(`/overview/normal-user?email=${user?.email}`);
              return res.data;
          },
      });
      return overviewOfNormalUser;
}

export default UseOverviewOfNormalUser;
