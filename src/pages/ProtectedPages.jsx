import  { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'


const ProtectedPages = () => {
   const {  user } = useSelector((store) => store.user);
    const navigate = useNavigate();
    useEffect(() => {
      if (!user) {
        navigate('/login');
      }
    
    }, [])
    
      
  return (
    <Outlet/>
  )
}

export default ProtectedPages