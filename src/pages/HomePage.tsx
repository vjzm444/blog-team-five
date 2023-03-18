import React from 'react';
import './home.scss';
import MainCard from '@/components/MainCard';

interface HotPost {
  id: number;
  hot: Post[];
}

export interface Post {
  id: number;
  img: string;
  title: string;
  desc: string;
  cat: string;
}

const HomePage = () => {
  const posts = [
    {
      id: 1,
      hot: [
        {
          id: 1,
          img: 'https://yozm.wishket.com/media/news/1901/image001.png',
          title: '개발자는 ChatGPT 이렇게 활용하면 좋습니다',
          desc: '최근 ChatGPT가 여러 분야에서 화제가 되고 있습니다. 벌써 많은 사람들이 ChatGPT를 이용하여 아이디어를 얻고, 보고서를 만들고, 번거로운 업무를 자동화하는 등 여러 가지 시도가 이어지고 있는데요. 이와 관련해서 이번 글에서는 개발자 관점에서 ChatGPT를 소프트웨어 개발에 어떻게 활용할 수 있는지 알아보고, ChatGPT의 한계에 대해서도 간단히 정리해 보았습니다.',
          cat: '개발',
        },
        {
          id: 2,
          img: 'https://yozm.wishket.com/media/news/1929/image001.png',
          title: 'ChatGPT 등장 후 우리에게 일어난 일들',
          desc: '얼마 전 부모님 집에서 다 같이 테이블에 둘러앉아 수다를 떨고 있었는데, 아버지가 "뉴스에서 뭐더라… 챗지피티라고 했나? 그게 도대체 뭔 지 설명 좀 해다오"라는 말을 꺼냈다. 최신 기술에 크게 관심 없는 분들이 ChatGPT에 대해 묻는 모습을 보니, 미디어에서 정말 많이 다루기는 했구나 싶었다. 이번 글에서는 ChatGPT가 등장하고 지금까지 있었던 일들을 정리해 보고자 한다. 우리가 사는 일상이 어떤 식으로 바뀌어 갈지에 대해 작은 힌트가 되었으면 좋겠다.',
          cat: '개발',
        },
        {
          id: 3,
          img: 'https://yozm.wishket.com/media/news/1923/image3.png',
          title: '네이버페이와 삼성페이가 손잡을 줄이야',
          desc: '얼마 전 제 눈을 번쩍 뜨게 한 기사가 있었습니다. 바로 네이버페이와 삼성페이가 손을 잡는다는 소식이었죠. 최근 3년간 본 모든 금융, 핀테크 관련 기사 중 가장 충격적이었습니다. 마치 독수리와 사자가 손을 잡는 느낌이랄까요? 각자 자기 동네를 꽉 잡고 있던 사업자들이 반대편 영역으로 크로스하겠다는 것입니다. 굳이 손잡을 이유가 없는데 대체 왜? 무엇을 주고받기 위해? 같은 의문이 꼬리에 꼬리를 물었습니다. 제 견해를 바탕으로 이번 제휴의 의미와 양사의 속셈을 따져보고자 합니다.',
          cat: '개발',
        },
      ],
    },
    {
      id: 2,
      hot: [
        {
          id: 4,
          img: 'https://yozm.wishket.com/media/news/1901/image001.png',
          title: '개발자는 ChatGPT 이렇게 활용하면 좋습니다',
          desc: '최근 ChatGPT가 여러 분야에서 화제가 되고 있습니다. 벌써 많은 사람들이 ChatGPT를 이용하여 아이디어를 얻고, 보고서를 만들고, 번거로운 업무를 자동화하는 등 여러 가지 시도가 이어지고 있는데요. 이와 관련해서 이번 글에서는 개발자 관점에서 ChatGPT를 소프트웨어 개발에 어떻게 활용할 수 있는지 알아보고, ChatGPT의 한계에 대해서도 간단히 정리해 보았습니다.',
          cat: '개발',
        },
        {
          id: 5,
          img: 'https://yozm.wishket.com/media/news/1929/image001.png',
          title: 'ChatGPT 등장 후 우리에게 일어난 일들',
          desc: '얼마 전 부모님 집에서 다 같이 테이블에 둘러앉아 수다를 떨고 있었는데, 아버지가 "뉴스에서 뭐더라… 챗지피티라고 했나? 그게 도대체 뭔 지 설명 좀 해다오"라는 말을 꺼냈다. 최신 기술에 크게 관심 없는 분들이 ChatGPT에 대해 묻는 모습을 보니, 미디어에서 정말 많이 다루기는 했구나 싶었다. 이번 글에서는 ChatGPT가 등장하고 지금까지 있었던 일들을 정리해 보고자 한다. 우리가 사는 일상이 어떤 식으로 바뀌어 갈지에 대해 작은 힌트가 되었으면 좋겠다.',
          cat: '개발',
        },
        {
          id: 6,
          img: 'https://yozm.wishket.com/media/news/1923/image3.png',
          title: '네이버페이와 삼성페이가 손잡을 줄이야',
          desc: '얼마 전 제 눈을 번쩍 뜨게 한 기사가 있었습니다. 바로 네이버페이와 삼성페이가 손을 잡는다는 소식이었죠. 최근 3년간 본 모든 금융, 핀테크 관련 기사 중 가장 충격적이었습니다. 마치 독수리와 사자가 손을 잡는 느낌이랄까요? 각자 자기 동네를 꽉 잡고 있던 사업자들이 반대편 영역으로 크로스하겠다는 것입니다. 굳이 손잡을 이유가 없는데 대체 왜? 무엇을 주고받기 위해? 같은 의문이 꼬리에 꼬리를 물었습니다. 제 견해를 바탕으로 이번 제휴의 의미와 양사의 속셈을 따져보고자 합니다.',
          cat: '개발',
        },
      ],
    },
    {
      id: 3,
      hot: [
        {
          id: 5,
          img: 'https://yozm.wishket.com/media/news/1901/image001.png',
          title: '개발자는 ChatGPT 이렇게 활용하면 좋습니다',
          desc: '최근 ChatGPT가 여러 분야에서 화제가 되고 있습니다. 벌써 많은 사람들이 ChatGPT를 이용하여 아이디어를 얻고, 보고서를 만들고, 번거로운 업무를 자동화하는 등 여러 가지 시도가 이어지고 있는데요. 이와 관련해서 이번 글에서는 개발자 관점에서 ChatGPT를 소프트웨어 개발에 어떻게 활용할 수 있는지 알아보고, ChatGPT의 한계에 대해서도 간단히 정리해 보았습니다.',
          cat: '개발',
        },
        {
          id: 6,
          img: 'https://yozm.wishket.com/media/news/1929/image001.png',
          title: 'ChatGPT 등장 후 우리에게 일어난 일들',
          desc: '얼마 전 부모님 집에서 다 같이 테이블에 둘러앉아 수다를 떨고 있었는데, 아버지가 "뉴스에서 뭐더라… 챗지피티라고 했나? 그게 도대체 뭔 지 설명 좀 해다오"라는 말을 꺼냈다. 최신 기술에 크게 관심 없는 분들이 ChatGPT에 대해 묻는 모습을 보니, 미디어에서 정말 많이 다루기는 했구나 싶었다. 이번 글에서는 ChatGPT가 등장하고 지금까지 있었던 일들을 정리해 보고자 한다. 우리가 사는 일상이 어떤 식으로 바뀌어 갈지에 대해 작은 힌트가 되었으면 좋겠다.',
          cat: '개발',
        },
        {
          id: 7,
          img: 'https://yozm.wishket.com/media/news/1923/image3.png',
          title: '네이버페이와 삼성페이가 손잡을 줄이야',
          desc: '얼마 전 제 눈을 번쩍 뜨게 한 기사가 있었습니다. 바로 네이버페이와 삼성페이가 손을 잡는다는 소식이었죠. 최근 3년간 본 모든 금융, 핀테크 관련 기사 중 가장 충격적이었습니다. 마치 독수리와 사자가 손을 잡는 느낌이랄까요? 각자 자기 동네를 꽉 잡고 있던 사업자들이 반대편 영역으로 크로스하겠다는 것입니다. 굳이 손잡을 이유가 없는데 대체 왜? 무엇을 주고받기 위해? 같은 의문이 꼬리에 꼬리를 물었습니다. 제 견해를 바탕으로 이번 제휴의 의미와 양사의 속셈을 따져보고자 합니다.',
          cat: '개발',
        },
      ],
    },
  ];

  return (
    <div className='layout'>
      <div className='main-intro'>
        <div className='container'>
          <p className='intro'>
            매일 업데이트되는 <span className='key-visual-guide'>요즘 사람들의 IT 이야기,</span>
            <br />
            <span className='key-visual-guide-point-word'>요즘IT</span>와 함께 성장해보세요.{' '}
            <span className='key-visual-guide-long-point'></span>
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='main-list'>
          <div className='main-list-title'>
            요즘 인기 있는 IT 이야기
            <img src='https://yozm.wishket.com/static/renewal/img/news/icon-thumbs.png' alt='img' />
          </div>
          {posts.map((postRow: HotPost) => (
            <div className='main-list-row' key={postRow.id}>
              {postRow.hot.map((post: Post) => (
                <MainCard post={post} key={post.id} />
              ))}
              )
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
