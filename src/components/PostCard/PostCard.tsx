import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/common/types';
import './postcard.scss';
import MetaContent from '@/components/MetaContent/MetaContent';
import { customSanitizeHTML, sanitizeHTML } from '@/common/refactor';
// postcard의 list-item-link가 왜 category의 list-item-link에서 요소를 확인할 수 있을까
const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className='list-item-link'>
      <div className='list-item'>
        <div className='list-item-thumbnail'>
          <Link className='link' to={`/detail/${post.id}`}>
            <img className='thumbnail-image' src={post.img} alt={post.id.toString()} />
          </Link>
        </div>
        <div className='item-main'>
          <h3>
            <Link
              className='item-title link'
              to={`/detail/${post.id}`}
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.title) }}
            ></Link>
          </h3>
          <MetaContent id={post.id} cat={post.cat} date={post.date} section='card' />
          <Link className='link' to={`/detail/${post.id}`}>
            <p
              className='list-item-description'
              dangerouslySetInnerHTML={{
                __html: customSanitizeHTML(post.content),
              }}
            ></p>
          </Link>
          <div className='author-info'>
            <img
              src='https://images.pexels.com/photos/10767024/pexels-photo-10767024.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
              alt='profile'
              className='author-image'
            />
            <div className='author-name'>곰씨네 IT 블로그</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
