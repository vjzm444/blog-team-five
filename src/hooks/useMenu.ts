import { useContext } from 'react';
import { MenuDispatchContext, MenuStateContext } from '@/context/MenuProvider';

const useMenu = () => {
  const openMenu = useContext(MenuStateContext);
  const setOpenMenu = useContext(MenuDispatchContext);
  // useDebugValue(open, (open) => (open === null ? 'open has value' : 'open is null'));
  if (openMenu === null || !setOpenMenu) {
    throw new Error('Cannot find SearchModalProvider');
  }
  return { openMenu, setOpenMenu };
};

export default useMenu;
