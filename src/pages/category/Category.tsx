import { useLocation, useNavigate, useParams } from 'react-router';
import { getCategoryPosts } from '@/api/post';
import useFetch from '@/hooks/useFetch';
import { PostList } from '@/common/types';
import KeyCover from '@/components/List/KeyCover';
import ListItem from '@/components/List/ListItem';
import './category.scss';
import PagiNation from '@/components/PagiNation/PagiNation';
import { useEffect, useMemo } from 'react';

// custom hook으로 뺄지 고민
export const useQuery = () => new URLSearchParams(useLocation().search);

const Category = () => {
  const { id: categoryType } = useParams(); // categoryType
  const query = useQuery().get('nextPage');
  const navigate = useNavigate();
  const {
    data: posts,
    error,
    loading,
  } = useFetch<PostList>({
    getDataFunc: getCategoryPosts,
    param: categoryType,
    nextPage: query ? +query - 1 : undefined,
  });
  // const { list, setList } = usePostList();
  const memorizedPosts = useMemo(() => posts, [posts]);
  // const queryParams = new URLSearchParams(location.search);
  //
  useEffect(() => {
    // console.log(posts, query);
    // useFetch<PostList>(categoryType, getCategoryPosts);
  }, [query]);

  if (loading) return <div>로딩중..</div>;

  if (error) {
    navigate('/error', { state: { error: error } });
  }

  if (!memorizedPosts) {
    return <div>게시글을 찾지 못해습니다. 다시 시도해주세요</div>;
  }

  // setList((prev) => ({ ...prev, dataList: memorizedPosts.dataList }));

  return (
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
  );
};

export default Category;
