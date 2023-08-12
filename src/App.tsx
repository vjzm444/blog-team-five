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
import NetworkError from '@/pages/error/NetworkError';
import LetterGuide from '@/components/LetterGuide/LetterGuide';
import useMenu from '@/hooks/useMenu';

const Layout = ({ isDetail }: { isDetail: boolean }) => {
  return (
    <>
      <Header />
      <div className='layout'>
        <Outlet />
      </div>
      {isDetail && <LetterGuide />}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout isDetail={false} />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/write',
        element: <Write />,
      },
      {
        path: '/search',
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
    path: '/detail/:id',
    element: <Layout isDetail={true} />,
    children: [
      {
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/error',
    element: <NetworkError />,
  },
]);

function App() {
  const { openModal } = useSearchModal();
  const { openMenu } = useMenu();
  return (
    <div className={openModal || openMenu ? 'app search-modal-open' : 'app'}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
