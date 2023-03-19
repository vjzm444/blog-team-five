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
  updateDt: string;
}
