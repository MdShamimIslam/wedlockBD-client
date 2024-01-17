import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BiodataCard from './BiodataCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

const Biodatas = () => {
    const axiosPublic = useAxiosPublic();

    // get biodatas 
    const {data:biodatas=[]} = useQuery({
        queryKey:['biodatas'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/biodatas');
            return res.data;
        }
    })
    return (
        <div>
            <Helmet>
        <title>Biodatas | WedlockBD</title>
      </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-16'>
            {
                biodatas?.map(biodata =><BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)
            }
        </div>
        </div>
    );
};

export default Biodatas;