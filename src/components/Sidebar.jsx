import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { sideLinks } from '../data';
import { useDispatch } from 'react-redux';
import { addTitle } from '../features/headerSlice';
import { useEffect } from 'react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  function removeSlash(pathname) {
    return decodeURIComponent(pathname.startsWith('/') ? pathname.substring(1) : pathname);
  }
  useEffect(() => {
    dispatch(addTitle(removeSlash(location.pathname)));
  }, [dispatch, location.pathname]);

  return (
    <section className='hidden lg:flex lg:items-center lg:flex-col lg:flex-grow lg:w-1/5 bg-white dark:bg-slate-800 dark:text-white p-7 mr-1 '>
      <h1 className='mb-5 flex justify-center items-center font-mont text-2xl'>
        <img src={logo} alt='' className='w-7 h-7 mr-1' />
        Griffin.io
      </h1>
      <ul className=''>
        {sideLinks.map((sideLink) => {
          const { icon, name } = sideLink;
          return (
            <li key={name} className='flex items-center w-fit py-4 '>
              <NavLink
                to={name}
                className='cursor-pointer text-gray block flex items-center'
                onClick={() => {}}>
                <img src={icon} className='block' />
                <p className=' ml-6 text-sm capitalize'>{name}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
