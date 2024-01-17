import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BiodataCard from './BiodataCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Biodatas = () => {
    const axiosPublic = useAxiosPublic();

    // get biodatas 
    const {data:biodatas=[]} = useQuery({
        queryKey:['biodatas'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/biodatas');
            const premiumBiodatas = res?.data?.filter(biodata=>biodata.premium_status === true)
            return premiumBiodatas;
        }
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                biodatas?.map(biodata =><BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
            }
        </div>
    );
};

export default Biodatas;