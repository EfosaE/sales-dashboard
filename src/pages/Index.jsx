import { Link } from "react-router-dom";


const Index = () => {
  return (
    <div className='flex flex-col m-y-auto justify-center leading-8 lg:leading-10 container'>
      <h1 className='mb-4'>
        Hey there! Welcome to Griffins built dashboard,{' '}
        <i>yes my nickname is Griffin </i> &#127773;.
      </h1>
      <p>
        This is a dummy sales and chart display.
        <br />
        <i>
          Dummy because would you like to share your bank information with me?
          of course not!
        </i>
        <br />
        My main aim was to test my frontend skills with my use of BaaS (Backend
        as a service) <br />
        So, please{' '}
        <Link to='register' className='text-blue-800'>
          register
        </Link>{' '}
        or{' '}
        <Link to='login' className='text-blue-800'>
          login
        </Link>{' '}
              to gain access &#128522;.
              It wont take time, trust me!
      </p>
    </div>
  );
}

export default Index