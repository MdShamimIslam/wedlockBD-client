import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSuccessStory = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data: stories=[] } = useQuery({
        queryKey: ["successStories"],
        queryFn: async () => {
            const res = await axiosPublic.get('/success-stories');
            return res.data;
        },
      });
      return [stories];
};

export default useSuccessStory;