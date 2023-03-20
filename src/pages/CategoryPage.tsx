import React from 'react';
import './category.scss';
import { Link } from 'react-router-dom';
import MetaContent from '@/components/MetaContent';

const CategoryPage = () => {
  return (
    <>
      <div className='list-key-visual'>
        <img
          className='list-key-visual-image'
          src='https://yozm.wishket.com/static/renewal/img/news/bg-product.png'
          srcSet='https://yozm.wishket.com/static/renewal/img/news/bg-product.png 1x, https://yozm.wishket.com/static/renewal/img/news/bg-product@3x.png 3x'
          alt='img'
        />
        <h2 className='list-key-visual-title'>요즘, 프로덕트</h2>
      </div>
      <div className='container'>
        <div className='list-cover'>
          <div className='list-item-link'>
            <div className='list-item'>
              <div className='flex-box'>
                <div className='item-main'>
                  <Link className='item-title link-text' to=''>
                    ChatGPT 등장 후 우리에게 일어난 일들
                  </Link>
                  <MetaContent
                    cat={'개발'}
                    date={'2023-03-19T00:39:36.000+00:00'}
                    section='category'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
