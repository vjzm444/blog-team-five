import { Link } from 'react-router-dom';
import './pagination.scss';
import React, { useState } from 'react';

const PagiNation = ({ postLen, curPageNum }: { postLen: number; curPageNum: string | null }) => {
  const [currentPage, setCurrentPage] = useState(curPageNum ? +curPageNum - 1 : 0);
  const maxPageNum = Math.ceil(postLen / 10);
  const pageItem = [];
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const selectedPage = (e.target as HTMLElement).textContent;
    if (selectedPage) {
      setCurrentPage(+selectedPage - 1);
    }
  };

  for (let i = 0; i < maxPageNum; i++) {
    const className = currentPage === i ? 'link active' : 'link';
    pageItem.push(
      <li className='page-item' key={i}>
        <Link className={className} to={`?nextPage=${i + 1}`} onClick={handleClick}>
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
