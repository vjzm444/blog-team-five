import React from 'react';
import './home.scss';

const HomePage = () => {
  return (
    <div className='layout'>
      <div className='main-intro'>
        <div className='container'>
          <p className='intro'>
            매일 업데이트되는 <span className='key-visual-guide'>요즘 사람들의 IT 이야기,</span>
            <br />
            <span className='key-visual-guide-point-word'>요즘IT</span>와 함께 성장해보세요.{' '}
            <span className='key-visual-guide-long-point'></span>
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='main-list'>
          <div className='main-list-title'>
            요즘 인기 있는 IT 이야기{' '}
            <img src='	https://yozm.wishket.com/static/renewal/img/news/icon-thumbs.png' alt='img' />
          </div>
          <div className='main-list-row'>sdsdf</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
