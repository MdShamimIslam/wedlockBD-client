import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseAdminStats = () => {
    const axiosSecure = useAxiosSecure();
   
    const{ data:adminStats} = useQuery({
        queryKey:['admin-stats'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/admin-stats`);
            return res.data;
        }
    });
    return adminStats;
};
export default UseAdminStats;