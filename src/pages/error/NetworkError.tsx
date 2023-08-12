import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const NetworkError = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const error = location?.state?.error;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>에러가 발생했습니다.</div>
      {error && <div>에러내용: {error}</div>}
      <button
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          marginTop: '20px',
          color: '#000000',
          cursor: 'pointer',
        }}
        onClick={goBack}
      >
        이전 페이지로 이동하시겠습니까?
      </button>
    </div>
  );
};

export default NetworkError;
