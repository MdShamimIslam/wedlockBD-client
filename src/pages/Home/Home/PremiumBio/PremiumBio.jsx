import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import BiodataCard from '../../../Biodatas/BiodataCard';

const PremiumBio = () => {
    const axiosPublic = useAxiosPublic();

    // get biodatas 
    const {data:biodatas=[]} = useQuery({
        queryKey:['premiumBiodatas'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/limit-biodatas');
            return res.data;
        }
    })
    return (
        <div>
            <h3 className="md:text-4xl text-3xl  font-semibold text-center">Our Premium Members</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 md:mt-10 mb-16'>
            {
                biodatas?.map(biodata =><BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
            }
        </div>
        </div>
    );
};

export default PremiumBio;