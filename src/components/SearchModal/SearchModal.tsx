import { IoCloseOutline, IoSearch } from 'react-icons/io5';
import useSearchModal from '@/hooks/useSearchModal';
import './searchModal.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const SearchModal = () => {
  const { open, setOpen } = useSearchModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState<string>('');
  const navigate = useNavigate();
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    console.log(inputVal);
  };

  const viewNavigate = (newRoute: string, q: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!document.startViewTransition) {
      return navigate(newRoute, { state: { q } });
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return document.startViewTransition(() => {
        navigate(newRoute, { state: { q } });
      });
    }
  };

  const handleClose = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!document.startViewTransition) {
      setOpen((prev) => !prev);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return document.startViewTransition(() => {
        setOpen((prev) => !prev);
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const q = inputVal;
    if (e.key === 'Enter') {
      setOpen((prev) => !prev);
      setInputVal('');
      viewNavigate('/search', q);
      // viewTransitionNav.ts('/search', {
      //   state: {
      //     q,
      //   },
      // });
    }
  };

  return (
    <div className={open ? 'search-modal active' : 'search-modal'}>
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
