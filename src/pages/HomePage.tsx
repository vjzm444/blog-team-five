import React, { useEffect, useState } from 'react';
import './home.scss';
import PostCard from '@/components/PostCard';
import { useLocation } from 'react-router';
import { HotPost, Post } from '@/common/types';
import { getHotPosts } from '@/api/post';

const HomePage = () => {
  const [hotPosts, setHotPosts] = useState<HotPost[]>([]);
  const category = useLocation().search; // get Query String > '?category=2'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getHotPosts();
        setHotPosts(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // console.log(category);
  }, [category]);

  return (
    <>
      <div className='main-intro'>
        <div className='container'>
          <p className='intro'>
            매일 업데이트되는 <span className='key-visual-guide'>요즘 사람들의 IT 이야기,</span>
            <br />
            <span className='key-visual-guide-point-word'>요즘IT</span>와 함께 성장해보세요.{' '}
            <span className='key-visual-guide-long-point'></span>
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='main-list'>
          <div className='main-list-title'>
            요즘 인기 있는 IT 이야기
            <img src='https://yozm.wishket.com/static/renewal/img/news/icon-thumbs.png' alt='img' />
          </div>
          {hotPosts?.map((postRow: HotPost) => (
            <div className='main-list-row' key={postRow.id}>
              {postRow.hot?.map((post: Post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
