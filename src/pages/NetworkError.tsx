import React from 'react';
import { useLocation } from 'react-router';

const NetworkError = () => {
  const { error } = useLocation().state;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      에러가 발생했습니다.
      <br /> 에러내용: {error}
    </div>
  );
};

export default NetworkError;
