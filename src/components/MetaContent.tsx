import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { getCreateDate, getElapsedTime } from '@/common/date';
import { HiLightningBolt } from 'react-icons/hi';
import './meta.scss';

interface MetaProps {
  id?: number;
  date: string;
  cat: string;
  section: 'detail' | 'card' | 'category';
}

const MetaContent = ({ id, cat, date, section }: MetaProps) => {
  return (
    <div className='content-meta flex-box'>
      {section === 'detail' ? (
        <>
          <img
            src='https://images.pexels.com/photos/10767024/pexels-photo-10767024.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
            alt='profile'
            className='author-image'
          />
          <div className='content-meta-elem pc-only'>곰씨네 IT 블로그</div>
          <div className='content-meta-elem content-meta-sep pc-only'>|</div>
        </>
      ) : (
        <></>
      )}

      {section === 'card' ? (
        <>
          <Link className='content-meta-elem link' to={`/post/${id}`}>
            {cat}
          </Link>
          <div className='content-meta-elem content-meta-sep'>|</div>
        </>
      ) : (
        <></>
      )}
      <AiOutlineClockCircle className='meta-icon mr-4' />
      <div className='content-meta-elem'>{getElapsedTime(date)}</div>
      {section === 'detail' ? (
        <>
          <div className='content-meta-elem content-meta-sep'>|</div>
          <div className='content-meta-elem'>{getCreateDate(date)}</div>
        </>
      ) : (
        <></>
      )}
      {section === 'category' ? (
        <>
          <div className='content-meta-elem content-meta-sep'>|</div>
          <div className='content-meta-elem'>{getElapsedTime(date)} 전</div>
        </>
      ) : (
        <></>
      )}
      <div className='content-meta-elem content-meta-sep'>|</div>
      <HiLightningBolt style={{ color: '#FFDA6A' }} />
      <div className='content-meta-elem'>인기</div>
      {section === 'detail' ? (
        <>
          <div className='content-meta-view flex-box'>
            <img
              className=''
              src='https://yozm.wishket.com/static/renewal/img/news/icon-view.png'
              alt='icon4'
            />
            64.9K
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MetaContent;
