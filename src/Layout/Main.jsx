import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {    
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;