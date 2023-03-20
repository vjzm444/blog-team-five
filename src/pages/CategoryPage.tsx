import React from 'react';
import './category.scss';
import { Link } from 'react-router-dom';
import MetaContent from '@/components/MetaContent';
import { useParams } from 'react-router';
import { getCategoryCover, getCategoryCoverSrcSet } from '@/common/covers';

const CategoryPage = () => {
  const { id: categoryType } = useParams();
  console.log(categoryType);
  return (
    <>
      <div className='list-key-visual'>
        <img
          className='list-key-visual-image'
          src={categoryType ? getCategoryCover(categoryType) : ''}
          srcSet={categoryType ? getCategoryCoverSrcSet(categoryType) : ''}
          alt='img'
        />
        <h2 className='list-key-visual-title'>요즘, 프로덕트</h2>
      </div>
      <div className='container'>
        <div className='list-cover'>
          <div className='list-item-link'>
            <div className='list-item'>
              <div className='flex-box'>
                <div className='item-main'>
                  <Link className='item-title link link-text' to={`/detail/id`}>
                    {/*클릭시 detail페이지로 가기~*/}
                    ChatGPT 등장 후 우리에게 일어난 일들
                  </Link>
                  <MetaContent
                    cat={'개발'}
                    date={'2023-03-19T00:39:36.000+00:00'}
                    section='category'
                  />
                  <Link className='link' to={`/detail/id`}>
                    <p className='item-description'>
                      은행, 카드, 보험과 같은 기존 금융업은 높은 진입장벽으로 인해 신규 진입이
                      어려운 영역인데요. 이러한 구조 때문에 쉽게 안주하는 것으로 보여 많은 비판을
                      받기도 했습니다. 이에 금융위원회는 핀테크 기업이 금융업에 직접 진출한다면,
                      실질적인 경쟁을 통해 금융업의 혁신을 가져올 것이라 판단했다고 합니다. 이번
                      글에서는 핀테크 업계가 요구한 건의 내용과 앞으로 금융 업계의 전망에 대해
                      살펴보겠습니다.
                    </p>
                  </Link>
                </div>
                <div className='item-thumbnail-pc'>
                  <Link to={`/detail/id`}>
                    <img
                      className='thumbnail-image'
                      src='https://yozm.wishket.com/media/news/1938/image1.jpg'
                      alt='img'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='list-item-link'>
            <div className='list-item'>
              <div className='flex-box'>
                <div className='item-main'>
                  <Link className='item-title link link-text' to={`/detail/id`}>
                    {/*클릭시 detail페이지로 가기~*/}
                    ChatGPT 등장 후 우리에게 일어난 일들
                  </Link>
                  <MetaContent
                    cat={'개발'}
                    date={'2023-03-19T00:39:36.000+00:00'}
                    section='category'
                  />
                  <Link className='link' to={`/detail/id`}>
                    <p className='item-description'>
                      은행, 카드, 보험과 같은 기존 금융업은 높은 진입장벽으로 인해 신규 진입이
                      어려운 영역인데요. 이러한 구조 때문에 쉽게 안주하는 것으로 보여 많은 비판을
                      받기도 했습니다. 이에 금융위원회는 핀테크 기업이 금융업에 직접 진출한다면,
                      실질적인 경쟁을 통해 금융업의 혁신을 가져올 것이라 판단했다고 합니다. 이번
                      글에서는 핀테크 업계가 요구한 건의 내용과 앞으로 금융 업계의 전망에 대해
                      살펴보겠습니다.
                    </p>
                  </Link>
                </div>
                <div className='item-thumbnail-pc'>
                  <Link to={`/detail/id`}>
                    <img
                      className='thumbnail-image'
                      src='https://yozm.wishket.com/media/news/1938/image1.jpg'
                      alt='img'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
