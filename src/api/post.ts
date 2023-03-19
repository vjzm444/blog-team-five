import axios from 'axios';
import { HotPost, Post } from '@/common/types';

const API_BASE_URL = 'http://175.124.137.189:5555';

export async function getHotPosts() {
  const response = await axios.get<HotPost[]>(`${API_BASE_URL}/postList`);
  // console.log(response);
  return response.data;
}

export async function getPost(id: string) {
  const response = await axios.get<Post>(`${API_BASE_URL}/posts/${id}`);
  // console.log(response);
  return response.data;
}

// export async function createUser(user) {
//   const response = await fetch(`${API_BASE_URL}/users`, {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.json();
// }
