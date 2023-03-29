import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import PostEditor from '@/components/PostEditor/PostEditor';
import { useLocation, useNavigate } from 'react-router';
import { Post } from '@/common/types';
import './write.scss';
import { createPost, sendFormData, updatePost } from '@/api/post';

const Write = () => {
  const quillRef = useRef<ReactQuill>();
  const state: Post | null = useLocation().state;
  const [title, setTitle] = useState(state?.title || '');
  const [content, setContent] = useState(state?.content || '');
  const [category, setCategory] = useState(state?.cat || '');
  // const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileURL] = useState(state?.img);
  const navigate = useNavigate();
  console.log('render');
  const upload = async (userFileList?: File | null) => {
    try {
      const formData = new FormData();
      // console.log(file);
      if (!userFileList) {
        alert('이미지 업로드에 실패하였습니다. 다시 시도해주세요!');
        return;
      }
      formData.append('uploadFile', userFileList);
      const res = await sendFormData(formData);
      return res;
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userFileList = e.target.files ? e.target.files[0] : null;
    const imgUrl = await upload(userFileList);
    console.log(imgUrl);
    if (!imgUrl) {
      alert('이미지 업로드에 실패하였습니다. 다시 시도해주세요!');
      return;
    }
    setFileURL(imgUrl);
    alert('이미지 업로드에 성공하였습니다.');
  };
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!fileUrl) {
      console.log('커버이미지 업로드 필요');
      return;
    }
    try {
      state
        ? await updatePost(state.id, {
            title,
            content,
            cat: category,
            img: fileUrl,
          })
        : await createPost({ title, content, cat: category, img: fileUrl });
      // success response 받기전까지 loading
      // success response 받은후 loading x > navigate
      // alert('글 생성에 성공하였습니다. 메인페이지로 이동합니다.');
      navigate('/');
    } catch (e) {
      alert('글 생성에 실패하였습니다. 다시 시도해주세요!');
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
              <PostEditor quillRef={quillRef} contents={content} setContents={setContent} />
            </div>
          </div>
        </div>
        <div className='menu'>
          <div className='title-wrapper'>
            <p>기타</p>
          </div>
          <div className='item-wrapper'>
            <div className='item'>
              <h1>공개설정 및 커버 이미지</h1>
              <span>
                <b>공개/비공개</b> 공개
              </span>
              {fileUrl ? (
                <img src={fileUrl} width='150px' height='150px' alt='img' />
              ) : (
                <span>cover image</span>
              )}
              <input
                style={{ display: 'none' }}
                type='file'
                id='file'
                name=''
                onChange={handleChange}
              />
              <label className='file' htmlFor='file'>
                커버 이미지 업로드(권장: 500x500 이상)
              </label>
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
        <div className='button-wrapper'>
          {title && content && category && fileUrl ? (
            <button onClick={handleClick}>제출하기</button>
          ) : (
            <button className='impossible' onClick={handleClick} disabled={true}>
              제출하기
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Write;
