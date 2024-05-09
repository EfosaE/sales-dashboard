import settings from '/assets/settings 1.svg';
import notification from '/assets/notification.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, toggleSideBar, toggleTheme } from '../features/userSlice';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';
// import { toggleDropDown } from '../features/headerSlice';
// import Card from './Card';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';


const Header = () => {
  const navigate = useNavigate()

  const { title } = useSelector((store) => store.header);
  const { isDarkTheme, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  


  function handleTheme() {
    dispatch(toggleTheme());
  }
  function logOut() {
    dispatch(logOutUser());
    navigate('/')
  }
  function handleSidebar() {
    dispatch(toggleSideBar())
  }


  return (
    <header className='bg-white dark:bg-slate-800 dark:text-white h-fit px-4 py-6 text-center mb-4'>
      <div className='container mx-auto flex items-center justify-between capitalize'>
        <div className='lg:hidden ' onClick={handleSidebar}>
          <RxHamburgerMenu />
        </div>

        <h1>{title ? title : 'Overview'}</h1>
        <div
          className='bg-cover bg-center h-10 w-10 rounded-full lg:hidden block'
          style={{
            backgroundImage:
              'url(https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRT5yYl1V9lllChs2vKPHllzFAdgn8FXnN56lwgKRpU2OTFK6Ilut3fA-cY18Pulu3A1dS6yPsrrkkteLhvGRm~SC707~hTdXEQQq~26ZA5bmFCZYT7eedyG0ArRA7K906uKVGQCt7a6UgfztD4NMNqNmmPLRnRO-as3GIpDjz~RXqj3G0bQTdHBB9arj-BYnCbb69-6moFCkHN4beiTc54vLVzfHskBI5BAWZ6RivXFKd22Lo02a7JKO1oskGprZ3Wb8vgj06B4zG8vcI3cdd97283ZnDMeqlv7ZnjvmTApElXjWShVZRw0U4FGCYi7r5PYIIWZf6ofPABuUpz8GQ__)',
          }}></div>

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
            onClick={handleTheme}>
            {isDarkTheme ? (
              <BsMoonStars className='w-4 h-4 fill-gray' />
            ) : (
              <MdOutlineWbSunny className='w-4 h-4 fill-gray' />
            )}
          </div>
          <div
            className='bg-cover bg-center h-12 w-12 rounded-full hidden lg:block'
            style={{
              backgroundImage:
                'url(https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRT5yYl1V9lllChs2vKPHllzFAdgn8FXnN56lwgKRpU2OTFK6Ilut3fA-cY18Pulu3A1dS6yPsrrkkteLhvGRm~SC707~hTdXEQQq~26ZA5bmFCZYT7eedyG0ArRA7K906uKVGQCt7a6UgfztD4NMNqNmmPLRnRO-as3GIpDjz~RXqj3G0bQTdHBB9arj-BYnCbb69-6moFCkHN4beiTc54vLVzfHskBI5BAWZ6RivXFKd22Lo02a7JKO1oskGprZ3Wb8vgj06B4zG8vcI3cdd97283ZnDMeqlv7ZnjvmTApElXjWShVZRw0U4FGCYi7r5PYIIWZf6ofPABuUpz8GQ__)',
            }}></div>
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
