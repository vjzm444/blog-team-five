// AuthProvider와 다른 방법으로 작성

import React, { createContext, Dispatch, ReactNode, useState } from 'react';

// type SearchModalProps = {
//   open: boolean;
//   setOpen: Dispatch<React.SetStateAction<boolean>>;
// };

export const MenuStateContext = createContext<boolean | null>(null);
export const MenuDispatchContext = createContext<Dispatch<React.SetStateAction<boolean>> | null>(
  null,
);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <MenuStateContext.Provider value={open}>
      <MenuDispatchContext.Provider value={setOpen}>{children}</MenuDispatchContext.Provider>
    </MenuStateContext.Provider>
  );
};
