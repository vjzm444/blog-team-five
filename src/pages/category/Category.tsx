import { useNavigate, useParams } from 'react-router';
import { getCategoryPosts } from '@/api/post';
import useFetch from '@/hooks/useFetch';
import { PostList } from '@/common/types';
import KeyCover from '@/components/List/KeyCover';
import ListItem from '@/components/List/ListItem';
import './category.scss';
import PagiNation from '@/components/PagiNation/PagiNation';

const Category = () => {
  const { id: categoryType } = useParams(); // categoryType
  const { data: posts, error, loading } = useFetch<PostList>(categoryType, getCategoryPosts);
  const navigate = useNavigate();

  if (loading) return <div>로딩중..</div>;

  if (error) {
    navigate('/error', { state: { error: error } });
  }

  if (!posts) {
    return <div>게시글을 찾지 못해습니다. 다시 시도해주세요</div>;
  }

  return (
    <>
      <KeyCover listType={categoryType ?? ''} />
      <div className='container'>
        <div className='list-cover'>
          {posts.dataList.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </div>
        <PagiNation postLen={posts.allCnt} />
      </div>
    </>
  );
};

export default Category;
