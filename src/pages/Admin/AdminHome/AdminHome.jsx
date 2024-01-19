import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    return (
        <div className=" flex items-center justify-center my-44">
      <Helmet>
        <title> Admin Dashboard| WedlockBD</title>
      </Helmet>
      <h3 className="text-3xl font-semibold">Upcoming...............</h3>
    </div>
    );
};

export default AdminHome;