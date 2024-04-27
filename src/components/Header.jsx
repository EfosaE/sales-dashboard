import settings from '../assets/settings 1.svg'
import notification from '../assets/notification.png'
import { useSelector } from 'react-redux';

const Header = () => {
     const { title } = useSelector((store) => store.header);
  return (
    <header className='bg-white h-fit flex p-4 items-center justify-between'>
          <h1>{title ? title: 'Overview'}</h1>
      <div className='flex'>
        <input
          type='text'
          className='rounded-3xl bg-primary-1 px-4 py-1 placeholder:text-xs'
          placeholder='search for something'
        />
        <div className='rounded-full w-12 h-12 bg-primary-1 flex items-center justify-center ml-4'>
          <img src={settings} />
        </div>
        <div className='rounded-full w-12 h-12 bg-primary-1 flex items-center justify-center mx-4'>
          <img src={notification} />
        </div>
        <div
          className='bg-cover bg-center h-12 w-12 rounded-full'
          style={{
            backgroundImage:
              'url(https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRT5yYl1V9lllChs2vKPHllzFAdgn8FXnN56lwgKRpU2OTFK6Ilut3fA-cY18Pulu3A1dS6yPsrrkkteLhvGRm~SC707~hTdXEQQq~26ZA5bmFCZYT7eedyG0ArRA7K906uKVGQCt7a6UgfztD4NMNqNmmPLRnRO-as3GIpDjz~RXqj3G0bQTdHBB9arj-BYnCbb69-6moFCkHN4beiTc54vLVzfHskBI5BAWZ6RivXFKd22Lo02a7JKO1oskGprZ3Wb8vgj06B4zG8vcI3cdd97283ZnDMeqlv7ZnjvmTApElXjWShVZRw0U4FGCYi7r5PYIIWZf6ofPABuUpz8GQ__)',
          }}></div>
      </div>
    </header>
  );
}

export default Header