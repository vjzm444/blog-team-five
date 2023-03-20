import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import PostEditor from '@/components/PostEditor';
import { useLocation } from 'react-router';
import { Post } from '@/common/types';
import './write.scss';

const WritePage = () => {
  const quillRef = useRef<ReactQuill>();
  const state: Post | null = useLocation().state;
  const [title, setTitle] = useState(state?.title || '');
  const [contents, setContents] = useState<string>(state?.content || '');
  const [category, setCategory] = useState(state?.cat || '');

  return (
    <>
      <div className='container editor'>
        <div className='editor-content'>
          <input
            className='editor-title'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='제목을 적어주세요'
          />
          <div className='editor-container'>
            <PostEditor quillRef={quillRef} contents={contents} setContents={setContents} />
          </div>
        </div>
        <div className='menu'></div>
      </div>
    </>
  );
};

export default WritePage;
