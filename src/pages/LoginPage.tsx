import './auth.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthInput from '@/components/AuthInput';
// import { AuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router';
import AuthLogo from '@/components/AuthLogo';
import axios from '@/api/axios';
import useAuth from '@/hooks/useAuth';

const LOGIN_URL = '/auth';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  // const [validId, setValidId] = useState(false);

  const [password, setPassword] = useState('');
  // const [validPwd, setValidPwd] = useState(false);

  const [isClickBtn, setisClickBtn] = useState(false);

  // const { handleLogIn } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setisClickBtn(true);
    /*const res = await handleLogIn({ username: userId, password });
    if (!res) {
      setError('로그인에 실패하셨습니다. 다시 입력해주세요.');
      // console.log(err.response.data);
      console.log(res);
    } else {
      navigate('/');
    }*/

    try {
      console.log('hi');
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user: userId, pwd: password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user: userId, pwd: password, roles, accessToken });
      // access token을 받는다.
      setUserId('');
      setPassword('');
      navigate('/');
    } catch (err) {
      setError(error);
      console.log(error);
      /*유저 데이터와 비밀번호 둘 중 하나라도 잘못된 정보일 경우 서버에서
       * 그에 맞는 에러를 반환해주면 (ex.401) 해당 에러를 가지고 setError()에
       * 비밀번호 or 아이디가 잘못되었다는 미시지 반환
       *
       * ex. "아이디(이메일) 또는 비밀번호를 잘못 입력했습니다.
       * 입력하신 내용을 다시 확인해 주세요."
       * */
    }
  };
  return (
    <div className='auth'>
      <div className='auth-wrapper'>
        <AuthLogo />
        <section className='input-section'>
          <div className='input-section-wrapper'>
            <div className='title-header mb32'>로그인</div>
            <form>
              <div className='input-box'>
                <AuthInput
                  title='아이디 또는 이메일'
                  id='email'
                  maxLength={100}
                  name='email'
                  placeholder='ID@example.com'
                  type='text'
                  onChangeFunc={(e) => setUserId(e.target.value)}
                  value={userId}
                  errorMode={isClickBtn && userId.length < 6}
                  errMsg={
                    !userId
                      ? '아이디 또는 이메일을 입력해주세요.'
                      : '6글자 이상의 영문자, 숫자, 특수기호(_)만 사용 가능합니다.'
                  }
                />
              </div>
              <div className='input-box'>
                <AuthInput
                  title='비밀번호'
                  id='password'
                  maxLength={100}
                  name='password'
                  placeholder='비밀번호를 입력해 주세요.'
                  type='password'
                  onChangeFunc={(e) => setPassword(e.target.value)}
                  value={password}
                  errorMode={isClickBtn && password.length < 8}
                  errMsg={!password ? '비밀번호를 입력해 주세요.' : '8글자 이상 입력해 주세요.'}
                />
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
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
