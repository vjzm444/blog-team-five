[![Netlify Status](https://api.netlify.com/api/v1/badges/46ca6936-f143-49f7-8d30-e0608ee8a739/deploy-status)](https://app.netlify.com/sites/yozm-blog-5/deploys)

# Front-end
- Init Project
    - react
    - ts
    - vite

# Todo
- loading 로직 구성하기
  - 원인: 기존에 loading이 없어 게시글을 서버에서 가져올 때, '게시글을 찾지 못해습니다. 다시 시도해주세요.'문장을 보여준다.
  - 고민: useFetch로 가져오기
- 페이징 구현 작업
  - view transition api 사용
- 서버에서 디테일 / 카테고리 / 전체목록 / 검색 api 에러코드 작업완료되는 즉시
  - 에러 테스트
- 로딩 ux 구현
- 모바일 환경 작업
- 광고 삽입
- google analysis 적용
- sanity.io (Anything content)
- 주제 변경 고려
- chat gpt 사진 이미지 추천 기능 고려
- mit lisence 적용
- local storage 사용하기 -> searchModal에 적용
- netlify env 전역변수 front에서 사용한 것을 참조하기 (vite에...)
- footer 반응형 디자인
- 글 작성 중 에디터 사라지는 버그 처리
- 글 작성 중 탭에서 나갔다가 들어오는 경우 쓴 글의 내용 다시 불러오는 기능
- authm/write 페이지 모바일 스타일 적용


- search > Test 검색시 test도 같이 검출 가능하게 요구
- 페이지 이동시 > 맨 위로 이동


- 메모장 정리 하기👇
필요한 기능

1. 다른 유저가 최근에 해당 게시물을 읽은지 얼마나 되었는지
2. 카테고리에 new는 사실 카테고리가 아니라 새로 추가된 게시글을 의미한다. (추후 구분해주기,. 일단 카테고리로) -> 최근이라는 기준도 정해야한다.
3. 유저가 여러개의 이미지를 올렸을 경우 / 다른 이미지 파일을 올렷을 경우 처리
   4.. 유저가 글 수정 중 이미지를 올렸음 -> 서버에 저장 -> 유저가 마음 변해서 삭제 -> 서버에 있는거를 삭제할 방법
5. 검색 기능
   -> 검색 전 최근키워드 표시 -> 로컬 스토리지 활용
   -> 검색시 (제목 or 내용) 중 키워드 검색시 다른 창에서
   OO에 대한 검색 결과('10') 카테고리처럼 나열
6. 로그인 회원가입 기능
7. 페이지네이션(페이징 구현 필요)
8. 추천글 필요

9. 이미지 한글이름 서버에서 처리 작업

-> ai 추천 이미지 업로드 기능 추가


3/23
- blob 이미지 첨부를 서버쪽으로 손 안가게
- imgur // 업로드할 수 있는 api(클라우드?)

jwt (statless)
서버 부담 x
- 로그인이 필요한 서비스 이용시 토큰을 헤더에 담아 요청
- 로그인시 토큰을 받아 쿠키 or 로컬스토리지에 담아 저장

토큰 탈취에 대비하여 사용기간제한 설정

* 이번주 스프린트 진행상황
0. 컨텐츠 제작용 텍스트 에디터 이미지 업로드 기능과 커버 이미지 업로드 카테고리, 제목 작성시 글쓰기 완료 / 글 수정
10. detail page에서 text editor로 저장한 content의 string을 element로 HTML 처리 (o)
- dangerouslySetInnerHTML(XSS(Cross-Site Scripting) 공격에 취약)  / dompurify(XSS 필터링)
11. 프론트 회원가입/로그인 화면 설계완료

* 다음주까지의 스프린트
  회원가입
  로그인 (jwt accesstoken / refreshtoken) 적용
- 로그인 유지 / 비밀번호 찾기
  검색기능
  가능하면 댓글 / 좋아요 (추천게시글을 위한 빌드업)
  카테고리의 new의
  페이징