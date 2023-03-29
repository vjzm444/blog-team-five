import './category.scss';
import { Link } from 'react-router-dom';
import MetaContent from '@/components/MetaContent/MetaContent';
import { useParams } from 'react-router';
import { getCategoryCover, getCategoryCoverSrcSet } from '@/common/covers';
import { getCategoryPosts } from '@/api/post';
import useFetch from '@/hooks/useFetch';
import { Post } from '@/common/types';

const Category = () => {
  const { id: categoryType } = useParams(); // categoryType
  const { data: posts, error, loading } = useFetch<Post[]>(categoryType, getCategoryPosts);

  if (loading) return <div>로딩중..</div>;

  if (!posts) {
    return <div>게시글을 찾지 못해습니다. 다시 시도해주세요</div>;
  }
  // 서번단에서 error 객체 얻기 위해 요청
  if (error)
    return (
      <div>
        에러가 발생했습니다.
        <br /> 에러내용: {error}
      </div>
    );

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

export default Category;
