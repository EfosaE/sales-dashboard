import masterColour from '../assets/mastercolour.png';
import masterWhite from '../assets/masterwhite.png';
import blackChip from '../assets/black_chip_card.png';
import whiteChip from '../assets/Chip_Card.png';

import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className='col-span-2 flex flex-col gap-y-2 '>
      <div className='flex justify-between'>
        <p>My Cards</p>
        <Link to='/credit cards'>See All</Link>
      </div>

      <div className='flex overflow-x-scroll'>
        <div className='bg-gradient-to-r from-[#0A06F4] to-[#4C49ED] rounded-3xl flex lg:gap-y-4 xl:gap-y-8 flex-col lg:justify-between text-white lg:w-full  mr-2'>
          <div className='pt-6 px-7 lg:gap-y-4 xl:gap-y-8 flex flex-col'>
            <div className='flex justify-between items-center'>
              <div className=''>
                <p className='text-xs lato-light'>Balance </p>
                <p className='text-xl lato-regular '>5,234</p>
              </div>
              <img src={whiteChip} alt='' className='w-8 h-8 lg:w-10 lg:w-10' />
            </div>
            <div className='flex'>
              <div className='mr-20'>
                <p className='lato-thin lg:text-sm text-xs '>CARD HOLDER</p>
                <p className='lato-regular'>Griffin</p>
              </div>
              <div>
                <p className='lato-thin lg:text-sm text-xs '>VALID THRU</p>
                <p className='lato-regular'>12/24</p>
              </div>
            </div>
          </div>
          <div
            className='flex py-4 px-7 justify-between rounded-b-3xl'
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%)',
            }}>
            <p className='text-sm'>3778 **** **** 1234</p>
            <img src={masterColour} alt='' className='block w-8' />
          </div>
        </div>
        <div className='rounded-3xl bg-white flex lg:gap-y-4  xl:gap-y-8 flex-col justify-between text-black lg:w-full'>
          <div className='pt-6 px-7 lg:gap-y-4 xl:gap-y-8 flex flex-col'>
            <div className='flex justify-between '>
              <div className=''>
                <p className='text-xs lato-light'>Balance </p>
                <p className='text-xl lato-regular'>5,234</p>
              </div>
              <img src={blackChip} alt='' className='w-8 h-8 lg:w-10 lg:w-10' />
            </div>
            <div className='flex'>
              <div className='mr-20'>
                <p className='lato-thin lg:text-sm text-xs '>CARD HOLDER</p>
                <p className='lato-regular'>Griffin</p>
              </div>
              <div>
                <p className='lato-thin lg:text-sm text-xs '>VALID THRU</p>
                <p className='lato-regular'>12/24</p>
              </div>
            </div>
          </div>
          <div
            className='flex py-4 px-7 justify-between rounded-b-3xl'
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%)',
            }}>
            <p className='text-sm'>3778 **** **** 1234</p>
            <img src={masterWhite} alt='' className='block w-8' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
