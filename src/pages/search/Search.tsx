import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import KeyCover from '@/components/List/KeyCover';
import { getSearchedResult } from '@/api/post';
import { Post } from '@/common/types';
import ListItem from '@/components/List/ListItem';

// category와 중복되는 코드 -> 컴포넌트화
const Search = () => {
  const location = useLocation();
  const { q } = location.state;
  const [data, setData] = useState<Post[] | null>(null);

  const fetchData = async () => {
    try {
      const res = await getSearchedResult(q);
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>게시글을 찾지 못해습니다. 다시 시도해주세요.</div>;
  }

  return (
    <>
      <KeyCover listType='search' word={q} wordLen={data.length} />
      <div className='container'>
        <div className='list-cover'>
          {data.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
