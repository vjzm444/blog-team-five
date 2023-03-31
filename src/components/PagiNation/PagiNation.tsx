import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.scss';

const PagiNation = ({ postLen }: { postLen: number }) => {
  const maxPageNum = Math.ceil(postLen / 10);
  const pageItem = [];
  const handleClick = () => {
    // 10개의 postlist인 context를 만들고 이것들만 관리하기 >
    // category나 search페이지에서 벗어나면 멜모리에서 제거하기
  };

  for (let i = 0; i < maxPageNum; i++) {
    pageItem.push(
      <li className='page-item' key={i}>
        <Link className='link' to={`?nextPage=${i + 1}`} onClick={handleClick}>
          {i + 1}
        </Link>
      </li>,
    );
  }

  return (
    <ul className='pagination'>
      <li className='page-item disabled'></li>
      {pageItem}
    </ul>
  );
};

export default PagiNation;
