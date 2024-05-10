import settings from '/assets/settings 1.svg';
import notification from '/assets/notification.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, openSideBar, toggleTheme } from '../features/userSlice';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';


const Header = () => {
  const navigate = useNavigate()

  const { title } = useSelector((store) => store.header);
  const { isDarkTheme, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  


 
  function logOut() {
    dispatch(logOutUser());
    navigate('/')
  }
  


  return (
    <header className='bg-white dark:bg-slate-800 dark:text-white h-fit px-2 py-6 text-center mb-4'>
      <div className='container mx-auto flex items-center justify-between capitalize'>
        <div className='lg:hidden ' onClick={() => {
          dispatch(openSideBar());
        }}>
          <RxHamburgerMenu />
        </div>

        <h1>{title ? title : 'Overview'}</h1>

        {user ?  <div
          className='bg-cover bg-center h-10 w-10 lg:hidden rounded-full '
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}></div> : <Link to='/login' className='dark:bg-white dark:text-black bg-slate-900 text-white px-4 py-2 rounded-md text-xs '>
            login
        </Link>}
       

        <div className='hidden lg:flex items-center space-x-4'>
          <input
            type='text'
            className='rounded-3xl bg-primary-1 px-4 py-1 placeholder:text-xs block w-fit '
            placeholder='search for something'
          />
          <div className='rounded-full w-8 h-8 bg-primary-1 lg:flex items-center justify-center hidden'>
            <img src={settings} className='w-4 h-4' />
          </div>
          <div className='rounded-full w-8 h-8 bg-primary-1 lg:flex items-center justify-center hidden'>
            <img src={notification} className='w-4 h-4' />
          </div>
          <div
            className='rounded-full w-8 h-8 bg-primary-1 lg:flex items-center justify-center hidden'
            onClick={() => {
              dispatch(toggleTheme());
            }}>
            {isDarkTheme ? (
              <BsMoonStars className='w-4 h-4 fill-gray' />
            ) : (
              <MdOutlineWbSunny className='w-4 h-4 fill-gray' />
            )}
          </div>
          {user && (
            <div
              className='bg-cover hidden bg-center h-12 w-12 rounded-full lg:block'
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              }}></div>
          )}
          <div className='hidden lg:block'>
            {user ? <button onClick={logOut}>logout</button> : ''}
          </div>
        </div>
      </div>
      <input
        type='text'
        className='rounded-3xl bg-primary-1 px-4 py-2 placeholder:text-xs block w-full mt-4 lg:hidden'
        placeholder='search for something'
      />
    </header>
  );
};

export default Header;
