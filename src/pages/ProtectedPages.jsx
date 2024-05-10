
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'


const ProtectedPages = () => {
  const { user } = useSelector((store) => store.user);

  // Conditionally render <Outlet /> only if the user is authenticated
  if (user) {
    return <Outlet />;
  } else {
    // If the user is not authenticated, use Navigate to redirect to the login page
    return <Navigate to='/login' />;
  }
}

export default ProtectedPages