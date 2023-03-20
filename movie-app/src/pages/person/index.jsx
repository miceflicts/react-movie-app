import React from 'react'
import { useParams } from 'react-router-dom';

function Person() {
    const {id} = useParams();
  
    return (
      <>
         <div>Person details for id: {id}</div>
      </>
    )
}

export default Person