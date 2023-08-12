import useAuth from '@/hooks/useAuth';
import axios from '@/api/axios';

// 서버에서 요청 실패(accesstoken이 만료되었을 때)가 떴을 때, 다시 보내서(retry) accesstoken을 받아오기 위함
const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('/refresh', {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log('이전 상태 -> ', JSON.stringify(prev));
      console.log('받은 엑세스 토큰', response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
