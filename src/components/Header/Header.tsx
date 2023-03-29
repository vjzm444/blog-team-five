import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import Logo from '@/img/Logo.png';
import { FiSearch } from 'react-icons/fi';
import useAuth from '@/hooks/useAuth';
import { IoCloseOutline, IoSearch } from 'react-icons/io5';
import useSearchModal from '@/hooks/useSearchModal';

const Header = () => {
  // const { currentUser, handleLogOut } = useContext(AuthContext);
  const { auth } = useAuth();
  const { open, setOpen } = useSearchModal();

  const openSearchModal = () => {
    setOpen((prev) => !prev);
    // context 전역 상태를 쓰고
    // custom hook 생각
    // 검색바 눌렀을 때, 초기에 focus되도록 useRef 사용
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
      <div className='side-bar'></div>
      <div className={open ? 'search-modal active' : 'search-modal'}>
        <div className='search-part'>
          <div className='container'>
            <IoSearch style={{ color: '#9e9e9e', fontSize: '21px' }}></IoSearch>
            <input
              className='news-search-input'
              id='searchInput'
              placeholder='어떤 콘텐츠가 궁금하신가요?'
              type='text'
            />
            <IoCloseOutline
              onClick={() => setOpen((prev) => !prev)}
              style={{ color: '#9e9e9e', fontSize: '33px', cursor: 'pointer' }}
            ></IoCloseOutline>
          </div>
        </div>
        <div className='search-sub-part'>
          <div className='container'>
            <div className='recent-keyword-part'>
              <div className='title'>
                최근검색어
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div className='sub-action' onClick={() => console.log('전체삭제')}>
                  전체 삭제
                </div>
              </div>
              <div className='recent-keyword-part-wrapper empty'>
                <div className='empty-recent-keyword'>최근 검색어가 없습니다.</div>
                <div className='recent-keyword-list' id='recentKeywordList'></div>
              </div>
            </div>
          </div>
          <div className='background-overlay'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
