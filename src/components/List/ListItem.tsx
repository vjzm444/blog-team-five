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
      </div>
    </div>
  );
};

export default ListItem;
