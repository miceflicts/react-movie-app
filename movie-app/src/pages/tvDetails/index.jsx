import React from 'react'
import { useParams } from 'react-router-dom';

function TvShowDetails() {
    const {id} = useParams();
  
    return (
      <>
         <div>Tv Details for id: {id}</div>;
      </>
    )
  }

export default TvShowDetails