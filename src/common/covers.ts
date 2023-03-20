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
