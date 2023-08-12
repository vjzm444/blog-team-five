import React from 'react';
import { getCategoryCover, getCategoryCoverSrcSet, getListTitle } from '@/common/covers';
import './keyCover.scss';

const KeyCover = ({
  listType,
  word,
  wordLen,
}: {
  listType: string;
  word?: string;
  wordLen?: number;
}) => {
  return (
    <div className='list-key-visual'>
      <img
        className='list-key-visual-image'
        src={getCategoryCover(listType)}
        srcSet={getCategoryCoverSrcSet(listType)}
        alt='img'
      />
      <h2 className='list-key-visual-title'>
        {listType === 'search' ? `'${word}'에 대한 검색 결과 (${wordLen})` : getListTitle(listType)}
      </h2>
    </div>
  );
};

export default KeyCover;
