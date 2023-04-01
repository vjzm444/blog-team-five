import { IoCloseOutline, IoSearch } from 'react-icons/io5';
import useSearchModal from '@/hooks/useSearchModal';
import './searchModal.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const SearchModal = () => {
  const { openModal, setOpenModal } = useSearchModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState<string>('');
  const navigate = useNavigate();
  useEffect(() => {
    if (openModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    console.log(inputVal);
  };

  const viewNavigate = (newRoute: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };

  const handleClose = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!document.startViewTransition) {
      setOpenModal((prev) => !prev);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return document.startViewTransition(() => {
        setOpenModal((prev) => !prev);
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const q = inputVal;
    if (e.key === 'Enter') {
      if (q === '') return;
      setOpenModal((prev) => !prev);
      setInputVal('');
      viewNavigate(`/search?keyword=${q}`);
      // viewTransitionNav.ts('/search', {
      //   state: {
      //     q,
      //   },
      // });
    }
  };

  return (
    <div className={openModal ? 'search-modal active' : 'search-modal'}>
      <div className='search-part'>
        <div className='container'>
          <IoSearch style={{ color: '#9e9e9e', fontSize: '21px' }}></IoSearch>
          <input
            ref={inputRef}
            className='news-search-input'
            id='searchInput'
            placeholder='어떤 콘텐츠가 궁금하신가요?'
            type='text'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <IoCloseOutline
            onClick={handleClose}
            style={{ color: '#9e9e9e', fontSize: '33px', cursor: 'pointer' }}
          ></IoCloseOutline>
        </div>
      </div>
      <div className='search-sub-part'>
        <div className='container'>
          <div className='recent-keyword-part'>
            <div className='title'>
              최근검색어
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div className='sub-action' onClick={() => console.log('전체삭제')}>
                전체 삭제
              </div>
            </div>
            <div className='recent-keyword-part-wrapper empty'>
              <div className='empty-recent-keyword'>최근 검색어가 없습니다.</div>
              <div className='recent-keyword-list' id='recentKeywordList'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='background-overlay'></div>
    </div>
  );
};

export default SearchModal;
