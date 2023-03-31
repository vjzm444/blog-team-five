export interface HotPost {
  id: number;
  hot: Post[];
}

export interface PostList {
  allCnt: number;
  dataList: Post[];
}

export interface Post {
  id: number;
  uid: number;
  img: string;
  title: string;
  content: string;
  cat: string;
  date: string;
}

export interface CreatePost {
  img: string;
  title: string;
  content: string;
  cat: string;
}

export interface EditPost {
  img?: string;
  title?: string;
  content?: string;
  cat?: string;
}

export interface UserContext {
  // accessToken: string | null;
  // refreshToken: string | null;
  // setAccessToken: (token: string | null) => void;
  // setRefreshToken: (token: string | null) => void;
  currentUser: UserState | null;
  handleLogIn: (inputs: User) => Promise<UserState | null>;
  handleLogOut: () => Promise<void>;
}

export interface User {
  username: string;
  password: string;
}

export interface UserState {
  username: string;
  email: string;
  id: number;
  img: string;
}
