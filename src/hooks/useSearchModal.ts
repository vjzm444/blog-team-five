import { useContext } from 'react';
import { SearchModalDispatchContext, SearchModalStateContext } from '@/context/SearchModalProvider';

const useSearchModal = () => {
  const openModal = useContext(SearchModalStateContext);
  const setOpenModal = useContext(SearchModalDispatchContext);
  // useDebugValue(open, (open) => (open === null ? 'open has value' : 'open is null'));
  if (openModal === null || !setOpenModal) {
    throw new Error('Cannot find SearchModalProvider');
  }
  return { openModal, setOpenModal };
};

export default useSearchModal;
