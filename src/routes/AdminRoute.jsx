import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';


const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    
    if (loading || isAdminLoading) {
      return (
        <div className="flex justify-center items-center my-80">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
      </div>
      );
    }
  
    if (user && isAdmin) {
      return children;
    }
  
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;