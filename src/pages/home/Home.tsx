import React, { useEffect, useState } from 'react';
import './home.scss';
import PostCard from '@/components/PostCard/PostCard';
// import { useLocation } from 'react-router';
import { HotPost, Post } from '@/common/types';
import { getHotPosts } from '@/api/post';
import { useNavigate } from 'react-router';

const Home = () => {
  const [hotPosts, setHotPosts] = useState<HotPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // const category = useLocation().search; // get Query String > '?category=2'
  const navigate = useNavigate();
  // 리팩토링(custom hook) 고민해보기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getHotPosts();
        setHotPosts(res);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error occurred');
        }
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>로딩중..</div>;

  if (error) {
    navigate('/error', { state: { error: error } });
  }

  if (!hotPosts) {
    return <div>게시글을 찾지 못했습니다...{error}</div>;
  }
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
          <div className='main-list-title flex-box'>
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

export default Home;
