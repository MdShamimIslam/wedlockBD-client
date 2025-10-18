import { Outlet } from 'react-router-dom';
import ActionButton from './ActionButton';

const AdminSettings = () => {
  return (
      <>
        <Outlet/>
        <ActionButton/>
    </>
  );
};

export default AdminSettings;