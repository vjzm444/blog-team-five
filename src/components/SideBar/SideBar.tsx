import React from 'react';
import './sideBar.scss';
import Logo from '@/img/Logo.png';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='side-bar'>
      <div className='side-menu'>
        <div className='side-header'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='side-box'>
          <div className='side-menu-content'>
            <Link className='btn link' to='/login'>
              로그인
            </Link>
            <Link className='btn link' to='/write' state={null}>
              글쓰기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
