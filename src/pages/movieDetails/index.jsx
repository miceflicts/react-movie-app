import React from 'react'
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const {id} = useParams();
    const language =  navigator.language || navigator.userLanguage; 
  
      return (
        <>
           <div className='m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px]'>Movie Details for id: {id}</div>;
        </>
      )
    }

export default MovieDetails