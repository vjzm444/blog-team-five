// AuthProvider와 다른 방법으로 작성

import React, { createContext, Dispatch, ReactNode, useState } from 'react';

// type SearchModalProps = {
//   open: boolean;
//   setOpen: Dispatch<React.SetStateAction<boolean>>;
// };

export const SearchModalStateContext = createContext<boolean | null>(null);
export const SearchModalDispatchContext = createContext<Dispatch<
  React.SetStateAction<boolean>
> | null>(null);

export const SearchModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <SearchModalStateContext.Provider value={open}>
      <SearchModalDispatchContext.Provider value={setOpen}>
        {children}
      </SearchModalDispatchContext.Provider>
    </SearchModalStateContext.Provider>
  );
};
