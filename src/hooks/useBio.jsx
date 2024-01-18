import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useBio = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: bio={} } = useQuery({
        queryKey: ["queryBio"],
        enabled:!loading,
        queryFn: async () => {
          const res = await axiosSecure.get(`/v1/biodatas?email=${user?.email}`);
          return res.data;
        },
      });
      return [bio];
};

export default useBio;