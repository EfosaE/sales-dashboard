import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { sideLinks } from '../data';
import { useDispatch } from 'react-redux';
import { addTitle } from '../features/headerSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <section className='flex items-center flex-col flex-grow  w-1/5 bg-white dark:bg-slate-800 dark:text-white p-7 mr-1 h overflow-hidden'>
      <h1 className='mb-5 flex justify-center items-center font-mont text-2xl'>
        <img src={logo} alt='' className='w-7 h-7 mr-1' />
        Griffin.io
      </h1>
      <ul className=''>
        {sideLinks.map((sideLink) => {
          const { icon, name, url } = sideLink;
          return (
            <li key={name} className='flex items-center w-fit py-4 '>
              <NavLink
                to={url}
                className='cursor-pointer text-gray block flex items-center'
                onClick={() => {
                  dispatch(addTitle(name));
                }}>
                <img src={icon} className='block' />
                <p className=' ml-6 text-sm'>{name}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
