import { useNavigation } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

// eslint-disable-next-line react/prop-types
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span>
            <TailSpin
              visible={true}
              height='20'
              width='20'
              color='#fff'
              ariaLabel='tail-spin-loading'
              radius='1'
              wrapperStyle={{
                marginRight:'1rem'
              }}
              wrapperClass=''
            />
          </span>
          processing
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitBtn;
