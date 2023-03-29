import './App.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Error from '@/pages/error/Error';
import Home from '@/pages/home/Home';
import Register from '@/pages/auth/Register';
import Login from '@/pages/auth/Login';
import Detail from '@/pages/detail/Detail';
import Write from '@/pages/write/Write';
import Category from '@/pages/category/Category';
import Search from '@/pages/search/Search';
import useSearchModal from '@/hooks/useSearchModal';

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
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
      {
        path: '/write',
        element: <Write />,
      },
      {
        path: '/search/',
        element: <Search />,
      },
      {
        path: '/category/:id',
        element: <Category />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  const { open } = useSearchModal();
  return (
    <div className={open ? 'app search-modal-open' : 'app'}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
