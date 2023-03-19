import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { HiLightningBolt } from 'react-icons/hi';
import './single.scss';
import { getPost } from '@/api/post';
import { Post } from '@/common/types';

/*
 * 1. postId에 맞는 포스트 정보를 가져오고 포스트가 가진 카테고리 정보를 이용해 navbar에 표시를 해준다.
 * 2. 좋아요 / 댓글 기능을 추가해준다
 * 3. 같은 분야의 다른 글을 추천해 줄 수 있도록 포스트 추천(하단)
 * */
const SinglePage = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get<Post>(`/posts/${postId}`);
        if (postId) {
          const res = await getPost(postId);
          setPost(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // fetchData();
    console.log(postId);
  }, [postId]);
  return (
    <div className='container-wrapper'>
      <div className='content-container'>
        <div className='news-detail-header'>
          <p className='category'>개발</p>
          <h1 className='news-title'>개발자는 ChatGPT 이렇게 활용하면 좋습니다</h1>
          <div className='news-detail-info'>
            <div className='flex-box author-info content-meta'>
              <img
                src='https://images.pexels.com/photos/10767024/pexels-photo-10767024.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
                alt='profile'
                className='author-image'
              />
              <div className='content-meta-elem pc-only'>곰씨네 IT 블로그</div>
              <div className='content-meta-elem content-meta-sep pc-only'>|</div>
              <AiOutlineClockCircle className='meta-icon' />
              <div className='content-meta-elem'>7분</div>
              <div className='content-meta-elem content-meta-sep'>|</div>
              <div className='content-meta-elem'>2023.02.17.</div>
              <div className='content-meta-elem content-meta-sep'>|</div>
              <HiLightningBolt style={{ color: '#FFDA6A' }} />
              <div className='content-meta-elem'>인기</div>
              <div className='content-meta-view flex-box'>
                <img
                  className=''
                  src='https://yozm.wishket.com/static/renewal/img/news/icon-view.png'
                  alt='icon4'
                />
                64.9K
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
