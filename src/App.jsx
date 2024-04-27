import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import Transactions from './pages/Transactions'
import Accounts from './pages/Accounts'
import Loans from './pages/Loans';
import Services from './pages/Services';
import Settings from './pages/Settings';
import Investments from './pages/Investments';
import CreditCards from './pages/CreditCards';
import Login from './pages/Login';
import Register from './pages/Register';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'transactions',
        element: <Transactions />,
      },
      {
        path: 'accounts',
        element: <Accounts />,
      },
      {
        path: 'investments',
        element: <Investments />,
      },
      {
        path: 'credit cards',
        element: <CreditCards />,
      },
      {
        path: 'loans',
        element: <Loans />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'settings',
        element: <Settings/>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
