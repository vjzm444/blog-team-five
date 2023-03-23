import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import PostEditor from '@/components/PostEditor';
import { useLocation, useNavigate } from 'react-router';
import { Post } from '@/common/types';
import './write.scss';

const WritePage = () => {
  const quillRef = useRef<ReactQuill>();
  const state: Post | null = useLocation().state;
  const [title, setTitle] = useState(state?.title || '');
  const [contents, setContents] = useState<string>(state?.content || '');
  const [category, setCategory] = useState(state?.cat || '');
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      // console.log(file);
      if (!file) return;
      formData.append('file', file);
      const res = await axios.post('/upload', formData);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const imgUrl = await upload();
    try {
      // state
      //   ? await axios.put(`/posts/${state.id}`, {
      //       title,
      //       desc: value,
      //       cat,
      //       img: file ? imgUrl : '',
      //     })
      //   : await axios.post(`/posts/`, {
      //       title,
      //       desc: value,
      //       cat,
      //       img: file ? imgUrl : '',
      //       date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      //     });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='container editor'>
        <div className='content'>
          <div className='title-wrapper'>
            <div className='title-name'>
              <p>제목</p>
            </div>
            <div className='content-name'>
              <p>내용</p>
            </div>
          </div>
          <div className='editor-wrapper'>
            <input
              className='title-container'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='제목을 적어주세요'
            />
            <div className='editor-container'>
              <PostEditor quillRef={quillRef} contents={contents} setContents={setContents} />
            </div>
          </div>
        </div>
        <div className='menu'>
          <div className='item'>
            <h1>출처</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility</b> Public
            </span>
            <input
              style={{ display: 'none' }}
              type='file'
              id='file'
              name=''
              onChange={(e) => {
                const formData = new FormData();
                // console.log(file);
                formData.append('file', e.target.files![0]);
                console.log(e.target.files, formData);
                for (const [key, value] of formData.entries()) {
                  console.log(key, value);
                }
                setFile(e.target.files ? e.target.files[0] : null);
              }}
            />
            <label className='file' htmlFor='file'>
              이미지 업로드
            </label>
            <div className='buttons'>
              <button>저장하기</button>
              <button onClick={handleClick}>제출하기</button>
            </div>
          </div>
          <div className='item'>
            <h1>카테고리</h1>
            <div className='cat'>
              <input
                type='radio'
                checked={category === 'new'}
                name='cat'
                value='new'
                id='new'
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor='new'>New</label>
            </div>
            <div className='cat'>
              <input
                type='radio'
                checked={category === 'plan'}
                name='cat'
                value='plan'
                id='plan'
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor='plan'>기획</label>
            </div>
            <div className='cat'>
              <input
                type='radio'
                checked={category === 'design'}
                name='cat'
                value='design'
                id='design'
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor='design'>디자인</label>
            </div>
            <div className='cat'>
              <input
                type='radio'
                checked={category === 'develop'}
                name='cat'
                value='develop'
                id='develop'
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor='develop'>개발</label>
            </div>
            <div className='cat'>
              <input
                type='radio'
                checked={category === 'product'}
                name='cat'
                value='product'
                id='product'
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor='product'>프로덕트</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePage;
