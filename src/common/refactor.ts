import DOMPurify from 'dompurify';

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
export const sanitizeHTML = (html: string): string => {
  const config = { USE_PROFILES: { html: true } };

  return DOMPurify.sanitize(html, config);
};

export const customSanitizeHTML = (html: string): string => {
  const config = { FORBID_TAGS: ['img'] };
  return DOMPurify.sanitize(html, config);
};
