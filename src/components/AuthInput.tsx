import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './authInput.scss';
import { useLocation } from 'react-router';

const AuthInput = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      console.log(inputs);
      // navigate('/');
    } catch (err) {
      // console.log(err.response.data);
      console.log(err);
    }
  };
  const urlInfo = useLocation();
  const pathname = urlInfo.pathname.slice(1);
  return (
    <div className='input-section'>
      <div className='input-section-wrapper'>
        <div className='title-header mb32'>{pathname === 'login' ? '로그인' : '회원가입'}</div>
        <form>
          {pathname === 'login' ? (
            <></>
          ) : (
            <>
              <div className='input-box'>
                <div className='title'>이메일</div>
                <div className='default-input'>
                  <input
                    className='theme-wishket wishket-text'
                    maxLength={100}
                    name='email'
                    placeholder='ID@example.com'
                    type='text'
                    onChange={handleChange}
                  />
                </div>
                {/*<span className='error-text'>에러상세 메시지</span>*/}
                {/*<span className='error-text-custom'>아이디 또는 이메일을 입력해주세요.</span>*/}
              </div>
            </>
          )}
          <div className='input-box'>
            <div className='title'>아이디</div>
            <div className='default-input'>
              <input
                className='theme-wishket wishket-text'
                maxLength={100}
                name='username'
                placeholder='ID@example.com'
                type='text'
                onChange={handleChange}
              />
            </div>
            {/*<span className='error-text'>에러상세 메시지</span>*/}
            {/*<span className='error-text-custom'>아이디 또는 이메일을 입력해주세요.</span>*/}
          </div>
          <div className='input-box'>
            <div className='title'>비밀번호</div>
            <div className='default-input icon-right  '>
              <input
                className='theme-wishket wishket-text'
                id='password-input'
                maxLength={32}
                name='password'
                placeholder='비밀번호를 입력해 주세요.'
                type='password'
                onChange={handleChange}
              />
            </div>
            {/*<span className='error-text'>에러상세 메시지</span>*/}
            {/*<span className='error-text-custom'>비밀번호를 입력해 주세요.</span>*/}
          </div>
          {pathname === 'login' ? (
            <></>
          ) : (
            <>
              <div className='input-box'>
                <div className='title'>비밀번호 확인</div>
                <div className='default-input icon-right  '>
                  <input
                    className='theme-wishket wishket-text'
                    id='password-confirm-input'
                    maxLength={32}
                    name='passwordConfirm'
                    placeholder='비밀번호를 입력해 주세요.'
                    type='password'
                    onChange={handleChange}
                  />
                </div>
                {/*<span className='error-text'>에러상세 메시지</span>*/}
                {/*<span className='error-text-custom'>비밀번호를 입력해 주세요.</span>*/}
              </div>
            </>
          )}

          <div className='mb24 sub-action'>
            <div className='input-box'>
              <label className='checkbox-wishket'>
                <span>
                  <input
                    className='wishket-checkbox theme-wishket'
                    name='remember_me'
                    type='checkbox'
                    value='remember_me'
                  />
                </span>
                <span>로그인 상태 유지</span>
              </label>
            </div>
            <div className='sub-action-link'>
              <Link className='link-href link' to='#'>
                비밀번호 찾기
              </Link>
            </div>
          </div>
          <button className='mb16 btn-wishket' id='submitBtn' type='button' onClick={handleClick}>
            로그인
          </button>
          <div className='border-sub-action'>
            {pathname === 'login' ? (
              <>
                계정이 없으시다구요?
                <Link to='/register' className='link-href link'>
                  가입하기
                </Link>
              </>
            ) : (
              <>
                이미 회원이신가요?
                <Link to='/login' className='link-href link'>
                  로그인
                </Link>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthInput;
