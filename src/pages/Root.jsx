import { Outlet, redirect, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Root = () => {

  return (
    <div className='lg:flex '>
      <Sidebar />

      <div className='block lg:flex lg:flex-col lg:w-4/5'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
