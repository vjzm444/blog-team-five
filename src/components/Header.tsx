import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import Logo from '@/img/Logo.png';
import { FiSearch } from 'react-icons/fi';
import useAuth from '@/hooks/useAuth';

const Header = () => {
  // const { currentUser, handleLogOut } = useContext(AuthContext);
  const { auth } = useAuth();
  return (
    <div className='header'>
      <div className='header-upper'>
        <div className='container'>
          <div className='header-upper-wrapper'>
            <Link className='navigation-logo' to='/'>
              <img src={Logo} alt='logo' />
            </Link>
            <div className='search-bar'>
              <label htmlFor='search'>
                <FiSearch style={{ color: '#9e9e9e', margin: '0 10px' }}></FiSearch>
              </label>
              <input type='text' id='search' placeholder='어떤 콘텐츠가 궁금하신가요?' />
            </div>
            <div className='user-box'>
              {auth && <span className='user-name'>{auth.user}</span>}
              {auth ? (
                <button className='logout-button' onClick={() => console.log('handle logout')}>
                  로그아웃
                </button>
              ) : (
                <Link className='link' to='/login'>
                  로그인
                </Link>
              )}
              <Link className='link' to='/write' state={null}>
                글쓰기
              </Link>
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
              <div>기획</div>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to='/category/design'
            >
              <div>디자인</div>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to='/category/develop'
            >
              <div>개발</div>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              to='/category/product'
            >
              <div>프로덕트</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
