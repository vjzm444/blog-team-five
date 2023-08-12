import { useNavigate, useParams } from 'react-router';
import { getCategoryPosts } from '@/api/post';
import useFetch from '@/hooks/useFetch';
import { PostList } from '@/common/types';
import KeyCover from '@/components/List/KeyCover';
import ListItem from '@/components/List/ListItem';
import './category.scss';
import PagiNation from '@/components/PagiNation/PagiNation';
import { useMemo } from 'react';
import useQuery from '@/hooks/useQuery';

const Category = () => {
  const { id: categoryType } = useParams(); // categoryType
  const query = parseInt(useQuery().get('nextPage') ?? '1') - 1;
  const navigate = useNavigate();
  const {
    data: posts,
    error,
    loading,
  } = useFetch<PostList>({
    getDataFunc: getCategoryPosts,
    param: categoryType,
    nextPage: query,
  });
  const memorizedPosts = useMemo(() => posts, [posts]);

  // if (loading) return <div>로딩중..</div>;
  // if (error) {
  //   navigate('/error', { state: { error: error } });
  // }
  // if (!memorizedPosts) {
  //   return <div>게시글을 찾지 못해습니다. 다시 시도해주세요</div>;
  // }

  return (
    <>
      {loading && <div>로딩중..</div>}
      {error && navigate('/error', { state: { error: error } })}
      {memorizedPosts && (
        <>
          <KeyCover listType={categoryType ?? ''} />
          <div className='container'>
            <div className='list-cover'>
              {memorizedPosts.dataList.map((post) => (
                <ListItem key={post.id} post={post} />
              ))}
            </div>
            <PagiNation postLen={memorizedPosts.allCnt} curPageNum={query} />
          </div>
        </>
      )}
    </>
  );
};

export default Category;
