import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='mix-w-7xl mx-auto'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;