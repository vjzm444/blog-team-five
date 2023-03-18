import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '@/img/Logo.png';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
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
                <FiSearch style={{ color: '#9e9e9e' }}></FiSearch>
              </label>
              <input type='text' id='search' placeholder='어떤 콘텐츠가 궁금하신가요?' />
            </div>
            <div className='user-box'>
              <Link className='link' to='/login'>
                로그인
              </Link>
              <span className='write'>
                <Link className='link' to='/write'>
                  글쓰기
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar'>
        <div className='container'>
          <div className='links'>
            <Link className='link' to='/?category=1'>
              <h6>NEW</h6>
            </Link>
            <Link className='link' to='/?category=2'>
              <h6>기획</h6>
            </Link>
            <Link className='link' to='/?category=3'>
              <h6>디자인</h6>
            </Link>
            <Link className='link' to='/?category=4'>
              <h6>개발</h6>
            </Link>
            <Link className='link' to='/?category=5'>
              <h6>프로덕트</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
