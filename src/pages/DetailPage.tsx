import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './detail.scss';
import { getPost } from '@/api/post';
import { Post } from '@/common/types';
import MetaContent from '@/components/MetaContent';

/*
 * 1. postId에 맞는 포스트 정보를 가져오고 포스트가 가진 카테고리 정보를 이용해 navbar에 표시를 해준다.
 * 2. 좋아요 / 댓글 기능을 추가해준다
 * 3. 같은 분야의 다른 글을 추천해 줄 수 있도록 포스트 추천(하단)
 * */
const DetailPage = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (postId) {
        const res = await getPost(postId);
        setPost(res);
      }
    };

    fetchData();
    console.log(postId);
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container-wrapper'>
      <div className='content-container'>
        <div className='news-detail-header'>
          <p className='category'>{post.cat}</p>
          <h1 className='news-title'>{post.title}</h1>
          <div className='news-detail-info'>
            <MetaContent date={post.date} cat={post.cat} section='detail' />
          </div>
        </div>
        <div className='next-news-contents news-highlight-box'>
          <p style={{ textAlign: 'justify' }}>{post.content}</p>
          <p style={{ textAlign: 'justify' }}>&nbsp;</p>
          <h3 style={{ textAlign: 'justify' }}>
            <strong>ChatGPT&nbsp;소개 및 사용 방법</strong>
          </h3>
          <h4 style={{ textAlign: 'justify' }}>
            <strong>1) ChatGPT&nbsp;소개</strong>
          </h4>
          <p style={{ textAlign: 'justify' }}>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
