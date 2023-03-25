import axios from 'axios';
import { CreatePost, EditPost, HotPost, Post } from '@/common/types';

export const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
export const API_TEST_URL = import.meta.env.VITE_APP_TEST_URL;

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

export async function sendFormData(formData: FormData): Promise<string | null> {
  try {
    // const response = await axios.post(`${API_BASE_URL}/upload`, formData);
    const response = await axios.post(`${API_BASE_URL}/ImageUpload`, formData);
    return API_BASE_URL + response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export const getCategoryPosts = async (category: string): Promise<Post[] | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categoryDataSelect/${category}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deletePost = async (postId: number) => {
  // home navigate할때 남아있는 문제 해결하기
  try {
    await axios.delete(`${API_BASE_URL}/delete/${postId}`);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const createPost = async (data: CreatePost) => {
  try {
    console.log('create', data);
    // const response = await axios.post(`${API_BASE_URL}/upload`, formData);
    // await axios.put(`${API_BASE_URL}/insert`, data);
    await axios.post(`${API_BASE_URL}/insert`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // await axios.put(
    //   `http://125.184.169.131:5555/insert`,
    //   JSON.stringify({ title: data.title, content: data.content }),
    // );
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const updatePost = async (id: number, data: EditPost) => {
  try {
    console.log('update', data);
    // const response = await axios.post(`${API_BASE_URL}/upload`, formData);
    await axios.patch(`${API_BASE_URL}/update/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
