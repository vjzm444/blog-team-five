import React, { createContext, ReactNode, useState } from 'react';

type AuthState = {
  user?: string;
  pwd?: string;
  roles?: any;
  accessToken?: any;
};

type AuthContextProps = {
  auth: AuthState | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthState | null>>;
};

const AuthContext = createContext<AuthContextProps>({
  auth: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [auth, setAuth] = useState<AuthState | null>(null);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
