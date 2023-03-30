import { useNavigate, useParams } from 'react-router';
import './detail.scss';
import { deletePost, getPost } from '@/api/post';
import { Post } from '@/common/types';
import MetaContent from '@/components/MetaContent/MetaContent';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/all';
import { getCatName, sanitizeHTML } from '@/common/refactor';
import useFetch from '@/hooks/useFetch';

/*
 * 1. postId에 맞는 포스트 정보를 가져오고 포스트가 가진 카테고리 정보를 이용해 navbar에 표시를 해준다.
 * 2. 좋아요 / 댓글 기능을 추가해준다
 * 3. 같은 분야의 다른 글을 추천해 줄 수 있도록 포스트 추천(하단)
 * */
const Detail = () => {
  const { id: postId } = useParams();
  const navigate = useNavigate();
  const { data: post, error, loading } = useFetch<Post>(postId, getPost);

  const handleDeleteBtn = async (postId: number) => {
    try {
      await deletePost(postId);
      // 삭제된 데이터가 남아있다. (브라우저에서 캐시되어 있기때문? -> chatgpt에 물어보기
      navigate('/');
    } catch (error) {
      alert(`글 삭제를 실패하였습니다.\n에러 내용: ${error}`);
    }
  };

  if (loading) return <div>로딩중..</div>;

  if (error) {
    navigate('/error', { state: { error: error } });
  }

  if (!post) {
    return <div>게시글을 찾지 못해습니다. 다시 시도해주세요</div>;
  }

  return (
    <>
      <div className='container-wrapper'>
        <div className='content-container'>
          <div className='news-detail-header'>
            <div className='category-wrapper'>
              <p className='category'>{getCatName(post.cat)}</p>
              <div className='button-wrapper'>
                <Link className='link edit-button' to={`/write?edit=${post.id}`} state={post}>
                  <BiEditAlt size='24' color='#767676' />
                </Link>
                <button className='delete-button' onClick={() => handleDeleteBtn(post.id)}>
                  <AiOutlineDelete size='24' color='#767676' />
                </button>
              </div>
            </div>
            <h1
              className='news-title'
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.title) }}
            ></h1>
            <div className='news-detail-info'>
              <MetaContent date={post.date} cat={post.cat} section='detail' />
            </div>
          </div>
          <div className='next-news-contents news-highlight-box'>
            <p
              style={{ textAlign: 'justify' }}
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.content) }}
            ></p>
            {/*<p style={{ textAlign: 'justify' }}>&nbsp;</p>*/}
            {/*<h3 style={{ textAlign: 'justify' }}>*/}
            {/*  <strong>ChatGPT&nbsp;소개 및 사용 방법</strong>*/}
            {/*</h3>*/}
            {/*<h4 style={{ textAlign: 'justify' }}>*/}
            {/*  <strong>1) ChatGPT&nbsp;소개</strong>*/}
            {/*</h4>*/}
            {/*<p*/}
            {/*  style={{ textAlign: 'justify' }}*/}
            {/*  dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.content) }}*/}
            {/*></p>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
