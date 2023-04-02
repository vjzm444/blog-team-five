import React, { useEffect, useState } from 'react';
import './auth.scss';
import { Link } from 'react-router-dom';
import AuthInput from '@/components/AuthInput/AuthInput';
import axios from '@/api/axios';
import AuthLogo from '@/components/AuthLogo/AuthLogo';
import { useNavigate } from 'react-router';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const USER_REGEX = /^[A-z][A-z0-9_]{5,23}$/;
// 1개의 소문자 , 1개의 대문자 , 1개의 숫자, 1개의 특수문자
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [username, setUserName] = useState('');
  const [validName, setValidName] = useState(false);

  const [password, setPassword] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [isClickBtn, setisClickBtn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(PWD_REGEX.test(matchPassword));
  }, [password, matchPassword]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setisClickBtn(true);
    try {
      // body에 { email, username, password }이지만, 테스트로 {user, pwd}
      const response = await axios.post(
        REGISTER_URL,
        // JSON.stringify({ user: username, pwd: password }),
        JSON.stringify({ UserNm: username, UserEmail: email, UserPw: password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );

      console.log(JSON.stringify(response?.data));
      setEmail('');
      setUserName('');
      setPassword('');
      setMatchPassword('');
      navigate('/login');
    } catch (err) {
      // console.log(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className='auth'>
      <div className='auth-wrapper'>
        <AuthLogo />
        <section className='input-section'>
          <div className='input-section-wrapper'>
            <div className='title-header mb32'>회원가입</div>
            <form>
              <div className='input-box'>
                <AuthInput
                  title='이메일'
                  id='email'
                  maxLength={100}
                  name='email'
                  placeholder='ID@example.com'
                  type='text'
                  onChangeFunc={(e) => setEmail(e.target.value)}
                  value={email}
                  errorMode={isClickBtn && !validEmail}
                  errMsg={!email ? '이메일을 입력해 주세요.' : '이메일 형식이 올바르지 않습니다.'}
                />
              </div>
              <div className='input-box'>
                <AuthInput
                  title='아이디'
                  id='username'
                  maxLength={100}
                  name='username'
                  placeholder='아이디를 입력해 주세요.'
                  type='text'
                  value={username}
                  onChangeFunc={(e) => setUserName(e.target.value)}
                  errorMode={isClickBtn && !validName}
                  errMsg={
                    !username
                      ? '아이디를 입력해 주세요.'
                      : '6글자 이상의 영문자, 숫자, 특수기호(_)만 사용 가능합니다.'
                  }
                />
              </div>
              <div className='input-box'>
                <AuthInput
                  title='비밀번호'
                  id='password'
                  maxLength={32}
                  name='password'
                  placeholder='8자 이상 32자 이하로 입력해 주세요.'
                  type='password'
                  value={password}
                  onChangeFunc={(e) => setPassword(e.target.value)}
                  errorMode={isClickBtn && !validPwd}
                  errMsg={
                    !password
                      ? '비밀번호를 입력해 주세요.'
                      : '8글자 이상의 소문자, 대문자 숫자, 특수기호(@#$%)를 포함하여 입력해 주세요.'
                  }
                />
              </div>
              <div className='input-box'>
                <AuthInput
                  title='비밀번호 확인'
                  id='match-password'
                  maxLength={32}
                  name='matchPassword'
                  placeholder='비밀번호를 한 번 더 입력해 주세요.'
                  type='password'
                  value={matchPassword}
                  onChangeFunc={(e) => setMatchPassword(e.target.value)}
                  errorMode={isClickBtn && !validMatch}
                  errMsg={
                    !matchPassword
                      ? '비밀번호를 한 번 더 입력해 주세요.'
                      : '동일한 비밀번호를 입력해 주세요.'
                  }
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
                    <span>이용약관 및 개인정보 처리방침에 동의합니다.</span>
                  </label>
                </div>
              </div>
              <button
                className='mb16 btn-wishket'
                id='submitBtn'
                type='button'
                onClick={handleSubmit}
              >
                회원가입
              </button>
              <div className='border-sub-action'>
                이미 회원이신가요?
                <Link to='/login' className='link-href link'>
                  로그인
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
