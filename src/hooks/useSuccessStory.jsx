import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useSuccessStory = () => {
    const axiosSecure = useAxiosSecure();
    const { data: stories=[] } = useQuery({
        queryKey: ["successStories"],
        queryFn: async () => {
            const res = await axiosSecure.get('/successStories');
            return res.data;
        },
      });
      return [stories];
};

export default useSuccessStory;