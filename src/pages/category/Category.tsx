import { useParams } from 'react-router';
import { getCategoryPosts } from '@/api/post';
import useFetch from '@/hooks/useFetch';
import { Post } from '@/common/types';
import KeyCover from '@/components/List/KeyCover';
import ListItem from '@/components/List/ListItem';

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
      <KeyCover listType={categoryType ?? ''} />
      <div className='container'>
        <div className='list-cover'>
          {posts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
