/*
import { createContext, ReactNode, useEffect, useState } from 'react';
import { login, logout } from '@/api/auth';
import { User, UserContext, UserState } from '@/common/types';

export const AuthContext = createContext<UserContext>({
  // accessToken: null,
  // refreshToken: null,
  // setAccessToken: () => {},
  // setRefreshToken: () => {},
  currentUser: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogOut: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogIn: async () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserState | null>(
    JSON.parse(localStorage.getItem('user') || 'null'),
  );
  // const [accessToken, setAccessToken] = useState<string | null>(null);
  // const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const handleLogIn = async (inputs: User) => {
    const response = await login(inputs);
    console.log(response);
    if (!response) {
      return response;
    } else {
      setCurrentUser(response.data);
      return response.data;
    }

    // setAccessToken(response.data.access);
    // setRefreshToken(response.data.refresh);
  };

  const handleLogOut = async () => {
    await logout();
    setCurrentUser(null);
    // setAccessToken(null);
    // setRefreshToken(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      // value={{ currentUser, accessToken, refreshToken, handleLogIn, handleLogOut }}
      value={{ currentUser, handleLogIn, handleLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
*/
