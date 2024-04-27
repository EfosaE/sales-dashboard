import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { sideLinks } from '../data';
import { useDispatch } from 'react-redux';
import { addTitle } from '../features/headerSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <section className='w-1/5 bg-white h-screen p-7 px-10 flex items-center flex-col mr-1'>
      <h1 className='mb-5 flex justify-center items-center font-mont text-2xl'>
        <img src={logo} alt='' className='w-7 h-7 mr-1' />
        Griffin.io
      </h1>
      <ul className=''>
        {sideLinks.map((sideLink) => {
          const { icon, name, url } = sideLink;
          return (
            <li key={name} className='flex items-center w-fit py-6 '>
              <img src={icon} alt='' className='flex-initial' />

              <NavLink
                to={url}
                className='capitalize text-sm cursor-pointer text-gray ml-6'
                onClick={() => {
                  dispatch(addTitle(name));
                }}>
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
