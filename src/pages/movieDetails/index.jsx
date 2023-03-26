import React from 'react'
import MainInfos from '../../components/mediaDetails/mainInfos';
import Footer from '../../layouts/footer';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const {id} = useParams();
    const type = "movie";
    const language =  navigator.language || navigator.userLanguage; 
  
      return (
        <>
          <div className='m-auto w-3/4 mt-20 max-[1300px]:w-[95%] min-h-[800px] gap-10 flex flex-col'>
              <div className='flex gap-10'>
                <MainInfos type={type} id={id} language={language}></MainInfos>
              </div>
              <Footer language={language}></Footer>
          </div>
      </>
      )
    }

export default MovieDetails