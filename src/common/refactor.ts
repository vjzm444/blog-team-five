export const getCatName = (category: string) => {
  let result = '';
  switch (category) {
    case 'new':
      result = 'NEW';
      break;
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
      break;
  }
  return result;
};
