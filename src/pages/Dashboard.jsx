import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import paypal from '/assets/paypal.svg';
import finance from '/assets/finance_money.svg';
import transaction from '/assets/transaction.svg';
import BarChart from '../components/charts/BarChart';
import { employeesData } from '../data';
import Cards from '../components/Cards';
import PieChart from '../components/charts/PieChart';
import arrowRight from '/assets/arrow_right.svg';
import plane from '/assets/plane.png';
import LineChart from '../components/charts/LineChart';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  return (
    <section className='container mx-auto lg:grid lg:grid-cols-3 lg:gap-x-2 lg:gap-y-1 lg:py-2 xl:gap-x-4 xl:gap-y-2 xl:py-4'>
      <Cards />
      <div className='flex flex-col lg:gap-y-2 xl:-mt-0.5'>
        <h3>Recent Transactions</h3>
        <div className='bg-white  gap-y-6 rounded-3xl px-7 py-6 flex flex-col'>
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
          <div className='flex justify-between text-black items-center'>
            <img src={transaction} alt='' className='block' />
            <p className='inter-regular'>
              Deposit from my card <br />
              <span className='inter-thin text-xs'>21 Jan, 2024</span>
            </p>
            <p className='text-green-500'>800</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 col-span-2'>
        <h3>Weekly Activity</h3>
        <div className='bg-white h-[332px] rounded-3xl '>
          <div className='w-full h-full'>
            <BarChart />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h3>Expense Statistics</h3>
        <div className='bg-white h-[332px] rounded-3xl'>
          <div className='w-full h-full'>
            <PieChart />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h3>Quick Transfer</h3>
        <div className='bg-white rounded-3xl px-7 py-6 inter-regular text-xs flex flex-col gap-y-4 justify-between'>
          <div className='flex justify-between '>
            {employeesData.map(({ name, title, image }) => {
              return (
                <div
                  className='flex flex-col items-center justify-center '
                  key={name}>
                  <div
                    className='bg-cover bg-center h-12 w-12 rounded-full mb-4'
                    style={{
                      backgroundImage: `url(${image})`,
                    }}></div>
                  <p className='text-[#232323]'>{name}</p>
                  <p className='text-[#718EBF]'>{title}</p>
                </div>
              );
            })}
            <img src={arrowRight} alt='' className='xl:block hidden' />
          </div>

          <input
            type='text'
            className='placeholder:text-[#718EBF] rounded-full placeholder:text-xs w-full block py-1'
            placeholder='amount to send'
          />
          <button className='bg-[#1814F3] py-3 px-4 rounded-full -rounded-l-[9999px] w-full block'>
            <p>
              Send <img src={plane} alt='' className='inline' />
            </p>
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 col-span-2'>
        <h3>Balance History</h3>
        <div className='bg-white h-[250px] rounded-3xl '>
          <div className='w-full h-full'>
            <LineChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
