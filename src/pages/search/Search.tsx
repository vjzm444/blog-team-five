import React from 'react';
import { useLocation } from 'react-router';

const Search = () => {
  const location = useLocation();
  const q = location.state.q;
  return <div>{q}</div>;
};

export default Search;
