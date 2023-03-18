import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { HiLightningBolt } from 'react-icons/hi';
import { Post } from '@/pages/HomePage';
import './maincard.scss';

interface PostProps {
  post: Post;
}

const MainCard = (props: PostProps) => {
  const { post } = props;
  return (
    <div className='list-item-link'>
      <div className='list-item'>
        <div className='list-item-thumbnail'>
          <Link className='link' to={`/post/${post.id}`}>
            <img className='thumbnail-image' src={post.img} alt={post.id.toString()} />
          </Link>
        </div>
        <div className='item-main'>
          <h3>
            <Link className='item-title link' to={`/post/${post.id}`}>
              {post.title}
            </Link>
          </h3>
          <div className='content-meta'>
            <Link className='content-meta-elem link' to={`/post/${post.id}`}>
              {post.cat}
            </Link>
            <div className='content-meta-elem content-meta-sep'>|</div>
            <AiOutlineClockCircle className='meta-icon' />
            <div className='content-meta-elem'>9분</div>
            <div className='content-meta-elem content-meta-sep'>|</div>
            <HiLightningBolt style={{ color: '#FFDA6A' }} />
            <div className='content-meta-elem'>인기</div>
          </div>
          <Link className='link' to={`/post/${post.id}`}>
            <p className='list-item-description'>{post.desc}</p>
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

export default MainCard;
