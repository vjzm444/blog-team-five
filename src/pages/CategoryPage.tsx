import React from 'react';
import './category.scss';

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
        <div className='list-cover'></div>
      </div>
    </>
  );
};

export default CategoryPage;
