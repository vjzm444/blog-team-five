import './App.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';
import SinglePage from '@/pages/SinglePage';
import WritePage from '@/pages/WritePage';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='layout'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/post/:id',
        element: <SinglePage />,
      },
      {
        path: '/write',
        element: <WritePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
