import React, { useState } from 'react';
import './auth.scss';
import { Link } from 'react-router-dom';
import AuthInput from '@/components/AuthInput';

const RegisterPage = () => {
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

  return (
    <div className='auth'>
      <div className='auth-wrapper'>
        <div className='logo-section'>
          <div className='logo-section-wrapper'>
            <div className='title-header mb6'>
              다양한 서비스를
              <br />
              하나의 계정으로!
            </div>
            <div className='body-2 text600 mb32'>
              메거진 서비스뿐만 아니라 댓글, 좋아요까지
              <br />
              하나의 계정으로 간편하게 이용해 보세요
            </div>
            <img
              src='https://account.wishket.com/static/renewal/img/wishket-member/img_login_account.png'
              srcSet='https://account.wishket.com/static/renewal/img/wishket-member/img_login_account.png 1x,
                  https://account.wishket.com/static/renewal/img/wishket-member/img_login_account@2x.png 2x,
                  https://account.wishket.com/static/renewal/img/wishket-member/img_login_account@3x.png 3x'
              alt='register'
            />
          </div>
        </div>
        <div className='input-section'>
          <div className='input-section-wrapper'>
            <div className='title-header mb32'>회원가입</div>
            <form>
              <div className='input-box'>
                <AuthInput
                  title={'이메일'}
                  maxLength={100}
                  name={'email'}
                  placeholder={'ID@example.com'}
                  type={'text'}
                  onChangeFunc={handleChange}
                />
                {/*<span className='error-text'>에러상세 메시지</span>*/}
                {/*<span className='error-text-custom'>아이디 또는 이메일을 입력해주세요.</span>*/}
              </div>
              <div className='input-box'>
                <AuthInput
                  title={'아이디'}
                  maxLength={100}
                  name={'username'}
                  placeholder={'아이디를 입력해 주세요.'}
                  type={'text'}
                  onChangeFunc={handleChange}
                />
                {/*<span className='error-text'>에러상세 메시지</span>*/}
                {/*<span className='error-text-custom'>아이디 또는 이메일을 입력해주세요.</span>*/}
              </div>
              <div className='input-box'>
                <AuthInput
                  title={'비밀번호'}
                  maxLength={32}
                  name={'password'}
                  placeholder={'8자 이상 32자 이하로 입력해 주세요.'}
                  type={'password'}
                  onChangeFunc={handleChange}
                  id={'password-input'}
                />
                {/*<span className='error-text'>에러상세 메시지</span>*/}
                {/*<span className='error-text-custom'>비밀번호를 입력해 주세요.</span>*/}
              </div>
              <div className='input-box'>
                <AuthInput
                  title={'비밀번호 확인'}
                  maxLength={32}
                  name={'passwordConfirm'}
                  placeholder={'비밀번호를 한 번 더 입력해 주세요.'}
                  type={'password'}
                  onChangeFunc={handleChange}
                  id={'password-confirm-input'}
                />
                {/*<span className='error-text'>에러상세 메시지</span>*/}
                {/*<span className='error-text-custom'>비밀번호를 입력해 주세요.</span>*/}
              </div>

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
              <button
                className='mb16 btn-wishket'
                id='submitBtn'
                type='button'
                onClick={handleClick}
              >
                로그인
              </button>
              <div className='border-sub-action'>
                이미 회원이신가요?
                <Link to='/login' className='link-href link'>
                  로그인
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
