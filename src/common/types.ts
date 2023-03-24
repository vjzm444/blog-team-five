export interface HotPost {
  id: number;
  hot: Post[];
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
