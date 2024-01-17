import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ContactRequest = () => {
    const biodata = useLoaderData();
    console.log(biodata);
    return (
        <div>
            contact request form here
        </div>
    );
};

export default ContactRequest;