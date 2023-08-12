import { User } from '@/common/types';
import axios from 'axios';

// catch 내부 error 처리 고민해보기
export const login = async (inputs: User) => {
  try {
    const response = await axios.post('http://localhost:8800/api/auth/login', inputs);
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const logout = async () => {
  try {
    await axios.post('http://localhost:8800/api/auth/logout');
  } catch (err) {
    console.log(err);
    return null;
  }
};
