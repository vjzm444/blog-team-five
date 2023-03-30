import { useLocation } from 'react-router';
import KeyCover from '@/components/List/KeyCover';
import { getSearchedResult } from '@/api/post';
import { Post } from '@/common/types';
import ListItem from '@/components/List/ListItem';
import useFetch from '@/hooks/useFetch';
import './search.scss';

// category와 중복되는 코드 -> 컴포넌트화
const Search = () => {
  const location = useLocation();
  const { q } = location.state;

  const { data: posts, error, loading } = useFetch<Post[]>(q, getSearchedResult);

  if (loading) return <div>로딩중..</div>;

  if (error)
    return (
      <div>
        에러가 발생했습니다.
        <br /> 에러내용: {error}
      </div>
    );

  if (!posts) {
    return <div>게시글을 찾지 못해습니다. 다시 시도해주세요</div>;
  }

  return (
    <>
      <KeyCover listType='search' word={q} wordLen={posts.length} />
      <div className='container'>
        <div className={posts.length ? 'list-cover' : 'list-cover search-empty-cover'}>
          {posts.length ? (
            posts.map((post) => <ListItem key={post.id} post={post} />)
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
      </div>
    </>
  );
};

export default Search;
