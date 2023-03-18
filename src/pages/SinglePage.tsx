import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const SinglePage = () => {
  const { id: postId } = useParams();
  // const location = useLocation();
  // const postId2 = location.pathname;

  useEffect(() => {
    console.log(postId);
    // console.log(postId2);
  }, []);
  return <div>Single</div>;
};

export default SinglePage;
