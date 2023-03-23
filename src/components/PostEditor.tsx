import React, { useCallback, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { sendFormData } from '@/api/post';

interface PostEditorProps {
  quillRef: React.MutableRefObject<ReactQuill | undefined>;
  contents: string;
  setContents: React.Dispatch<React.SetStateAction<string>>;
}

const PostEditor = ({ quillRef, contents, setContents }: PostEditorProps) => {
  // 이미지를 업로드 하기 위한 함수
  // 툴바의 사진 아이콘 클릭시 기존에 작동하던 방식 대신에 실행시킬 핸들러를 만들어주자.(파일이 input 태그에 담기면 실행 될 함수)
  const imageHandler = useCallback(() => {
    const formData = new FormData(); // 이미지를 url로 바꾸기위해 서버로 전달할 폼데이터 만들기

    const input = document.createElement('input'); // input 태그를 동적으로 생성하기(// 파일을 업로드 하기 위한 input 태그 생성)
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*'); // 이미지 파일만 선택가능하도록 제한
    input.setAttribute('name', 'image');
    input.click();

    // 파일 선택창에서 이미지를 선택하면 실행될 콜백 함수 등록(파일이 input 태그에 담기면 실행 될 함수)
    input.onchange = async () => {
      if (!input.files) return;
      const file = input.files[0];
      formData.append('file', file); // 위에서 만든 폼데이터에 이미지 추가
      console.log(input.files, file);
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }

      // 폼데이터를 서버에 넘겨 multer(js 파일 가공 미들웨어~!) 로 이미지 URL 받아오기
      // 파일 이미지를 서버에 저장하기 때문에 백엔드 통신을 통해 이미지를 저장하고 불러온다.
      const res = await sendFormData(formData);
      console.log(res);
      if (!res) {
        alert('이미지 업로드에 실패하였습니다. 다시 시도해주세요!');
        return; //  return 할지 안할지 고민
      }
      // 백엔드 통신 성공시에 보내주는 이미지 url을 변수에 담는다.
      const url = res; // res.url
      // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
      // 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
      const quill = quillRef.current?.getEditor();
      /* ReactQuill 노드에 대한 Ref가 있어야 메서드들을 호출할 수 있으므로
            useRef()로 ReactQuill에 ref를 걸어주자.
            getEditor() : 편집기를 지원하는 Quill 인스턴스를 반환함
            여기서 만든 인스턴스로 getText()와 같은 메서드를 사용할 수 있다.*/

      const range = quill?.getSelection()?.index;
      //getSelection()은 현재 선택된 범위를 리턴한다. 에디터가 포커싱되지 않았다면 null을 반환한다.

      if (typeof range !== 'number') return;
      /*range는 0이 될 수도 있으므로 null만 생각하고 !range로 체크하면 잘못 작동할 수 있다.
            따라서 타입이 숫자이지 않을 경우를 체크해 리턴해주었다.*/

      quill?.setSelection(range, 1);
      /* 사용자 선택을 지정된 범위로 설정하여 에디터에 포커싱할 수 있다.
               위치 인덱스와 길이를 넣어주면 된다.*/

      quill?.clipboard.dangerouslyPasteHTML(range, `<img src=${url} alt="image" />`);
    }; //주어진 인덱스에 HTML로 작성된 내용물을 에디터에 삽입한다.
  }, [sendFormData, quillRef]);

  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 된다.
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { align: [] },
          ],
          ['image', 'video'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [imageHandler],
  );
  return (
    <ReactQuill
      ref={(element) => {
        if (element !== null) {
          quillRef.current = element;
        }
      }}
      className='editor'
      value={contents}
      onChange={setContents}
      modules={modules}
      theme='snow'
      placeholder='내용을 입력해주세요'
    />
  );
};

export default PostEditor;
