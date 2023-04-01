import { useLocation, useNavigate } from 'react-router';
import KeyCover from '@/components/List/KeyCover';
import { getSearchedResult } from '@/api/post';
import { PostList } from '@/common/types';
import ListItem from '@/components/List/ListItem';
import useFetch from '@/hooks/useFetch';
import './search.scss';
import PagiNation from '@/components/PagiNation/PagiNation';
import { useQuery } from '@/pages/category/Category';

// category와 중복되는 코드 -> 컴포넌트화
const Search = () => {
  const location = useLocation();
  const query = useQuery().get('nextPage');
  const { q } = location.state;
  const {
    data: posts,
    error,
    loading,
  } = useFetch<PostList>({
    getDataFunc: getSearchedResult,
    param: q,
  });
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
      <KeyCover listType='search' word={q} wordLen={posts.allCnt} />
      <div className='container'>
        <div className={posts.allCnt ? 'list-cover' : 'list-cover search-empty-cover'}>
          {posts.allCnt ? (
            posts.dataList.map((post) => <ListItem key={post.id} post={post} />)
          ) : (
            <div className='search-result-empty-box'>
              <p className='search-result-empty-title'>`‘${q}’에 대한 검색 결과가 없습니다.`</p>
              <div className='search-result-empty-guide'>
                <p className='search-result-empty-guide-phase'>
                  단어의 철자가 정확한지 확인해 보세요.
                </p>
                <p className='search-result-empty-guide-phase'>
                  한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.
                </p>
                <p className='search-result-empty-guide-phase'>
                  검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.
                </p>
                <p className='search-result-empty-guide-phase'>
                  두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요.
                </p>
              </div>
            </div>
          )}
        </div>
        <PagiNation postLen={posts.allCnt} curPageNum={query} />
      </div>
    </>
  );
};

export default Search;
