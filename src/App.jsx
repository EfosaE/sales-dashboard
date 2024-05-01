import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Loans from './pages/Loans';
import Services from './pages/Services';
import Settings from './pages/Settings';
import Investments from './pages/Investments';
import CreditCards from './pages/CreditCards';
import Login, { action as loginAction } from './pages/Login';
import Register, { action as registerAction } from './pages/Register';
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { store } from './store';
import ProtectedPages from './pages/ProtectedPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        element: <ProtectedPages />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
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
            element: <Settings />,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    action: loginAction(store),
  },
  {
    path: 'register',
    element: <Register />,
    action: registerAction,
  },
]);

function App() {
  const { isDarkTheme } = useSelector((store) => store.user);
  return (
    <>
      <ToastContainer theme={isDarkTheme ? 'dark' : 'light'} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
