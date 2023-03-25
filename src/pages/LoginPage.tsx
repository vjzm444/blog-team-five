import './auth.scss';
import AuthInput from '@/components/AuthInput';

const LoginPage = () => {
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
        <AuthInput />
      </div>
    </div>
  );
};

export default LoginPage;
