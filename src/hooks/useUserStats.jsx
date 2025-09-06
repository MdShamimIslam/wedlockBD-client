import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useUserStats = () => {
    const axiosPublic = useAxiosPublic();

  const { data: userStats = {} } = useQuery({
        queryKey: ["userStats"],
        queryFn: async () => {
            const res = await axiosPublic.get("/user-stats");
            return res.data;
        },
    });
    return userStats;
};

export default useUserStats;