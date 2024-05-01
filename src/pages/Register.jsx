import { Form, Link, redirect } from 'react-router-dom';
import logo from '../assets/logo.png';
import supabase from '../utils/supabase';
import { toast } from 'react-toastify';


  // eslint-disable-next-line react-refresh/only-export-components
  export const action = async ({ request }) => {
    const formData = await request.formData();
    const userData = Object.fromEntries(formData);
  
    try {
      const {data, error} = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            user_name: userData.name, 
          },
        },
      });
      toast.success('account created successfully');
      return redirect('/login');
    } catch (error) {
      const errorMessage =
        error.message ||
        'please double check your credentials';
      toast.error(errorMessage);
      return null;
    }
  };

export default function Register() {

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img className='mx-auto h-10 w-auto' src={logo} alt='Your Company' />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign up to my dashboard
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <Form className='space-y-6 text-black' method='POST'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Username
              </label>
              <div className='mt-2'>
                <input
                  id='name'
                  name='name'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Register
              </button>
            </div>
          </Form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Already have an account?
            <Link
              to='/login'
              className='font-semibold ml-2 leading-6 text-blue-800 hover:text-indigo-500'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
