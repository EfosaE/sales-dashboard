import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { sideLinks } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { addTitle } from '../features/headerSlice';
import { useEffect } from 'react';
import { toggleSideBar } from '../features/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
      const { user, isSideBarOpen } = useSelector((store) => store.user);
  function removeSlash(pathname) {
    return decodeURIComponent(pathname.startsWith('/') ? pathname.substring(1) : pathname);
  }
  function handleSidebar() {
    dispatch(toggleSideBar())
  }
  useEffect(() => {
    dispatch(addTitle(removeSlash(location.pathname)));
  }, [dispatch, location.pathname]);


  const dynamicStyles = isSideBarOpen ? 'translate-x-0' : '-translate-x-full'
  const sectionStyles = `flex absolute lg:static items-center flex-col h-screen lg:translate-x-0 flex-grow lg:w-1/5 w-3/5 bg-white dark:bg-slate-800 dark:text-white p-7 lg:mr-1 ${dynamicStyles}`;
  return (
    <section className={sectionStyles}>
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
                onClick={handleSidebar}>
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
