import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useLast7DaysViews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  return useQuery({
    queryKey: ["last7daysViews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/profile-views/last7days?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email
  });

};

export default useLast7DaysViews;
