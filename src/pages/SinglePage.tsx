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
        <div className='next-news-contents news-highlight-box'>
          <p style={{ textAlign: 'justify' }}>
            최근 ChatGPT가 여러 분야에서 화제가 되고 있습니다.&nbsp;벌써 많은 사람들이 ChatGPT를
            이용하여 아이디어를 얻고,&nbsp;보고서를 만들고,&nbsp;번거로운 업무를 자동화하는 등 여러
            가지 시도가 이어지고 있는데요.&nbsp;이와 관련해서 이번 글에서는 개발자 관점에서
            ChatGPT를 소프트웨어 개발에 어떻게 활용할 수 있는지 알아보고, ChatGPT의 한계에 대해서도
            간단히 정리해 보았습니다.
          </p>
          <p style={{ textAlign: 'justify' }}>&nbsp;</p>
          <h3 style={{ textAlign: 'justify' }}>
            <strong>ChatGPT&nbsp;소개 및 사용 방법</strong>
          </h3>
          <h4 style={{ textAlign: 'justify' }}>
            <strong>1) ChatGPT&nbsp;소개</strong>
          </h4>
          <p style={{ textAlign: 'justify' }}>
            ChatGPT는 Open AI에서 개발한 대규모 언어 모델입니다.&nbsp;자연어 처리 분야에서 다루는
            신경망의 일종인 트랜스포머 아키텍처(Transformer Architecture)를 기반으로 하고
            있으며,&nbsp;약 1,750억 개의 매개 변수를 통해 사용자의 질의를 이해하고,&nbsp;응답할 수
            있는 기능을 제공하는 인공지능 서비스입니다.&nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
