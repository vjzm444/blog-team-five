import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='pc-footer'>
        <div className='container'>
          <div className='footer-main'>
            <div className='footer-menu-list'>
              <p className='footer-menu-title'>위시켓</p>
              <Link className='footer-menu-item' to='#'>
                위시켓 소개
              </Link>
              <Link className='footer-menu-item' to='#'>
                신뢰와 안전
              </Link>
              <Link className='footer-menu-item' to='#'>
                이용약관
              </Link>
              <Link className='footer-menu-item' to='#'>
                개인정보 처리방침
              </Link>
            </div>
            <div className='footer-menu-list'>
              <Link className='footer-menu-title link' to='#'>
                고객센터
              </Link>
              <Link className='footer-menu-item' to='#'>
                클라이언트 고객센터
              </Link>
              <Link className='footer-menu-item' to='#'>
                파트너스 고객센터
              </Link>
              <Link className='footer-menu-item' to='#'>
                이용요금
              </Link>
              <Link className='footer-menu-item' to='#'>
                클라이언트 이용방법
              </Link>
              <Link className='footer-menu-item' to='#'>
                파트너스 이용방법
              </Link>
            </div>
            <div className='footer-menu-list'>
              <Link className='footer-menu-title link' to='#'>
                뉴스센터
              </Link>
              <Link className='footer-menu-item' to='#'>
                공지사항
              </Link>
              <Link className='footer-menu-item' to='#'>
                위시켓 소식
              </Link>
              <Link className='footer-menu-item' to='#'>
                위시켓 이용 팁
              </Link>
              <Link className='footer-menu-item' to='#'>
                프로젝트 성공사례
              </Link>
              <Link className='footer-menu-item' to='#'>
                언론 보도
              </Link>
            </div>
            <div className='footer-menu-list'>
              <Link className='footer-menu-title link' to='#'>
                이용후기
              </Link>
              <Link className='footer-menu-title link' to='#'>
                위시켓 스토어
              </Link>
              <Link className='footer-menu-title link' to='#'>
                요즘IT
              </Link>
              <Link className='footer-menu-title link' to='#'>
                통합빌링 서비스
              </Link>
            </div>
            <div className='footer-menu-list footer-contact'>
              <p className='footer-menu-title'>CONTACT US</p>
              <Link className='footer-menu-item link' to='tel:82269254849'>
                02-6925-4849(10:00-18:00, 공휴일 제외)
              </Link>
              <a className='footer-menu-item' href='mailto:shseok0674@gmail.com'>
                shseok0674@gmail.com
              </a>
            </div>
          </div>
          <div className='footer-company-info'>
            <div className='footer-company-info-logo-wrapper'>
              <Link className='link' to='#'>
                <img
                  src='https://yozm.wishket.com/static/img/partials/wishket_footer_logo.png'
                  alt='logo'
                />
              </Link>
            </div>
            <div className='footer-company-info-detail'>
              <p className='footer-company-info-description'>
                <span>주식회사 위시켓 (대표이사: 박우범) /</span>
                <span>서울특별시 강남구 테헤란로 211 한국고등교육재단빌딩 3층 (주)위시켓</span>
                <br />
                <span>사업자등록번호: 209-81-57303 /</span>
                <span>통신판매업신고: 제2018-서울강남-02337 호 /</span>
                <span>직업정보제공사업 신고번호: J1200020180019</span>
              </p>
              <p className='footer-company-info-copyright'>© 2013 Wishket Corp.</p>
            </div>
            <div className='footer-company-info-sns'>
              <Link
                className='link'
                to='https://github.com/saramdle/blog-team-five/tree/front-dev'
                target='_blank'
                rel='noreferrer'
              >
                <BsGithub className='sns-icon' />
              </Link>
              <Link
                className='link'
                to='https://www.instagram.com/shseo_k/'
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagramSquare className='sns-icon' />
              </Link>
              <Link
                className='link'
                to='https://blog.naver.com/wishket/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='https://yozm.wishket.com/static/renewal/img/global/footer_sns_naver.png'
                  srcSet='https://yozm.wishket.com/static/renewal/img/global/footer_sns_naver.png 1x, https://yozm.wishket.com/static/renewal/img/global/footer_sns_naver@2x.png 2x'
                  alt='img3'
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className='mobile-footer'>
        <div className='container'>
          <div className='footer-company-info'>
            <div className='footer-company-info-logo-wrapper'>
              <Link className='link' to='/'>
                <img
                  src='https://yozm.wishket.com/static/img/partials/wishket_footer_logo.png'
                  alt=''
                />
              </Link>
            </div>
            <div className='footer-main'>
              <p className='cs'>
                <Link className='body-2 link' to='tel:0269254849'>
                  <IoIosCall className='icons' />
                  (02) 6925-4849
                </Link>
                <Link className='body-2 link' to='mailto:help@wishket.com'>
                  <MdEmail className='icons' />
                  help@wishket.com
                </Link>
                <br />
              </p>
              <p className='caption-1 operation-time'>
                고객센터 운영시간 10:00 ~ 18:00(공휴일 제외)
              </p>
            </div>
            <div className='footer-company-info-detail'>
              <p className='footer-company-info-description'>
                <span>
                  주식회사 위시켓 (대표이사: 박우범) / 서울특별시 강남구 테헤란로 211
                  한국고등교육재단빌딩 3층 (주)위시켓
                </span>
                <span>
                  사업자등록번호: 209-81-57303 / 통신판매업신고: 제2018-서울강남-02337 호 /
                  직업정보제공사업 신고번호: J1200020180019
                </span>
              </p>
            </div>
            <p className='footer-company-info-copyright'>© 2013 Wishket Corp.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
