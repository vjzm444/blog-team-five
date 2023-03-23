import axios from 'axios';
import { HotPost, Post } from '@/common/types';

export const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export async function getHotPosts(): Promise<HotPost[] | null> {
  try {
    const response = await axios.get<HotPost[]>(`${API_BASE_URL}/postList`);
    // console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getPost(id: string): Promise<Post | null> {
  try {
    const response = await axios.get<Post>(`${API_BASE_URL}/detail/${id}`);
    // console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function sendFormData(formData: FormData): Promise<{ url: string } | null> {
  try {
    console.log(formData);
    // const response = await axios.post(`${API_BASE_URL}/upload`, formData);
    const response = await axios.post(`http://localhost:8800/api/upload`, formData);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export const getCategoryPosts = async (category: string): Promise<Post[] | null> => {
  try {
    const response = await axios.get(`http://175.124.137.189:5555/categoryDataSelect/${category}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deletePost = async (postId: number) => {
  try {
    await axios.delete(`http://175.124.137.189:5555/delete/${postId}`);
  } catch (e) {
    console.log(e);
    return null;
  }
};

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
