import logo from '../assets/logo.png';
import { sideLinks } from '../data';
const Sidebar = () => {
  return (
    <section className='w-1/5 bg-white h-screen p-7 px-10 flex items-center flex-col'>
      <h1 className='mb-5 flex justify-center items-center font-mont text-2xl'>
        <img src={logo} alt='' className='w-7 h-7 mr-4' />
        Griffin.io
      </h1>
      <ul className=''>
        {sideLinks.map((sideLink) => {
          const { icon, name, url } = sideLink;
          return (
            <li
              key={name}
              className='flex items-center w-fit py-6 '>
              <img src={icon} alt='' className='flex-initial' />

              <a
                href={url}
                className='capitalize text-sm cursor-pointer text-gray ml-6'>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
