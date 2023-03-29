import { useContext } from 'react';
import { SearchModalDispatchContext, SearchModalStateContext } from '@/context/SearchModalProvider';

const useSearchModal = () => {
  const open = useContext(SearchModalStateContext);
  const setOpen = useContext(SearchModalDispatchContext);
  // useDebugValue(open, (open) => (open === null ? 'open has value' : 'open is null'));
  if (open === null || !setOpen) {
    throw new Error('Cannot find SearchModalProvider');
  }
  return { open, setOpen };
};

export default useSearchModal;
