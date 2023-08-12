export const getCategoryCover = (param: string) => {
  let imgSrc = '';
  switch (param) {
    case 'new':
      imgSrc = 'https://yozm.wishket.com/static/renewal/img/news/bg-new.png';
      break;
    case 'plan':
      imgSrc = 'https://yozm.wishket.com/static/renewal/img/news/bg-plan.png';
      break;
    case 'design':
      imgSrc = 'https://yozm.wishket.com/static/renewal/img/news/bg-design.png';
      break;
    case 'develop':
      imgSrc = 'https://yozm.wishket.com/static/renewal/img/news/bg-develop.png';
      break;
    case 'product':
      imgSrc = 'https://yozm.wishket.com/static/renewal/img/news/bg-product.png';
      break;
    case 'search':
      imgSrc = 'https://yozm.wishket.com/static/renewal/img/news/bg-search.png';
      break;
    default:
      console.log('undefined img src');
      break;
  }
  return imgSrc;
};

export const getCategoryCoverSrcSet = (param: string) => {
  let srcSet = '';
  switch (param) {
    case 'new':
      srcSet =
        'https://yozm.wishket.com/static/renewal/img/news/bg-new.png 1x, https://yozm.wishket.com/static/renewal/img/news/bg-new@3x.png 3x';
      break;
    case 'plan':
      srcSet =
        'https://yozm.wishket.com/static/renewal/img/news/bg-plan.png 1x, https://yozm.wishket.com/static/renewal/img/news/bg-plan@3x.png 3x';
      break;
    case 'design':
      srcSet =
        'https://yozm.wishket.com/static/renewal/img/news/bg-design.png 1x, https://yozm.wishket.com/static/renewal/img/news/bg-design@3x.png 3x';
      break;
    case 'develop':
      srcSet =
        'https://yozm.wishket.com/static/renewal/img/news/bg-develop.png 1x, https://yozm.wishket.com/static/renewal/img/news/bg-develop@3x.png 3x';
      break;
    case 'product':
      srcSet =
        'https://yozm.wishket.com/static/renewal/img/news/bg-product.png 1x, https://yozm.wishket.com/static/renewal/img/news/bg-product@3x.png 3x';
      break;
    default:
      console.log('undefined img src');
      break;
  }
  return srcSet;
};

export const getListTitle = (listType: string) => {
  let title = '';
  switch (listType) {
    case 'new':
      title = '요즘, new';
      break;
    case 'plan':
      title = '요즘, ' + getTranslatedWord('plan');
      break;
    case 'design':
      title = '요즘, ' + getTranslatedWord('design');
      break;
    case 'develop':
      title = '요즘, ' + getTranslatedWord('develop');
      break;
    case 'product':
      title = '요즘, ' + getTranslatedWord('product');
      break;
    default:
      console.log('undefined title');
  }
  return title;
};

export const getTranslatedWord = (word: string) => {
  let result = '';
  switch (word) {
    case 'plan':
      result = '기획';
      break;
    case 'design':
      result = '디자인';
      break;
    case 'develop':
      result = '개발';
      break;
    case 'product':
      result = '프로덕트';
      break;
    default:
      console.log('undefined word');
  }
  return result;
};
