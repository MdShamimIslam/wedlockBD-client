import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useBio = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: bio = {}, refetch, isLoading } = useQuery({
      queryKey: ["biodata-by-email", user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
        try {
          const res = await axiosSecure.get(`/biodatas/byMail?email=${user?.email}`);
          return res?.data;
        } catch (error) {
          if (error.response?.status === 404) {
            return {}; 
          }
          throw error; 
        }
      },
    });
    
    return {bio,refetch, isLoading};
};

export default useBio;