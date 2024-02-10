import React from 'react';
import logo from '../../../assets/logo/wedlock.png'
import { FaFacebook,FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-slate-100 py-12 ">
            <div className='flex place-items-center flex-col space-y-6 lg:space-y-0 lg:flex-row justify-center lg:justify-evenly'>
            <div>
                <img className='w-[80px] lg:-ml-4 md:-ml-12 -ml-16' src={logo} alt="" />
                <h3 className=" lg:-mt-2 md:-ml-8 -ml-10">Providing reliable tech since 2020</h3>
            </div>
            <div>
                <h3 className="lg:text-xl text-lg font-bold mb-2">GET IN TOUCH</h3>
                <p>Email : mdshamimislam01738740639@gmail.com</p>
                <p>Phone : 01738740639</p>
                <p>Address : Jamal,Sundarganj,Gaibandha</p>
            </div>
            <div className='-ml-48 md:-ml-48 lg:-ml-0'>
                <h3 className="lg:text-xl text-lg font-bold">FIND ON</h3>
                <div className="flex gap-3 text-xl mt-4 cursor-pointer">
                <FaFacebook className='hover:text-purple-600'/>
                <FaLinkedin className='hover:text-purple-600'></FaLinkedin>
                <FaTwitter className='hover:text-purple-600'></FaTwitter>
                </div>
            </div>
            
        </div>
        <div  className='text-center mt-16'>
        <small>Copyright © 2024 - All right reserved by Muhammad Shamim Islam</small>
        </div>
        </div>
    );
};

export default Footer;