import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Something Went wrong </p>
      <p>400</p>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default Error;
