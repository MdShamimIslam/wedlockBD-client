import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCheckContactRequestStatus = (biodataId) => {
    const axiosSecure = useAxiosSecure();

    const { data: requested = false, } = useQuery({
        queryKey: ["check-contact-status", biodataId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contact-request/check-status/${biodataId}`);
            return res.data?.requested;
        },
    });
    return requested;
};

export default useCheckContactRequestStatus;