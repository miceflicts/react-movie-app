import React from 'react';
import { useLocation } from 'react-router-dom';

function Movie() {
  const location = useLocation();
  const { description } = location.state;
  
  return (
    <div>{description}</div>
  )
}

export default Movie;
