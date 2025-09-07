import { FiPhone } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";



import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/wedlock.png';
import { footerSections, socialLinks } from '../../../utils/options';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:gap-12 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-2 mt-[-20px]">
                            <img className='w-20 ml-[-24px]' src={logo} alt="logo-image" />
                            <Link to="/"><span className="text-2xl lg:text-3xl font-bold ml-[-10px]" style={{ marginLeft: "-10px" }}>WedlockBD</span></Link>
                        </div>

                        <p dangerouslySetInnerHTML={{ __html: "Bangladesh's most trusted matrimony platform helping thousands of people find their perfect life partner. Join our community and start your journey towards a happy marriage." }} className="text-gray-300 mb-6 font-sans leading-relaxed">

                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <FiPhone className="h-5 w-5 text-primary-500" />
                                <span>+880 1571529918</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <MdOutlineMarkEmailUnread className="h-5 w-5 text-primary-500" />
                                <span>shamim401897@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <RiMapPinLine className="h-5 w-5 text-primary-500" />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold mb-6 text-white">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-300 hover:hover:text-pink-400 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>


                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-300 mb-6 ">
                            Subscribe to get the latest success stories and matrimony tips
                        </p>
                        <div className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                            />
                            <button
                                className="bg-gradient-to-r from-pink-700 via-black-500 to-black-500  hover:bg-gradient-to-r hover:from-black-500 hover:via-black-500 hover:to-pink-700  text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="text-gray-300 text-sm mb-4 md:mb-0">
                            © {currentYear} WedlockBD. All rights reserved. Made with ❤️ for finding true love.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-sm mr-2">Follow:</span>
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="text-gray-400 hover:text-pink-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;