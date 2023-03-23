import React, { useEffect, useState } from 'react';
import './category.scss';
import { Link } from 'react-router-dom';
import MetaContent from '@/components/MetaContent';
import { useParams } from 'react-router';
import { getCategoryCover, getCategoryCoverSrcSet } from '@/common/covers';
import { Post } from '@/common/types';
import { getCategoryPosts } from '@/api/post';

const CategoryPage = () => {
  const { id: categoryType } = useParams();
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryType) {
        const res = await getCategoryPosts(categoryType);
        setPosts(res);
      }
    };

    fetchData();
  }, [categoryType]); // posts가 필요한가? > 어차피 다시 불러오는데?

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='list-key-visual'>
        <img
          className='list-key-visual-image'
          src={categoryType ? getCategoryCover(categoryType) : ''}
          srcSet={categoryType ? getCategoryCoverSrcSet(categoryType) : ''}
          alt='img'
        />
        <h2 className='list-key-visual-title'>요즘, 프로덕트</h2>
      </div>
      <div className='container'>
        <div className='list-cover'>
          {posts.map((post) => (
            <div className='list-item-link' key={post.id}>
              <div className='list-item'>
                <div className='flex-box'>
                  <div className='item-main'>
                    <Link className='item-title link link-text' to={`/detail/${post.id}`}>
                      {post.title}
                    </Link>
                    <MetaContent cat={categoryType!} date={post.date} section='category' />
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
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
