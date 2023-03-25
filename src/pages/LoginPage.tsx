import './auth.scss';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthInput from '@/components/AuthInput';
import { AuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const { handleLogIn } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(inputs);
    const res = await handleLogIn(inputs);

    console.log(res);
    if (!res) {
      setError('로그인에 실패하셨습니다. 다시 입력해주세요.');
      // console.log(err.response.data);
      console.log(res);
    } else {
      navigate('/');
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
              alt='login'
            />
          </div>
        </div>
        <div className='input-section'>
          <div className='input-section-wrapper'>
            <div className='title-header mb32'>로그인</div>
            <form>
              <div className='input-box'>
                <AuthInput
                  title={'아이디'}
                  maxLength={100}
                  name={'username'}
                  placeholder={'ID@example.com'}
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
                  placeholder={'비밀번호를 입력해 주세요.'}
                  type={'password'}
                  onChangeFunc={handleChange}
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
                onClick={handleSubmit}
              >
                로그인
              </button>
              {error && <p className='error-text'>{error}</p>}
              <div className='border-sub-action'>
                계정이 없으시다구요?
                <Link to='/register' className='link-href link'>
                  가입하기
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
