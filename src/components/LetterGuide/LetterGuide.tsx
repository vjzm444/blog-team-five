import React from 'react';
import './letterGuide.scss';
import { Link } from 'react-router-dom';

const LetterGuide = () => {
  return (
    <div className='news-letter-guide-section type-b'>
      <div className='container'>
        <div className='responsive-wrapper'>
          <img
            className='news-letter-guide-img'
            src='https://yozm.wishket.com/static/renewal/img/news/img_banner_news_1.png'
            srcSet='https://yozm.wishket.com/static/renewal/img/news/img_banner_news_1.png 1x,
             https://yozm.wishket.com/static/renewal/img/news/img_banner_news_1@2x.png 2x,
             https://yozm.wishket.com/static/renewal/img/news/img_banner_news_1@3x.png 3x'
            alt=''
          />
          <p className='news-letter-guide'>
            <span className='subtitle-2 text900'>
              지금 <span className='subtitle-2-bold'>회원가입</span>하고, <br /> 요즘IT가 PICK한
              뉴스레터를 받아보세요!
            </span>
          </p>
        </div>
        <Link className='btn btn-violet body-1 text-white btn-11-24 link' to='/register'>
          회원가입하기
        </Link>
      </div>
    </div>
  );
};

export default LetterGuide;
