import { IoCloseOutline, IoSearch } from 'react-icons/io5';
import useSearchModal from '@/hooks/useSearchModal';
import './searchModal.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { MdDeleteOutline } from 'react-icons/md';

const SearchModal = () => {
  const { openModal, setOpenModal } = useSearchModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  // const [recentSearches, setRecentSearches] = = useState(
  //     Object.entries(localStorage).map(([key, value]) => ({ key, value }))
  // );
  const navigate = useNavigate();

  useEffect(() => {
    const searches = localStorage.getItem('recentSearches');
    if (searches) {
      setRecentSearches(JSON.parse(searches));
    }
  }, []);

  useEffect(() => {
    if (openModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openModal]);

  const handleKeywordDelete = (value: string) => {
    const filteredSearches = recentSearches.filter((eachVal) => eachVal !== value);
    localStorage.setItem('recentSearches', JSON.stringify(filteredSearches));
    setRecentSearches(filteredSearches);
  };

  const handleAllDelete = () => {
    localStorage.removeItem('recentSearches');
    setRecentSearches([]);
  };

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
      if (q === '' || q.trim() === '') return;
      // store searched word in localstorage
      // maximum 5 words
      const newSearches = [q, ...recentSearches.slice(0, 5)];
      setRecentSearches(newSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newSearches));
      setOpenModal((prev) => !prev);
      setInputVal('');
      viewNavigate(`/search?keyword=${q}`);
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
              <button
                className={recentSearches.length ? 'sub-action active' : 'sub-action'}
                onClick={handleAllDelete}
              >
                전체 삭제
              </button>
            </div>
            <div className='recent-keyword-part-wrapper empty'>
              <div
                className={
                  recentSearches.length ? 'empty-recent-keyword' : 'empty-recent-keyword active'
                }
              >
                최근 검색어가 없습니다.
              </div>
              <div className='recent-keyword-list' id='recentKeywordList'>
                {recentSearches.map((recentKeywords, idx) => (
                  <div className='recent-keyword' key={idx}>
                    <button className='keyword-title' onClick={() => console.log('search')}>
                      {recentKeywords}
                    </button>
                    <button
                      className='icon-delete-wrapper'
                      onClick={() => handleKeywordDelete(recentKeywords)}
                    >
                      <MdDeleteOutline className='icon-delete'></MdDeleteOutline>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='background-overlay'></div>
    </div>
  );
};

export default SearchModal;
