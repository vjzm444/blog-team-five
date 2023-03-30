import React from 'react';
import { Link } from 'react-router-dom';
import MetaContent from '@/components/MetaContent/MetaContent';
import './listItem.scss';
import { Post } from '@/common/types';

const ListItem = ({ post }: { post: Post }) => {
  return (
    <div className='list-item-link' key={post.id}>
      <div className='list-item'>
        <div className='flex-box'>
          <div className='item-main'>
            <Link className='item-title link link-text' to={`/detail/${post.id}`}>
              {post.title}
            </Link>
            <MetaContent cat={post.cat} date={post.date} section='category' />
            <Link className='link' to={`/detail/${post.id}`}>
              <p className='item-description'>{post.content}</p>
            </Link>
          </div>
          <div className='item-thumbnail-pc'>
            <Link to={`/detail/${post.id}`}>
              <img className='thumbnail-image' src={post.img} alt='img' />
            </Link>
          </div>
        </div>
        <div className='flex-box author-box'>
          <div className='author-info flex-box'>
            <img
              className='author-image'
              src='https://yozm.wishket.com/media/news/author/%ED%85%8C%EC%98%A4%EC%9D%98%20%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C.jpg'
              alt=''
            />
            <p className='author-name'>테크유람</p>
          </div>
          <div className='btn-wrapper'>
            <button className='btn-action btn-icon-edit-scrap' type='button'>
              <p className='action-tooltip bottom-action caption-2 edit-scrap-off'>스크랩</p>
              <div className='edit-scrap-off'>
                <img
                  src='https://yozm.wishket.com/static/renewal/img/news/icon_toolbar_scrap_off.png'
                  srcSet='https://yozm.wishket.com/static/renewal/img/news/icon_toolbar_scrap_off.png 1x,
                  https://yozm.wishket.com/static/renewal/img/news/icon_toolbar_scrap_off@2x.png 2x,
                  https://yozm.wishket.com/static/renewal/img/news/icon_toolbar_scrap_off@3x.png 3x'
                  alt=''
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
