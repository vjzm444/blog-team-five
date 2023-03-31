import React from 'react';
import './sideBar.scss';
import Logo from '@/img/Logo.png';
import { Link } from 'react-router-dom';
import useMenu from '@/hooks/useMenu';

const SideBar = () => {
  const { openMenu, setOpenMenu } = useMenu();

  const handleClick = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className={openMenu ? 'side-bar active' : 'side-bar'}>
      <div className='side-menu'>
        <div className='side-header'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='side-box'>
          <div className='side-menu-content'>
            <Link className='btn link' to='/login' onClick={handleClick}>
              로그인
            </Link>
            <Link className='btn link' to='/write' state={null} onClick={handleClick}>
              글쓰기
            </Link>
          </div>
        </div>
      </div>
      <div className='side-menu-overlay'>
        <button onClick={handleClick} />
      </div>
    </div>
  );
};

export default SideBar;
