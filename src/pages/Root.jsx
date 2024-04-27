import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Root = () => {
  return (
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col w-4/5'>
          <Header />
          <Outlet />
        </div>
      </div>
  );
};

export default Root;
