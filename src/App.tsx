import './App.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';
import DetailPage from '@/pages/DetailPage';
import WritePage from '@/pages/WritePage';
import CategoryPage from '@/pages/CategoryPage';

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
        path: '/detail/:id',
        element: <DetailPage />,
      },
      {
        path: '/write',
        element: <WritePage />,
      },
      {
        path: '/category/:id',
        element: <CategoryPage />,
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
