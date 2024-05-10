import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '/assets/logo.png';
import { sideLinks } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { addTitle } from '../features/headerSlice';
import { useEffect, useRef } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';
import { closeSideBar, logOutUser, toggleTheme } from '../features/userSlice';


const Sidebar = () => {
  const sideNavRef = useRef(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, isSideBarOpen, isDarkTheme } = useSelector((store) => store.user);
  const {user_name} = user?.user.user_metadata || {}
  function removeSlash(pathname) {
    return decodeURIComponent(
      pathname.startsWith('/') ? pathname.substring(1) : pathname
    );
  }
  
  useEffect(() => {
    dispatch(addTitle(removeSlash(location.pathname)));
  }, [dispatch, location.pathname]);

 

  useEffect(() => {
     function handleClickOutside(e) {
    if (sideNavRef.current && !sideNavRef.current.contains(e.target)) {
      dispatch(closeSideBar());
    }
  }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideNavRef])

  function logOut() {
    dispatch(logOutUser());
    navigate('/');
  }

  


  const dynamicStyles = isSideBarOpen ? 'translate-x-0' : '-translate-x-full';
  const sectionStyles = `flex absolute lg:static items-center flex-col h-screen lg:translate-x-0 flex-grow lg:w-1/5 w-3/5 bg-white dark:bg-slate-800 dark:text-white p-7 lg:mr-1 ${dynamicStyles}`;
  return (
    <section className={sectionStyles} ref={sideNavRef}>
      <div className='flex'>
        <h1 className='mb-5 flex justify-center items-center font-mont text-xl'>
          <img src={logo} alt='' className='w-7 h-7 mr-1' />
          {!user ? 'Griffin' : user_name}.io
        </h1>
      </div>

      <ul className=''>
        {sideLinks.map((sideLink) => {
          const { icon, name } = sideLink;
          return (
            <li key={name} className='flex items-center w-fit lg:py-4 py-3'>
              <NavLink
                to={name}
                className='cursor-pointer text-gray block flex items-center'
                onClick={()=>{dispatch(closeSideBar())}}>
                <img src={icon} className='block' />
                <p className=' ml-6 text-sm capitalize'>{name}</p>
              </NavLink>
            </li>
          );
        })}
        <div
          className='rounded-full w-8 h-8 bg-primary-1 flex items-center justify-center lg:hidden mt-4'
          onClick={() => {
            dispatch(toggleTheme());
          }}>
          {isDarkTheme ? (
            <BsMoonStars className='w-4 h-4 fill-gray' />
          ) : (
            <MdOutlineWbSunny className='w-4 h-4 fill-gray' />
          )}
        </div>
        {user ? (
          <p
            className='lg:hidden mt-4'
            onClick={() => {
              logOut(), dispatch(closeSideBar());
            }}>
            logout
          </p>
        ) : (
          ''
        )}
      </ul>
    </section>
  );
};

export default Sidebar;
