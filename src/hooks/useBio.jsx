import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useBio = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: bio = {}, refetch } = useQuery({
      queryKey: ["biodata-by-email", user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
        const res = await axiosSecure.get(`/biodatas/by-email?email=${user?.email}`);
        return res.data;
      },
    });
      return [bio,refetch];
};

export default useBio;