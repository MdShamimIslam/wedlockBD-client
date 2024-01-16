import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div>
            <h3 className='text-3xl'>No found</h3>
            <Link to='/'>back to home</Link>
        </div>
    );
};

export default ErrorElement;