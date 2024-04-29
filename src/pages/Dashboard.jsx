import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <section className='container mx-auto grid grid-cols-3 gap-x-4 gap-y-2 py-4'>
      <div className='flex flex-col gap-y-2'>
        <h3>My Cards</h3>
        <div className='bg-gradient-to-r from-[#0A06F4] to-[#4C49ED] h-[235px] rounded-3xl'></div>
      </div>
      <div className='flex flex-col gap-y-2 justify-center'>
        <div className='flex justify-end'>
          <Link to='/register' className='text-xs'>
            See All
          </Link>
        </div>
        <div className='bg-white h-[235px] rounded-3xl'></div>
      </div>
      <div className='flex flex-col gap-y-2 -mt-0.5'>
        <h3>Recent Transactions</h3>
        <div className='bg-white h-[235px] rounded-3xl'></div>
      </div>
      <div className='flex flex-col gap-y-2 col-span-2'>
        <h3>Weekly Activity</h3>
        <div className='bg-white h-[235px] rounded-3xl'></div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h3>Expense Statistics</h3>
        <div className='bg-white h-[235px] rounded-3xl'></div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h3>Quick Transfer</h3>
        <div className='bg-white h-[235px] rounded-3xl'>y</div>
      </div>
      <div className='flex flex-col gap-y-2 col-span-2'>
        <h3>Balance History</h3>
        <div className='bg-white h-[235px] rounded-3xl'>y</div>
      </div>
    </section>
  );
};

export default Dashboard;
