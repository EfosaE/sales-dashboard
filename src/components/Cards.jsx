import masterColour from '../assets/mastercolour.png';
import masterWhite from '../assets/masterwhite.png';
import blackChip from '../assets/black_chip_card.png';
import whiteChip from '../assets/Chip_Card.png';
import paypal from '../assets/paypal.svg';
import finance from '../assets/finance_money.svg';
import transaction from '../assets/transaction.svg';
import { Link,} from 'react-router-dom';

const Cards = () => {
  return (
    <div className=''>
      <div className='flex flex-col gap-y-2'>
        <h3>My Cards</h3>
        <div className='bg-gradient-to-r from-[#0A06F4] to-[#4C49ED] rounded-3xl flex lg:gap-y-4 xl:gap-y-8 flex-col justify-between text-white'>
          <div className='pt-6 px-7 lg:gap-y-4 xl:gap-y-8 flex flex-col'>
            <div className='flex justify-between '>
              <div className=''>
                <p className='text-xs lato-light'>Balance </p>
                <p className='text-xl lato-regular'>5,234</p>
              </div>
              <img src={whiteChip} alt='' className='w-10' />
            </div>
            <div className='flex'>
              <div className='mr-20'>
                <p className='lato-thin text-sm '>CARD HOLDER</p>
                <p className='lato-regular'>Griffin</p>
              </div>
              <div>
                <p className='lato-thin text-sm'>VALID THRU</p>
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
            <p>3778 **** **** 1234</p>
            <img src={masterColour} alt='' className='block' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 '>
        <div className='flex justify-end'>
          <Link to='/credit cards' className='text-sm'>
            See All
          </Link>
        </div>
        <div className='rounded-3xl bg-white flex lg:gap-y-4  xl:gap-y-8 flex-col justify-between text-black'>
          <div className='pt-6 px-7 lg:gap-y-4 xl:gap-y-8 flex flex-col'>
            <div className='flex justify-between '>
              <div className=''>
                <p className='text-xs lato-light'>Balance </p>
                <p className='text-xl lato-regular'>5,234</p>
              </div>
              <img src={blackChip} alt='' className='w-10' />
            </div>
            <div className='flex'>
              <div className='mr-20'>
                <p className='lato-thin text-sm '>CARD HOLDER</p>
                <p className='lato-regular'>Griffin</p>
              </div>
              <div>
                <p className='lato-thin text-sm'>VALID THRU</p>
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
            <p>3778 **** **** 1234</p>
            <img src={masterWhite} alt='' className='block' />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:gap-y-2 xl:-mt-0.5'>
        <h3>Recent Transactions</h3>
        <div className='bg-white lg:gap-y-8 xl:gap-y-6 rounded-3xl px-7 py-6 flex flex-col'>
          <div className='flex justify-between text-black items-center'>
            <img src={transaction} alt='' className='block' />
            <p className='inter-regular'>
              Deposit from my card <br />
              <span className='inter-thin text-xs'>21 Jan, 2024</span>
            </p>
            <p className='text-red-500'>800</p>
          </div>
          <div className='flex justify-between text-black items-center'>
            <img src={transaction} alt='' className='block' />
            <p className='inter-regular'>
              Deposit from my card <br />
              <span className='inter-thin text-xs'>21 Jan, 2024</span>
            </p>
            <p className='text-green-500'>800</p>
          </div>
          <div className='xl:flex xl:justify-between xl:text-black xl:items-center hidden'>
            <img src={transaction} alt='' className='block' />
            <p className='inter-regular'>
              Deposit from my card <br />
              <span className='inter-thin text-xs'>21 Jan, 2024</span>
            </p>
            <p className='text-green-500'>800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
