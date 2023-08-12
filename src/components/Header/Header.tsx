import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import Logo from '@/img/Logo.png';
import { FiSearch } from 'react-icons/fi';
import useAuth from '@/hooks/useAuth';
import useSearchModal from '@/hooks/useSearchModal';
import SearchModal from '@/components/SearchModal/SearchModal';
import { getTranslatedWord } from '@/common/covers';
import SideBar from '@/components/SideBar/SideBar';
import { SlMenu } from 'react-icons/all';
import useMenu from '@/hooks/useMenu';

const Header = () => {
  // const { currentUser, handleLogOut } = useContext(AuthContext);
  const { auth } = useAuth();
  const { setOpenModal } = useSearchModal();
  const { setOpenMenu } = useMenu();

  const openSearchModal = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!document.startViewTransition) {
      setOpenModal((prev) => !prev);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return document.startViewTransition(() => {
        setOpenModal((prev) => !prev);
      });
    }

    // context 전역 상태를 쓰고
    // custom hook 생각
    // 검색바 눌렀을 때, 초기에 focus되도록 useRef 사용
  };

  const openMenuBar = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className='header'>
      <div className='header-upper'>
        <div className='container'>
          <div className='header-upper-wrapper'>
            <Link className='navigation-logo' to='/'>
              <img src={Logo} alt='logo' />
            </Link>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className='search-box btn flex-box' onClick={openSearchModal}>
              <label htmlFor='search'>
                <FiSearch style={{ color: '#9e9e9e', margin: '0 10px' }}></FiSearch>
              </label>
              <p>어떤 콘텐츠가 궁금하신가요?</p>
            </div>
            <div className='user-box'>
              <button className='search-mobile-btn' onClick={openSearchModal}>
                <FiSearch className='search-icon'></FiSearch>
              </button>
              <div className='button-group-box'>
                {auth && <span className='btn user-name'>{auth.user}</span>}
                {auth ? (
                  <button
                    className='btn logout-button'
                    onClick={() => console.log('handle logout')}
                  >
                    로그아웃
                  </button>
                ) : (
                  <Link className='btn link' to='/login'>
                    로그인
                  </Link>
                )}
                <Link className='btn link' to='/write' state={null}>
                  글쓰기
                </Link>
              </div>
              <button className='hamburger-menu' onClick={openMenuBar}>
                <SlMenu className='menu-icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar'>
        <div className='container'>
          <div className='links'>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to='/category/new'
            >
              <div>NEW</div>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to='/category/plan'
            >
              <div>{getTranslatedWord('plan')}</div>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to='/category/design'
            >
              <div>{getTranslatedWord('design')}</div>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to='/category/develop'
            >
              <div>{getTranslatedWord('develop')}</div>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to='/category/product'
            >
              <div>{getTranslatedWord('product')}</div>
            </NavLink>
          </div>
        </div>
      </div>
      <SideBar />
      <SearchModal />
    </div>
  );
};

export default Header;
