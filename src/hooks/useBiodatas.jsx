
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useBiodatas = () => {
    const axiosPublic = useAxiosPublic();
    const {loading} = useAuth();

    const { data: biodatas = [],refetch } = useQuery({
        queryKey: ["biodatas"],
        enabled:!loading,
        queryFn: async () => {
          const res = await axiosPublic.get("/biodatas");
          return res.data;
        },
      });
      return [biodatas,refetch];
};

export default useBiodatas;